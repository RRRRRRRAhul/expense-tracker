import ExpenseItem from "./ExpenseItem";
import { useSelector } from "react-redux";
import { removeExpense } from "../store/expenseTracker";

const ExpenseList = () => {

    const expenseData = useSelector((state) => state.expenseTracker.expense);

  return (
    <div className="container">
      <h4 className="mb-3">Expense List</h4>

      <ul className="list-group">
        {expenseData.map((expense) => (
          <ExpenseItem
            key={expense.id}
            name={expense.name}
            amount={expense.amount}
            id={expense.id}
            namePerson={expense.namePerson}
            removeExpense={removeExpense}
          />
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;
