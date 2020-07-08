
import {
  ADD_RESTAURANT,
  DELETE_RESTAURANT,
  ADD_REVIEW,
  DELETE_REVIEW,
} from './types';
import cuid from 'cuid'
export const cuidFn = cuid;

const initialState = {
  restaurants: [],
  reviews: []
}


export default function manageRestaurants(state = initialState, action) {
  switch(action.type) {
    case ADD_RESTAURANT:
      const restaurant = { text: action.text, id: cuidFn()}
      return {
        ...state, restaurants: [...state.restaurants, restaurant]
      }

    case DELETE_RESTAURANT:
      return {
        ...state,
        restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)
      }

    case ADD_REVIEW:
      const review = {
          text: action.review.text,
          restaurantId: action.review.restaurantId,
          id: cuidFn() 
        }     
        
      return {
        ...state,
        reviews: [...state.reviews, review]
      }

    case DELETE_REVIEW:
      const reviews = state.reviews.filter( review => review.id !== action.id)
      return {
        ...state,
        reviews
      }

    default:
      return state;
  }

}
