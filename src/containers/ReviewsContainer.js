import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'

class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput addReview={this.props.addReview} restaurant={this.props.restaurant}/>
        <Reviews reviews={this.props.reviews} restaurant={this.props.restaurant} deleteReview={this.props.deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { 
    reviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addReview: (text, id) => dispatch({type: 'ADD_REVIEW', review: {text: text, restaurantId: id }}),
    deleteReview: id => dispatch({type: 'DELETE_REVIEW', id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer)
