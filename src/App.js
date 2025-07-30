import CreateCustomer from "./features/customers/CreateCustomer";
import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import { useSelector } from "react-redux";
import { useState } from "react";

function App() {
  const [currency, setCurrency] = useState("USD");
  const fullname = useSelector((store) => store.customer.fullname);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {fullname === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations currency={currency} setCurrency={setCurrency} />
          <BalanceDisplay currency={currency} />
        </>
      )}
    </div>
  );
}

export default App;
