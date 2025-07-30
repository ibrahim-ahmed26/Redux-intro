const customerInitialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};

export default function customerReducer(state = customerInitialState, action) {
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
export function createCustomer(fullname, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullname,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}
export function updateCustomerName(fullname) {
  return { type: "customer/updateCustomerName", payload: fullname };
}
