import { SHOW_PRODUCTS, SWITCH_CATEGORIES } from './constants';
import axios from 'axios';

export const showProducts = () => dispatch =>  {
  axios.get('http://localhost:5000/products/list')
    .then(res =>   
      dispatch({
        type: SHOW_PRODUCTS,
        products: res.data
      }) 
    )
    .catch(err => console.log(err))
}

export const switchCategories = (category) => dispatch => {
  axios.get(`http://localhost:5000/categories/${category}`)
    .then(res => {
      dispatch({
        type: SWITCH_CATEGORIES,
        category
      })
    })
    .catch(err => console.log(err)) 
}