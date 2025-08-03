import { applyMiddleware, combineReducers, createStore } from "redux";
import accountReducer from "../src/features/accounts/accountSlice";
import customerReducer from "../src/features/customers/customerSlice";
import { thunk } from "redux-thunk";
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
