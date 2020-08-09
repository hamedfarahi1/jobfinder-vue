import { errorHandlerInterceptor } from "./errorHandlerInterceptor";
import { accountService } from "../services/account/accountService";

const axios = require("../services/client");

export function interceptorsSetter() {
  axios.interceptors.response.use(
    response => response,
    error => errorHandlerInterceptor(error)
  );
  accountService.setAuthInterceptor();
}
