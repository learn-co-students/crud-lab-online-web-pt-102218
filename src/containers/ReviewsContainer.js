import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurantId}/>
        <Reviews restaurantId={this.props.restaurantId} />
      </div>
    )
  }
}

export default ReviewsContainer
