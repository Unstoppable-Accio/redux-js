// this file will be used later when you are executing a certain action inside your application:

// action creators: 

// actions:  are objects that have a type property 

// let incrementAction = {
//     type: "INCREMENT"
// }

import { INCREMENT, DECREMENT, RESET } from "./actionTypes.js"

export const increment = (value=1) => {
    return{
        type: INCREMENT,
        value: value
    }
}

export const decrement = (value=1) => {
    return{
        type: DECREMENT,
        value: value
    }
}

export const reset = () => {
    return{
        type: RESET
    }
}



