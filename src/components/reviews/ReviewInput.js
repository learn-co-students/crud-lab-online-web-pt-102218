import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  state={
    text:""
  }

  handleChange=(e)=>{
    
    
    this.setState({text:e.target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault()
    debugger
    this.props.addReview({text:this.state.text,restaurantId:this.props.restaurantId})
  }

  render() {
    
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)} >
        <input type="text" onChange={this.handleChange} />
        <input type="submit" />
      </form>
    );
  }
};

export default ReviewInput;
