import React from "react";
import {Button, Card, CardSection, Input} from "./components/common";

class LoginForm extends React.Component {

    state = {
        email: "",
        password: ""
    };

    render() {
        return <Card>
            <CardSection>
                <Input
                    // secure={false}
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
            <CardSection>
                <Button>Log in</Button>
            </CardSection>
        </Card>
    };
}

export default LoginForm;