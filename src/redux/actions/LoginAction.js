import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const loginRequest = () => ({
    type: LOGIN_REQUEST,
});

export const loginSuccess = (user) => ({
    type: LOGIN_SUCCESS,
    payload: user,
});

export const loginFailure = (error) => ({
    type: LOGIN_FAIL,
    payload: error,
});

export const LoginAction = (email, password) => {
    return async (dispatch) => {
        dispatch(loginRequest());
        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_APP_URL}/api/auth/login`, { email, password });
            const data = response.data.data;
            localStorage.setItem('accessToken', data.accessToken);
            window.location.href = '/dashboard';
            dispatch(loginSuccess(data));
        } catch (error) {
            const errorMessage = error.response?.data?.message || 'An error occurred. Please try again.';
            dispatch(loginFailure(errorMessage));
        }
    };
};
