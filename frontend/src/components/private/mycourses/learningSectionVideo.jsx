import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from '/logo/logo.png';
import userAvatar from '/avatar/kevin.png';

// Sidebar data (unchanged)
const sidebarModules = [
  {
    title: "Module 1",
    subtitle: "Introduction to Data Analysis",
    lessons: [
      { label: "Lesson 1.1: What is Data Analysis?", active: false },
      { label: "Lesson 1.2: Types of Data", active: true, bold: true, sub: "Structured vs. Unstructured Data", subBold: true },
      { label: "Lesson 1.3: Tools and Technologies", active: false },
      { label: "Quiz", isQuiz: true },
    ],
  },
  { title: "Module 2", subtitle: "Data Collection and Cleaning", lessons: [] },
  { title: "Module 3", subtitle: "Data Manipulation with Excel & SQL", lessons: [] },
  { title: "Module 4", subtitle: "Data Visualization with Power BI", lessons: [] },
  { title: "Module 5", subtitle: "Basic Statistical Analysis", lessons: [] },
  { title: "Module 6", subtitle: "Real-world Case Studies and Applications", lessons: [] },
];

// Comment data with avatar for main user and for comment box
const comments = [
  {
    user: "Shakira",
    meta: 'at 1:02, 2 days ago',
    text: `Hi everyone! I'm having trouble understanding how to clean messy datasets in Excel. Any tips?`,
    likes: 23,
    replies: 2,
    avatar: userAvatar,
    children: [
      {
        user: "Edward",
        meta: "replied",
        text: `Hi Shakira! Sure thing! Use the 'Remove Duplicates' and 'Text to Columns' tools under the Data tab in Excel. These are great for cleaning up messy data!`,
        likes: 18,
      },
      {
        user: "Nabil",
        meta: "replied",
        text: `Also, consider using the 'Find & Replace' feature to standardize formatting quickly. It's a huge time-saver for cleaning up text data!`,
        likes: 10,
      }
    ]
  }
];

const downloadList = [
  {
    name: "Lesson Slides (2.8 MB) PDF",
    url: "#",
  }
];

