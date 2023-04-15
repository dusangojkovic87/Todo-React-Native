import { StyleSheet, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Todo({ todoText }) {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("details")}
      style={style.todoStyle}
    >
      <Text>{todoText}</Text>
    </Pressable>
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
