import { configureStore } from "@reduxjs/toolkit";
import expenseTrackerReducer from "./expenseTracker.js";

const store = configureStore({
    reducer: {
        expenseTracker: expenseTrackerReducer,
    },
});

export default store;