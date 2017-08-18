import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import loggerMiddleware from './middleware/loggerMiddleware';
import rootReducer from './reducer';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk, promiseMiddleware, loggerMiddleware)
);

export default store;
