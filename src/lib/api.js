import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 500000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : "tanatant",
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

// this function is needed because axios was being inconsistent with its url
// some time the url has '/' at the begginninng and some time it doesn't
const fix_url = (url) => {
  if (url.startsWith("/")) {
    return url;
  }
  return "/" + url;
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;

    if (typeof error.response === "undefined") {
      return Promise.reject(error);
    }

    if (
      error.response.status === 401 &&
      originalRequest.url === baseURL + "api/token/refresh/"
    ) {
      window.location.href = "/login/";
      return Promise.reject(error);
    }

    if (
      error.response.data.code === "token_not_valid" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      const refreshToken = localStorage.getItem("refresh_token");

      if (refreshToken) {
        const tokenParts = JSON.parse(window.atob(refreshToken.split(".")[1]));

        // exp date in token is expressed in seconds, while now() returns milliseconds:
        const now = Math.ceil(Date.now() / 1000);
        if (tokenParts.exp > now) {
          try {
            const response = await axiosInstance.post("/api/token/refresh/", {
              refresh: refreshToken,
            });
            localStorage.setItem("access_token", response.data.access);
            localStorage.setItem("refresh_token", response.data.refresh);
            axiosInstance.defaults.headers["Authorization"] =
              "JWT " + response.data.access;
            originalRequest.headers["Authorization"] =
              "JWT " + response.data.access;
            // return axiosInstance(originalRequest);
            return axios({
              method: originalRequest.method,
              url: baseURL + fix_url(originalRequest.url),
              data: originalRequest.data,
              headers: {
                Authorization: "JWT " + response.data.access,
                "Content-Type": originalRequest.headers["Content-Type"],
                accept: originalRequest.headers["accept"],
              },
            });
          } catch (err) {
            console.log(
              "Error trying to get access token from refresh token",
              err
            );
            window.location.href = "/login/";
          }
        } else {
          console.log("Refresh token is expired", tokenParts.exp, now);
          window.location.href = "/login/";
        }
      } else {
        console.log("Refresh token not available.");
        window.location.href = "/login/";
      }
    } else if (
      error.response.data.code === "user_not_found" &&
      error.response.status === 401 &&
      error.response.statusText === "Unauthorized"
    ) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      axios.defaults.headers["Authorization"] = null;
      window.location.href = "/login/";
    }
    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export default axiosInstance;
