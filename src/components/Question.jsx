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
      <div className="bg-white p-6 rounded-xl shadow-md w-full sm:w-4/5 md:w-3/5 lg:w-2/5">
        <div className="flex justify-center items-center mb-4">
          <h2 className="text-2xl sm:text-3xl font-semibold">Quiz Question</h2>
        </div>
        <div className="flex justify-between items-center mx-2 my-2">
          {/* Timer */}
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white text-lg">
            {timeLeft} seconds left
          </div>
          <div className="bg-gray-700 px-4 py-2 rounded-lg text-white text-lg">
            {points} points
          </div>
        </div>

        <p className="mb-6 text-lg text-gray-300 text-center">
          What is the capital of France?
        </p>

        <form className="space-y-4" onSubmit={handleAnswerSubmit}>
          {/* Answer 1 */}
          <label
            className={`block p-3 rounded-lg transition-colors cursor-pointer ${
              selectedAnswer === 'Berlin'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
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
            className={`block p-3 rounded-lg transition-colors cursor-pointer ${
              selectedAnswer === 'Madrid'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
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
            className={`block p-3 rounded-lg transition-colors cursor-pointer ${
              selectedAnswer === 'Paris'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
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
            className={`block p-3 rounded-lg transition-colors cursor-pointer ${
              selectedAnswer === 'Rome'
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-800 hover:bg-gray-700'
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
            className="w-full bg-gradient-to-r from-hp_bg to-blue-400 hover:from-bg-hp_bg via hover:to-blue-500 py-2 rounded-lg text-white font-semibold hover:bg-indigo-700 transition-colors"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
};

export default Question;
