import { useSelector } from "react-redux";
import { reset } from "../store/expenseTracker";
import { useDispatch } from "react-redux";


const Header = () => {
  const budget = useSelector((state) => state.expenseTracker.budget);
  const expense = useSelector((state) => state.expenseTracker.totalExpense);
  const dispatch = useDispatch();

  const handleReset = () => {
    dispatch(reset());
    alert("Expense Tracker has been reset!");
  };
  return (
    <div className="bg-primary text-white text-center py-3 mb-4">
      <h1 className="mb-2">Expense Tracker</h1>
      <p className="fw-bold">Total Budget: ₹{budget}</p>
      <p className="fw-bold">Total Expense: ₹{expense}</p>
      <button className="btn btn-warning" onClick={handleReset}>Add New Budget</button>
    </div>
  );
};

export default Header;
