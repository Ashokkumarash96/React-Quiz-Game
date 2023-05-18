import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_NUMBER,
  CHANGE_SCORE,
  CHANGE_TYPE,
} from "./ActionType";

const initialState = {
  question_category: "",
  question_difficulty: "",
  question_type: "",
  number_of_question: 15,
  score: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_CATEGORY:
      return {
        ...state,
        question_category: action.payload,
      };
    case CHANGE_DIFFICULTY:
      return {
        ...state,
        question_difficulty: action.payload,
      };
    case CHANGE_TYPE:
      return {
        ...state,
        question_type: action.payload,
      };
    case CHANGE_NUMBER:
      return {
        ...state,
        number_of_question: action.payload,
      };
    case CHANGE_SCORE:
      return {
        ...state,
        score: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
