import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import { Router } from 'react-router-dom';
import { useRouterHistory } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';

const history = createBrowserHistory();

import Register from './Register';
import Navbar from '../components/Navbar';
import ProductsList from '../components/ProductsList';
import Dashboard from '../components/Dashboard';
import Login from './Login';
import ProductDetails from '../components/ProductDetails';
import Profile from '../components/dashboard/Profile';
import Cart from '../components/Cart';

import { logOut, loginSuccess } from '../actions/login';
import { registerSuccess } from '../actions/register';
import { showProducts, showProductDetails }  from '../actions/products';
import { updateUser }  from '../actions/user';
import { showCart, addItemToCart } from '../actions/cart';

import '../App.scss';

const userLoggedIn = localStorage.getItem('token');

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount(user) {
    if (userLoggedIn) {
      this.props.loginSuccess(true);
      this.props.updateUser(user);
      this.props.showCartItems();
    }
  }

  render() {
    let ProductDetailsRoute;
    ProductDetailsRoute = this.props.productsList.map((product) => {
      return(
        <Route exact path={`/product/${product._id}`} 
               render={() => <ProductDetails key={product._id} product={product}/>} 
        />
      )
    })
    return(
      <Router history={history}>
        <div>
          <Navbar isLoggedIn={this.props.isLoggedIn} logOut={this.props.logOut} /> 
          <Switch>
            <Route exact path='/home' render={() => <ProductsList productsList={this.props.productsList} getProducts={this.props.getProducts} addItemToCart={this.props.addItemToCart}/>} />
            <Route exact path='/login' render={() => <Login updateUser={this.props.updateUser} loginSuccess={this.props.loginSuccess}/>} />
            <Route path='/dashboard' render={() => (!this.props.loginSuccess ? (
              <Redirect to='/login' />) : (<Dashboard loginSuccess={this.props.loginSuccess} logOut={this.props.logOut} user={this.props.user}/>))} />
            <Route path='/cart' render={() => (!this.props.loginSuccess ? ( <Redirect to='/login' /> ) : (<Cart />))} />
            <Route exact path='/register' render={() =><Register registerSuccess={this.props.registerSuccess}/>}/>
            {ProductDetailsRoute}
            <Route exact path='/dashboard/profile' render={() => <Profile />} />
          </Switch>
        </div>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.registerReducer,
    isLoggedIn: state.loginReducer.isLoggedIn,
    productsList: state.productsReducer.productsList,
    user: state.userReducer.user,
    cart: state.cartReducer
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (isLoggedIn, user) => {
      dispatch(logOut(false, user))
    },

    loginSuccess: (isLoggedIn) => {
        dispatch(loginSuccess(true))
    },

    updateUser: (user) => {
      dispatch(updateUser(user))
    },

    registerSuccess: (isRegistered) => {
      dispatch(registerSuccess(true))
    },
    
    getProducts: () => {
      axios.get('http://localhost:5000/product/list')
      .then((res) => {
        dispatch(showProducts(res.data))
      })
      .catch(err => console.log(err))
    },

    showCartItems: (cart) => {
      dispatch(showCart(cart))
    },

    addItemToCart: (cartItem) => {
      dispatch(addItemToCart(cartItem))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);