import React, { Component } from 'react';
import './App.css';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import FaUser from 'react-icons/lib/fa/user';
import FaUnlockAlt from 'react-icons/lib/fa/unlock-alt';
import MySignUpModalContainer from './MySignUpModalContainer.jsx';
import './MyStyle.css';

class MyNavBarLogin extends Component {

    constructor(props) {
        super(props);

        this.state = {
            logged: localStorage.getItem("isLogged"),
            popoverOpen: false,
            modal: false,
            nestedModal: false,
            closeAll: false

        }
        this.doLogin = this.doLogin.bind(this)
        this.doLogout = this.doLogout.bind(this)
        this.toggle = this.toggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
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
            popoverOpen: !this.state.popoverOpen,
            modal: !this.state.modal
        });
    }

    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    render() {
        if (localStorage.getItem("isLogged") == "true") {
            return (
                <div className="MyInline">
                    <p className="MyInline">Bienvenido! &nbsp;</p>
                    <Popover placement="bottom" isOpen={this.state.popoverOpen} target="Popover1" toggle={this.toggle} />
                    <Button color="primary" size="sm" onClick={this.doLogout}>Cerrar Sesion</Button>
                </div>
            );
        } else {
            return (
                <div>
                    <Button color="primary" size="sm" onClick={this.toggle}>{this.props.buttonLabel}
                        Iniciar sesion
                    </Button>
                    <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                        <ModalHeader toggle={this.toggle}>Iniciar</ModalHeader>
                        <ModalBody>
                            <div>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><FaUser /></InputGroupAddon>
                                <Input placeholder="E-mail" />
                            </InputGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend"><FaUnlockAlt /></InputGroupAddon>
                                <Input placeholder="Constraseña" type="password" />
                            </InputGroup>
                            <Button color="primary" size="sm" onClick={this.doLogin}>Iniciar Sesion</Button>{' '}
                            </div>
                            <MySignUpModalContainer />
                        </ModalBody>
                    </Modal>
                    
                </div>
            );
        }
    }
}

export default MyNavBarLogin;