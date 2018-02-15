import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ProductsList from './ProductsList';
import { showProducts }  from '../actions/products';


class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getProducts(); 
  }

  render() {
    return(
      <div>
        <ProductsList productsList={this.props.productsList}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    productsList: state.productsReducer.productsList
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: () => {
      axios.get('http://localhost:5000/product/list')
      .then((res) => {
        dispatch(showProducts(res.data))
      })
      .catch(err => console.log(err))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);