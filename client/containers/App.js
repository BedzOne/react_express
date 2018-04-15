import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useRouterHistory } from 'react-router';
import { Router } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

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
import CheckoutFail from '../components/checkout/CheckoutFail';
import Footer from '../Components/Footer';
import DetailsRoute from './DetailsRoute';

import { logOut, loginSuccess } from '../actions/login';
import { registerSuccess } from '../actions/register';
import { updateUser, getUser, updateAddress, changePassword, tokenExpired, getAddress }  from '../actions/user';
import { showProducts, switchCategories }  from '../actions/products';
import { getCart, addItemToCart, deleteCartItem, getQuantity, updateCartItem, clearCart, addToCartError } from '../actions/cart';
import { buildOrder, getOrders, checkOrderFail, checkOrderSuccess } from '../actions/order';

import { globalStyles, Container } from './styled';

const userLoggedIn = localStorage.getItem('token');
const savedUser = JSON.parse(localStorage.getItem('user'));
const history = createBrowserHistory();

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
    if (userLoggedIn) {
      this.props.loginSuccess(true);
    }
  }

  render() {
    return(
      <Router history={history}>
        <Container>
          <Navbar 
            isLoggedIn={this.props.isLoggedIn} 
            logOut={this.props.logOut} 
            cart={this.props.cart}
            getProducts={this.props.getProducts}
            /> 
          <Switch>
            <Route 
              exact path='/home' 
              render={() => 
              <ProductsList 
                productsList={this.props.productsList} 
                getProducts={this.props.getProducts} 
                switchCategories={this.props.switchCategories}
                category={this.props.category}
                />} 
              />
            <Route exact path='/login' render={() => 
              <Login loginSuccess={this.props.loginSuccess}/>} 
            />
            <Route 
              path='/dashboard' 
              render={() => (!this.props.loginSuccess ? (
              <Redirect to='/login' />) : (
              <Dashboard 
                loginSuccess={this.props.loginSuccess} 
                logOut={this.props.logOut} 
                getUser={this.props.getUser} 
                user={this.props.user} 
                changeAddress={this.props.changeAddress} 
                changePassword={this.props.changePassword}
                getOrders={this.props.getOrders}
                updateUser={this.props.updateUser} 
                orders={this.props.orders}
                getAddress={this.props.getAddress}
                address={this.props.address}
                />))} 
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
                registerSuccess={this.props.registerSuccess}
                isRegistered={this.props.isRegistered}
                />}
              />
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
                orderSuccess={this.props.orderSuccess}
                orderFail={this.props.orderFail}/>} 
              />
            <Route 
              exact path='/checkout-success'
              render={() => (this.props.orderSuccess ? 
              <CheckoutSuccess 
                clearCart={this.props.clearCart} />: <Login />)} 
              />
            <Route 
              exact path='/checkout-fail'
              render={() => <CheckoutFail />} 
            />
            <DetailsRoute 
              productsList={this.props.productsList} 
              getQuantity={this.props.getQuantity}  
              quantity={this.props.quantity} 
              getCart={this.props.getCart} 
              cart={this.props.cart} 
              addItemToCart={this.props.addItemToCart} 
              user={this.props.user} 
              updateCartItem={this.props.updateCartItem} 
              isLoggedIn={this.props.isLoggedIn} 
              addToCartError={this.props.addToCartError}
              error={this.props.error}
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
    category: state.productsReducer.category,
    user: state.userReducer.user,
    cart: state.cartReducer.cart,
    quantity: state.cartReducer.quantity,
    total: state.cartReducer.total,
    orderSuccess: state.orderReducer.orderSuccess,
    orders: state.orderReducer.orders,
    error: state.cartReducer.error,
    address: state.userReducer.address
  };
}

const mapDispatchToProps = (dispatch) => ({

    registerSuccess: (isRegistered) => dispatch(registerSuccess(true)),
    logOut: (isLoggedIn, user) => dispatch(logOut(false, user)),
    loginSuccess: (isLoggedIn) => dispatch(loginSuccess(true)),
    getUser: (user) => dispatch(getUser()),

    updateUser: (user) => dispatch(updateUser(user)),
    changePasword: (password) => dispatch(changePassword(password)),
    getAddress: (address) => dispatch(getAddress(address)),
    changeAddress: (address) => dispatch(updateAddress(address)),

    getProducts: () => dispatch(showProducts()),
    switchCategories: (category) => dispatch(switchCategories(category)),

    getCart: (cart, total) => dispatch(getCart()),
    clearCart: (cart) => dispatch(clearCart()),

    addItemToCart: (cartItem, cart, price) => dispatch(addItemToCart(cartItem, cart, price)),
    updateCartItem: (quantity, price) => dispatch(updateCartItem(quantity, price)),
    deleteCartItem: (cartItem, cart) => dispatch(deleteCartItem(cartItem, cart)),

    getQuantity: (quantity) => dispatch(getQuantity(quantity)),
    addToCartError: (error) => dispatch(addToCartError(error)),

    getOrders: (orders) => dispatch(getOrders(orders)),
    buildOrder: (cart, total, order, date) => dispatch(buildOrder(cart, total, order, date)),
    orderFail: (fail) => dispatch(checkOrderFail(fail)),
    orderSuccess: (success) => dispatch(checkOrderSuccess(success))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);