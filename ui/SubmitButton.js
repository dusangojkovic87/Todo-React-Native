import { Button, Pressable, StyleSheet, Text } from "react-native";

export default function SubmitButton({ buttonText, handleSubmit }) {
  return (
    <Pressable style={styles.btnStyle} onPress={handleSubmit}>
      <Text style={styles.btnTextStyle}>{buttonText}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  btnStyle: {
    backgroundColor: "#81C784",
    width: "80%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextStyle: {
    color: "black",
    fontWeight: "bold",
  },
});
