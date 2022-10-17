import axios from "axios";
console.log("react base ur", process.env.REACT_APP_BASE_URL);
//  axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,

// });
// create axios client for json request
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
