import React from "react";
import { View, StyleSheet, Text } from "react-native";

const FormHeader = ({ heading, subHeading }) => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>{heading}</Text>
      </View>
      <Text style={styles.subheading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alingItems: "center",
  },
  heading: { fontSize: 60, fontWeight: "bold", color: "black" },
  subheading: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1b1b33",
    textAlign: "center",
  },
});

export default FormHeader;
