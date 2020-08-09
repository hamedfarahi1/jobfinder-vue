const axios = require('../client');

export const accountService = {
	login,
	logout,
	register,
	getUserInfo,
	setAuthInterceptor,
	resetPasswordSendUsername,
	resetPass,
	changePass
}
function login(credential) {
	return axios.post(`/api/user/login`, {
		email: credential.username,
		password: credential.password
	}).then(res => {
		return submitUser(res)
	});
}

function logout() {
	// remove user from local storage to log user out
	axios.interceptors.request.use(request => {
		request.headers['Authorization'] = null;
		return request;
	})
	localStorage.removeItem('user');
	localStorage.removeItem('auth');
}

function register(credential) {
	return axios.post(`/api/user/register`, {
		username: credential.username,
		password: credential.password,
		email: credential.email,
		allowExtraEmails: credential.allowExtraEmails
	}).then(
		res => {
			return submitUser(res)
		}
	);
}

function submitUser(res) {
	localStorage.setItem('auth', JSON.stringify({token: res.data.token}));
	localStorage.setItem('user', JSON.stringify(res.data.user));
	setAuthInterceptor()
	return
}

function resetPasswordSendUsername(username) {
	return axios.post(`/api/account/forget-password?username=${username}`)
}

function resetPass(values) {
	return axios.put('/api/account/reset-password', values)
}

function changePass(values) {
	return axios.put('/api/account/change-password', values)
}

function setAuthInterceptor() {
	function getToken() {
		const auth = JSON.parse(localStorage.getItem("auth"));
		try { return auth.token }
		catch (e) { return null }
	}
	axios.interceptors.request.use(request => {
		let tkn = getToken();
		request.headers['Authorization'] = tkn ? 'Bearer ' + tkn : '';
		return request;
	})

}

function getUserInfo() {
	return axios.get("/api/test");
}

export function _delete() { }