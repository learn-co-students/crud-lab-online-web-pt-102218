import React, { Component } from 'react';
import ReviewsContainer from '../../containers/ReviewsContainer'
import {connect} from 'react-redux'
class Restaurant extends Component {

  handleOnClick=()=>{
    this.props.removeRestaurant(this.props.restaurant.id)
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div>
        <li>
          {restaurant.text}
          <button onClick={() => this.handleOnClick()}> X </button>
          <ReviewsContainer restaurant={restaurant}/>
        </li>
      </div>
    );
  }
};

//export default connect(null,(dispatch)=>({
//  removeRestaurant:(id)=>dispatch({type:"REMOVE_RESTAURANT",id:id})
//}))(Restaurant);

export default Restaurant
