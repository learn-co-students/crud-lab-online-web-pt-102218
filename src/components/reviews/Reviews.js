import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {

  generateReviews() {
    return this.props.reviews.map((review) => <Review review={review} delete={this.props.delete}/> )
  }
  render() {
    return (
      <ul>
        {this.generateReviews()}
      </ul>
    );
  }
};

export default Reviews;