import { useDispatch } from "react-redux";
import { setBudget } from "../store/expenseTracker.js";
import { useRef } from "react";

const SetBudget = () => {
  const dispatch = useDispatch();
  const budget = useRef();

  const handleSaveBudget = (e) => {
    e.preventDefault();
    const budgetAmount = Math.abs(budget.current.value);
    dispatch(setBudget(budgetAmount));
    budget.current.value = "";
    alert("Budget Set Successfully!");
  };

  return (
    <div className="container mt-4">
      <div className="card shadow p-3">
        <h4 className="text-center mb-3">Set Your Budget</h4>

        <form onSubmit={handleSaveBudget}>
          <div className="mb-3">
            <label className="form-label">Budget Amount (₹)</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter your monthly budget"
              ref={budget}
            />
          </div>

          <button className="btn btn-success w-10" type="submit">
            Save Budget
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetBudget;
