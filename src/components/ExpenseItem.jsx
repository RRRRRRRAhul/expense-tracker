import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const ExpenseItem = ({ name, amount, namePerson, removeExpense, id }) => {
  const dispatch = useDispatch();
  const isBudgetFull = useSelector(
    (state) => state.expenseTracker.isBudgetFull
  );

  const removeExpenseItem = () => {
    dispatch(removeExpense(id));
    alert("Expense Removed Successfully!");
  };
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <span className="fw-bold">{name}</span>
        <small className="text-muted ms-2">({namePerson})</small>
      </div>

      <div className="d-flex align-items-center">
        <span className="fw-bold me-3">₹{amount}</span>
        <button
          className="btn btn-danger btn-sm"
          onClick={removeExpenseItem}
          disabled={isBudgetFull}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;
