import { useSelector } from "react-redux";

function Customer() {
  const customer = useSelector((store) => store.customer.fullname);

  return <h2 className="customer-greeting">👋 Welcome, {customer}</h2>;
}

export default Customer;
