
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
 switch(action.type) {
   case 'ADD_RESTAURANT' : 
   const restaurant = { id: cuid(), text: action.text }
   return {...state, restaurants: [...state.restaurants, restaurant] }
  case 'DELETE_RESTAURANT' : 
    const restaurants = state.restaurants.filter(restaurant => restaurant.id !== action.id )
    return {...state, restaurants} 
    case 'ADD_REVIEW' : 
      debugger 
      const review = { id: cuid(), text: action.text}
      return {...state, review}
    default: 
      return state 
 }
}
