import { addRecipe, removeFromCalendar } from '../actions'

const initialState = {

}

function calendar (state = initialState, action) {
  const { day, recipe, meal } = action;
  switch (action.type) {
    case ADD_RECIPE:
    return {
      ...state,
      [day]: {
        ...state[day],
        [meal]: recipe.meal
      }
    };

    case REMOVE_FROM_CALENDAR:
      return {
        ...state,
        [day]: {
          ...state[day],
          [meal]: null
        }
      };
    default: return state;
  }
  return state;
}

export default calendar
