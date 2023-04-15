import { StyleSheet, View, Text, Pressable } from "react-native";

export default function Todo({ todoText }) {
  return (
    <View style={style.todoStyle}>
      <Text>{todoText}</Text>
    </View>
  );
}

const style = StyleSheet.create({
  todoStyle: {
    width: "80%",
    height: 50,
    backgroundColor: "#CAFAF4",
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
