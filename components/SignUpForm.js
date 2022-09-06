import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import { isValidEmail, isValidObjField, updateError } from "./utils/methods";

const SignUpForm = () => {
  const [userInfo, setUserInfo] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const { userName, email, password, confirmPassword } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Require all the fields!", setError);

  if (!userName.trim() || userName.length < 3)
    return updateError("Invalid Username", setError);

  if (!isValidEmail(email)) return updateError("Invalid email!", setError);

  if (!password.trim() || password.length < 8)
    return updateError("Password is lenght than 8 characters!", setError);

  if (password !== confirmPassword)
    return updateError("Password does not match!", setError);
}
    const submitForm = () => {
    if (isValidForm()) {
      console.log(userInfo)
    }
  };

  return (
    <FormContainer>
      {error ? ( <Text style={{color: 'red', fontSize: '20', textAlign: 'center'}}>
        {error}
      </Text>
    ):null}
      <FormInput
        value={userName}
        onChangeText={(value) => handleOnChangeText(value, "userName")}
        title="Username"
        placeholder="John Doe"
      ></FormInput>
      <FormInput
        onChangeText={(value) => handleOnChangeText(value, "email")}
        autocapitalize="none"
        value={email}
        title="Email"
        placeholder="Example@email.com"
      ></FormInput>
      <FormInput
        onChangeText={(value) => handleOnChangeText(value, "password")}
        value={password}
        title="Password"
        secureTextEntry
        autocapitalize="none"
        placeholder="Your password"
      ></FormInput>
      <FormInput
        onChangeText={(value) => handleOnChangeText(value, "confirmPassword")}
        value={confirmPassword}
        title="Confirm password"
        autocapitalize="none"
        secureTextEntry
        placeholder="Your password"
      ></FormInput>
      <FormSubmitButton onPress={submitForm} title="Sign up"></FormSubmitButton>
    </FormContainer>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 50, fontWeight: "bold" },
});

export default SignUpForm;
