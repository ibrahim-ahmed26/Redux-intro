import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="customer-form">
      <h2 className="form-title">Create new customer</h2>
      <div className="form-inputs">
        <div className="form-group">
          <label className="form-label">Customer full name</label>
          <input
            className="form-input"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label">National ID</label>
          <input
            className="form-input"
            value={nationalId}
            onChange={(e) => setNationalId(e.target.value)}
          />
        </div>

        <button className="form-button" onClick={handleClick}>
          Create new customer
        </button>
      </div>
    </div>
  );
}

export default Customer;
