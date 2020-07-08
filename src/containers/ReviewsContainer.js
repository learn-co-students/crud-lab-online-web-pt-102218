import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  sortReviews() {
    return this.props.reviews.filter((review) => review.restaurantId === this.props.restaurant.id)
  } 

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.sortReviews()} delete={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {reviews: state.reviews}
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch(
    {type: "ADD_REVIEW", review: review}),
  deleteReview: id => dispatch(
    {type: "DELETE_REVIEW", id: id})
})

export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)
