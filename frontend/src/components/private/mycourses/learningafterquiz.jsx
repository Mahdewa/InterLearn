import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Logo from "/logo/logo.png";

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

const Learningafterquiz = () => {
	const navigate = useNavigate();
	const { course_id } = useParams();
	const location = useLocation();

	// Ambil module dari query string (?module=2), default ke 1 jika tidak ada
	const queryParams = new URLSearchParams(location.search);
	const moduleParam = parseInt(queryParams.get("module") || "1", 10);
	const moduleIdx = Math.max(1, Math.min(moduleParam, sidebarModules.length)) - 1;

	const [openModule, setOpenModule] = useState(moduleIdx);

	const handleModuleClick = (idx) => {
		setOpenModule(idx === openModule ? null : idx);
	};

	// Handler klik lesson di sidebar
	const handleLessonClick = (lesson, modIdx, lessonIdx) => {
		if (lesson === "Quiz") {
			// Pindah ke quiz modul yang sesuai
			navigate(`/dashboard/workshop/learningquiz?module=${modIdx + 1}`);
		} else {
			navigate(
				`/dashboard/user/mycourses/learningsectionvideo/${course_id}?module=${modIdx + 1}&lesson=${lessonIdx + 1}`
			);
		}
	};

	const handleStartClick = () => {
		// No backend needed, just for demo
	};

	const handleViewDetailClick = () => {
		navigate("/dashboard/workshop/learningviewdetail");
	};

	// --- HEADER (MATCH IMAGE 4) ---
	const Header = () => (
		<header className="bg-white border-b">
			<div className="w-full pt-2 pb-0 flex flex-col items-center">
				<div className="w-full flex justify-center">
					<div className="max-w-full mx-auto px-4 py-4">
						<div className="text-center flex items-center justify-center">
							<img
								src={Logo}
								alt="Pintura"
								className="w-[125px] h-[25px] object-contain"
							/>
						</div>
					</div>
				</div>
				<div
					className="flex justify-between items-center w-full px-8 pb-2 pt-2"
					style={{ borderTop: "1px solid #e5e7eb" }}
				>
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
									onClick={() =>
										navigate(
											`/dashboard/user/mycourses/learningsectionvideo/${course_id ?? 1}?module=1&lesson=1`
										)
									}
									className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
									type="button"
								>
									Data Analysis Fundamentals
								</button>
							</li>
							<li className="mx-1">&gt;</li>
							<li>
								<button
									onClick={() =>
										navigate(
											`/dashboard/user/mycourses/learningsectionvideo/${course_id ?? 1}?module=${
												moduleIdx + 1
											}&lesson=1`
										)
									}
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
						<a
							href="#"
							className="text-blue-700 hover:underline flex items-center"
						>
							<span
								className="text-lg mr-1"
								style={{ lineHeight: 1 }}
							>
								&lt;
							</span>
							Previous
						</a>
						<span className="text-gray-400 mx-2">|</span>
						<a
							href="#"
							className="text-blue-700 hover:underline flex items-center"
						>
							Next
							<span
								className="text-lg ml-1"
								style={{ lineHeight: 1 }}
							>
								&gt;
							</span>
						</a>
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
											<div className="font-semibold">{mod.title}</div>
											<div className="text-xs text-inherit font-normal">
												{mod.subtitle}
											</div>
										</div>
										<svg
											width="20"
											height="20"
											fill="none"
											className={`ml-2 transition-transform ${
												openModule === idx ? "rotate-180" : ""
											}`}
											viewBox="0 0 20 20"
										>
											<path
												d="M5 8l5 5 5-5"
												stroke={openModule === idx ? "#fff" : "#1B2342"}
												strokeWidth="1.5"
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
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
														? "font-semibold"
														: "text-[#1B2342]"
												}`}
												style={{
													fontWeight: lesson === "Quiz" ? 600 : 400,
													fontSize: lesson === "Quiz" ? "16px" : "15px",
													color:
														lesson === "Quiz" ? "#1B2342" : undefined, // Keep Quiz black
												}}
												onClick={() => handleLessonClick(lesson, idx, i)}
											>
												<span className="flex-1 truncate flex items-center gap-2">
													{lesson === "Quiz" ? (
														<span style={{ color: "#1B2342" }}>Quiz</span>
													) : (
														<span>{lesson}</span>
													)}
												</span>
												<span>
													{lesson !== "Quiz" && (
														<svg width="16" height="16" fill="none">
															<path
																d="M6 4l4 4-4 4"
																stroke="#A3A3A3"
																strokeWidth="1.5"
																strokeLinecap="round"
																strokeLinejoin="round"
															/>
														</svg>
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

				{/* Quiz Result Panel */}
				<section className="flex-1">
					<div className="border rounded-lg px-8 py-8 bg-white">
						<h1 className="text-xl font-bold text-gray-800 mb-6">Rules</h1>
						<p className="text-gray-700 mb-2">
							This quiz aims to test your knowledge of the material Introduction to Data Analysis.
						</p>
						<p className="text-gray-700 mb-2">
							There are 5 questions that must be completed in this quiz. Some of the conditions are as follows:
						</p>
						<ul className="list-disc ml-5 mb-2 text-gray-700">
							<li>Passing score requirement: 80%</li>
							<li>Exam duration: 5 minutes</li>
						</ul>
						<p className="text-gray-700 mb-2">
							If you do not meet the passing score, you must wait for 1 minute before retaking the quiz. Use the waiting time to review the previous material, okay?
						</p>
						<p className="text-gray-700 mb-8">Good luck with your work!</p>

						<h2 className="text-lg font-bold text-blue-700 mb-2">Result</h2>
						<div className="flex justify-end mb-4">
							<button
								onClick={handleStartClick}
								className="bg-[#8A95C7] text-white px-6 py-2 rounded-lg shadow hover:bg-[#6d77b1] transition"
								style={{ float: "right" }}
							>
								Start
							</button>
						</div>
						<table className="w-full border-collapse text-sm">
							<thead>
								<tr className="bg-gray-100">
									<th className="border px-3 py-2 text-left font-semibold">
										Date
									</th>
									<th className="border px-3 py-2 text-left font-semibold">
										Percentage
									</th>
									<th className="border px-3 py-2 text-left font-semibold">
										Status
									</th>
									<th className="border px-3 py-2 text-left font-semibold">
										Action
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="border px-3 py-2">21/11/24</td>
									<td className="border px-3 py-2">80%</td>
									<td className="border px-3 py-2">Passed</td>
									<td className="border px-3 py-2 text-blue-700 underline cursor-pointer">
										<button
											onClick={handleViewDetailClick}
											className="hover:text-blue-900"
										>
											View Detail
										</button>
									</td>
								</tr>
								{/* Empty rows for layout match */}
								<tr>
									<td className="border px-3 py-2">-</td>
									<td className="border px-3 py-2">-</td>
									<td className="border px-3 py-2">-</td>
									<td className="border px-3 py-2">-</td>
								</tr>
								<tr>
									<td className="border px-3 py-2">-</td>
									<td className="border px-3 py-2">-</td>
									<td className="border px-3 py-2">-</td>
									<td className="border px-3 py-2">-</td>
								</tr>
							</tbody>
						</table>
					</div>
				</section>
			</main>
		</div>
	);
};

export default Learningafterquiz;