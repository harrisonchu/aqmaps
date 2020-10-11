import { createStore, applyMiddleware } from 'redux';
// import { taskMiddleware } from 'react-palm';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';
import { enhanceReduxMiddleware } from 'kepler.gl/middleware';

const configureStore = (preloadedState = {}) => {
    let middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(logger);
    }

    middlewares = enhanceReduxMiddleware(middlewares);

    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(
            ...middlewares
        )
    );
};

export default configureStore;