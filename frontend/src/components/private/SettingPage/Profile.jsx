import { useState } from "react";
import LayoutWithSidebar from "./LayoutWithSidebar";

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    image_url: "",
    date_of_birth: "",
    gender: "",
    phone_number: "",
    city: "",
    education: "",
    company: "",
    role: "",
    bio: "",
    email: "",
    name: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUploadPhoto = (e) => {
    // No backend code: just preview the selected image locally
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, image_url: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsEditing(false);
    // No backend call: just keep the data in state
    alert("Profil berhasil diperbarui! (Demo only, no backend call)");
  };

  return (
    <LayoutWithSidebar>
      <div className="p-4 md:p-6">
        <h2 className="text-blue-600 text-xl font-semibold mb-2 flex items-center">
          <i className="fas fa-user mr-2"></i> Profile
        </h2>
        <p className="text-gray-600 mb-6">
          Make changes to your account here. Click save when you're done.
        </p>

        <div className="flex flex-col md:flex-row items-center mb-6">
          <label htmlFor="upload-photo" className="cursor-pointer">
            <img
              src={profile.image_url || "https://placehold.co/200x200?text=No+Image"}
              alt="Profile"
              className="rounded-full w-24 h-24"
            />
            <input
              id="upload-photo"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleUploadPhoto}
              disabled={!isEditing}
            />
          </label>
          <div className="w-full md:w-auto">
            <div className="flex items-center mb-2">
              <div className="bg-gray-200 rounded-full h-2 w-full md:w-48 mr-2">
                <div
                  className="bg-blue-600 h-2 rounded-full"
                  style={{ width: "80%" }}
                ></div>
              </div>
              <span className="text-gray-600 text-sm">12000/15000</span>
            </div>
            <p className="text-gray-600 text-sm mb-2">
              3000 more exp to reach the next tier.
            </p>
            <p className="text-blue-600 text-sm font-semibold">Rising Star</p>
          </div>
          <button
            className="ml-auto bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            onClick={() => setIsEditing(!isEditing)}
            type="button"
          >
            <i className={`fas fa-${isEditing ? "save" : "pen"} mr-2`}></i>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>

        {/* Profile Form */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Full Name*
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={profile.name}
              onChange={handleInputChange}
              name="name"
              disabled={!isEditing}
              required
            />
          </div>

          {/* Username */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Username*
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={profile.username}
              onChange={handleInputChange}
              name="username"
              disabled={!isEditing}
              required
            />
            <p className="text-gray-500 text-sm mt-1">
              This is your public display name.
            </p>
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
              value={profile.email}
              name="email"
              disabled
            />
            <p className="text-gray-500 text-sm mt-1">
              Your email will be filled automatically according to the email
              account you have registered.
            </p>
          </div>

          {/* Date of Birth & Gender */}
          <div className="flex mb-4">
            {/* Date of Birth */}
            <div className="w-1/2 pr-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Date of Birth*
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="date_of_birth"
                  className="w-full border rounded-lg px-3 py-2"
                  value={profile.date_of_birth}
                  onChange={handleInputChange}
                  disabled={!isEditing}
                />
                <i className="fas fa-calendar-alt absolute right-3 top-3 text-gray-500"></i>
              </div>
            </div>

            {/* Gender */}
            <div className="w-1/2 pl-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Gender*
              </label>
              <div className="flex items-center">
                <label className="mr-4">
                  <input
                    type="radio"
                    name="gender"
                    value="Male"
                    checked={profile.gender === "Male"}
                    onChange={handleInputChange}
                    disabled={!isEditing}
                    className="mr-2"
                  />
                  Male
                </label>
                <label>
                  <input
                    type="radio"
                    name="gender"
                    value="Female"
                    checked={profile.gender === "Female"}
                    onChange={handleInputChange}
                    className="mr-2"
                    disabled={!isEditing}
                  />
                  Female
                </label>
              </div>
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Phone Number*
            </label>
            <div className="flex items-center">
              <span className="bg-gray-200 border rounded-l-lg px-3 py-2">
                +62
              </span>
              <input
                type="text"
                className="w-full border rounded-r-lg px-3 py-2"
                value={profile.phone_number}
                onChange={handleInputChange}
                name="phone_number"
                disabled={!isEditing}
              />
            </div>
            <div className="flex items-center mt-2">
              <input type="checkbox" className="mr-2" disabled={!isEditing} />
              <label className="text-gray-600">
                Allow me to get information through this phone number.
              </label>
            </div>
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              City*
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={profile.city}
              onChange={handleInputChange}
              name="city"
              disabled={!isEditing}
            />
            <p className="text-gray-500 text-sm mt-1">
              Fill in the city where you currently live.
            </p>
          </div>

          {/* Education */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Education*
            </label>
            <select
              className="w-full border rounded-lg px-3 py-2"
              name="education"
              value={profile.education}
              onChange={handleInputChange}
              disabled={!isEditing}
            >
              <option value="">Select your education</option>
              <option value={profile.education}>{profile.education}</option>
            </select>
          </div>

          {/* Company */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Company
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={profile.company}
              onChange={handleInputChange}
              name="company"
              disabled={!isEditing}
            />
            <p className="text-gray-500 text-sm mt-1">
              You can write the name of the company or campus.
            </p>
          </div>

          {/* Role */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Role
            </label>
            <input
              type="text"
              className="w-full border rounded-lg px-3 py-2"
              value={profile.role}
              onChange={handleInputChange}
              name="role"
              disabled={!isEditing}
            />
            <p className="text-gray-500 text-sm mt-1">
              Can be filled with your main role or position.
            </p>
          </div>

          {/* Bio */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Bio
            </label>
            <textarea
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Write a little about yourself..."
              value={profile.bio}
              onChange={handleInputChange}
              name="bio"
              disabled={!isEditing}
            ></textarea>
            <p className="text-gray-500 text-sm mt-1">{profile.bio}</p>
          </div>
          <div className="flex justify-between">
            {/* Left Button */}
            <div>
              {isEditing && (
                <button
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                  type="submit"
                >
                  Save changes
                </button>
              )}
            </div>

            {/* Right Buttons */}
            <div className="flex space-x-4">
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                type="button"
              >
                Delete Account
              </button>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-lg"
                type="button"
              >
                Logout
              </button>
            </div>
          </div>
        </form>
      </div>
    </LayoutWithSidebar>
  );
};

export default Profile;