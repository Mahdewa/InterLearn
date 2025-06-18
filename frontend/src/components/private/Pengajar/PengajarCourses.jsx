import React, { useEffect, useState } from "react";
import axios from "axios";
import AddMateri from "./AddMateri";
import NavbarPengajar from "../shared/NavbarPengajar";
import Footer from "../../public/shared/Footer";

const PengajarCourses = () => {
  const [materiList, setMateriList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState(null);

  const fetchMateri = async () => {
    const res = await axios.get("https://be-inter-learn.vercel.app/api/materi");
    setMateriList(res.data);
  };

  useEffect(() => {
    fetchMateri();
  }, []);

  const handleMateriAdded = () => {
    setShowAddForm(false);
    fetchMateri();
  };

  // Format tanggal
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString("id-ID");
  };

  // Handle Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus materi ini?")) return;
    try {
      const token = localStorage.getItem("token");
      await axios.delete(
        `https://be-inter-learn.vercel.app/api/materi/${id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      fetchMateri();
    } catch (err) {
      alert("Gagal menghapus materi!");
    }
  };

  // Handle Edit
  const handleEdit = (materi) => {
    setEditId(materi._id);
    setEditData({
      judul: materi.judul,
      deskripsi: materi.deskripsi,
      videoUrl: materi.videoUrl,
      teksPenjelasan: materi.teksPenjelasan,
      quiz: materi.quiz.map(q => ({
        pertanyaan: q.pertanyaan,
        opsi: [...q.opsi],
        jawabanBenar: q.jawabanBenar
      }))
    });
  };

  // Handle Edit Form Change
  const handleEditChange = (field, value) => {
    setEditData({ ...editData, [field]: value });
  };

  const handleEditQuizChange = (idx, field, value) => {
    const newQuiz = [...editData.quiz];
    if (field === "opsi") {
      newQuiz[idx].opsi = value;
    } else {
      newQuiz[idx][field] = value;
    }
    setEditData({ ...editData, quiz: newQuiz });
  };

  const handleEditOpsiChange = (quizIdx, opsiIdx, value) => {
    const newQuiz = [...editData.quiz];
    newQuiz[quizIdx].opsi[opsiIdx] = value;
    setEditData({ ...editData, quiz: newQuiz });
  };

  // Submit Edit
  const handleEditSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put(
        `https://be-inter-learn.vercel.app/api/materi/${editId}`,
        editData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setEditId(null);
      setEditData(null);
      fetchMateri();
    } catch (err) {
      alert("Gagal mengedit materi!");
    }
  };

  return (
    <div>
      <NavbarPengajar />
      <div className="container mx-auto py-8">
        <button
          className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          {showAddForm ? "Tutup Form" : "Tambah Materi"}
        </button>
        {showAddForm && <AddMateri onMateriAdded={handleMateriAdded} />}
        <div className="grid gap-4">
          {materiList.map((materi) =>
  editId === materi._id ? (
    // === FORM EDIT ===
    <form
      key={materi._id}
      className="border rounded p-4 shadow bg-gray-50"
      onSubmit={handleEditSubmit}
    >
      <div className="mb-2">
        <label className="block font-medium mb-1">Judul</label>
        <input
          className="w-full border rounded p-2"
          value={editData.judul}
          onChange={e => handleEditChange("judul", e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-medium mb-1">Deskripsi</label>
        <textarea
          className="w-full border rounded p-2"
          value={editData.deskripsi}
          onChange={e => handleEditChange("deskripsi", e.target.value)}
          required
        />
      </div>
      <div className="mb-2">
        <label className="block font-medium mb-1">Video URL</label>
        <input
          className="w-full border rounded p-2"
          value={editData.videoUrl}
          onChange={e => handleEditChange("videoUrl", e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block font-medium mb-1">Teks Penjelasan</label>
        <textarea
          className="w-full border rounded p-2"
          value={editData.teksPenjelasan}
          onChange={e => handleEditChange("teksPenjelasan", e.target.value)}
        />
      </div>
      <div className="mb-2">
        <label className="block font-medium mb-1">Quiz</label>
        {editData.quiz.map((q, idx) => (
          <div key={idx} className="mb-2 border p-2 rounded">
            <label className="block font-medium mb-1">Pertanyaan</label>
            <input
              className="w-full border rounded p-2 mb-1"
              value={q.pertanyaan}
              onChange={e => handleEditQuizChange(idx, "pertanyaan", e.target.value)}
              placeholder="Pertanyaan"
            />
            {q.opsi.map((o, oidx) => (
              <div key={oidx}>
                <label className="block font-medium mb-1">{`Opsi ${oidx + 1}`}</label>
                <input
                  className="w-full border rounded p-2 mb-1"
                  value={o}
                  onChange={e => handleEditOpsiChange(idx, oidx, e.target.value)}
                  placeholder={`Opsi ${oidx + 1}`}
                />
              </div>
            ))}
            <label className="block font-medium mb-1">Jawaban Benar</label>
            <input
              className="w-full border rounded p-2 mb-1"
              value={q.jawabanBenar}
              onChange={e => handleEditQuizChange(idx, "jawabanBenar", e.target.value)}
              placeholder="Jawaban Benar"
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Simpan
        </button>
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded"
          onClick={() => { setEditId(null); setEditData(null); }}
        >
          Batal
        </button>
      </div>
    </form>
  ) : (
              // === TAMPILAN BACA ===
              <div key={materi._id} className="border rounded p-4 shadow">
                <h3 className="font-semibold text-lg mb-2">{materi.judul}</h3>
                <p className="mb-2"><b>Deskripsi:</b> {materi.deskripsi}</p>
                <p className="mb-2">
                  <b>Video URL:</b>{" "}
                  {materi.videoUrl ? (
                    <a
                      href={materi.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 underline"
                    >
                      {materi.videoUrl}
                    </a>
                  ) : (
                    <span className="text-gray-500">Tidak ada</span>
                  )}
                </p>
                <p className="mb-2"><b>Teks Penjelasan:</b> {materi.teksPenjelasan || <span className="text-gray-500">Tidak ada</span>}</p>
                <div className="mb-2">
                  <b>Dibuat oleh:</b>{" "}
                  {materi.dibuatOleh?.nama || materi.dibuatOleh?._id || <span className="text-gray-500">Tidak diketahui</span>}
                </div>
                <div className="mb-2">
                  <b>Tanggal dibuat:</b>{" "}
                  {materi.createdAt ? formatDate(materi.createdAt) : <span className="text-gray-500">Tidak diketahui</span>}
                </div>
                <div>
                  <b>Quiz:</b>
                  {materi.quiz && materi.quiz.length > 0 ? (
                    <ol className="list-decimal ml-6">
                      {materi.quiz.map((q, idx) => (
                        <li key={idx} className="mb-2">
                          <div><b>Pertanyaan:</b> {q.pertanyaan}</div>
                          <ul className="list-disc ml-4">
                            {q.opsi.map((o, oidx) => (
                              <li key={oidx}>{o}</li>
                            ))}
                          </ul>
                          <div><b>Jawaban Benar:</b> {q.jawabanBenar}</div>
                        </li>
                      ))}
                    </ol>
                  ) : (
                    <div className="text-gray-500">Tidak ada quiz.</div>
                  )}
                </div>
                <div className="flex gap-2 mt-4">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded"
                    onClick={() => handleEdit(materi)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => handleDelete(materi._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PengajarCourses;