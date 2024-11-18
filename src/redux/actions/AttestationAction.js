import axios from 'axios';

export const FETCH_ATTESTATION_REQUEST = 'FETCH_ATTESTATION_REQUEST';
export const FETCH_ATTESTATION_SUCCESS = 'FETCH_ATTESTATION_SUCCESS';
export const FETCH_ATTESTATION_FAILURE = 'FETCH_ATTESTATION_FAILURE';

export const fetchAttestationRequest = () => ({
    type: FETCH_ATTESTATION_REQUEST,
});

export const fetchAttestationSuccess = (data) => ({
    type: FETCH_ATTESTATION_SUCCESS,
    payload: data,
});

export const fetchAttestationFailure = (error) => ({
    type: FETCH_ATTESTATION_FAILURE,
    payload: error,
});

export const fetchAttestationAction = () => {
    return async (dispatch) => {
        dispatch(fetchAttestationRequest());
        try {
            const response = await axios.get(`${process.env.REACT_APP_BACKEND_APP_URL}/api/attestations`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                },
            });
            dispatch(fetchAttestationSuccess(response.data.data));
        } catch (error) {
            dispatch(fetchAttestationFailure(error.message));
        }
    };
};
