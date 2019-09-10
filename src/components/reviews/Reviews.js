import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  restaurantReviews() {
    return this.props.reviews.filter(review => this.props.restaurant.id === review.restaurantId)
  }

  genReviews() {
    return this.restaurantReviews().map(review => <li><Review review={review} deleteReview={this.props.deleteReview}/></li>)
  }

  render() {
    return (
      <ul>
        Reviews
        {this.genReviews()}
      </ul>
    );
  }
};

export default Reviews;