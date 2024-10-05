import { useState } from "react";
import { Button, FlatList, StyleSheet, TextInput, View } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [openAddGoalModal, setOpenAddGoalModal] = useState(false);

  const handleAddGoals = (goal) => {
    setGoals((prevGoal) => [{ text: goal, id: Math.random() }, ...prevGoal]);
  };

  const deleteGoalHandler = (index) => {
    setGoals((prevGoals) => {
      const removeGoal = prevGoals.filter((goal) => goal.id !== index);
      return removeGoal;
    });
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#5e0acc"
          onPress={() => setOpenAddGoalModal(true)}
        />
        <View style={styles.goalModalContainer}>
          {openAddGoalModal && (
            <GoalInput
              open={openAddGoalModal}
              setOpen={setOpenAddGoalModal}
              onAddGoal={handleAddGoals}
            />
          )}
        </View>
        <View style={styles.goalsContainer}>
          {/* <ScrollView style={styles.goalItems}>
          {goals.map((goal, index) => (
            <View key={index} style={styles.goalItem}>
              <Text style={styles.goalItemText}>{goal}</Text>
            </View>
          ))}
        </ScrollView> */}
          <FlatList
            data={goals}
            renderItem={(itemData) => (
              <GoalItem
                id={itemData.item.id}
                text={itemData.item.text}
                onRemoveGoal={deleteGoalHandler}
              />
            )}
            keyExtractor={(item, index) => item.id}
            style={styles.goalItems}
          ></FlatList>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: "#1e085a",
  },
  goalModalContainer: {},
  goalsContainer: {
    flex: 6,
  },
  goalItems: {
    display: "flex",
    gap: 4,
  },
});
