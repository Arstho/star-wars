import { ADD_PERSON_TO_FAVORITE, REMOVE_PERSON_FROM_FAVORITE } from "../constants/actionTypes"

const initialState = {
   films: [],
   status: "",
   error: null,
 };

const favoriteReduser = (state = initialState, action) => {
   switch (action.type) {
      case ADD_PERSON_TO_FAVORITE:
         return {
            ...state,
            ...action.payload
         }
      case REMOVE_PERSON_FROM_FAVORITE:
         return {
            ...state,
            ...action.payload
         }
      default:
         return state
   }
}

export default favoriteReduser