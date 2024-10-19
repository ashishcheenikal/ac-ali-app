import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [baseInfo, setBaseInfo] = useState({
    firstname: '',
    lastname: '',
  });
  const navigate = useNavigate();

  //Handle the Basic information of the user
  const handleBaseInfo = (e) => {
    if (e.target.name === 'firstname') {
      setBaseInfo((pre) => ({
        ...pre,
        firstname: e.target.value,
      }));
    } else {
      {
        setBaseInfo((pre) => ({
          ...pre,
          lastname: e.target.value,
        }));
      }
    }
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log(`👉  file: LandingPage.jsx:46  HandleSubmit  set:`, baseInfo);
    console.log(`👉  file: LandingPage.jsx:30  HandleSubmit  HandleSubmit:`);
    navigate('/question/i');
  };

  return (
    <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-700">
      {/* Login Form Container */}
      <div className="bg-gray-800 bg-opacity-70 p-6 sm:p-10 rounded-lg shadow-lg w-11/12 sm:w-96 max-w-md">
        <div className="text-center mb-6">
          {/* Logo or icon */}
          <div className="bg-gray-600 w-10 h-10 mx-auto rounded-full flex items-center justify-center mb-4">
            <span className="text-white text-xl">+</span>
          </div>
          <h2 className="text-white text-2xl sm:text-3xl font-bold">HP</h2>
        </div>

        {/* Form Fields */}
        <form className="space-y-4" onSubmit={handleLoginSubmit}>
          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-300"
            >
              First Name
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder-"
              type="firstname"
              id="firstname"
              name="firstname"
              placeholder="First Name"
              required
              value={baseInfo.firstname}
              onChange={(e) => handleBaseInfo(e)}
            />
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-300"
            >
              Last Name
            </label>
            <input
              className="mt-1 block w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              type="lastname"
              id="lastname"
              name="lastname"
              placeholder="Last Name"
              required
              value={baseInfo.lastname}
              onChange={(e) => handleBaseInfo(e)}
            />
          </div>

          {/* Sign in button */}
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
        </form>

        {/* Google Sign in */}
        {/* <button className="w-full mt-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 flex items-center justify-center space-x-2">
          <img
            src="https://www.google.com/favicon.ico"
            alt="Google"
            className="w-5 h-5"
          />
          <span>Sign in with Google</span>
        </button> */}
      </div>

      {/* Footer Message */}
      <div className="absolute bottom-6 text-center text-sm text-gray-400">
        Join over <strong className="text-white">2M</strong> global social media
        users.
      </div>
    </div>
  );
};

export default LandingPage;
