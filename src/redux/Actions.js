import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_NUMBER,
  CHANGE_TYPE,
  CHANGE_SCORE,
} from "./ActionType";

export const handleCategoryChange = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
});

export const handleDifficultyChange = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
});

export const handleNumberChange = (payload) => ({
  type: CHANGE_NUMBER,
  payload,
});

export const handleTypeChange = (payload) => ({
  type: CHANGE_TYPE,
  payload,
});

export const handleScoreChange = (payload) => ({
  type: CHANGE_SCORE,
  payload,
});
