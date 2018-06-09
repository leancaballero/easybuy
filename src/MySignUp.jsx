import React, { Component } from 'react';
import './App.css';
import './MyStyle.css';
import { InputGroup, InputGroupText, InputGroupAddon, Input } from 'reactstrap';


class MySignUp extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="MySignUp">
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>{this.props.text}</InputGroupText>
                    </InputGroupAddon>
                    <Input type={this.props.type}/>
                </InputGroup>
            </div>
        );
    }
}

export default MySignUp;