import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'

class Restaurant extends Component {

  handleClick = event => {
    event.preventDefault()
    this.props.deleteRestaurant(this.props.restaurant.id)
  }


  render() {
    let restaurant = this.props.restaurant;
    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={this.handleClick}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

export default Restaurant;
