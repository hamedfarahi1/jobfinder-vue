import { setAuthInterceptor } from '../../interceptors/interceptorsSetter'
const axios = require("../client");

export const accountService = {
  login,
  logout,
  register,
  getUserInfo,
  resetPasswordSendUsername,
  resetPass,
  changePass
};
function login(credential) {
  return axios
    .post(`/api/employer/login`, {
      username: credential.username,
      password: credential.password
    })
    .then(res => {
      return submitUser(res);
    });
}

function logout() {
  // remove user from local storage to log user out
  axios.interceptors.request.use(request => {
    request.headers["Authorization"] = null;
    return request;
  });
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
}

function register(credential) {
  return axios
    .post(`/api/employer/register`, {
      username: credential.username,
      password: credential.password,
      email: credential.email,
      allowExtraEmails: credential.allowExtraEmails
    })
    .then(res => {
      return submitUser(res);
    });
}

function submitUser(res) {
  localStorage.setItem("accessToken", JSON.stringify(res.data.token ));
  localStorage.setItem("user", JSON.stringify(res.data.user));
  setAuthInterceptor();
  return res.data.token;
}

function resetPasswordSendUsername(username) {
  return axios.post(`/api/account/forget-password?username=${username}`);
}

function resetPass(values) {
  return axios.put("/api/account/reset-password", values);
}

function changePass(values) {
  return axios.put("/api/account/change-password", values);
}

function getUserInfo() {
  return axios.get("/api/test");
}

export function _delete() {}
