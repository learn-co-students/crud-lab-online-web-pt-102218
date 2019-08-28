import cuid from "cuid";
export const cuidFn = cuid;

export default function manageRestaurants(state = { restaurants: [], reviews: [] }, action) {
    
    let restaurant
    let review
    switch (action.type) {
		case "ADD_RESTAURANT":
            restaurant = {id:cuidFn(),text:action.name}
			return {
				...state,
				restaurants: [...state.restaurants, restaurant]
            };
        case "REMOVE_RESTAURANT":
            return {
                ...state,
                restaurants:state.restaurants.filter((restaurant)=>restaurant.id!==action.id)
            }
        case "ADD_REVIEW":
            review = {id:cuidFn(),restaurantId:action.review.restaurantId,text:action.review.text}
            
            return {
                ...state,
                reviews:[...state.reviews,review]
            }
        case "REMOVE_REVIEW":
            return {
                ...state,
                reviews:state.reviews.filter(review=>review.id!==action.id)
            }
        default:
            return state
            
	}
}
