import store from "./redux/store.js";
import { increment,decrement,reset } from "./redux/actions/CounterActions.js";


//get current state: 
console.log("initial value",store.getState());

// subscribe to the store:
store.subscribe(() => {
    console.log("state updated",store.getState());
})

// dispatch:


store.dispatch(increment(100))
store.dispatch(increment())
store.dispatch(decrement(50))
store.dispatch(increment(10))
store.dispatch(reset())

