// import the useNavigate hook from react-router-dom
import { useNavigate } from "react-router-dom";
// import the Option component
import Option from "../Components/Option";
// import the useAxios custom hook
import useAxios from "../Hooks/useAxios";
// import the App.css file for styling
import "../App.css";

// define the Home component
const Home = () => {
  // use the useAxios hook to fetch data from the API
  const { res, err, loading } = useAxios({ url: "/api_category.php" });

  // use the useNavigate hook to navigate to different routes
  const navigator = useNavigate();

  // if loading is true, show a loader
  if (loading) {
    return <div className='custom-loader'></div>;
  }

  // if err is true, show an error message
  if (err) {
    return <h6>Something Wrong!!</h6>;
  }

  // define an array of difficulty options
  const difficultyOptions = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ];

  // define an array of type options
  const typeOptions = [
    { id: "multiple", name: "Multiple Choice (MCQ)" },
    { id: "boolean", name: "True or False" },
  ];

  // define a function to handle the form submission
  const handleSubmit = (e) => {
    // prevent the default browser behavior
    e.preventDefault();
    // navigate to the question route
    navigator("/question");
  };

  // return the JSX for the Home component
  return (
    <div className='quizContainer'>
      <div className='center'>
        <h1 className='header'>Quiz game</h1>
        <form className='formOption' onSubmit={handleSubmit}>
          {/* render the Option component for each option */}
          <Option Option={res.trivia_categories} label='Category' />
          <Option Option={difficultyOptions} label='Difficulty Level' />
          <Option Option={typeOptions} label='Type' />
          <div>
            {/* render a button to start the game */}
            <button className='startGame Button' type='submit'>
              Start Game
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// export the Home component as default
export default Home;
