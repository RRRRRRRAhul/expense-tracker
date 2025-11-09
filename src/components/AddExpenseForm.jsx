import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store/expenseTracker.js";
import { useSelector } from "react-redux";

const AddExpenseForm = () => {
  const name = useRef();
  const personName = useRef();
  const amount = useRef();
  const dispatch = useDispatch();
  const isBudgetFull = useSelector(
    (state) => state.expenseTracker.isBudgetFull
  );

  const handleAdd = (e) => {
    e.preventDefault();
    const expenseName = name.current.value;
    const expensePersonName = personName.current.value;
    const expenseAmount = Number(amount.current.value);
    const expenseData = {
      name: expenseName,
      amount: expenseAmount,
      namePerson: expensePersonName,
    };
    dispatch(addExpense(expenseData));
    name.current.value = "";
    personName.current.value = "";
    amount.current.value = "";
    alert("Expense Added Successfully!");
  };

  return (
    <div className="container mb-4" onSubmit={handleAdd}>
      <form className="row g-3">
        <div className="col-md-3">
          <label htmlFor="expense-name" className="form-label">
            Expense Name
          </label>
          <input
            type="text"
            className="form-control"
            id="expense-name"
            ref={name}
            disabled={isBudgetFull}
          />
        </div>

        <div className="col-md-3">
          <label htmlFor="person-name" className="form-label">
            Person Name
          </label>
          <input
            type="text"
            className="form-control"
            id="person-name"
            ref={personName}
            disabled={isBudgetFull}
          />
        </div>

        <div className="col-md-4">
          <label htmlFor="expense-amount" className="form-label">
            Amount (₹)
          </label>
          <input
            type="number"
            className="form-control"
            id="expense-amount"
            ref={amount}
            disabled={isBudgetFull}
          />
        </div>

        <div className="col-md-2 d-flex align-items-end">
          <button
            type="submit"
            className="btn btn-success w-100"
            disabled={isBudgetFull}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExpenseForm;
