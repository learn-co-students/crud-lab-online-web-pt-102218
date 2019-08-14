import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    let allReviews
    if (this.props.reviews) {
      allReviews = this.props.reviews.map((review) => (<Review delete={this.props.delete} review={review} key={review.id}/> ))
    }
    return (
      <ul>
        {allReviews}
      </ul>
    );
  }
};

export default Reviews;