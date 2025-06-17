import { useState } from "react";
import axios from "axios";
import LayoutWithSidebar from "./LayoutWithSidebar";

const CourseForm = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [teksPenjelasan, setTeksPenjelasan] = useState("");
  const [quiz, setQuiz] = useState([
    { pertanyaan: "", opsi: ["", "", "", ""], jawabanBenar: "" }
  ]);
  const [message, setMessage] = useState("");

  // Handler untuk quiz
  const handleQuizChange = (idx, field, value) => {
    const newQuiz = [...quiz];
    if (field === "opsi") {
      newQuiz[idx].opsi = value;
    } else {
      newQuiz[idx][field] = value;
    }
    setQuiz(newQuiz);
  };

  const handleOpsiChange = (quizIdx, opsiIdx, value) => {
    const newQuiz = [...quiz];
    newQuiz[quizIdx].opsi[opsiIdx] = value;
    setQuiz(newQuiz);
  };

  const handleAddQuiz = () => {
    setQuiz([...quiz, { pertanyaan: "", opsi: ["", "", "", ""], jawabanBenar: "" }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "https://be-inter-learn.vercel.app/api/materi",
        { judul, deskripsi, videoUrl, teksPenjelasan, quiz },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setMessage("Materi berhasil ditambahkan!");
      setJudul("");
      setDeskripsi("");
      setVideoUrl("");
      setTeksPenjelasan("");
      setQuiz([{ pertanyaan: "", opsi: ["", "", "", ""], jawabanBenar: "" }]);
    } catch (err) {
      setMessage("Gagal menambah materi!");
    }
  };

  return (
    <LayoutWithSidebar>
      <div className="flex justify-center min-h-screen">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl space-y-4">
          <h1 className="text-2xl font-bold text-blue-600">Input Course</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-2">Title</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value={judul}
                onChange={(e) => setJudul(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Description</label>
              <textarea
                className="w-full border rounded p-2"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="block font-medium">Video URL</label>
              <input
                type="text"
                className="w-full border rounded p-2"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium">Explanation Text</label>
              <textarea
                className="w-full border rounded p-2"
                value={teksPenjelasan}
                onChange={(e) => setTeksPenjelasan(e.target.value)}
              />
            </div>
            <div>
              <label className="block font-medium mb-1">Quiz</label>
              {quiz.map((q, idx) => (
                <div key={idx} className="mb-2 border p-2 rounded">
                  <input
                    type="text"
                    className="w-full border rounded p-2 mb-1"
                    placeholder="Pertanyaan"
                    value={q.pertanyaan}
                    onChange={e => handleQuizChange(idx, "pertanyaan", e.target.value)}
                  />
                  {q.opsi.map((o, oidx) => (
                    <input
                      key={oidx}
                      type="text"
                      className="w-full border rounded p-2 mb-1"
                      placeholder={`Opsi ${oidx + 1}`}
                      value={o}
                      onChange={e => handleOpsiChange(idx, oidx, e.target.value)}
                    />
                  ))}
                  <input
                    type="text"
                    className="w-full border rounded p-2 mb-1"
                    placeholder="Jawaban Benar"
                    value={q.jawabanBenar}
                    onChange={e => handleQuizChange(idx, "jawabanBenar", e.target.value)}
                  />
                </div>
              ))}
              <button type="button" onClick={handleAddQuiz} className="bg-gray-300 px-2 py-1 rounded">Tambah Quiz</button>
            </div>
            <div className="pt-4 text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
            {message && <div className="text-center text-green-600">{message}</div>}
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default CourseForm;