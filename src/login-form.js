import React from "react";
import {Text} from "react-native";
import {Button, Card, CardSection, Input, Spinner} from "./components/common";
import firebase from "firebase";

class LoginForm extends React.Component {

    state = {
        email: "",
        password: "",
        error: "",
        success: "",
        loading: false
    };

    logIn = () => {
        const {email, password} = this.state;

        this.setState({error: "", loading: true});
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                // alert("im in!");
                this.onLoginSuccess();
            })
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(this.setState({error: "Error authenticating a user", success: "", loading: false}))
            })

    };

    onLoginSuccess = () => {
        this.setState({
            success: "Successfully logged in", loading: false, error: "", password: ""
        });
    };

    renderButton = () => {
        if (this.state.loading) return <Spinner/>;
        else return <Button handler={() => this.logIn()}>Log in</Button>
    };


    render() {
        return <Card>
            <CardSection>
                <Input
                    label={"Email"}
                    handler={email => this.setState({email})}
                    value={this.state.email}
                    placeholderText={"email@gmail.com"}
                />
            </CardSection>
            <CardSection style={{height: 20, width: 100, flex: 1, background: "#faf"}}>
                <Input
                    secureTextEntry
                    label={"password"}
                    placeholderText={"type your password"}
                    value={this.state.password}
                    handler={(password) => this.setState({password})}
                />
            </CardSection>
            <Text style={style.errorTextStyle}>
                {this.state.error}
            </Text>
            <Text style={style.successTextStyle}>
                {this.state.success}
            </Text>
            <CardSection>
                {this.renderButton()}
            </CardSection>
        </Card>
    };
}


const style = {
    errorTextStyle: {
        fontSize: 20,
        color: "red",
        alignSelf: "center"
    },
    successTextStyle: {
        fontSize: 18,
        color: "#017ddd",
        alignSelf: "center"
    }
};

export default LoginForm;