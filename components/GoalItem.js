import React from "react";
import { View, Text, StyleSheet ,TouchableOpacity} from "react-native";
export default function GoalItem(props) {
  return (
      <TouchableOpacity onPress={()=>props.onDelete(props.item.id)}>
    <View style={styles.listItem}>
      <Text>{props.item.value}</Text>
    </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
    marginVertical: 10,
  },
});
