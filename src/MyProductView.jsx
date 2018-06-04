import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MyTrends from './MyTrends.jsx'

class MyProductView extends Component {
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
        <Button color="danger" onClick={this.toggle}>Botón Producto</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Test</ModalHeader>
          <ModalBody>
              < MyTrends />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Agregar al Carrito</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Volver</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MyProductView;