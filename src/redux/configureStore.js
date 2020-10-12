import appReducer from "./../reducers/index";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
    const middleware = [thunk];
    const enhancer = [applyMiddleware(...middleware)];
    return createStore(
        appReducer,
        composeEnhancer(...enhancer)
    );

};

export default configureStore;
