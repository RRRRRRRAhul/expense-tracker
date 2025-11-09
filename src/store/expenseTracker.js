import { createSlice, nanoid } from "@reduxjs/toolkit";

const savedExpenses = JSON.parse(localStorage.getItem("expenseData"));
const savedBudget = JSON.parse(localStorage.getItem("expenseBudget"));
const savedTotalExpense = JSON.parse(localStorage.getItem("totalExpense"));
const savedIsBudgetFull = JSON.parse(localStorage.getItem("isBudgetFull"));

const initialState = {
  expense: savedExpenses || [],
  totalExpense: savedTotalExpense || 0,
  budget: savedBudget || 0,
  isBudgetFull: savedIsBudgetFull || false,
};

export const expenseTrackerSlice = createSlice({
  name: "expenseTracker",
  initialState,
  reducers: {
    addExpense: (state, action) => {
      const { name, amount, namePerson } = action.payload;
      const newAmount = Number(amount);

      state.expense.push({
        id: nanoid(),
        name,
        amount: newAmount,
        namePerson,
      });

      state.totalExpense = state.expense.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      state.isBudgetFull = state.totalExpense >= state.budget;

      localStorage.setItem("expenseData", JSON.stringify(state.expense));
      localStorage.setItem("totalExpense", JSON.stringify(state.totalExpense));
      localStorage.setItem("isBudgetFull", JSON.stringify(state.isBudgetFull));
    },

    removeExpense: (state, action) => {
      const id = action.payload;

      state.expense = state.expense.filter((exp) => exp.id !== id);

      state.totalExpense = state.expense.reduce(
        (sum, item) => sum + item.amount,
        0
      );

      state.isBudgetFull = state.totalExpense >= state.budget;

      localStorage.setItem("expenseData", JSON.stringify(state.expense));
      localStorage.setItem("totalExpense", JSON.stringify(state.totalExpense));
      localStorage.setItem("isBudgetFull", JSON.stringify(state.isBudgetFull));
    },

    setBudget: (state, action) => {
      state.budget = Number(action.payload);
      state.isBudgetFull = state.totalExpense >= state.budget;

      localStorage.setItem("expenseBudget", JSON.stringify(state.budget));
      localStorage.setItem("isBudgetFull", JSON.stringify(state.isBudgetFull));
    },
    reset: (state) => {
      state.expense = [];
      state.totalExpense = 0;
      state.budget = 0;
      state.isBudgetFull = false;

      // Clear localStorage
      localStorage.removeItem("expenseData");
      localStorage.removeItem("expenseBudget");
      localStorage.removeItem("totalExpense");
      localStorage.removeItem("isBudgetFull");
    }
  },
});

export const { addExpense, removeExpense, setBudget, reset } =
  expenseTrackerSlice.actions;

export default expenseTrackerSlice.reducer;
