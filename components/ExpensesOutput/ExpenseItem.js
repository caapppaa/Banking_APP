import { Pressable, View, Text } from "react-native";

function ExpenseItem() {
  return (
    <Pressable>
      <View>
        <View>
          <Text>Description</Text>
          <Text>Date</Text>
        </View>
        <View>
          <Text>Amount</Text>
        </View>
      </View>
    </Pressable>
  );
}

export default ExpenseItem;
