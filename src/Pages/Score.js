// import the useDispatch and useSelector hooks from react-redux
import { useDispatch, useSelector } from "react-redux";
// import the useNavigate hook from react-router-dom
import { useNavigate } from "react-router-dom";
// import the handleScoreChange and handleNumberChange action creators from redux/Actions
import { handleScoreChange, handleNumberChange } from "../redux/Actions";

// define the Score component
const Score = () => {
  // use the useDispatch hook to get a reference to the dispatch function
  const dispatch = useDispatch();

  // use the useNavigate hook to navigate to different routes
  const navigator = useNavigate();

  // use the useSelector hook to get the score value from redux store
  const { score } = useSelector((state) => state);

  // define a function to handle the back to game button click
  const handleBack2game = () => {
    // dispatch an action to reset the score to 0
    dispatch(handleScoreChange(0));
    // dispatch an action to reset the number of questions to 15
    dispatch(handleNumberChange(15));
    // navigate to the home route
    navigator("/");
  };
  // return the JSX for the Score component
  return (
    <div className='finalScore'>
      <div className='score center'>
        {/* render a subheader for the score */}
        <h1 className='subHeader'>Your Score</h1>
        {/* render a paragraph for the score value */}
        <p className='points'>{score}</p>
        <div className='btnCont'>
          {/* render a button to go back to game */}
          <button className='b2g Button' onClick={handleBack2game}>
            Back to Game!
          </button>
        </div>
      </div>
    </div>
  );
};

// export the Score component as default
export default Score;
