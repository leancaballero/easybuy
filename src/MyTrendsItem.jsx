import React, { Component } from 'react';
import './App.css';
import './MyStyle.css';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import MyProductView from './MyProductView.jsx';

class MyTrendsItem extends Component {

    constructor(props) {
        super(props);

    }


    render() {
        let myStyle = {height: '400px',
                       display: 'inline-flex',
                       position: 'relative',
                       margin: '10px',
                       overflow: 'hidden'
                    }

        let myImgStyle = { padding: '40px',
                           width: '100%',
                           height: '250px'
        }

        let mySomeStyle

        return (
            <div className="MyCardDiv" style={myStyle}>
                <Card>
                    <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>${this.props.price}</CardTitle>
                        <CardText>{this.props.info}</CardText>
                    < MyProductView />                        
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default MyTrendsItem;