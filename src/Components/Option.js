// import React from "react"
import React from "react";
// import the useState hook from react
import { useState } from "react";
// import the useDispatch hook from react-redux
import { useDispatch } from "react-redux";
// import the action creators from redux/Actions
import {
  handleCategoryChange,
  handleDifficultyChange,
  handleTypeChange,
} from "../redux/Actions";

// define the Option component
const Option = (props) => {
  // destructure the label and Option props
  const { label, Option } = props;

  // use the useDispatch hook to get a reference to the dispatch function
  const dispatch = useDispatch();

  // use the useState hook to create a state variable for the selected item
  const [item, setItem] = useState("");

  // define a function to handle the change event of the select element
  const handleChange = (e) => {
    // update the item state with the selected value
    setItem(e.target.value);
    // switch on the label prop to dispatch the appropriate action
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

  // return the JSX for the Option component
  return (
    <section className=''>
      <form>
        {/* render a label for the select element */}
        <label>{label}</label>
        {/* render a select element with the options passed as props */}
        <select value={item} label={label} onChange={handleChange}>
          {Option.map(({ id, name }) => (
            // render an option element for each option
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </select>
      </form>
    </section>
  );
};

// export the Option component as default
export default Option;
