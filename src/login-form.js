import React from "react";
import {Button, Card, CardSection, Input} from "./components/common";

class LoginForm extends React.Component {

    state = {
        text: ""
    };

    render() {
        return <Card>
            <CardSection>
                <Input
                    label={"Email"}
                    handler={text => this.setState({text})}
                    value={this.state.text}
                />
            </CardSection>
            <CardSection style={{height: 20, width: 100, flex: 1, background: "#faf"}}/>
            <CardSection>
                <Button>Log in</Button>
            </CardSection>
        </Card>
    };
}

export default LoginForm;