import {createStore, applyMiddleware, compose} from 'redux';
import reducer from '../reducer/index';
import logger from '../middlewares/logger';


const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(logger)
//    other store enhancers if any
);



//Store принимает 3 аргумента:
//1 обязательный - reducer
//2 необязательный - начальное состояния store
//3 middleware (enhancer)
const store = createStore(reducer, {}, enhancer);

window.store = store;

export default store;