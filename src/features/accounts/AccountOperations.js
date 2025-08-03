import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("USD");

  const {
    balance,
    loanPuporse: currentLoanPurpose,
    loan: currentLoanAmount,
    isLoading,
  } = useSelector((store) => store.account);
  const dispatch = useDispatch();
  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposit(depositAmount, currency));
    setDepositAmount("");
    setCurrency("USD");
  }

  function handleWithdrawal() {
    if (!withdrawalAmount) return;
    if (withdrawalAmount > balance) {
      alert("WithDraw Amount Cannot be Greater than Your Balance");
      return;
    }
    dispatch(withdraw(withdrawalAmount));
    setWithdrawalAmount("");
  }

  function handleRequestLoan() {
    if (!loanAmount && !loanPurpose) return;
    dispatch(requestLoan(loanAmount, loanPurpose));
    setLoanAmount("");
    setLoanPurpose("");
    console.log(currentLoanPurpose);
  }

  function handlePayLoan() {
    dispatch(payLoan());
  }

  return (
    <div className="account-operations">
      <h2 className="account-title">Your account operations</h2>
      <div className="account-inputs">
        <div className="operation-group">
          <label className="operation-label">Deposit</label>
          <input
            type="number"
            className="operation-input"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            className="operation-select"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button
            className="operation-button"
            onClick={handleDeposit}
            disabled={isLoading}
          >
            {isLoading ? "calculating" : `Deposit ${depositAmount}`}
          </button>
        </div>

        <div className="operation-group">
          <label className="operation-label">Withdraw</label>
          <input
            type="number"
            className="operation-input"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button className="operation-button" onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div className="operation-group">
          <label className="operation-label">Request loan</label>
          <input
            type="number"
            className="operation-input"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            className="operation-input"
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button
            className="operation-button"
            onClick={handleRequestLoan}
            disabled={currentLoanAmount}
          >
            Request loan
          </button>
        </div>

        <div className="operation-loan-status">
          {currentLoanAmount !== 0 && (
            <>
              <span className="loan-text">
                Pay back {currentLoanAmount} ({currentLoanPurpose})
              </span>
              <button className="operation-button" onClick={handlePayLoan}>
                Pay loan
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default AccountOperations;
