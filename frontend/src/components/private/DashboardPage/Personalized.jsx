import React from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    image: "/courses/personalized1.png",
    title: "SQL for Data Science",
    description: "Learn SQL fundamentals to query, analyze, and process data efficiently.",
    category: "IT & Software",
    university: "Bina Sarana Informatika University",
    universityLogo: "/logo-companies/bina.png",
  },
  {
    image: "/courses/personalized2.png",
    title: "Branding Essentials for Modern Business",
    description: "Discover essential branding techniques to elevate your business's identity.",
    category: "Marketing",
    university: "Shopee Indonesia",
    universityLogo: "/logo-companies/shopee.png",
  },
  {
    image: "/courses/personalized3.png",
    title: "Basic Photography Skills",
    description: "Understand core photography concepts to capture stunning visuals with any camera.",
    category: "Photography",
    university: "Padjadjaran University",
    universityLogo: "/logo-companies/pu.png",
  },
  {
    image: "/courses/personalized2.png",
    title: "Branding Essentials for Modern Business",
    description: "Discover essential branding techniques to elevate your business's identity.",
    category: "Marketing",
    university: "Shopee Indonesia",
    universityLogo: "/logo-companies/shopee.png",
  },
];

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/user/detailcontent", { state: { course } });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer w-[calc(33.33%-1rem)]">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="w-full overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-blue-700">{course.title}</h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{course.description}</p>
          <p className="text-xs text-gray-500 mt-1">{course.category}</p>
          <div className="flex items-center mt-2">
            <img
              src={course.universityLogo}
              alt={course.university}
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className="text-xs text-gray-700">{course.university}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Personalized = () => {
  const [visibleCourses, setVisibleCourses] = React.useState(3);

  const handleViewMore = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3);
  };

  return (
    <div className="py-6 px-12">
      <h1 className="text-lg font-bold text-blue-700 mb-6">Kursus yang dirancang khusus untuk Anda</h1>
      <div className="flex flex-wrap justify-between gap-y-6">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>

      {visibleCourses < courses.length && (
        <div className="mt-4">
          <button
            onClick={handleViewMore}
            className="text-blue-600 text-sm border border-blue-600 py-1 px-3 rounded-md flex items-center"
          >
            View 3 More <span className="ml-1">↓</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Personalized;