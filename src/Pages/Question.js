import { useDispatch, useSelector } from "react-redux";
import useAxios from "../Hooks/useAxios";
import { useEffect, useState } from "react";
import he from "he";
import { useNavigate } from "react-router-dom";
import { handleScoreChange } from "../redux/Actions";
import "../App.css";

const getRandomNumber = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

const Question = () => {
  const {
    question_category,
    question_difficulty,
    question_type,
    number_of_question,
    score,
  } = useSelector((state) => state);

  const navigator = useNavigate();

  const dispatch = useDispatch();

  let apiURL = `/api.php?amount=${number_of_question}`;

  if (question_category) {
    apiURL = apiURL.concat(`&category=${question_category}`);
  }

  if (question_difficulty) {
    apiURL = apiURL.concat(`&difficulty=${question_difficulty}`);
  }

  if (question_type) {
    apiURL = apiURL.concat(`&type=${question_type}`);
  }

  const { res, loading } = useAxios({ url: apiURL });

  const [questionIndex, setQuestionIndex] = useState(0);

  const [option, setOption] = useState([]);

  useEffect(() => {
    if (res?.results.length) {
      const question = res.results[questionIndex];

      let answers = [...question.incorrect_answers];

      answers.splice(
        getRandomNumber(question.incorrect_answers.length),
        0,
        question.correct_answer
      );
      setOption(answers);
    }
  }, [res, questionIndex]);

  if (loading) {
    return <div className='custom-loader'></div>;
  }

  const handleClickAnswer = (e) => {
    const question = res.results[questionIndex];
    if (e.target.textContent === question.correct_answer) {
      dispatch(handleScoreChange(score + 1));
    }

    if (questionIndex + 1 < res.results.length) {
      setQuestionIndex(questionIndex + 1);
    } else {
      navigator("/score");
    }
  };

  return (
    <div className='questionContainer'>
      <div className='question center'>
        <h1 className='subHeader'>Question {questionIndex + 1}</h1>
        <p className='question'>
          {he.decode(res.results[questionIndex].question)}
        </p>

        {option.map((data, id) => (
          <div key={id}>
            <button onClick={handleClickAnswer} className='answerButton'>
              {he.decode(data)}
            </button>
          </div>
        ))}

        <div className='scoreContainer'>
          Score: {score}/{res.results.length}
        </div>
      </div>
    </div>
  );
};

export default Question;
