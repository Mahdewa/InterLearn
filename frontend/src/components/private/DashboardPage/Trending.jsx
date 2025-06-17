import React from "react";
import { useNavigate } from "react-router-dom";

// Sample data to replace backend fetch
const trendingCourses = [
  {
    course_id: 1,
    title: "Data Analysis with Python",
    description: "Learn to analyze with Python: clean analysis and visualize data for results.",
    institution: "Telkom University",
    institution_logo: "/logo-companies/telkomuniv.png",
    image_url: "/courses/trending1.png",
    category: "IT & Software"
  },
  {
    course_id: 2,
    title: "Business Strategy for Startups",
    description: "Business framework tool insights to create a sustainable business strategy.",
    institution: "Gadja Mada University",
    institution_logo: "/logo-companies/ugm.png",
    image_url: "/courses/trending2.png",
    category: "Business"
  },
  {
    course_id: 3,
    title: "Adobe Photoshop Essentials for Beginners",
    description: "Master the basics of Adobe Photoshop for photo editing and digital art creation.",
    institution: "Bina Nusantara University",
    institution_logo: "/logo-companies/binus.png",
    image_url: "/courses/trending3.png",
    category: "Design"
  },
  {
    course_id: 4,
    title: "Adobe Photoshop Essentials for Beginners",
    description: "Master the basics of Adobe Photoshop for photo editing and digital art creation.",
    institution: "Bina Nusantara University",
    institution_logo: "/logo-companies/binus.png",
    image_url: "/courses/trending3.png",
    category: "Design"
  }
];


// Komponen untuk setiap Course Card
const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/dashboard/user/detailcontent", { state: { course } });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer w-[calc(33.33%-1rem)]">
      <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-transparent hover:border-blue-500 hover:shadow-lg transition-all duration-200">
        <div className="w-full overflow-hidden">
          <img
            src={course.image_url || "https://placehold.co/400x200?text=No+Image"}
            alt={course.title}
            className="w-full h-[180px] object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-sm font-semibold text-blue-700">{course.title}</h3>
          <p className="text-xs text-gray-600 mt-1 line-clamp-2">{course.description}</p>
          <p className="text-xs text-gray-500 mt-1">{course.category}</p>
          <div className="flex items-center mt-2">
            <img
              src={course.institution_logo || "https://placehold.co/20x20?text=Logo"}
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

const Trending = () => {
  const [visibleCourses, setVisibleCourses] = React.useState(3);

  const handleViewMore = () => {
    setVisibleCourses((prevVisibleCourses) => prevVisibleCourses + 3);
  };

  return (
    <div className="py-6 px-12">
      <h1 className="text-lg font-bold text-blue-700 mb-6">Trending Now</h1>
      <div className="flex flex-wrap justify-between gap-y-6">
        {trendingCourses.slice(0, visibleCourses).map((course) => (
          <CourseCard key={course.course_id} course={course} />
        ))}
      </div>

      {visibleCourses < trendingCourses.length && (
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


export default Trending;