import { uiActions, userActions } from '../_actions';
import { store } from '../_helpers';
import { errorConstants } from '../_constants'
import { errorCodeKeyValues } from './errors-keyValue';

export const errorHandlerInterceptor = (error) => {
	const statusCode = error.response.status;
	createErrorMessage(statusCode);
	if (statusCode === 401) {
		store.dispatch(userActions.logout())
	}
	return Promise.reject({ ...error })
}

const createErrorMessage = (statusCode) => {
	const errMsg = errorCodeKeyValues[statusCode]
	if (errMsg)
		showErrorMessage(errMsg);
	else
		showErrorMessage(errorConstants.ERROR);

}

const showErrorMessage = (message) => {
	store.dispatch(uiActions.errorSnackbar(message))
}