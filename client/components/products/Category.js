import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);

    this.switch = this.switch.bind(this);
  }

  switch() {
    this.props.switchCategories(this.props.product._id)
  }

  render() {
    return(
      <li onClick={this.switch} >
        {this.props.product.categoryName}
      </li>
    )
  }
}

export default Category;