import React, { Component } from 'react';
import './App.css';
import './MyStyle.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

class MyTrendsItem extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="MyCardDiv">
                <Card>
                    <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>${this.props.price}</CardTitle>
                        <CardText>{this.props.info}</CardText>
                        <Button>Ver</Button>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default MyTrendsItem;