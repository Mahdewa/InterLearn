import React from 'react';
import { NavLink } from 'react-router-dom';

const CompletedCourses= () => {
const courses = [
  {
    id: 1,
    image: '/images/react-course.jpg',
    institution: 'Telkom Indonesia',
    title: 'Advance React Development',
    date: 'November 12, 2024',
  },
  {
    id: 2,
    image: '/images/excel-course.jpg',
    institution: 'Bank Rakyat Indonesia Academy',
    title: 'Excel Essentials for Business Analysis',
    date: 'October 12, 2024',
  },
  {
    id: 3,
    image: '/images/python-course.jpg',
    institution: 'Jakarta State University',
    title: 'Introduction to Python Programming',
    date: 'June 18, 2024',
  },
  {
    id: 4,
    image: '/images/data-analytics.jpg',
    institution: 'Padjadjaran University',
    title: 'Data Analytics Basics with Excel',
    date: 'April 15, 2024',
  },
  {
    id: 5,
    image: '/images/html-css.jpg',
    institution: 'Microsoft Indonesia',
    title: 'HTML & CSS for Beginners',
    date: 'February 29, 2024',
  },
  {
    id: 6,
    image: '/images/sql-exploration.jpg',
    institution: 'Shopee Indonesia',
    title: 'SQL for Data Exploration',
    date: 'January 23, 2024',
  },
];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="w-full bg-white ">
        {/* Tabs */}
        <div className="flex space-x-4 mb-6">
          <NavLink
            to="/dashboard/user/mycourses/inprogressnone"
            className="bg-gray-200 text-gray-600 px-4 py-2 rounded"
          >
            In Progress
          </NavLink>
          <NavLink
            to="/dashboard/user/mycourses/inprogressnone"
             className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            Completed
          </NavLink>
          
        </div>

        {/* Course Cards */}
        <div className="bg-white border rounded-lg p-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-gray-50 flex rounded-md overflow-hidden mb-8  shadow-sm"
            >
              <img
                src="/homepage/heroabout.png"
                alt={course.title}
                className="w-1/4 h-60 object-cover mr-10"
              />
              <div className="w-2/3 p-4 my-auto">
                <p className="text-xs text-gray-600 font-medium mb-1">
                  {course.institution}
                </p>
                <h3 className="text-blue-600 font-semibold text-md">
                  {course.title}
                </h3>
                <p className="text-xs text-gray-500 mt-4">
                  Completion Date: {course.date}
                </p>
                <div className="mt-10 flex gap-2">
                  <button className="px-5 py-3 bg-gray-200 text-sm rounded-md text-gray-800 font-medium">
                    View Details
                  </button>
                  <button className="px-5 py-3 bg-blue-600 text-sm rounded-md text-white font-medium">
                    View Certificate
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompletedCourses;
