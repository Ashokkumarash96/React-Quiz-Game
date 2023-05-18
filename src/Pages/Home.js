import { useNavigate } from "react-router-dom";
import Option from "../Components/Option";
import useAxios from "../Hooks/useAxios";
import "../App.css";

const Home = () => {
  const { res, err, loading } = useAxios({ url: "/api_category.php" });

  const navigator = useNavigate();

  if (loading) {
    return <div className='custom-loader'></div>;
  }

  if (err) {
    return <h6>Something Wrong!!</h6>;
  }

  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  const typeOptions = [
    { id: "multiple", name: "Multiple Choice (MCQ)" },
    { id: "boolean", name: "True or False" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    navigator("/question");
  };

  return (
    <div className='quizContainer'>
      <div className='center'>
        <h1 className='header'>Quiz game</h1>
        <form className='formOption' onSubmit={handleSubmit}>
          <Option Option={res.trivia_categories} label='Category' />
          <Option Option={difficultyOptions} label='Difficulty Level' />
          <Option Option={typeOptions} label='Type' />
          <div>
            <button className='startGame Button' type='submit'>
              Start Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Home;
