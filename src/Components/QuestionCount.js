import React from "react";
import { useDispatch } from "react-redux";
import { handleNumberChange } from "../redux/Actions";

const QuestionCount = () => {
  const dispatch = useDispatch;

  const handleChange = (e) => {
    dispatch(handleNumberChange(e.target.value));
  };

  return (
    <div>
      <form>
        <label>Number of Questions</label>
        <textarea onChange={handleChange}></textarea>
      </form>
    </div>
  );
};

export default QuestionCount;
