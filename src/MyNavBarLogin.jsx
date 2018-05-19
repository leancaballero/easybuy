import React, { Component } from 'react';
import './App.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';
import './MyStyle.css';

class MyNavBarLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logged: localStorage.getItem("isLogged"),
            popoverOpen: false
        }
        this.doLogin = this.doLogin.bind(this)
        this.doLogout = this.doLogout.bind(this)
        this.toggle = this.toggle.bind(this);
    }

    doLogin() {
        this.setState({
            logged: true
        }, function () {

            localStorage.setItem("isLogged", true);
            console.log(localStorage.getItem("isLogged"))
            this.forceUpdate()
        })
    }

    doLogout() {
        this.setState({
            logged: false
        }, function () {

            localStorage.setItem("isLogged", false);
            console.log(localStorage.getItem("isLogged"))
            this.forceUpdate()
        })
    }

    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    render() {
        if (localStorage.getItem("isLogged") == "true") {
            return (
                <div className="MyInline">
                    <p className="MyInline">Bienvenido! &nbsp;</p>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}/>
                    <Button color="primary" size="sm" onClick={this.doLogout}>Cerrar Sesion</Button>
                </div>
            );
        } else {
            return (
                <div>
                    <Button color="primary" size="sm"  id="Popover1" onClick={this.toggle}>
                        Iniciar sesion
                    </Button>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle}>
                        <div>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><FaUser /></InputGroupAddon>
                                <Input placeholder="E-mail" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><FaUnlockAlt /></InputGroupAddon>
                                <Input placeholder="Constraseña" type="password" />
                            </InputGroup>
                            <div>
                                <Button color="primary" size="sm" onClick={this.doLogin}>Iniciar Sesion</Button>{' '}
                                <Button color="link">Registrarse</Button>
                            </div>
                        </div>
                    </Popover>
                </div>
            );
        }
    }
}

export default MyNavBarLogin;