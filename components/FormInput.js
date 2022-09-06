import { View, Text, TextInput,StyleSheet } from "react-native";
import React from "react";

export default function FormInput(props) {
  const {placeholder,title} = props
  return (
    <View>
      <Text style={{ fontWeight: "bold" }}>{title}</Text>
      <TextInput
        {...props}
        placeholder={placeholder}
        style={styles.input}
      ></TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#1b1b33",
    height: 35,
    width: 320,
    borderRadius: 8,
    fontSize: 16,
    paddingLeft: 10,
    marginBottom: 20,
  },
});
