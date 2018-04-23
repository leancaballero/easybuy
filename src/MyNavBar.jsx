import React, { Component } from 'react';
import './App.css';

class MyNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            loading: false,
            loaded: false
        };
    };

  loadData() {
    return fetch('https://api.mercadolibre.com/sites/MLA/categories')
      .then(function(res){
        return res.json()
      }).then((res) => {
        this.setState({items: res})
        console.log(res)
        res.forEach(element => {
          console.log(element)
          })
        })
  }

  
  componentDidMount() {
    this.setState({
      loading: true
    });
    this.setState({
      loaded: false
    });
    this.loadData()
    .then(() => {
      this.setState({
        loading: false
      })
      this.setState({
        loaded: true
      })
    })
  }
  
  render() {
    if(this.state.loading) {
      return (
        <div>
            <p>Cargando</p>
        </div>
      );        
    }
    console.log(this.state.items)
    return (
      <div>
          <p>Prueba completo</p>
      </div>
    );
  }
}

export default MyNavBar;
