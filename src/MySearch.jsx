import React, { Component } from 'react';
import './App.css';
import cart from './img/cart.png';
import './MyStyle.css';
import { InputGroup, InputGroupAddon, Button, Input } from 'reactstrap';
import FaSearch from 'react-icons/lib/fa/search';

class MySearch extends Component {

    constructor(props){
        super(props);
        this.state = {
            inputValue:""
        }
        this.renderQuery = this.renderQuery.bind(this);
        this.updateQuery = this.updateQuery.bind(this);
    }

    renderQuery(){
        this.props.goQuery(this.state.inputValue)
        this.props.go("search")
    }

    updateQuery(evt){
        this.setState({ inputValue: evt.target.value })
    }

    render() {
        return (
            <div>
                <img className="cart" src={cart} />
                <div className="MyPadding25">
                    <InputGroup>
                        <Input value={this.state.inputValue} onChange={this.updateQuery}/>
                        <InputGroupAddon addonType="append">
                            <Button color="secondary" onClick={this.renderQuery}><FaSearch/></Button>
                        </InputGroupAddon>
                    </InputGroup>
                </div>
            </div>
        );
    }
}

export default MySearch;