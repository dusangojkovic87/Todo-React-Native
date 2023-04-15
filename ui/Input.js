import { TextInput, StyleSheet } from "react-native";

export default function Input({ placeholderText, handleInputData, inputData }) {
  return (
    <TextInput
      value={inputData}
      style={styles.inputStyle}
      placeholder={placeholderText}
      onChangeText={(e) => handleInputData(e)}
    ></TextInput>
  );
}

const styles = StyleSheet.create({
  inputStyle: {
    borderColor: "#81C784",
    borderWidth: 1,
    height: 40,
    width: "80%",
    paddingLeft: 10,
    fontStyle: "italic",
    outlineColor: "#4682b4",
  },
});
