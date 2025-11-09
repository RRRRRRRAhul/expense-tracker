import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import AddExpenseForm from "./components/AddExpenseForm";
import ExpenseList from "./components/ExpenseList";
import SetBudget from "./components/SetBudget";
import { useSelector} from "react-redux";
import { useEffect } from "react";


function App() {
  const budget = useSelector((state) => state.expenseTracker.budget);
  const isBudgetFull = useSelector((state) => state.expenseTracker.isBudgetFull);

  useEffect(() => {
    if (isBudgetFull) {
      alert("Budget Reached! You cannot add more expenses.");
    }
  }, [isBudgetFull]);

  if (budget == 0) {
    return (
      <>
        <Header />
        <SetBudget />
      </>
    );
  }
  return (
    <>
      <Header />
      <AddExpenseForm />
      <ExpenseList />
    </>
  );
}

export default App;
