import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Sample static course data to match the image
const allCourses = [
  {
    id: 1,
    title: "UI/UX Design Fundamentals",
    description: "Build a strong foundation in UI/UX design and create user-centered products",
    category: "Design",
    image_url: "/categories/uiuxcateg.png",
    institution: "Tokopedia Design Academy",
    institution_logo: "/logo-companies/ui.png"
  },
  {
    id: 2,
    title: "Excel for Business Analysis",
    description: "Enhance your business analysis skills using advanced Excel techniques",
    category: "Office Productivity",
    image_url: "/categories/excelcateg.png",
    institution: "Bank Rakyat Indonesia Academy",
    institution_logo: "/logo-companies/ui.png"
  },
  {
    id: 3,
    title: "Video Editing with Adobe Premiere Pro",
    description: "Learn the essentials of video editing with Adobe Premiere Pro for professional content creation",
    category: "Video",
    image_url: "/categories/editcateg.png",
    institution: "Multimedia Nusantara University",
    institution_logo: "/logo-companies/ui.png"
  },
  {
    id: 4,
    title: "Java Programming for Beginners",
    description: "Start coding with Java by learning basics through the core of this essential language",
    category: "Development",
    image_url: "/categories/javacateg.png",
    institution: "Bandung Institute of Technology",
    institution_logo: "/logo-companies/itb.png"
  },
  {
    id: 5,
    title: "Introduction to Health and Fitness",
    description: "Learn fundamental concepts of fitness training and nutrition for beginners",
    category: "Health",
    image_url: "/categories/runcateg.png",
    institution: "Jakarta State University",
    institution_logo: "/logo-companies/ui.png"
  },
  {
    id: 6,
    title: "Effective Public Speaking",
    description: "Become a confident public speaker with techniques for impact in front of audiences",
    category: "Business",
    image_url: "/categories/pscateg.png",
    institution: "Airlangga University",
    institution_logo: "/logo-companies/ui.png"
  },
  {
    id: 7,
    title: "Data Analysis with Python",
    description: "Get hands-on with Python to clean, analyze, and visualize data for real-world insights",
    category: "IT & Software",
    image_url: "/courses/recently1.png",
    institution: "Telkom University",
    institution_logo: "/logo-companies/telkomuniv.png"
  },
  {
    id: 8,
    title: "Business Strategy for Startups",
    description: "Explore frameworks and models to create a sustainable business strategy for new ventures",
    category: "Business",
    image_url: "/categories/datacateg.png",
    institution: "Gadjah Mada University",
    institution_logo: "/logo-companies/ugm.png"
  },
  {
    id: 9,
    title: "Adobe Photoshop Essentials for Beginners",
    description: "Master the basics of Adobe Photoshop for photo editing and digital art creation",
    category: "Design",
    image_url: "/categories/adobecateg.png",
    institution: "Bina Nusantara University",
    institution_logo: "/logo-companies/binus.png"
  }
];

// Category tabs to match the image
const categoryTabs = [
  "All", 
  "Development", 
  "Business", 
  "Finance", 
  "IT & Software", 
  "Office Productivity"
];

// Komponen untuk setiap Course Card
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/user/detailcontent', { state: { course } });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer w-full">
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Image now takes full width of card and extends slightly down */}
        <img
          src={course.image_url}
          alt={course.title}
          className="w-full h-44 object-cover"
        />
        
        <div className="p-4">
          <h3 className="text-base font-medium text-blue-600 line-clamp-1">{course.title}</h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{course.description}</p>
          <div className="mt-2">
            <span className="text-xs text-gray-500">{course.category}</span>
          </div>
          <div className="flex items-center mt-3 pt-2 border-t border-gray-100">
            <img
              src={course.institution_logo}
              alt={course.institution}
              className="w-5 h-5 rounded-full mr-2"
            />
            <span className="text-xs text-gray-700">{course.institution}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
// Komponen utama Courses
const Courses = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 9;
  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setCurrentPage(1); // Reset to first page when category changes
  };

  // Filter courses based on active category
  const filteredCourses = activeCategory === 'All'
    ? allCourses
    : allCourses.filter(course => course.category === activeCategory);

  // Calculate current page courses
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  
  // Calculate total pages
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  return (
    <div className="py-6 px-12">
      {/* Category Tabs */}
      <div className="mb-6 border-b">
        <div className="flex">
          {categoryTabs.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-4 py-2 mr-2 ${
                activeCategory === category
                  ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8 space-x-1">
        <span className="text-sm text-gray-500 mr-2">Previous</span>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 flex items-center justify-center text-sm rounded ${
              currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
          className="flex items-center justify-center px-3 py-1 ml-1 text-sm text-gray-600 hover:bg-gray-100"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Courses;