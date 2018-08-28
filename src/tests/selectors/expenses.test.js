import selectExpenses from "../../selectors/expenses";

const expenses = [
  {
    id: "1",
    description: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
  },
  {
    id: "2",
    description: "Rent",
    note: "",
    amount: 1123,
    createdAt: -1000
  },
  {
    id: "3",
    description: "Cred",
    note: "",
    amount: 231,
    createdAt: 1000
  }
];

test("should filter by text value", () => {
  const filters = {
    
  }
  const result = selectExpenses(expenses, filters);
});
