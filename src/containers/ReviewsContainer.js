import React, { Component } from 'react'
import ReviewInput from '../components/reviews/ReviewInput'
import Reviews from '../components/reviews/Reviews'
import { connect } from 'react-redux'
class ReviewsContainer extends Component {

  render() {
    return (
      <div>
        <ReviewInput restaurantId={this.props.restaurant.id} addReview={this.props.addReview} />
        <Reviews reviews={this.props.reviews}  />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addReview: text => dispatch({type: 'ADD_REVIEW', text}),
  delete: id => dispatch({type: 'ADD_REVIEW', id })
})

const mapStateToProps = state => ({ reviews: state.reviews}) 

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer) 

