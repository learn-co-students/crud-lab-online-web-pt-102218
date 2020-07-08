import React, { Component } from "react";
import ReviewInput from "../components/reviews/ReviewInput";
import Reviews from "../components/reviews/Reviews";
import { connect } from "react-redux";
class ReviewsContainer extends Component {
	render() {
    let reviews = this.props.reviews.filter(review=>this.props.restaurant.id===review.restaurantId)
		return (
			<div>
				<ReviewInput
					restaurantId={this.props.restaurant.id}
					addReview={this.props.addReview}
				/>
				<Reviews removeReview={this.props.removeReview} reviews={reviews} />
			</div>
		);
	}
}

export default connect(
	({ reviews }) => ({ reviews }),
	dispatch => ({
    addReview: review => dispatch({ type: "ADD_REVIEW", review: review }),
    removeReview:id=>dispatch({type:"REMOVE_REVIEW",id:id})
	})
)(ReviewsContainer);
