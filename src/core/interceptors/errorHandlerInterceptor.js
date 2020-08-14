import store from "../store/store";
import {errorCodeKeyValues} from './errors-keyValue'
export const errorHandlerInterceptor = error => {
  const statusCode = error.response.status;
  createErrorMessage(statusCode);
  if (statusCode === 401) {
    store.dispatch('logout');
  }
  return Promise.reject({ ...error });
};

const createErrorMessage = statusCode => {
  const errMsg = errorCodeKeyValues[statusCode];
  if (errMsg) showErrorMessage(errMsg);
  else showErrorMessage('خطا');
};

const showErrorMessage = message => {
  // store.dispatch(uiActions.errorSnackbar(message));
  console.log(message)
};
