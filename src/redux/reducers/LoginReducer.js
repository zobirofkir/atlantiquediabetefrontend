import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS} from "../actions/LoginAction";

const initialState = {
    loading: false,
    error: null,
    user: null
};


const loginReducer = (state = initialState, action) => {
    switch (action.type)
    {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload,
                error: null
            };
        case LOGIN_FAIL: {
            return {
                ...state, 
                loading: false,
                error: action.payload
            }
        }


    default:
        return state
    }
}

export default loginReducer;