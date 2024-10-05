import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ text, id, onRemoveGoal } = props) => {
  // const handleDeleteGoal = (id) => {
  //   onRemoveGoal(id);
  // };
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#000", borderRadius: 6 }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onRemoveGoal.bind(this, id)}
      >
        <Text style={styles.goalItemText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    backgroundColor: "#5e0acc",
    borderRadius: 6,
    marginVertical: 8,
  },
  goalItemText: {
    paddingLeft: 8,
    padding: 8,
    color: "white",
  },
  pressedItem: {
    opacity: 0.5,
  },
});

export default GoalItem;
