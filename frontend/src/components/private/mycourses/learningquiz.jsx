import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Logo from '/logo/logo.png';

// Sidebar data - same structure as learningviewdetail
const sidebarModules = [
  {
    title: "Module 1",
    subtitle: "Introduction to Data Analysis",
    lessons: [
      "Lesson 1.1: What is Data Analysis?",
      "Lesson 1.2: Types of Data",
      "Lesson 1.3: Tools and Technologies",
      "Quiz",
    ],
  },
  {
    title: "Module 2",
    subtitle: "Data Collection and Cleaning",
    lessons: [
      "Lesson 2.1: Data Sources",
      "Lesson 2.2: Data Cleaning Techniques",
      "Lesson 2.3: Handling Missing Values",
      "Quiz",
    ],
  },
  {
    title: "Module 3",
    subtitle: "Data Manipulation with Excel & SQL",
    lessons: [
      "Lesson 3.1: Excel Formulas & Functions",
      "Lesson 3.2: SQL Basics",
      "Lesson 3.3: Data Joins in SQL",
      "Quiz",
    ],
  },
  {
    title: "Module 4",
    subtitle: "Data Visualization with Power BI",
    lessons: [
      "Lesson 4.1: Introduction to Power BI",
      "Lesson 4.2: Creating Visualizations",
      "Lesson 4.3: Dashboard Design",
      "Quiz",
    ],
  },
  {
    title: "Module 5",
    subtitle: "Basic Statistical Analysis",
    lessons: [
      "Lesson 5.1: Descriptive Statistics",
      "Lesson 5.2: Inferential Statistics",
      "Lesson 5.3: Hypothesis Testing",
      "Quiz",
    ],
  },
  {
    title: "Module 6",
    subtitle: "Real-world Case Studies and Applications",
    lessons: [
      "Lesson 6.1: Business Case Study",
      "Lesson 6.2: Healthcare Data Analysis",
      "Lesson 6.3: Social Media Analytics",
      "Quiz",
    ],
  },
];

