
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: []}, action) {
 switch(action.type) {
   case 'ADD_RESTAURANT' : 
   const restaurant = { id: cuid(), text: action.text }
   return {...state, restaurants: [...state.restaurants, restaurant] }

    default: 
      return state 
 }
}
