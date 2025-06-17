import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Img from '../../assets/public/imgregisterpage.svg';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simpan email untuk digunakan di halaman verifikasi
    // localStorage.setItem('verificationEmail', email);

    // Tampilkan popup sukses
    setShowPopup(true);

    // Navigasi ke halaman login setelah 2 detik
    setTimeout(() => {
      setShowPopup(false);
      navigate('/login');
    }, 2000);
  };

  return (
    <div className="bg-white flex items-center justify-center min-h-screen font-poppins relative">
      {/* Popup sukses */}
      {showPopup && (
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white px-8 py-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-green-600 mb-2">Registration Successful!</h2>
            <p className="text-gray-700">Redirecting to login page...</p>
          </div>
        </div>
      )}

      <div className="flex w-full max-w-4xl">
        {/* Left Side */}
        <div className="w-1/2 flex items-center justify-center">
          <img
            alt="Illustration of a person filling out a form"
            className="w-3/4"
            src={Img}
            width="400"
            height="400"
          />
        </div>

        {/* Right Side */}
        <div className="w-1/2 flex flex-col justify-center p-8">
          <Link to="/" className="flex items-center bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300 px-4 py-2 text-[14px] w-20 mb-6">
            <i className="fas fa-arrow-left mr-2"></i>Back
          </Link>

          <h1 className="text-4xl font-bold text-blue-700 mb-2">Register</h1>
          <p className="text-gray-600 mb-6">Fill out the form below to create your account.</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Username*</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-user text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="text-xs text-gray-500">Enter your username</div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email*</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="text-xs text-gray-500">Enter your email</div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password*</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-xs text-gray-500">Enter your password</div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password Confirmation*</label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-gray-400"></i>
                </div>
                <input
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="text-xs text-gray-500">Enter your confirmation password</div>
            </div>

            <div>
              <button
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-8 text-center text-sm text-gray-600">
            Have an Account? <Link className="font-medium text-blue-600 hover:text-blue-500" to="/login">
              Sign in Now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
