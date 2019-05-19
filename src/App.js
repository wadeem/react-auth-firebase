import React, {Component} from "react";
import {Text, View} from "react-native";
import {Header} from "./components/common";
import firebase from "firebase";


export default class App extends Component {


    componentWillMount() {
        // firebase.
    }

    render() {
        return <View>
            <Header headerText={"Authentication"}/>
            <Text>This is a React Auth App!</Text>
        </View>
    };
};