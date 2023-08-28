import { createStore } from "redux";

import counterReducer from "./reducer/counterReducer.js";

const store = createStore(counterReducer);


export default store;

// dispatch(increment())

// store ==> = counterReducer(0, {type: "INCREMENT"})

// dispatch(increment(100))

// store ==> = counterReducer(0, {type: "INCREMENT", value: 100})