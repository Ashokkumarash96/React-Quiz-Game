import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleScoreChange, handleNumberChange } from "../redux/Actions";

const Score = () => {
  const dispatch = useDispatch();

  const navigator = useNavigate();

  const { score } = useSelector((state) => state);

  const handleBack2game = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleNumberChange(15));
    navigator("/");
  };
  return (
    <div className='finalScore'>
      <div className='score center'>
        <h1 className='subHeader'>Your Score</h1>
        <p className='points'>{score}</p>
        <div className='btnCont'>
          <button className='b2g Button' onClick={handleBack2game}>
            Back to Game!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Score;
