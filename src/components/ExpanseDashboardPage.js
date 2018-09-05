import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpenseCount from "./ExpenseCount";

const ExpanseDashboardPage = () => (
  <div>
    <ExpenseCount />
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default ExpanseDashboardPage;
