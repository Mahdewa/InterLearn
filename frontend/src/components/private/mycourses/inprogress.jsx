import React from "react";
import { NavLink } from "react-router-dom";

const InProgress = () => {
  // Mock data to match the image
  const courses = [
    {
      course_id: 1,
      course_title: "Data Analysis Fundamentals",
      description: "University of Indonesia",
      progress: 0,
      image_url: "/courses/recently1.png",
      logo_url: "/logo-companies/ui.png" // Replace with actual logo path
    },
    {
      course_id: 2,
      course_title: "SQL for Data Science",
      description: "Bina Sarana Informatika University",
      progress: 40,
      image_url: "/courses/personalized1.png",
      logo_url: "/logo-companies/bina.png" // Replace with actual logo path
    },
    {
      course_id: 3,
      course_title: "Introduction to Statistics",
      description: "Bandung Institute of Technology",
      progress: 90,
      image_url: "/courses/statistic.png",
      logo_url: "/logo-companies/itb.png" // Replace with actual logo path
    }
  ];

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        {/* Navigation buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            In Progress
          </button>
          <NavLink
            to="/dashboard/user/mycourses/Completednone"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded"
          >
            Completed
          </NavLink>
        </div>

        {/* Courses List */}
        <div className="space-y-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow rounded-lg p-6 flex items-center"
            >
              {/* Course image */}
              <img
                src={course.image_url || "https://placehold.co/150x100"}
                alt={course.course_title}
                className="h-24 w-32 rounded-lg object-cover"
              />

              {/* Course details */}
              <div className="ml-6 flex-1">
                <div className="text-gray-500 font-semibold flex items-center">
                  <img 
                    src={course.logo_url || "https://placehold.co/20x20"}
                    alt={`${course.description} logo`}
                    className="h-5 w-5 mr-2"
                  />
                  <span>{course.description}</span>
                </div>
                <div className="text-xl font-semibold text-blue-600">
                  {course.course_title}
                </div>
                <div className="mt-2 text-gray-500">Progress</div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <NavLink
                  to="/dashboard/user/mycourses/learningsectionvideo/:course_id"
                  className="bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Dive Back In
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default InProgress;