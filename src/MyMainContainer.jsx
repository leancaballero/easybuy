import React, { Component } from 'react';
import './App.css';
import MySearch from './MySearch.jsx';
import MyTrends from './MyTrends';

class MyMainContainer extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      keywordList: [],
      titleList: [],
      
    };
  }

  loadData(){
    return fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
      .then(function(response){
        return response.json()
      }).then((response) => {
          response.forEach(element => {
            fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + element.keyword)
              .then(function(response){
                return response.json()
              }).then((response)=>{
                  const newKeywordList = this.state.keywordList.concat(response.results[0].title)
                  this.setState({ keywordList: newKeywordList})

              })
          })
      })
  }

  render() {
    return (
      <div>
          < MySearch />
          < MyTrends />
      </div>
    );
  }
}

export default MyMainContainer;
