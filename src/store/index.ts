import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { userReducer } from './reducers';

const rootReducer = combineReducers({
    user: userReducer
});

export const store = createStore(rootReducer,  applyMiddleware(thunk));