import { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FadeLoader } from 'react-spinners';

import toast from 'react-hot-toast';
import { customer_login, messageClear } from '../store/reducers/authReducer';

const Login = () => {
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage, userInfo } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation
    const newErrors = {};
    if (!formData.username) {
      newErrors.username = 'Please enter a username';
    }
    if (!formData.email) {
      newErrors.email = 'Please enter an email';
    }
    if (!formData.password) {
      newErrors.password = 'Please enter a password';
    }

    // If there are errors, set the error state and return
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    dispatch(customer_login(formData));

    // If no errors, proceed with form submission
    // Your form submission logic here
  };
  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (userInfo) {
      navigate('/');
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-w-screen min-h-screen bg-[#afe1af] flex justify-center items-center">
      {loader && (
        <div className="w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]">
          <FadeLoader />
        </div>
      )}
      <div className="w-[350px] text-white p-2">
        <div className="bg-[#50c878] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold text-center">
            Welcome to FarmConnect
          </h2>
          <hr className="mb-5" />

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className=" outline-green-400 rounded-md   text-gray-500 px-4 py-2 w-full"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=" outline-green-400 text-gray-500 rounded-md  px-4 py-2 w-full pr-10"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center px-2 text-green-700"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500">{errors.password}</p>
              )}
            </div>

            <div className="flex justify-center gap-2 mb-3">
              <p>Not registered?</p>
              <Link className="text-green-800 font-bold" to={'/register'}>
                Register
              </Link>
            </div>
            <button
              type="submit"
              className="bg-orange-400 w-full hover:shadow-orange-500/50 hover:shadow-md text-white rounded-md px-7 py-2 my-2"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
