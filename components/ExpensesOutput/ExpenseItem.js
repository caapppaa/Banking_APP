import { Pressable, View, Text, StyleSheet } from "react-native";
import { GlobalStyles }  from '../../constants/styles';
import { getFormattedDate } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpenseItem({id, description, amount, date}) {
  const navigate = useNavigation();
  
  function expensePressHandler() {
    navigate.navigate('ManageExpense'), {
    expenseId: id
    }
  }

  return (
    <Pressable style={({pressed}) => pressed && styles.pressed} onPress={expensePressHandler}>
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.descriptionText]}>{description}</Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={amount}>-${amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  expenseItem: {
    padding: 12,
    marginVertical: 8,
    backgroundColor: GlobalStyles.colors.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 6,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: {height: 1, width: 2},
    shadowRadius: 8
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  descriptionText: {
    fontSize: 16, 
    marginBottom: 4,
    fontWeight: 'bold'
  },
  amountContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    minWidth: 90
  },
  amount: {
    color: GlobalStyles.colors.primary500,
    fontWeight: 'bold'
  },
  pressed: {
    opacity: 0.5
  }
});

export default ExpenseItem;
