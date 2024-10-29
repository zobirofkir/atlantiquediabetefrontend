import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import loginReducer from '../reducers/LoginReducer';
import inscriptionReducer from '../reducers/InscriptionReducer';

const rootReducer = combineReducers({
    login: loginReducer,
    inscription: inscriptionReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
