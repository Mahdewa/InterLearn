import { useState } from "react";
import LayoutWithSidebar from "./LayoutWithSidebar";

const CourseForm = () => {
  const [judul, setJudul] = useState("");
  const [deskripsi, setDeskripsi] = useState(
    ""
  );
  const [videoUrl, setVideoUrl] = useState("");
  const [teksPenjelasan, setTeksPenjelasan] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Hindari reload halaman
    const payload = {
      judul,
      deskripsi,
      videoUrl,
      teksPenjelasan,
    };
    console.log("JSON Output:", JSON.stringify(payload, null, 2));
    alert("Data successfully prepared, check console.");
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
              />
            </div>

            <div>
              <label className="block font-medium">Description</label>
              <textarea
                className="w-full border rounded p-2"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
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
              <input
                type="text"
                className="w-full border rounded p-2"
                readOnly
              />
            </div>

            <div className="pt-4 text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default CourseForm;
