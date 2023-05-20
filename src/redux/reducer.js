// import the action types from ./ActionType
import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_NUMBER,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./ActionType";

// define an initial state object with default values
const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  number_of_question: 15,
  score: 0,
};

// define a reducer function to handle state changes
const reducer = (state = initialState, action) => {
  // switch on the action type
  switch (action.type) {
    // if the action type is CHANGE_CATEGORY
    case CHANGE_CATEGORY:
      // return a new state object with the updated category value
      return {
        ...state,
        question_category: action.payload,
      };
    // if the action type is CHANGE_DIFFICULTY
    case CHANGE_DIFFICULTY:
      // return a new state object with the updated difficulty value
      return {
        ...state,
        question_difficulty: action.payload,
      };
    // if the action type is CHANGE_TYPE
    case CHANGE_TYPE:
      // return a new state object with the updated type value
      return {
        ...state,
        question_type: action.payload,
      };
    // if the action type is CHANGE_NUMBER
    case CHANGE_NUMBER:
      // return a new state object with the updated number of questions value
      return {
        ...state,
        number_of_question: action.payload,
      };
    // if the action type is CHANGE_SCORE
    case CHANGE_SCORE:
      // return a new state object with the updated score value
      return {
        ...state,
        score: action.payload,
      };
    // if none of the above cases match
    default:
      // return the current state object
      return state;
  }
};

// export the reducer function as default
export default reducer;
