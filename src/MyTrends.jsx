import React, { Component } from 'react';
import './App.css';
import './MyStyle.css';
import MyTrendsItem from './MyTrendsItem';

class MyTrends extends Component {

    render() {
        return (
            <div>
               <p>Más Buscados</p>
               < MyTrendsItem 
                    image="https://http2.mlstatic.com/teclado-mecanico-redragon-yama-k550-negro-blanco-rgb-envio-D_NQ_NP_729998-MLA25605755081_052017-F.webp"
                    price="2.317" 
                    info="Teclado Mecanico Redragon Yama K550 Negro Blanco Rgb Envio"/>
            </div>
        );
    }
}

export default MyTrends;