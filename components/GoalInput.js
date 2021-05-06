import React from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

export default function GoalInput(props) {
  return (
    <Modal visible={props.open} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your Goal!"
          onChangeText={(e) => props.seta(e)}
          style={styles.input}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
          }}
        >
          <View style={{ width: "40%" }}>
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
          <View style={{ width: "40%" }}>
           
            <Button onPress={() => props.add()} title="Add" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
