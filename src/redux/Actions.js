// import the action types from ./ActionType
import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_NUMBER,
  CHANGE_TYPE,
  CHANGE_SCORE,
} from "./ActionType";

// define an action creator to change the category value in the redux store
export const handleCategoryChange = (payload) => ({
  // return an action object with type and payload
  type: CHANGE_CATEGORY,
  payload,
});

// define an action creator to change the difficulty value in the redux store
export const handleDifficultyChange = (payload) => ({
  // return an action object with type and payload
  type: CHANGE_DIFFICULTY,
  payload,
});

// define an action creator to change the number of questions value in the redux store
export const handleNumberChange = (payload) => ({
  // return an action object with type and payload
  type: CHANGE_NUMBER,
  payload,
});

// define an action creator to change the type value in the redux store
export const handleTypeChange = (payload) => ({
  // return an action object with type and payload
  type: CHANGE_TYPE,
  payload,
});

// define an action creator to change the score value in the redux store
export const handleScoreChange = (payload) => ({
  // return an action object with type and payload
  type: CHANGE_SCORE,
  payload,
});
