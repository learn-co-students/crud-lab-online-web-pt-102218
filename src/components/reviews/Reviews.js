import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {


  render() {
    const restaurantReview = this.props.reviews.filter(review => review.restaurantId === this.props.restaurantId)
    const renderReview = restaurantReview.map(review => {
      return <Review review={review} key={review.id} deleteReview={this.props.deleteReview}/>
    })
    return (
      <ul>
        {renderReview}
      </ul>
    );
  }
};

export default Reviews;