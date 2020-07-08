import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews.filter(review => review.restaurantId == this.props.restaurant.id )} delete={this.props.delete}  />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: review => dispatch({type: 'ADD_REVIEW', review}),
  delete: id => dispatch({type: 'DELETE_REVIEW', id })
})

const mapStateToProps = state => ({ reviews: state.reviews}) 

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer) 

