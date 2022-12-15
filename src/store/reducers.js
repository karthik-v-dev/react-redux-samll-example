import { combineReducers } from "redux";
import counterReducer from "./reducer/counter.reducer";
import scoreReducer from "./reducer/scoreReducer";
import timerreduce from './reducer/timer.reduce';

// import ProductReducer from "./reducer/productreducer";

const rootReducer = combineReducers({
  mscore: scoreReducer,
  count: counterReducer,
  timer:timerreduce,
 
  // product:productReducer,

});

export default rootReducer;
