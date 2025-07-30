import { useSelector } from "react-redux";

function formatCurrency(value, currency) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency,
  }).format(value);
}
function BalanceDisplay({ currency }) {
  const balance = useSelector((store) => store.account.balance);

  return (
    <div className="balance-display">{formatCurrency(balance, currency)}</div>
  );
}

export default BalanceDisplay;
