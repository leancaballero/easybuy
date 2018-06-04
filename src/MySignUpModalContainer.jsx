import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MySignUp from './MySignUp.jsx';


class MySignUpModalContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>Registrarse Modal</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Registrarse</ModalHeader>
          <ModalBody>
              < MySignUp />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Crear Usuario</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancelar</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MySignUpModalContainer;