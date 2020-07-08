import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    
    return (
      <ul>
        {this.props.reviews.map((review,i)=> <Review key={i} removeReview={this.props.removeReview} review={review} />)}
      </ul>
    );
  }
};

export default Reviews;