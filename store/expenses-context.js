import { createContext, useReducer } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A Pair of shoes",
    amount: 59.99,
    date: new Date("2024-12-19"),
  },
  {
    id: "e2",
    description: "Fender Jaguar",
    amount: 1100,
    date: new Date("2024-02-19"),
  },
  {
    id: "e3",
    description: "Mastery Bridge",
    amount: 350.48,
    date: new Date("2024-12-01"),
  },
  {
    id: "e4",
    description: "Guitar Pickups",
    amount: 160,
    date: new Date("2024-04-02"),
  },
  {
    id: "e5",
    description: "Fender Mustang",
    amount: 850.49,
    date: new Date("2021-12-01"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
    switch (action.type) {
      case 'ADD':
        const id = new Date().toString() + Math.random().toString();
        return [{ ...action.payload, id: id }, ...state];
      case 'UPDATE':
        const updatableExpenseIndex = state.findIndex(
          (expense) => expense.id === action.payload.id
        );
        const updatableExpense = state[updatableExpenseIndex];
        const updatedItem = { ...updatableExpense, ...action.payload.data };
        const updatedExpenses = [...state];
        updatedExpenses[updatableExpenseIndex] = updatedItem;
        return updatedExpenses;
      case 'DELETE':
        return state.filter((expense) => expense.id !== action.payload);
      default:
        return state;
    }
  }
  
  function ExpensesContextProvider({ children }) {
    const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_EXPENSES);
  
    function addExpense(expenseData) {
      dispatch({ type: 'ADD', payload: expenseData });
    }
  
    function deleteExpense(id) {
      dispatch({ type: 'DELETE', payload: id });
    }
  
    function updateExpense(id, expenseData) {
      dispatch({ type: 'UPDATE', payload: { id: id, data: expenseData } });
    }
  
    const value = {
      expenses: expensesState,
      addExpense: addExpense,
      deleteExpense: deleteExpense,
      updateExpense: updateExpense,
    };
  
    return (
      <ExpensesContext.Provider value={value}>
        {children}
      </ExpensesContext.Provider>
    );
  }
  
  export default ExpensesContextProvider;