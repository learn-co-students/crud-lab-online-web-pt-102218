
import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {restaurants: [], reviews: []}, action) {
   switch (action.type) {
        case 'ADD_RESTAURANT':
            const restaurant = {
                id: cuid(),
                text: action.text
            }
            return {...state, restaurants: [...state.restaurants, restaurant]}
        case 'DELETE_RESTAURANT':
            console.log('DELETE HIT', state, action)
            return {...state, restaurants: state.restaurants.filter(restaurant => restaurant.id !== action.id)}
        case 'ADD_REVIEW':
            console.log('ADD REVIEW HIT', state, action)
            const review = {
                id: cuid(),
                text: action.review.text,
                restaurantId: action.review.restaurantId
            }
            return {...state, reviews: [...state.reviews, review]}
        case 'DELETE_REVIEW':
            console.log('DELETE REVIEW HIT')
            return {...state, reviews: state.reviews.filter(review => review.id !== action.id)}
        default:
            return state
   }

}
