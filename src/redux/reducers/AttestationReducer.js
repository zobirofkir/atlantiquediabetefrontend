import { FETCH_ATTESTATION_FAILURE, FETCH_ATTESTATION_REQUEST, FETCH_ATTESTATION_SUCCESS } from "../actions/AttestationAction";

const initialState = {
    data: [],
    loading: false,
    error: null
};


const attestationReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ATTESTATION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ATTESTATION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_ATTESTATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:    
            return state        
    }
}

export default attestationReducer