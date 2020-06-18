import { createStore } from "redux";
import baseBride from "../reducers";

/* eslint-disable no-underscore-dangle */
const store = createStore(
    baseBride /* preloadedState, */,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store;
