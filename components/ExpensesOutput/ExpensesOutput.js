import { View, StyleSheet } from "react-native";

import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";
import { GlobalStyles } from "../../constants/styles";

const DUMMY_EXPENSES = [
    {
        id: 'e1',
        description: 'A Pair of shoes',
        amount: 59.99,
        date: new Date('2024-12-19')
    },
    {
        id: 'e2',
        description: 'Fender Jaguar',
        amount: 1100,
        date: new Date('2024-02-19')
    },
    {
        id: 'e3',
        description: 'Mastery Bridge',
        amount: 350.48,
        date: new Date('2024-12-01')
    },
    {
        id: 'e4',
        description: 'Guitar Pickups',
        amount: 160,
        date: new Date('2024-04-01')
    },
    {
        id: 'e5',
        description: 'Fender Mustang',
        amount: 850.49,
        date: new Date('2021-12-01')
    }
]

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
  <View style={styles.container}>
    <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
    <ExpensesList expenses={DUMMY_EXPENSES}/>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingBottom: 0,
        paddingTop: 10,
        backgroundColor: GlobalStyles.colors.primary700,

    }
})

export default ExpensesOutput;
