import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const middleware = { thunk };

let store;

if (window.navigator.userAgent.includes("Chrome")) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
} else {
  store = createStore(reducers, compose(applyMiddleware(...middleware)));
}

export default store;
