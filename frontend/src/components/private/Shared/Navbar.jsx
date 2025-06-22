import { useEffect, useRef, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '/logo/logo.png';
import axios from 'axios';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notificationRef = useRef(null);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState();
  const [loadingProfile, setLoadingProfile] = useState(true);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        isDropdownOpen
      ) {
        setIsDropdownOpen(false);
      }

      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target) &&
        isNotificationOpen
      ) {
        setIsNotificationOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen, isNotificationOpen]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const fetchProfile = async () => {
      setLoadingProfile(true);
      try {
        const res = await axios.get(`https://be-inter-learn.vercel.app/api/userprofile/public/${userId}`);
        setProfile(res.data.data);
      } catch (error) {
        setProfile(null);
      } finally {
        setLoadingProfile(false);
      }
    };

    if (isAuthenticated) {
      fetchProfile();
    }
  }, [isAuthenticated]);

  const fotoUrl = profile?.image_url
    ? (profile.image_url.startsWith('http') || profile.image_url.startsWith('data:'))
      ? profile.image_url
      : `https://be-inter-learn.vercel.app/${profile.image_url}`
    : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  const handleLogout = () => {
    localStorage.clear();
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
        <div className="flex items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Notifications */}
            <div className="relative" ref={notificationRef}>
              <i
                className="fas fa-bell text-blue-600 cursor-pointer"
                onClick={() => setIsNotificationOpen((prev) => !prev)}
              ></i>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-md border">
                  <div className="px-4 py-2 text-gray-700 font-semibold border-b">
                    Notifications
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-600">📢 You have a new message!</p>
                  </div>
                </div>
              )}
            </div>

            {/* User Dropdown */}
            <div className="relative" ref={dropdownRef}>
              {
                loadingProfile ? (
                  // Bisa pakai spinner atau skeleton loader
                  <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                ) : (
                  <img
                    src={fotoUrl}
                    alt="Foto Profile"
                    className="w-10 h-10 rounded-full cursor-pointer"
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                  />
                  )
              }

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md border">
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Navigation Links (Desktop) */}
        <div className="hidden md:flex items-center space-x-8 p-4 bg-white border-t">
          {['Home', 'My Courses', 'Raport', 'Setting'].map((page) => (
            <NavLink
              key={page}
              to={`/dashboard/user/${page.toLowerCase().replace(' ', '')}`}
              className={({ isActive }) =>
                `cursor-pointer p-2 rounded ${
                  isActive ? 'bg-blue-600 text-white' : 'text-gray-500'
                }`
              }
            >
              {page}
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="block md:hidden p-4 bg-white shadow-md mt-[4rem]">
          <input
            type="text"
            placeholder="Type a command or search..."
            className="w-full mb-4 p-2 rounded-full bg-gray-100 text-gray-500"
          />
          <nav className="space-y-2">
            {['Home', 'My Courses', 'Raport', 'Setting'].map((page) => (
              <NavLink
                key={page}
                to={`/dashboard/user/${page.toLowerCase().replace(' ', '')}`}
                className={({ isActive }) =>
                  `block p-2 rounded ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-500'
                  }`
                }
              >
                {page}
              </NavLink>
            ))}
          </nav>
        </div>
      )}

      {/* Spacer */}
      <div className="pt-[9rem]"></div>
    </>
  );
};

export default Navbar;  
