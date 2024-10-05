import React, { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const GoalInput = ({ onAddGoal, open, setOpen } = props) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const addGoalHandler = () => {
    setOpen(false);
    if (enteredGoalText === "") {
      return;
    }
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal style={styles.modal} visible={open} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require("../assets/goal.png")} style={styles.image} />
        <TextInput
          style={styles.goalInputBox}
          value={enteredGoalText}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
        />
        <View style={styles.btnContainer}>
          <Button color={"red"} title="Cancel" onPress={() => setOpen(false)} />
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "black",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  goalInputBox: {
    borderBottomWidth: 2,
    borderColor: "#fff",
    width: "100%",
    color: "120438",
    backgroundColor: "#e4d0ff",
    padding: 16,
    borderRadius: 8,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default GoalInput;
