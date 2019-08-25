import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';

export class Reviews extends Component {
  constructor() {
    super();
    this.filterReviews = this.filterReviews.bind(this)
  }

  filterReviews() {
    let filtered = this.props.allReviews.filter(r => r.restaurantId === this.props.restaurantId)
    return filtered
  }

  render() {
    return (
      <ul>
        {this.filterReviews().map(r => <Review 
                                          key={r.id} 
                                          review={r}
                                          deleteReview={this.props.deleteReview}/>
                                          )}
      </ul>
    );
  }
};

const mapStateToProps = state => {
  return {
    allReviews: state.reviews
  }
}

const mapDispatchToProps = dispatch => {
  return { deleteReview: id => dispatch({ type: "DELETE_REVIEW", id }) }
}

export default connect(mapStateToProps, mapDispatchToProps)( Reviews );