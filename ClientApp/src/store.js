import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';


const middleware = applyMiddleware(thunk, promise(), logger);

const store = createStore(reducers, middleware);

export default store;

