import React from "react";
import {TextInput, Text, View} from "react-native";

const Input = ({label, handler, value}) => {

    return <View>
        <Text>{label}</Text>
        <TextInput
            style={{width: 100, height: 40}}
            onChangeText={handler}
            value={value}
        />
    </View>
};

export {Input};