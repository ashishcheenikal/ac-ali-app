import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../public/assets/images/LogoQR.png';

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
    navigate('/question/i');
  };

  return (
    <div className="h-full flex flex-col items-center justify-center ">
      {/* Login Form Container */}
      <div className="bg-white p-4 sm:p-10 rounded-lg shadow-lg w-11/12  max-w-md">
        <div className="text-center mb-6">
          {/* Logo or icon */}
          <div className=" w-15 h-15 mx-auto  flex items-center justify-center mb-4">
            <span className="text-whitetext-xl">
              <img className="rounded-lg" src={Logo} alt="Logo_HP" />
            </span>
          </div>
          <h2 className="text-hp-primary-950 text-2xl sm:text-3xl font-bold">
            HP Treasure Hunt
          </h2>
        </div>

        {/* Form Fields */}
        <form className="" onSubmit={handleLoginSubmit}>
          <div>
            {/* <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-900"
            >
              First Name
            </label> */}
            <input
              className="mt-1 block w-full px-4 py-2 bg-hp-primary-950 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-center"
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
            {/* <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-900"
            >
              Last Name
            </label> */}
            <input
              className="mt-4 block w-full px-4 py-2 bg-hp-primary-950 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 text-center"
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
            className="w-full mt-8 flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-hp-primary-950 bg-hp-primary-50 hover:bg-hp-primary-600 hover:text-hp-primary-50 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 border-hp-primary-900"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default LandingPage;
