import axios from "axios";
import store from "@/store";

var axiosInstance = axios.create({
  baseURL: "https://cloud.squidex.io",
  headers: {
    "X-Flatten": true,
    "X-Resolve-Urls": "image"
  }
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  function(data) {
    if (data.response.status === 401) {
      console.log("Token is not valid or token is not exist");
      store.dispatch("auth/login");
      document.location.reload();
    }
  }
);

if (localStorage.token) {
  axiosInstance.defaults.headers.common["Authorization"] =
    "Bearer " + localStorage.token;
}

export { axiosInstance as http };
