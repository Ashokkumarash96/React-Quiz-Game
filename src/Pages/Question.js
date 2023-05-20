// import the useDispatch and useSelector hooks from react-redux
import { useDispatch, useSelector } from "react-redux";
// import the useAxios custom hook
import useAxios from "../Hooks/useAxios";
// import the useEffect and useState hooks from react
import { useEffect, useState } from "react";
// import the he library to decode HTML entities
import he from "he";
// import the useNavigate hook from react-router-dom
import { useNavigate } from "react-router-dom";
// import the handleScoreChange action creator from redux/Actions
import { handleScoreChange } from "../redux/Actions";
// import the App.css file for styling
import "../App.css";

// define a function to generate a random number between 0 and max
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

// define the Question component
const Question = () => {
  // use the useSelector hook to get the state values from redux store
  const {
    question_category,
    question_difficulty,
    question_type,
    number_of_question,
    score,
  } = useSelector((state) => state);

  // use the useNavigate hook to navigate to different routes
  const navigator = useNavigate();

  // use the useDispatch hook to get a reference to the dispatch function
  const dispatch = useDispatch();

  // initialize the apiURL with the base URL and number of questions
  let apiURL = `/api.php?amount=${number_of_question}`;

  // append the query parameters based on the selected options
  if (question_category) {
    apiURL = apiURL.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiURL = apiURL.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiURL = apiURL.concat(`&type=${question_type}`);
  }

  // use the useAxios hook to fetch data from the API
  const { res, loading } = useAxios({ url: apiURL });

  // use the useState hook to create a state variable for the question index
  const [questionIndex, setQuestionIndex] = useState(0);

  // use the useState hook to create a state variable for the options array
  const [option, setOption] = useState([]);

  // use the useEffect hook to update the options array when res or questionIndex changes
  useEffect(() => {
    // check if res has results array
    if (res?.results.length) {
      // get the current question object
      const question = res.results[questionIndex];

      // copy the incorrect answers array
      let answers = [...question.incorrect_answers];

      // insert the correct answer at a random position in the answers array
      answers.splice(
        getRandomNumber(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      // update the option state with the answers array
      setOption(answers);
    }
  }, [res, questionIndex]);

  // if loading is true, show a loader
  if (loading) {
    return <div className='custom-loader'></div>;
  }

  // define a function to handle the click event of an answer button
  const handleClickAnswer = (e) => {
    // get the current question object
    const question = res.results[questionIndex];
    // check if the clicked button text matches the correct answer
    if (e.target.textContent === question.correct_answer) {
      // dispatch an action to increment the score by 1
      dispatch(handleScoreChange(score + 1));
    }

    // check if there are more questions left
    if (questionIndex + 1 < res.results.length) {
      // update the question index by 1
      setQuestionIndex(questionIndex + 1);
    } else {
      // navigate to the score route
      navigator("/score");
    }
  };

  // return the JSX for the Question component
  return (
    <div className='questionContainer'>
      <div className='question center'>
        {/* render a subheader for the question number */}
        <h1 className='subHeader'>Question {questionIndex + 1}</h1>
        {/* render a paragraph for the question text */}
        <p className='question'>
          {/* decode any HTML entities in the question text */}
          {he.decode(res.results[questionIndex].question)}
        </p>

        {/* map over the option array and render a button for each option */}
        {option.map((data, id) => (
          <div key={id}>
            <button onClick={handleClickAnswer} className='answerButton'>
              {/* decode any HTML entities in the option text */}
              {he.decode(data)}
            </button>
          </div>
        ))}

        {/* render a div for showing the score */}
        <div className='scoreContainer'>
          Score: {score}/{res.results.length}
        </div>
      </div>
    </div>
  );
};

// export the Question component as default
export default Question;
