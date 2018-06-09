import React, { Component } from 'react';
import './App.css';
import './MyStyle.css';
import MyTrendsItem from './MyTrendsItem';

class MyTrends extends Component {

    render() {
        return (
            <div className="boxStyle">
               <p>Más Buscados</p> 
                    {this.props.titleList.map((val,i) => {return < MyTrendsItem key={i} obj={val}
                    image={this.props.imgList[i]}
                    price={this.props.priceList[i]}
                    info={this.props.titleList[i]} />})}
            </div>
        );
    }
}

export default MyTrends;