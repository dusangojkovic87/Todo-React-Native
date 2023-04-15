import { View, StyleSheet, FlatList, Text } from "react-native";
import { useState } from "react";
import Input from "../ui/Input";
import SubmitButton from "../ui/SubmitButton";
import Todo from "../components/Todo";

export default function Home() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function onHandleInputData(data) {
    setTodo(data);
  }

  function onHandleSubmit() {
    todos.push(todo);
    setTodo("");
    console.log(todos);
  }
  const keyExtractor = () => Math.random().toString(36).substr(2, 9);

  return (
    <View style={styles.container}>
      <View style={styles.addTodoWrp}>
        <Input
          inputData={todo}
          handleInputData={(e) => onHandleInputData(e)}
          placeholderText={"add todo here.."}
        ></Input>
        <SubmitButton
          handleSubmit={onHandleSubmit}
          buttonText={"add"}
        ></SubmitButton>
      </View>
      <FlatList
        data={todos}
        style={{ width: "100%" }}
        renderItem={({ item }) => (
          <View style={styles.todoWrp}>
            <Todo todoText={item}></Todo>
          </View>
        )}
        keyExtractor={keyExtractor}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  addTodoWrp: {
    width: "100%",
    height: 100,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    top: 10,
  },
  todosContainer: {
    width: "100%",
    height: "100%",
  },
  todoWrp: {
    top: 40,
    width: "100%",
    alignItems: "center",
  },
});