const quizDataPerModule = [
  {
    title: "Module 1: Introduction to Data Analysis",
    rules: {
      description: "The quiz aims to test your knowledge of the material Introduction to Data Analysis.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  },
  {
    title: "Module 2: Data Collection and Cleaning",
    rules: {
      description: "The quiz aims to test your knowledge of Data Collection and Cleaning.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  },
  {
    title: "Module 3: Data Manipulation with Excel & SQL",
    rules: {
      description: "The quiz aims to test your knowledge of Data Manipulation with Excel & SQL.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  },
  {
    title: "Module 4: Data Visualization with Power BI",
    rules: {
      description: "The quiz aims to test your knowledge of Data Visualization with Power BI.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  },
  {
    title: "Module 5: Basic Statistical Analysis",
    rules: {
      description: "The quiz aims to test your knowledge of Basic Statistical Analysis.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  },
  {
    title: "Module 6: Real-world Case Studies and Applications",
    rules: {
      description: "The quiz aims to test your knowledge of Real-world Case Studies and Applications.",
      questionCount: 5,
      conditions: [
        "Passing score requirement: 80%",
        "Exam duration: 5 minutes"
      ],
      retakeInfo: "If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?"
    },
    result: {
      date: "-",
      percentage: "-",
      status: "Not Yet Handled",
      action: "-"
    }
  },
];

const Learningquiz = () => {
  const navigate = useNavigate();
  const { course_id } = useParams();
  const location = useLocation();
  const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);

  // Ambil module dari query string (?module=2), default ke 1 jika tidak ada
  const queryParams = new URLSearchParams(location.search);
  const moduleParam = parseInt(queryParams.get("module") || "1", 10);
  const moduleIdx = Math.max(1, Math.min(moduleParam, sidebarModules.length)) - 1;

  const [openModule, setOpenModule] = useState(moduleIdx);
  const quizData = quizDataPerModule[moduleIdx];

  const handleStartButtonClick = () => {
    setShowConfirmationDialog(true);
  };

  const handleCancelConfirmation = () => {
    setShowConfirmationDialog(false);
  };

  const handleContinueConfirmation = () => {
    setShowConfirmationDialog(false);
    // Bawa module ke start quiz
    navigate(`/dashboard/workshop/learningstartquiz?module=${moduleIdx + 1}`);
  };

  const handleGoBack = (path) => {
    // In a real app, this would navigate to the specified path
    console.log(`Navigating to: ${path}`);
  };

  const handleModuleClick = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
  };

  const handleLessonClick = (lesson, modIdx, lessonIdx) => {
    if (lesson === "Quiz") {
      // Jika klik quiz di modul lain, pindah ke quiz modul itu
      if (modIdx !== moduleIdx) {
        navigate(`/dashboard/workshop/learningquiz?module=${modIdx + 1}`);
      }
      return;
    }
    // Navigasi ke halaman lesson sesuai module dan lesson
    navigate(
      `/dashboard/user/mycourses/learningsectionvideo/${course_id}?module=${modIdx + 1}&lesson=${lessonIdx + 1}`
    );
  };

  // Header section, matched with learningviewdetail
  const Header = () => (
    <header className="bg-white border-b">
      <div className="w-full pt-2 pb-0 flex flex-col items-center">
        <div className="w-full flex justify-center">
          <div className="max-w-full mx-auto px-4 py-4">
            <div className="text-center flex items-center justify-center">
              <img src={Logo} alt="Pintura" className="w-[125px] h-[25px] object-contain" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-full px-8 pb-2 pt-2" style={{ borderTop: "1px solid #e5e7eb" }}>
          {/* Breadcrumbs */}
          <nav className="text-gray-500 text-sm">
            <ol className="flex space-x-2 items-center">
              <li>
                <button
                  onClick={() => navigate("/dashboard/user/home")}
                  className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                  type="button"
                >
                  Home
                </button>
              </li>
              <li className="mx-1">&gt;</li>
              <li>
                <button
                  onClick={() => navigate("/dashboard/user/mycourses")}
                  className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                  type="button"
                >
                  My Courses
                </button>
              </li>
              <li className="mx-1">&gt;</li>
              <li>
                <button
                  onClick={() => navigate(`/dashboard/user/mycourses/learningsectionvideo/${course_id ?? 1}?module=1&lesson=1`)}
                  className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                  type="button"
                >
                  Data Analysis Fundamentals
                </button>
              </li>
              <li className="mx-1">&gt;</li>
              <li>
                <button
                  onClick={() => navigate(`/dashboard/user/mycourses/learningsectionvideo/${course_id ?? 1}?module=${moduleIdx + 1}&lesson=1`)}
                  className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                  type="button"
                >
                  {sidebarModules[moduleIdx].title}
                </button>
              </li>
              <li className="mx-1">&gt;</li>
              <li>
                <span className="text-blue-700 font-semibold">Quiz</span>
              </li>
            </ol>
          </nav>
          {/* Prev/Next */}
          <div className="flex items-center space-x-1 text-sm">
            <button
              onClick={() => handleGoBack('/previous')}
              className="text-blue-700 hover:underline flex items-center"
            >
              <span className="text-lg mr-1" style={{ lineHeight: 1 }}>&lt;</span>
              Previous
            </button>
            <span className="text-gray-400 mx-2">|</span>
            <button
              onClick={() => handleGoBack('/next')}
              className="text-blue-700 hover:underline flex items-center"
            >
              Next
              <span className="text-lg ml-1" style={{ lineHeight: 1 }}>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      {/* Main Content */}
      <main className="flex flex-1 px-8 py-8 bg-white">
        {/* Sidebar */}
        <aside className="w-80 mr-8">
          <div className="flex flex-col gap-3">
            {/* Introduction */}
            <button className="w-full text-left bg-[#2854C6] text-white rounded-[8px] px-4 py-2 font-semibold focus:outline-none">
              Introduction
            </button>
            {/* Modules */}
            {sidebarModules.map((mod, idx) => (
              <div key={mod.title}>
                <button
                  onClick={() => handleModuleClick(idx)}
                  className={`w-full flex flex-col items-start px-4 py-2 rounded-[8px] border border-[#E0E5F2] transition text-left mb-0 focus:outline-none ${
                    openModule === idx
                      ? "bg-[#2854C6] text-white"
                      : "bg-white text-[#1B2342] hover:bg-[#F3F6FC]"
                  }`}
                >
                  <div className="flex items-center w-full justify-between">
                    <div>
                      <div className="font-semibold">
                        {mod.title}
                      </div>
                      <div className="text-xs text-inherit font-normal">
                        {mod.subtitle}
                      </div>
                    </div>
                    <svg
                      width="20"
                      height="20"
                      fill="none"
                      className={`ml-2 transition-transform ${openModule === idx ? "rotate-180" : ""}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M5 8l5 5 5-5" stroke={openModule === idx ? "#fff" : "#1B2342"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </button>
                {openModule === idx && mod.lessons.length > 0 && (
                  <div className="bg-white border border-[#E0E5F2] rounded-b-[8px] px-0 py-2 mt-[-8px] mb-3">
                    {mod.lessons.map((lesson, i) => (
                      <button
                        key={lesson}
                        className={`flex items-center w-full py-2 pl-6 pr-2 text-left rounded-none border-0 bg-transparent transition group ${
                          lesson === "Quiz"
                            ? "text-[#2854C6] font-semibold"
                            : "text-[#1B2342]"
                        }`}
                        style={{
                          fontWeight: lesson === "Quiz" ? 600 : 400,
                          fontSize: lesson === "Quiz" ? "16px" : "15px"
                        }}
                        onClick={() => handleLessonClick(lesson, idx, i)}
                      >
                        <span className="flex-1 truncate flex items-center gap-2">
                          {/* Logo centang dihilangkan */}
                          {lesson === "Quiz" ? (
                            <span>Quiz</span>
                          ) : (
                            <span>{lesson}</span>
                          )}
                        </span>
                        <span>
                          {lesson !== "Quiz" && (
                            <svg width="16" height="16" fill="none"><path d="M6 4l4 4-4 4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                          )}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full text-left px-4 py-2 text-[#1B2342] font-semibold rounded-[8px] border border-[#E0E5F2] bg-white hover:bg-[#F3F6FC] mt-0">
              Final Exam
            </button>
          </div>
        </aside>

        {/* Main Quiz Content */}
        <section className="flex-1">
          <div className="border rounded-lg px-8 py-8 bg-white">
            <h2 className="text-lg font-medium mb-4">Rules</h2>
            <p className="mb-4">{quizData.rules.description}</p>
            <p className="mb-2">There are {quizData.rules.questionCount} questions that must be completed in this quiz. Some of the conditions are as follows:</p>
            <ul className="list-disc pl-8 mb-4">
              {quizData.rules.conditions.map((condition, index) => (
                <li key={index} className="mb-1">{condition}</li>
              ))}
            </ul>
            <p className="mb-6">{quizData.rules.retakeInfo}</p>
            <p className="mb-8">Good luck with your quiz!</p>

            <h2 className="text-lg font-medium mb-2">Result</h2>
            <div className="overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-gray-100 text-left px-4 py-2">Date</th>
                    <th className="bg-gray-100 text-left px-4 py-2">Percentage</th>
                    <th className="bg-gray-100 text-left px-4 py-2">Status</th>
                    <th className="bg-gray-100 text-left px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border px-4 py-2">{quizData.result.date}</td>
                    <td className="border px-4 py-2">{quizData.result.percentage}</td>
                    <td className="border px-4 py-2">{quizData.result.status}</td>
                    <td className="border px-4 py-2">{quizData.result.action}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={handleStartButtonClick}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded"
              >
                Start
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Confirmation Dialog */}
      {showConfirmationDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4">
            <div className="p-5">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 rounded-full p-2 mr-3">
                  <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-blue-700">Are you sure want to take this quiz?</h3>
              </div>
              <p className="text-blue-700 mb-6 pl-11">
                If you take this quiz, you will only be able to take it again 1 minute after the exam ends.
              </p>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={handleCancelConfirmation}
                  className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  onClick={handleContinueConfirmation}
                  className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learningquiz;