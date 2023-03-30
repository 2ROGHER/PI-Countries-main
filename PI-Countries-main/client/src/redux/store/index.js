import reducer from "../reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from 'redux';
const composeEnHancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    reducer,
    composeEnHancers(applyMiddleware(thunk))
);
export default store;