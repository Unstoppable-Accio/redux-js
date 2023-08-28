
// reducer to write logi: 

import { INCREMENT, DECREMENT,RESET } from '../actions/actionTypes.js';

const initialState = 0
 // counterReducer(0, {type: "INCREMENT", value: 100})
 const counterReducer = (state=initialState, action) => {

        switch(action.type){

            case INCREMENT:  return state + action.value;
            case DECREMENT:  return state - action.value;
            case RESET:  return 0;
            default: return state;
        }
        
   

 }

export default counterReducer;


// counterReducer(10, {type: "INCREMENT"})