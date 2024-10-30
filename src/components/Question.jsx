import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const [timeLeft, setTimeLeft] = useState(15); // Initial timer set to 60 seconds
  const [points, setPoints] = useState(100); // Initial points
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (timeLeft > 0) {
      const intervalId = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
        setPoints((prev) => (prev > 0 && prev - 7 >= 0 ? prev - 7 : 0)); // Decrease points over time
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [timeLeft]);

  // Handle answer selection
  const handleAnswerChange = (e) => {
    setSelectedAnswer(e.target.value);
  };
  const handleAnswerSubmit = (e) => {
    e.preventDefault();
    console.log(
      `👉  file: Question.jsx:28  handleAnswerSubmit  selectedAnswer:`,
      selectedAnswer
    );
    console.log(
      `👉  file: Question.jsx:34  handleAnswerSubmit  points:`,
      points
    );
    console.log(
      `👉  file: Question.jsx:23  handleAnswerSubmit  handleAnswerSubmit:`
    );
    navigate('/leader-board');
  };

  return (
    <div className="h-full flex flex-col justify-center items-center p-4 text-white">
      <div className="bg-white h-[80%] sm:h-[90%] overflow-y-auto  p-2 sm:p-4 md:p-6 rounded-lg shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <div className="h-1/3  flex justify-center items-center mb-4 bg-hp-primary-100 overflow-y-auto">
          <p className="text-lg text-hp-primary-950 text-center ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            fuga nulla, magnam hic dolorem quisquam corrupti eius, mollitia
            perspiciatis, dolor
          </p>
        </div>

        <div className="flex items-center space-x-4 my-8">
          <span className="text-orange-600 font-semibold">
            <span className="text-black font-semibold">Time</span> : {timeLeft}
          </span>

          <div className="relative flex-grow h-4 bg-orange-100 rounded-full overflow-hidden shadow-inner">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"
              style={{ width: `${points}%` }}
            ></div>
          </div>
          <span className="text-orange-600 font-semibold">
            <span className="text-black font-semibold">Points</span> : {points}
          </span>
        </div>

        {/* <div className="flex flex-col justify-between items-center mx-2 my-2">
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white text-lg">
            {timeLeft} seconds left
          </div>
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white text-lg">
            {points} points
          </div>
        </div> */}

        <form className="" onSubmit={handleAnswerSubmit}>
          {/* Answer 1 */}
          <label
            className={`block p-3 rounded-lg transition-colors cursor-pointer border border-hp-primary-950 mb-3  ${
              selectedAnswer === 'Berlin'
                ? 'bg-hp-primary-600 text-hp-primary-950'
                : 'bg-white text-hp-primary-950 hover:bg-hp-primary-950 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="answer"
              value="Berlin"
              checked={selectedAnswer === 'Berlin'}
              onChange={handleAnswerChange}
              className="hidden" // Hides the default radio appearance
            />
            Berlin
          </label>

          {/* Answer 2 */}
          <label
            className={`block p-3 rounded-lg transition-colors border border-hp-primary-950 cursor-pointer mb-3 ${
              selectedAnswer === 'Madrid'
                ? 'bg-hp-primary-600 text-hp-primary-950'
                : 'bg-white text-hp-primary-950 hover:bg-hp-primary-950 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="answer"
              value="Madrid"
              checked={selectedAnswer === 'Madrid'}
              onChange={handleAnswerChange}
              className="hidden"
            />
            Madrid
          </label>

          {/* Answer 3 */}
          <label
            className={`block p-3 rounded-lg transition-colors cursor-pointer border border-hp-primary-950 mb-3 ${
              selectedAnswer === 'Paris'
                ? 'bg-hp-primary-600 text-hp-primary-950'
                : 'bg-white text-hp-primary-950 hover:bg-hp-primary-950 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="answer"
              value="Paris"
              checked={selectedAnswer === 'Paris'}
              onChange={handleAnswerChange}
              className="hidden"
            />
            Paris
          </label>

          {/* Answer 4 */}
          <label
            className={`block p-3 rounded-lg transition-colors cursor-pointer border border-hp-primary-950 mb-3 ${
              selectedAnswer === 'Rome'
                ? 'bg-hp-primary-600 text-hp-primary-950'
                : 'bg-white text-hp-primary-950 hover:bg-hp-primary-950 hover:text-white'
            }`}
          >
            <input
              type="radio"
              name="answer"
              value="Rome"
              checked={selectedAnswer === 'Rome'}
              onChange={handleAnswerChange}
              className="hidden"
            />
            Rome
          </label>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-hp_bg to-blue-400 hover:from-bg-hp_bg via hover:to-blue-500 py-2 rounded-lg text-white font-semibold hover:bg-indigo-700 transition-colors mt-5"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
