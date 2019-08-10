import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(
    {type: "ADD_REVIEW", review: review}),
  deleteReview: id => dispatch(
    {type: "DELETE_REVIEW", id: id})
})

export default connect(null,mapDispatchToProps)(ReviewsContainer)
