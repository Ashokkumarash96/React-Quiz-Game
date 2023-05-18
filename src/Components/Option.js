import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/Actions";

const Option = (props) => {
  const { label, Option } = props;

  const dispatch = useDispatch();

  const [item, setItem] = useState("");

  const handleChange = (e) => {
    setItem(e.target.value);
    switch (label) {
      case "Category":
        dispatch(handleCategoryChange(e.target.value));
        break;
      case "Difficulty":
        dispatch(handleDifficultyChange(e.target.value));
        break;
      case "Type":
        dispatch(handleTypeChange(e.target.value));
        break;
      default:
        return;
    }
  };

  return (
    <section className=''>
      <form>
        <label>{label}</label>
        <select value={item} label={label} onChange={handleChange}>
          {Option.map(({ id, name }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};

export default Option;
