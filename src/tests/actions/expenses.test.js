import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "12312weas" });

  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "12312weas"
  });
});

test("should setup edit expense action object", () => {
  const action = editExpense("3123212sss", { note: "kkk" });

  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "3123212sss",
    updates: { note: "kkk" }
  });
});

test("should setup add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 109500,
    createdAt: 1000,
    note: "This was last months rent"
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test("should setup add expense action object with default values", () => {
  const action = addExpense();
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      id: expect.any(String),
      description: "",
      amount: 0,
      createdAt: 0,
      note: ""
    }
  });
});
