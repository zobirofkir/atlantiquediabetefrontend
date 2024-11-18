import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import loginReducer from '../reducers/LoginReducer';
import inscriptionReducer from '../reducers/InscriptionReducer';
import attestationReducer from '../reducers/AttestationReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    inscription: inscriptionReducer,
    attestation: attestationReducer
});

const store = createStore(
    rootReducer, applyMiddleware(thunk)
);

export default store;
