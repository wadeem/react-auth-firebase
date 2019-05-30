import React, {Component} from "react";
import {Text, View} from "react-native";
import {Header, Button, Spinner} from "./components/common";
import firebase from "firebase";
import firebaseConfig from "../config/firebase.js";
import LoginForm from "./login-form.js";


export default class App extends Component {

    state = {
        isLoggedIn: null
    };

    componentWillMount() {
        firebase.initializeApp(firebaseConfig);
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.setState({isLoggedIn: true});
            else this.setState({isLoggedIn: false});
        });
    }

    logOut() {
        firebase.auth().signOut()
    }

    renderContent() {
        switch (this.state.isLoggedIn) {
            case true:
                return <Button handler={() => this.logOut()}>Log out</Button>
            case false:
                return <LoginForm/>
            default:
                return <Spinner/>
        }

    };

    render() {
        return <View style={{height: 140}}>
            <Header headerText={"Authentication"}/>
            <Text>This is a React Auth App!</Text>
            {this.renderContent()}
        </View>
    }
    ;
}
;