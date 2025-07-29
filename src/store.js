import { combineReducers, createStore } from "redux";
const accountInitalState = {
  balance: 0,
  loan: 0,
  loanPuporse: "",
};
const customerInitialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};
function accountReducer(state = accountInitalState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: action.payload + state.balance };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return;
      return {
        ...state,
        loan: action.payload.amount,
        loanPuporse: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - state.loan,
        loanPuporse: "",
      };
    default:
      return state;
  }
}
function customerReducer(state = customerInitialState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullname: action.payload.fullname,
        nationalId: action.payload.nationalId,
        createdAt: action.payload,
      };
    case "customer/updateCustomerName":
      return { ...state, fullname: action.payload };
    default:
      return state;
  }
}
const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});
const store = createStore(rootReducer);
// // Action Creators
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}
function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}
function requestLoan(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}
function payLoan() {
  return { type: "account/payLoan" };
}
function createCustomer(fullname, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}
function updateCustomerName(fullname) {
  return { type: "customer/updateCustomerName", payload: fullname };
}
store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState());
store.dispatch(requestLoan(500, "buying a new car"));
console.log(store.getState());
store.dispatch(payLoan());
console.log(store.getState());
store.dispatch(createCustomer("ibrahim ahmed", "202020514514651"));
console.log(store.getState());
store.dispatch(updateCustomerName("hima ahmed"));
console.log(store.getState());
