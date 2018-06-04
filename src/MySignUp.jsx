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
                        <InputGroupText>Nombre</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Apellido</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Contraseña</InputGroupText>
                    </InputGroupAddon>
                    <Input type="password"/>
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>E-mail</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Fecha de Nacimiento</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Provincia</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Dirección de envío</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Código Postal</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
                <InputGroup>
                    <InputGroupAddon addonType="prepend">
                        <InputGroupText>Número de Teléfono</InputGroupText>
                    </InputGroupAddon>
                    <Input />
                </InputGroup>
            </div>
        );
    }
}

export default MySignUp;