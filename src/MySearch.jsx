import React, { Component } from 'react';
import './App.css';
import cart from './img/cart.png';
import './MyStyle.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';

class MySearch extends Component {

    render() {
        return (
            <div>
                <img className="cart" src={cart} />
                <div className="MyPadding25">
                    <InputGroup>
                        <Input />
                        <InputGroupAddon addonType="append">
                            <Button color="secondary"><FaSearch/></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        );
    }
}

export default MySearch;