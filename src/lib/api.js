import axios from "axios";

// IMPORTANT: set Content-Type to application/json
export default axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
