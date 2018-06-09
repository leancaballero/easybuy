import React, { Component } from 'react';
import './App.css';
import MySearch from './MySearch.jsx';
import MyTrends from './MyTrends.jsx';
import MyLoading from './MyLoading.jsx';
import MyProductView from './MyProductView.jsx'
import MyTrendsItem from './MyTrendsItem';

class MyMainContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      displayType: "index",
      queryString: "",
      loading: true,
      titleList: [],
      priceList: [],
      urlList: [],
      imgList: [],
      titleListQ: [],
      priceListQ: [],
      urlListQ: [],
      imgListQ: []
    };
    this.onGo = this.onGo.bind(this);
    this.onQuery = this.onQuery.bind(this);
  }

  onGo(componente){
    this.setState({ displayType: componente})
  }

  onQuery(query){
    this.setState({ queryString: query})
  }

  loadData() {
    return fetch('https://api.mercadolibre.com/sites/MLA/trends/search')
      .then(function(response) {
        return response.json()
      }).then((response) => {
        response.forEach(element => {
          fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + element.keyword)
            .then(function(response) {
              return response.json()
            }).then((response) => {
              fetch('https://api.mercadolibre.com/items/' + response.results[0].id)
                .then(function(response) {
                  return response.json()
                }).then((response) => {
                  const newTitleList = this.state.titleList.concat(response.title)
                  this.setState({ titleList: newTitleList })
                  const newPriceList = this.state.priceList.concat(response.price)
                  this.setState({ priceList: newPriceList })
                  const newUrlList = this.state.urlList.concat(response.permalink)
                  this.setState({ urlList: newUrlList })
                  const newImgList = this.state.imgList.concat(response.pictures[0].url)
                  this.setState({ imgList: newImgList })
                })
            })
        })
      })
  }

  loadQuery(){
    return fetch('https://api.mercadolibre.com/sites/MLA/search?q=' + this.state.queryString)
    .then(function(response) {
      return response.json()
    }).then((response) => {
      fetch('https://api.mercadolibre.com/items/' + response.results[0].id)
        .then(function(response) {
          return response.json()
        }).then((response) => {
          const newTitleListQ = this.state.titleListQ.concat(response.title)
          this.setState({ titleListQ: newTitleListQ })
          const newPriceListQ = this.state.priceListQ.concat(response.price)
          this.setState({ priceListQ: newPriceListQ })
          const newUrlListQ = this.state.urlListQ.concat(response.permalink)
          this.setState({ urlListQ: newUrlListQ })
          const newImgListQ = this.state.imgListQ.concat(response.pictures[0].url)
          this.setState({ imgListQ: newImgListQ })
        })
    })
  }

  componentDidMount() {
    this.setState({ loading: true });
    this.loadData()
      .then(() => {
        this.setState({
          loading: false
        })
      })
  }

  
  render() {
    switch(this.state.displayType){
      case "search":
        this.loadQuery();
        return (
            <div>
              < MySearch go={this.onGo} goQuery={this.onQuery}/>
              < MyTrends titleList={this.state.titleListQ} priceList={this.state.priceListQ} urlList={this.state.urlListQ} imgList={this.state.imgListQ} />
            </div>
          );
      case "index":
        if (this.state.priceList.length == 50) {
          return (
            <div>
              < MySearch go={this.onGo} goQuery={this.onQuery}/>
              < MyTrends titleList={this.state.titleList} priceList={this.state.priceList} urlList={this.state.urlList} imgList={this.state.imgList} />
            </div>
          );
        }
        return(
            <div>
              < MySearch />
              < MyLoading />
            </div>
        )}
    }
}

export default MyMainContainer;
