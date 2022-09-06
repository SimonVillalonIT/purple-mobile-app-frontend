import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {View, StyleSheet} from "react-native"

const FormSubmitButton = ({title, onPress})=>{
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Text style={{fontSize:18, color:"#fff"}}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        height:45,
        backgroundColor: "rgba(27,27,51,0.4)",
        borderRadius:8,
        justifyContent: "center",
        alignItems: "center",
    }
})
export default FormSubmitButton; 