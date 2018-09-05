import React from "react";
import { connect } from "react-redux";
import numeral from "numeral";
import selectExpenses from "../selectors/expenses";
import expenseTotal from "../selectors/expenses-total";

const ExpenseTotalCount = ({ expensesCount, expensesTotal }) => {
  const expenseWord = expensesCount.length === 1 ? "expense" : "expenses";
  return (
    <div>
      <p>
        Count - {expensesCount.length} {expenseWord}
      </p>
      <p>Total - {numeral(expensesTotal / 100).format("$0,0.00")}</p>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expensesCount: selectExpenses(state.expenses, state.filters),
    expensesTotal: expenseTotal(state.expenses)
  };
};

export default connect(mapStateToProps)(ExpenseTotalCount);
