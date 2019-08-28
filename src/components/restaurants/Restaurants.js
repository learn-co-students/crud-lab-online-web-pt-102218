import React, { Component } from "react";
import Restaurant from "./Restaurant";
class Restaurants extends Component {
	render() {
		return (
			<ul>
				{this.props.restaurants.map((restaurant, i) => (
					<Restaurant removeRestaurant={this.props.removeRestaurant} key={i} restaurant={restaurant} />
				))}
			</ul>
		);
	}
}

export default Restaurants;
