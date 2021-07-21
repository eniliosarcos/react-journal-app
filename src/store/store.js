

import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import { authreducer } from '../reducers/authReducer';
import { uireducer } from '../reducers/uiReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    auth: authreducer,
    ui: uireducer
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);