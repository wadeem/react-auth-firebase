import React, {Component} from "react";
import {Text, View} from "react-native";
import {Header} from "./components/common";
import firebase from "firebase";
import firebaseConfig from "../config/firebase.js";
import LoginForm from "./login-form.js";


export default class App extends Component {


    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
    }

    render() {
        return <View>
            <Header headerText={"Authentication"}/>
            <Text>This is a React Auth App!</Text>
            <LoginForm/>
        </View>
    };
};