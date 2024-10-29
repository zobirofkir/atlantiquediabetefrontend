import { FETCH_INSCRIPTION_FAILURE, FETCH_INSCRIPTION_REQUEST, FETCH_INSCRIPTION_SUCCESS } from "../actions/InscriptionAction";

const initialState = {
    data: [],
    loading: false,
    error: null,
};

const inscriptionReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_INSCRIPTION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_INSCRIPTION_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            };
        case FETCH_INSCRIPTION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state
    }
}

export default inscriptionReducer