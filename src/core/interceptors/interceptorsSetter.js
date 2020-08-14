import { errorHandlerInterceptor } from "./errorHandlerInterceptor";
const axios = require("../services/client");

export function interceptorsSetter() {
  axios.interceptors.response.use(
    response => response,
    error => errorHandlerInterceptor(error)
  );
  setAuthInterceptor();
}


export function setAuthInterceptor() {
  function getToken() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    try {
      return auth.token;
    } catch (e) {
      return null;
    }
  }
  axios.interceptors.request.use(request => {
    let tkn = getToken();
    request.headers["Authorization"] = tkn ? "Bearer " + tkn : "";
    return request;
  });
}