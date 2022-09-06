import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import { isValidEmail, isValidObjField, updateError } from "./utils/methods";
import axios from "axios";

const LoginForm = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };
  const isValidForm = () => {
    if (!isValidObjField(userInfo)) 
      return updateError("Required all fields", setError);

    if (!isValidEmail(email)) 
      return updateError("Invalid email", setError);


    if (!password.trim() || password.length < 8)
      return updateError("Password is invalid", setError);

    return true;
  };
  const submitForm = async () => {
    if (isValidForm()) {
      await axios.post('http://localhost:3000/auth', {
        "username":"Saimon231",
        "password":"VgpWMlc5VGIDMAEgBzEEJQI+AzhZbFVhUGI="
      })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };
  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: "18px", textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        title="Email"
        placeholder="Example@email.com"
        autoCapitalize="none"
      ></FormInput>
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        title="Password"
        placeholder="Your password"
        autoCapitalize="none"
        secureTextEntry
      ></FormInput>
      <FormSubmitButton onPress={submitForm} title="Login"></FormSubmitButton>
    </FormContainer>
  );
};
const styles = StyleSheet.create({});

export default LoginForm;
