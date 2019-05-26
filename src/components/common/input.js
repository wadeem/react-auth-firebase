import React from "react";
import {TextInput, Text, View} from "react-native";

const Input = ({label, handler, value, placeholderText, secureTextEntry}) => {

    const {inputStyle, labelStyle, containerStyle} = styles;

    return <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholderText}
            autoCorrect={false}
            style={inputStyle}
            onChangeText={handler}
            value={value}
        />
    </View>
};

styles = {
    inputStyle: {
        color: "#000",
        paddingRight: 5,
        paddingLeft: 5,
        lineHeight: 23,
        fontSize: 18,
        flex: 2
    },
    labelStyle: {
        paddingLeft: 20,
        fontSize: 18,
        flex: 1

    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    }
};

export {Input};