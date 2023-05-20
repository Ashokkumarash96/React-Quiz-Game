import React from "react";
import { useDispatch } from "react-redux";
import { handleNumberChange } from "../redux/Actions";

const QuestionCount = () => {
  const dispatch = useDispatch; // Access the dispatch function from the Redux store

  const handleChange = (e) => {
    dispatch(handleNumberChange(e.target.value)); // Access the dispatch function from the Redux store
  };

  return (
    <div>
      <form>
        <label>Number of Questions</label>
        <textarea onChange={handleChange}></textarea>
        {/* Textarea to input the number of questions */}
      </form>
    </div>
  );
};

export default QuestionCount;
