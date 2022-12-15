import { combineReducers } from "redux";
import counterReducer from "./reducer/counter.reducer";
import scoreReducer from "./reducer/scoreReducer";

// import ProductReducer from "./reducer/productreducer";

const rootReducer = combineReducers({
  mscore: scoreReducer,
  count: counterReducer,
 
  // product:productReducer,

});

export default rootReducer;
