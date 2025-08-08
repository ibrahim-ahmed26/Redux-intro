import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullname: "",
  nationalId: "",
  createdAt: "",
};
const customerReducer = createSlice({
  name: "customer",
  initialState,
  reducers: {
    createCustomer: {
      prepare(fullname, nationalId) {
        return {
          payload: {
            fullname,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },
      reducer(state, action) {
        state.fullname = action.payload.fullname;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateCustomerName(state, action) {
      state.fullname = action.payload;
    },
  },
});

export const { createCustomer, updateCustomerName } = customerReducer.actions;
export default customerReducer.reducer;
// export default function customerReducer(state = customerInitialState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullname: action.payload.fullname,
//         nationalId: action.payload.nationalId,
//         createdAt: action.payload,
//       };
//     case "customer/updateCustomerName":
//       return { ...state, fullname: action.payload };
//     default:
//       return state;
//   }
// }
// export function createCustomer(fullname, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payload: {
//       fullname,
//       nationalId,
//       createdAt: new Date().toISOString(),
//     },
//   };
// }
// export function updateCustomerName(fullname) {
//   return { type: "customer/updateCustomerName", payload: fullname };
// }
