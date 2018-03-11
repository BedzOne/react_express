import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useRouterHistory } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import axios from 'axios';
import styled from 'styled-components';
import { injectGlobal } from 'styled-components';

const history = createBrowserHistory();

import Register from './Register';
import Navbar from '../components/Navbar';
import ProductsList from '../components/products/ProductsList';
import Dashboard from '../components/dashboard/Dashboard';
import Login from './Login';
import ProductDetails from '../components/products/ProductDetails';
import Profile from '../components/dashboard/Profile';
import Cart from '../components/cart/Cart';
import Checkout from '../components/checkout/Checkout';
import CheckoutSuccess from '../components/checkout/CheckoutSuccess';
import Footer from '../Components/Footer';

import { logOut, loginSuccess } from '../actions/login';
import { registerSuccess } from '../actions/register';
import { updateUser, getUser, updateAddress, tokenExpired }  from '../actions/user';
import { showProducts, switchCategories }  from '../actions/products';
import { getCart, addItemToCart, deleteCartItem, getQuantity, updateCartItem, clearCart } from '../actions/cart';
import { buildOrder, getOrders, checkOrderFail, checkOrderSuccess } from '../actions/order';

injectGlobal`

  body {
    background: #F5EFED;
  }

  a {
    color: black;
    text-decoration: none;
  }
`;

const Container = styled.div`
  margin: 0 3em;
  margin-top: 5em;
` 

import '../App.scss';

const userLoggedIn = localStorage.getItem('token');
const savedUser = JSON.parse(localStorage.getItem('user'));

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCart();
    this.props.getProducts();
    if (userLoggedIn) {
      this.props.loginSuccess(true);
      this.props.getUser(savedUser);
    }
  }

  render() {
    let ProductDetailsRoute;
    ProductDetailsRoute = this.props.productsList.map((product) => {
      return(
        <Route exact path={`/product/${product._id}`} 
          render={() => 
          <ProductDetails 
            key={product._id} 
            getQuantity={this.props.getQuantity} 
            product={product} 
            quantity={this.props.quantity} 
            getCart={this.props.getCart} 
            cart={this.props.cart} 
            addItemToCart={this.props.addItemToCart} 
            user={this.props.user} 
            updateCartItem={this.props.updateCartItem} 
        />} 
        />
      )
    })
    return(
      <Router history={history}>
        <Container>
          <Navbar 
            isLoggedIn={this.props.isLoggedIn} 
            logOut={this.props.logOut} 
            cart={this.props.cart}
            /> 
          <Switch>
            <Route 
              exact path='/home' 
              render={() => 
              <ProductsList 
                productsList={this.props.productsList} 
                getProducts={this.props.getProducts} 
                switchCategories={this.props.switchCategories}/>} 
              />
            <Route 
              exact path='/login' 
              render={() => 
              <Login 
                getUser={this.props.getUser} 
                loginSuccess={this.props.loginSuccess}/>} 
              />
            <Route 
              path='/dashboard' 
              render={() => (!this.props.loginSuccess ? (
              <Redirect to='/login' />) : (
              <Dashboard 
                loginSuccess={this.props.loginSuccess} 
                logOut={this.props.logOut} 
                getUser={this.props.getUser} 
                updateUser={this.props.updateUser} 
                user={this.props.user} 
                changeAddress={this.props.changeAddress} 
                getOrders={this.props.getOrders}
                orders={this.props.orders}/>))} 
               />
            <Route 
              path='/cart' 
              render={() => (!this.props.loginSuccess ? ( <Redirect to='/login' /> ) : (
              <Cart 
                deleteCartItem={this.props.deleteCartItem} 
                user={this.props.user} 
                getCart={this.props.getCart} 
                cart={this.props.cart} 
                total={this.props.total}/>))} 
              />
            <Route 
              exact path='/register' 
              render={() => 
              <Register 
                registerSuccess={this.props.registerSuccess}/>}
              />
            {ProductDetailsRoute}
            <Route 
              exact path='/dashboard/profile' 
              render={() => <Profile />} />
              <Route 
                exact path='/checkout'
                render={() => 
                <Checkout 
                  user={this.props.user} 
                  getCart={this.props.getCart} 
                  cart={this.props.cart} 
                  total={this.props.total} 
                  buildOrder={this.props.buildOrder} 
                  description={'payment'} 
                  amount={this.props.total} 
                  orderSuccess={this.props.orderSuccess}/>} 
                />
              <Route 
                exact path='/checkout-success'
                render={() => (this.props.orderSuccess ? 
                <CheckoutSuccess 
                  clearCart={this.props.clearCart} />: <Login />)} 
                />
          </Switch>
          <Footer />
        </Container>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    register: state.registerReducer,
    isLoggedIn: state.userReducer.isLoggedIn,
    productsList: state.productsReducer.productsList,
    user: state.userReducer.user,
    cart: state.cartReducer.cart,
    quantity: state.cartReducer.quantity,
    total: state.cartReducer.total,
    orderSuccess: state.orderReducer.orderSuccess,
    orders: state.orderReducer.orders
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

    getUser: (user) => {
      dispatch(getUser(user))
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

    switchCategories: (category) => {
      dispatch(switchCategories(category))
    },

    getCart: (cart, total) => {
      axios.get(`http://localhost:5000/cart/${savedUser._id}`)
        .then(res => {
          total = res.data.cart.reduce((prev, cur) => {
            let result = Number(cur.price) + Number(prev);
            return result.toFixed(2);
          }, 0);
          dispatch(getCart(res.data.cart, total));
        })
        .catch(err => console.log(err))
    }, 

    addItemToCart: (cartItem, price) => {
      dispatch(addItemToCart(cartItem, price))
    },

    deleteCartItem: (cartItem, cart) => {
      dispatch(deleteCartItem(cartItem, cart))
    },

    getQuantity: (quantity) => {
      dispatch(getQuantity(quantity))
    },

    updateCartItem: (quantity, price) => {
      dispatch(updateCartItem(quantity, price))
    },

    buildOrder: (cart, total, order, date) => {
      axios({
        method: 'post',
        url: `http://localhost:5000/order/${savedUser._id}`,
        data: {order: cart, total: total}
      })
      .then(res => {
        dispatch(buildOrder(cart, total, res.data.cart, res.data.order.updatedAt))
      })
      .catch(err => console.log(err))
    },

    orderFail: (fail) => {
      dispatch(checkOrderFail(fail))
    },

    orderSuccess: (success) => {
      dispatch(checkOrderSuccess(true))
    },

    getOrders: (orders) => {
      axios.get(`http://localhost:5000/order/${savedUser._id}`)
        .then(res => {
          dispatch(getOrders(res.data.order))
        })
        .catch(err => console.log(err))
    },

    clearCart: (cart) => {
      axios.delete(`http://localhost:5000/cart/empty/${savedUser._id}`)
        .then(res => {
          dispatch(clearCart(cart))
        })
        .catch(err => console.log(res));
    },

    changeAddress: (address) => {
      dispatch(updateAddress(address));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);