const LearningSectionVideo = () => {
  const navigate = useNavigate();
  const [openModule, setOpenModule] = useState(0);
  const [commentInput, setCommentInput] = useState("");
  const [tab, setTab] = useState("comment"); // "comment" or "downloads"

  // Breadcrumb navigation links (unchanged)
  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "My Courses", path: "/courses" },
    { name: "Data Analysis Fundamentals", path: "/courses/data-analysis" },
    { name: "Module 1", path: "/courses/data-analysis/module-1" },
    { name: "Lesson 1.2", path: "/courses/data-analysis/module-1/lesson-1-2" }
  ];

  const handleGoBack = (path) => {
    // Unchanged previous/next navigation
    console.log(`Navigating to: ${path}`);
  };

  const handleModuleClick = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
  };

  // Handler for breadcrumbs
  const handleBreadcrumbClick = (name) => {
    if (name === "My Courses") {
      navigate("/dashboard/mycourses");
    }
  };

  // Handler for Quiz click in the sidebar
  const handleLessonClick = (lesson) => {
    if (lesson.isQuiz) {
      navigate('/dashboard/workshop/learningquiz');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white border border-black">
      {/* Header */}
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
                <li>Home</li>
                <li className="mx-1">&gt;</li>
                {/* My Courses clickable */}
                <li>
                  <button
                    onClick={() => handleBreadcrumbClick("My Courses")}
                    className="hover:underline text-inherit"
                    style={{ background: "none", border: "none", padding: 0, margin: 0, cursor: "pointer" }}
                  >
                    My Courses
                  </button>
                </li>
                <li className="mx-1">&gt;</li>
                <li>Data Analysis Fundamentals</li>
                <li className="mx-1">&gt;</li>
                <li>Module 1</li>
                <li className="mx-1">&gt;</li>
                <li>
                  <span className="text-blue-700 font-semibold">Lesson 1.2</span>
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
              <div key={mod.title} className="mb-0">
                <button
                  onClick={() => handleModuleClick(idx)}
                  className={`w-full flex flex-col items-start px-4 py-2 rounded-[8px] border border-[#E0E5F2] transition text-left focus:outline-none ${
                    openModule === idx
                      ? "bg-[#2854C6] text-white"
                      : "bg-white text-[#1B2342] hover:bg-[#F3F6FC]"
                  }`}
                  style={{ marginBottom: 0 }}
                >
                  <div className="flex items-center w-full justify-between">
                    <div>
                      <div className="font-semibold">{mod.title}</div>
                      <div className="text-xs text-inherit font-normal">{mod.subtitle}</div>
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
                {/* Lessons */}
                {openModule === idx && mod.lessons.length > 0 && (
                  <div className="bg-white border border-[#E0E5F2] rounded-b-[8px] px-0 py-2 mt-[-8px] mb-3">
                    {mod.lessons.map((lesson, i) => (
                      <React.Fragment key={lesson.label || lesson}>
                        <button
                          className={`flex items-center w-full py-2 pl-6 pr-2 text-left rounded-none border-0 bg-transparent transition group
                            ${lesson.active ? "bg-[#F3F6FC]" : ""}
                            ${lesson.isQuiz ? "text-[#2854C6] font-semibold" : "text-[#1B2342]"}
                          `}
                          style={{
                            fontWeight: lesson.isQuiz || lesson.bold ? 600 : 400,
                            fontSize: lesson.isQuiz ? "16px" : "15px"
                          }}
                          onClick={() => handleLessonClick(lesson)}
                        >
                          <span className="flex-1 truncate flex items-center gap-2">
                            {/* Checkmarks */}
                            {idx === 0 && (
                              lesson.isQuiz ? (
                                <svg width="20" height="20" fill="none" className="mr-1" viewBox="0 0 20 20">
                                  <circle cx="10" cy="10" r="9" stroke="#2854C6" strokeWidth="1.5" fill="none"/>
                                  <path d="M7.5 10.5l2 2 3-4" stroke="#2854C6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              ) : (
                                <svg width="20" height="20" fill="none" className="mr-1" viewBox="0 0 20 20">
                                  <circle cx="10" cy="10" r="9" stroke="#2FCB65" strokeWidth="1.5" fill="none"/>
                                  <path d="M7.5 10.5l2 2 3-4" stroke="#2FCB65" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )
                            )}
                            <span className={`
                              ${lesson.active ? "text-[#2854C6]" : ""}
                              ${lesson.bold ? "font-semibold" : ""}
                              ${lesson.isQuiz ? "font-semibold" : ""}
                            `}>
                              {lesson.label}
                            </span>
                          </span>
                          <span>
                            {!lesson.isQuiz && (
                              <svg width="16" height="16" fill="none"><path d="M6 4l4 4-4 4" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            )}
                          </span>
                        </button>
                        {/* Render sub-lesson if any */}
                        {lesson.sub && (
                          <div className={`flex items-center w-full py-2 pl-12 pr-2 text-left bg-white`}>
                            <span className={`flex-1 truncate flex items-center gap-2 ${lesson.subBold ? "font-bold text-[#1B2342]" : ""}`}>
                              {lesson.sub}
                            </span>
                          </div>
                        )}
                      </React.Fragment>
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

        {/* MAIN CONTENT - VIDEO, COMMENT SECTION MATCHING IMAGE */}
        <section className="flex-1 flex flex-col min-w-0">
          {/* --- YOUTUBE VIDEO SECTION (Don't remove, as per request) --- */}
          <div className="w-full rounded-lg border border-[#E0E5F2] bg-black h-[250px] flex flex-col justify-center items-center mb-3 relative overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{
                minHeight: 250,
                maxHeight: 250,
                borderRadius: "0.5rem",
              }}
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Module 1 Lesson 1.2 Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* --- END YOUTUBE VIDEO SECTION --- */}

          {/* Tabs: Comment / Downloads */}
          <div className="flex items-center border-b border-gray-200 mb-0">
            <button
              className={`flex-1 flex justify-center items-center px-4 py-2 font-medium ${
                tab === "comment"
                  ? "border-b-2 border-[#2854C6] text-[#2854C6] bg-white rounded-tl-lg"
                  : "text-[#222] bg-[#FAFBFC]"
              }`}
              onClick={() => setTab("comment")}
              style={{ transition: 'all 0.15s' }}
            >
              {/* Comment SVG icon */}
              <svg className="mr-1" height="18" width="18" fill="none" viewBox="0 0 20 20">
                <path d="M10 18c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 2.044 1.04 3.88 2.74 5.167L2 18l3.08-1.317A9.938 9.938 0 0 0 10 18Z" stroke="#2854C6" strokeWidth="1.5" fill="none"/>
              </svg>
              Comment <span className="text-xs ml-1">27</span>
            </button>
            <button
              className={`flex-1 flex justify-center items-center px-4 py-2 font-medium ${
                tab === "downloads"
                  ? "border-b-2 border-[#2854C6] text-[#2854C6] bg-white rounded-tr-lg"
                  : "text-[#222] bg-[#FAFBFC]"
              }`}
              onClick={() => setTab("downloads")}
              style={{ transition: 'all 0.15s' }}
            >
              {/* Download SVG icon */}
              <svg className="mr-1" height="18" width="18" fill="none" viewBox="0 0 20 20">
                <path d="M10 14V4M10 14l3-3M10 14l-3-3M17 16H3" stroke="#A3A3A3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Downloads <span className="text-xs ml-1">7</span>
            </button>
          </div>

          {/* Download tab content */}
          {tab === "downloads" && (
            <div className="pt-4 pl-2">
              <a
                href={downloadList[0].url}
                className="flex items-center text-[#2854C6] hover:underline text-sm"
                style={{ fontWeight: 500 }}
                download
              >
                <svg
                  className="mr-1"
                  width="20"
                  height="20"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M10 3v10m0 0l-3-3m3 3l3-3M4 17h12"
                    stroke="#2854C6"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Lesson Slides (2.8 MB) PDF
              </a>
            </div>
          )}

          {/* Comment List with Avatar (matches Image 3) */}
          {tab === "comment" && (
            <>
              <div className="flex-1 mb-2 max-h-[340px] min-h-[180px] bg-white px-0 pt-2">
                {comments.map((c, idx) => (
                  <div key={idx} className="mb-0">
                    <div className="flex items-start mb-2">
                      {/* Avatar for main comment */}
                      <img
                        src={userAvatar}
                        alt={c.user}
                        className="w-8 h-8 rounded-full object-cover mr-2"
                        style={{ marginTop: 2 }}
                      />
                      <div className="flex-1">
                        <div className="flex items-center mb-0.5">
                          <span className="font-semibold mr-1">{c.user},</span>
                          <span className="text-xs text-gray-400">{c.meta}</span>
                        </div>
                        <div className="mb-1 mt-0.5">{`"${c.text}"`}</div>
                        <div className="flex items-center gap-5 text-xs text-gray-500 mb-2">
                          <span className="flex items-center">
                            {/* Thumbs up SVG */}
                            <svg width="16" height="16" fill="none" className="mr-1" viewBox="0 0 20 20">
                              <path d="M2.5 11.5V18h3v-6.5h-3ZM6.5 18h6.25a2 2 0 0 0 1.87-2.67l-1.55-4.33A2 2 0 0 0 11.2 9h-1.7l.69-3.45A1.5 1.5 0 0 0 8.75 4a.75.75 0 0 0-.75.75V8.5" stroke="#2FCB65" strokeWidth="1.5" fill="none"/>
                            </svg>
                            {c.likes}
                          </span>
                          <span className="flex items-center">
                            {/* Comment bubble SVG */}
                            <svg width="16" height="16" fill="none" className="mr-1" viewBox="0 0 20 20">
                              <path d="M10 18c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 2.044 1.04 3.88 2.74 5.167L2 18l3.08-1.317A9.938 9.938 0 0 0 10 18Z" stroke="#2854C6" strokeWidth="1.5" fill="none"/>
                            </svg>
                            {c.replies}
                          </span>
                        </div>
                        {/* Replies */}
                        {c.children && c.children.map((r, i) => (
                          <div key={i} className="ml-7 pl-2 border-l border-[#E0E5F2] pb-1 mb-1">
                            <div className="flex items-center mb-0.5 mt-1">
                              <span className="font-semibold mr-1">{r.user},</span>
                              <span className="text-xs text-gray-400">{r.meta}</span>
                            </div>
                            <div className="mb-1 mt-0.5">{`'${r.text}'`}</div>
                            <div className="flex items-center gap-5 text-xs text-gray-500 mb-2">
                              <span className="flex items-center">
                                {/* Thumbs up SVG */}
                                <svg width="16" height="16" fill="none" className="mr-1" viewBox="0 0 20 20">
                                  <path d="M2.5 11.5V18h3v-6.5h-3ZM6.5 18h6.25a2 2 0 0 0 1.87-2.67l-1.55-4.33A2 2 0 0 0 11.2 9h-1.7l.69-3.45A1.5 1.5 0 0 0 8.75 4a.75.75 0 0 0-.75.75V8.5" stroke="#2FCB65" strokeWidth="1.5" fill="none"/>
                                </svg>
                                {r.likes}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Add Comment section as in Image 4 */}
              <div className="flex flex-col gap-2 mt-2">
                <div className="flex items-start">
                  <img
                    src={userAvatar}
                    alt="User"
                    className="w-8 h-8 rounded-full object-cover mr-2 mt-0.5"
                  />
                  <input
                    type="text"
                    placeholder="Join the discussion and share your thoughts or experiences!"
                    className="flex-1 border border-[#BDBDBD] rounded-lg py-2 px-4 focus:outline-none"
                    style={{ fontSize: "15px" }}
                    value={commentInput}
                    onChange={e => setCommentInput(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-[#2854C6] hover:bg-[#1B2342] text-white rounded-md px-5 py-2 font-medium text-sm"
                    style={{ minWidth: "120px" }}
                  >
                    Add Comment
                  </button>
                </div>
              </div>
            </>
          )}
        </section>
        {/* ...right sidebar unchanged... */}
        <aside className="w-[340px] ml-8 flex flex-col gap-3">
          {/* Lesson Info */}
          <div className="bg-white border border-[#E0E5F2] rounded-[8px] px-5 py-4 mb-2">
            <div className="mb-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Lesson Type</span>
                <span className="text-xs text-[#1B2342] font-medium">Pre-recorded</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Skill Level</span>
                <span className="text-xs text-[#1B2342]">Beginner</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500">Duration</span>
                <span className="text-xs text-[#1B2342]">6 Modules, 20 Hours</span>
              </div>
            </div>
          </div>
          {/* Overview */}
          <div className="bg-white border border-[#E0E5F2] rounded-[8px] px-5 py-4">
            <div className="mb-3 text-xs text-gray-500">Overview</div>
            <div className="mb-2 text-xs text-[#1B2342]">
              Course by <span className="text-[#2854C6] font-semibold underline cursor-pointer">Dr. Andi Prasetyo, Ph.D.</span> in collaboration with Universitas Indonesia
            </div>
            <div className="mb-2">
              <span className="font-bold text-[#1B2342]">Data Analysis Fundamentals</span>
              <div className="flex flex-wrap gap-1 mt-2">
                <span className="px-2 py-1 bg-[#F3F6FC] text-[#2854C6] text-xs rounded">Data Analysis</span>
                <span className="px-2 py-1 bg-[#F3F6FC] text-[#2854C6] text-xs rounded">Statistics</span>
                <span className="px-2 py-1 bg-[#F3F6FC] text-[#2854C6] text-xs rounded">Excel</span>
                <span className="px-2 py-1 bg-[#F3F6FC] text-[#2854C6] text-xs rounded">SQL</span>
                <span className="px-2 py-1 bg-[#F3F6FC] text-[#2854C6] text-xs rounded">Power BI</span>
              </div>
            </div>
            <div className="text-xs text-[#1B2342] mb-2">
              In this course, you will master the foundational skills of data analysis with practical applications in real-world scenarios. Learn how to collect, clean, and manipulate data effectively, create compelling data visualizations, and apply basic statistical techniques to drive data-driven decision-making. This course is suitable for beginners and those looking to strengthen their analytical skills.
            </div>
            <div className="text-xs text-[#1B2342]">
              <div className="font-semibold mb-1">What You'll Learn:</div>
              <ul className="ml-4 list-disc">
                <li>Principles of data collection and cleaning</li>
                <li>Hands-on experience with Excel and SQL for data manipulation</li>
                <li>Visualizing data with Power BI for impactful storytelling</li>
                <li>Basic statistical analysis for interpreting data patterns</li>
                <li>Real-world case studies to build practical expertise</li>
              </ul>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
};

export default LearningSectionVideo;