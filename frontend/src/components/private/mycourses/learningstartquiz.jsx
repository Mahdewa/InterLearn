import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
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

const Learningstartquiz = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // For sidebar: track expanded/collapsed modules (only Module 1 open by default)
  const queryParams = new URLSearchParams(location.search);
  const moduleParam = parseInt(queryParams.get("module") || "1", 10);
  const moduleIdx = Math.max(1, Math.min(moduleParam, sidebarModules.length)) - 1;

  const [openModule, setOpenModule] = useState(moduleIdx);
  const [currentModuleIdx, setCurrentModuleIdx] = useState(moduleIdx);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const moduleParam = parseInt(queryParams.get("module") || "1", 10);
    const idx = Math.max(1, Math.min(moduleParam, sidebarModules.length)) - 1;
    setCurrentModuleIdx(idx);
    setOpenModule(idx);
  }, [location.search]);

  // Quiz states
  const [currentQuestion, setCurrentQuestion] = useState(0); // Question 4 selected by default
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  // Timer states
  const [seconds, setSeconds] = useState(0);
  const [timerActive, setTimerActive] = useState(true);

  // End Quiz Modal state
  const [showEndQuizModal, setShowEndQuizModal] = useState(false);

  // Format time as mm:ss
  const formatTime = (totalSeconds) => {
    const minutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}m:${remainingSeconds.toString().padStart(2, '0')}s`;
  };

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (timerActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerActive]);

  const handleGoBack = (path) => {
    // In a real app, this would navigate to the specified path
    console.log(`Navigating to: ${path}`);
  };

  const handleModuleClick = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
  };

  const handleLessonClick = (lesson, modIdx, lessonIdx) => {
    if (lesson === "Quiz") {
      // Pindah ke quiz modul yang sesuai
      navigate(`/dashboard/workshop/learningquiz?module=${modIdx + 1}`);
    } else {
      navigate(
        `/dashboard/user/mycourses/learningsectionvideo/1?module=${modIdx + 1}&lesson=${lessonIdx + 1}`
      );
    }
  };

  // Quiz questions data
  const quizQuestionsPerModule = [
    // Module 1: Introduction to Data Analysis
    [
      {
        id: 1,
        question: "What is data analysis?",
        options: [
          "The process of collecting data only",
          "The process of interpreting data to find insights",
          "A software program for storing data",
          "A type of database structure"
        ]
      },
      {
        id: 2,
        question: "Which of these is NOT a type of data?",
        options: [
          "Quantitative",
          "Qualitative",
          "Categorical",
          "Supervisory"
        ]
      },
      {
        id: 3,
        question: "What tool is commonly used for data visualization?",
        options: [
          "Microsoft Word",
          "Notepad",
          "Power BI",
          "Calculator"
        ]
      },
      {
        id: 4,
        question: "What is the primary purpose of data analysis?",
        options: [
          "To organize data alphabetically",
          "To make informed decisions based on insights derived from data",
          "To collect as much data as possible",
          "To replace manual processes with automated systems"
        ]
      },
      {
        id: 5,
        question: "What is a key characteristic of good data analysis?",
        options: [
          "Using only one data source",
          "Ignoring outliers",
          "Reproducibility of results",
          "Manual calculations only"
        ]
      }
    ],
    // Module 2: Data Collection and Cleaning
    [
      {
        id: 1,
        question: "Which of the following is an example of primary data?",
        options: [
          "Data from a government report",
          "Data collected from your own survey",
          "Data from a published journal",
          "Data from Wikipedia"
        ]
      },
      {
        id: 2,
        question: "What is the main goal of data cleaning?",
        options: [
          "To make data look pretty",
          "To remove errors and inconsistencies",
          "To increase the amount of data",
          "To change data types"
        ]
      },
      {
        id: 3,
        question: "Which technique is used to handle missing values?",
        options: [
          "Imputation",
          "Duplication",
          "Encryption",
          "Aggregation"
        ]
      },
      {
        id: 4,
        question: "Which of the following is NOT a data source?",
        options: [
          "Internal company database",
          "Social media",
          "Weather forecast",
          "Random guessing"
        ]
      },
      {
        id: 5,
        question: "What is the first step in data cleaning?",
        options: [
          "Data visualization",
          "Identifying and handling missing data",
          "Model training",
          "Reporting"
        ]
      }
    ],
    // Module 3: Data Manipulation with Excel & SQL
    [
      {
        id: 1,
        question: "Which Excel function is used to calculate the average of a range?",
        options: [
          "SUM",
          "AVERAGE",
          "COUNT",
          "MIN"
        ]
      },
      {
        id: 2,
        question: "Which SQL clause is used to filter records?",
        options: [
          "ORDER BY",
          "WHERE",
          "GROUP BY",
          "SELECT"
        ]
      },
      {
        id: 3,
        question: "What does a LEFT JOIN do in SQL?",
        options: [
          "Returns only matching rows from both tables",
          "Returns all rows from the left table and matching rows from the right table",
          "Returns all rows from the right table",
          "Returns only unmatched rows"
        ]
      },
      {
        id: 4,
        question: "Which Excel feature allows you to summarize data interactively?",
        options: [
          "Conditional Formatting",
          "Pivot Table",
          "Data Validation",
          "VLOOKUP"
        ]
      },
      {
        id: 5,
        question: "Which SQL command is used to add new data?",
        options: [
          "INSERT",
          "UPDATE",
          "DELETE",
          "SELECT"
        ]
      }
    ],
    // Module 4: Data Visualization with Power BI
    [
      {
        id: 1,
        question: "Which tool is primarily used for creating dashboards?",
        options: [
          "Power BI",
          "Notepad",
          "Excel Solver",
          "Paint"
        ]
      },
      {
        id: 2,
        question: "Which chart is best for showing trends over time?",
        options: [
          "Pie chart",
          "Line chart",
          "Bar chart",
          "Scatter plot"
        ]
      },
      {
        id: 3,
        question: "What is a slicer in Power BI?",
        options: [
          "A type of chart",
          "A filter for visualizations",
          "A data source",
          "A calculation"
        ]
      },
      {
        id: 4,
        question: "Which file type can be imported into Power BI?",
        options: [
          ".pbix",
          ".exe",
          ".mp3",
          ".jpg"
        ]
      },
      {
        id: 5,
        question: "What is the main benefit of using Power BI?",
        options: [
          "Interactive data visualization",
          "Writing code",
          "Sending emails",
          "Drawing images"
        ]
      }
    ],
    // Module 5: Basic Statistical Analysis
    [
      {
        id: 1,
        question: "What does 'mean' refer to in statistics?",
        options: [
          "The smallest value",
          "The largest value",
          "The average value",
          "The most frequent value"
        ]
      },
      {
        id: 2,
        question: "Which measure describes the spread of data?",
        options: [
          "Median",
          "Mode",
          "Standard deviation",
          "Mean"
        ]
      },
      {
        id: 3,
        question: "What is hypothesis testing used for?",
        options: [
          "To summarize data",
          "To make inferences about a population",
          "To visualize data",
          "To clean data"
        ]
      },
      {
        id: 4,
        question: "Which is NOT a type of inferential statistic?",
        options: [
          "Regression analysis",
          "Hypothesis testing",
          "Descriptive statistics",
          "Confidence intervals"
        ]
      },
      {
        id: 5,
        question: "What is the median?",
        options: [
          "The value that appears most frequently",
          "The middle value when data is ordered",
          "The sum of all values",
          "The difference between max and min"
        ]
      }
    ],
    // Module 6: Real-world Case Studies and Applications
    [
      {
        id: 1,
        question: "Which industry can benefit from data analysis?",
        options: [
          "Healthcare",
          "Retail",
          "Education",
          "All of the above"
        ]
      },
      {
        id: 2,
        question: "What is a common use of data analysis in business?",
        options: [
          "Predicting sales trends",
          "Sending newsletters",
          "Designing logos",
          "Making coffee"
        ]
      },
      {
        id: 3,
        question: "How can data analysis help in healthcare?",
        options: [
          "Improving patient outcomes",
          "Scheduling meetings",
          "Ordering supplies",
          "Painting walls"
        ]
      },
      {
        id: 4,
        question: "What is social media analytics used for?",
        options: [
          "Understanding user behavior",
          "Counting website visitors manually",
          "Printing flyers",
          "Making phone calls"
        ]
      },
      {
        id: 5,
        question: "Which is an example of a real-world data analysis application?",
        options: [
          "Churn prediction",
          "Guessing customer preferences",
          "Ignoring data",
          "Deleting all records"
        ]
      }
    ]
  ];

  // Gunakan quizQuestions sesuai modul yang sedang dibuka
  const quizQuestions = quizQuestionsPerModule[moduleIdx];

  // Navigate to previous or next question
  const goToPrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(null);
    }
  };

  const goToNextQuestion = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    }
  };

  // End Quiz logic
  const handleEndQuiz = () => {
    setShowEndQuizModal(true);
  };

  const handleCancelEndQuiz = () => {
    setShowEndQuizModal(false);
  };

  const handleContinueEndQuiz = () => {
    setShowEndQuizModal(false);
    // Bawa module ke halaman after quiz
    navigate(`/dashboard/mycourses/learningafterquiz?module=${moduleIdx + 1}`);
  };

  const handleAnswerSelect = (index) => {
    setSelectedAnswer(index);
  };

  // Header section, matched with learningquiz
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
                  onClick={() => navigate(`/dashboard/user/mycourses/learningsectionvideo/1?module=1&lesson=1`)}
                  className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                  type="button"
                >
                  Data Analysis Fundamentals
                </button>
              </li>
              <li className="mx-1">&gt;</li>
              <li>
                <button
                  onClick={() => navigate(`/dashboard/user/mycourses/learningsectionvideo/1?module=${currentModuleIdx + 1}&lesson=1`)}
                  className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                  type="button"
                >
                  {sidebarModules[currentModuleIdx].title}
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

        {/* Main Quiz Content - Full width */}
        <section className="flex-1">
          {/* Quiz header section */}
          <div className="border-b border-gray-200 p-6">
            <h2 className="text-base font-medium">
              Questions category: {sidebarModules[currentModuleIdx].subtitle}
            </h2>
            <div className="flex justify-between items-center mt-4">
              {/* Question navigation */}
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => setCurrentQuestion(num - 1)}
                    className={`w-8 h-8 flex items-center justify-center border ${
                      currentQuestion === num - 1 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {num}
                  </button>
                ))}
              </div>
              
              {/* Timer - Now counts up from zero */}
              <div className="text-sm font-medium">
                {formatTime(seconds)}
              </div>
            </div>
          </div>

          {/* Question content */}
          <div className="p-6">
            <h3 className="text-lg font-medium mb-6">
              {quizQuestions[currentQuestion].question}
            </h3>

            <div className="space-y-4">
              {quizQuestions[currentQuestion].options.map((option, index) => (
                <div key={index} className="flex items-start">
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name="quiz-option"
                    className="mt-1 mr-3"
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswerSelect(index)}
                  />
                  <label htmlFor={`option-${index}`} className="text-base">
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Quiz navigation buttons */}
          <div className="flex justify-between p-6">
            <button
              onClick={goToPrevQuestion}
              className="flex items-center text-blue-600 hover:text-blue-800"
              disabled={currentQuestion === 0}
            >
              <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            {currentQuestion < quizQuestions.length - 1 ? (
              <button
                onClick={goToNextQuestion}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                Next
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            ) : (
              <button
                onClick={handleEndQuiz}
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                End Quiz
                <svg className="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
          </div>
        </section>
      </main>

      {/* End Quiz Modal */}
      {showEndQuizModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-30">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md border">
            <div className="flex items-center mb-3">
              <svg className="w-6 h-6 text-blue-700 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"/>
                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 8v4m0 4h.01"/>
              </svg>
              <span className="text-blue-800 font-semibold text-base">
                Are you sure want to end this quiz?
              </span>
            </div>
            <div className="mb-6 text-sm text-blue-900">
              Please double-check your answers before submitting, as you won’t be able to make changes afterward.
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={handleCancelEndQuiz}
                className="border border-blue-700 text-blue-700 px-4 py-2 rounded-md font-medium bg-white hover:bg-blue-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleContinueEndQuiz}
                className="bg-blue-700 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-800 transition"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Learningstartquiz;