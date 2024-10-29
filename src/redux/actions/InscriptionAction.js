import axios from 'axios';

export const FETCH_INSCRIPTION_REQUEST = 'FETCH_INSCRIPTION_REQUEST';
export const FETCH_INSCRIPTION_SUCCESS = 'FETCH_INSCRIPTION_SUCCESS';
export const FETCH_INSCRIPTION_FAILURE = 'FETCH_INSCRIPTION_FAILURE';

export const fetchInscriptionRequest = () => ({
    type: FETCH_INSCRIPTION_REQUEST,
});

export const fetchInscriptionSuccess = (data) => ({
    type: FETCH_INSCRIPTION_SUCCESS,
    payload: data,
});

export const fetchInscriptionFailure = (data) => ({
    type: FETCH_INSCRIPTION_FAILURE,
    payload: data,
});

export const inscriptionAction = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/inscriptions`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            dispatch(fetchInscriptionSuccess(response.data.data));
        } catch (error) {
            dispatch(fetchInscriptionFailure(error));
        }
    }
}