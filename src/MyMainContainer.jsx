import React, { Component } from 'react';
import './App.css';
import MySearch from './MySearch.jsx';
import MyTrends from './MyTrends.jsx';
import MyLoading from './MyLoading.jsx';
import MySignUpModalContainer from './MySignUpModalContainer.jsx';
import MyProductView from './MyProductView.jsx'

class MyMainContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      titleList: [],
      priceList: [],
      urlList: [],
      imgList: []
    };
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
    if (this.state.priceList.length == 50) {
      return (
        <div>
          < MySearch />
          < MyTrends />
          < MySignUpModalContainer />
          < MyProductView />

        </div>
      );
    }
    return(
        <div>
          < MySearch />
          < MyLoading />
          < MySignUpModalContainer />
          < MyProductView />
        </div>
    )}
}

export default MyMainContainer;
