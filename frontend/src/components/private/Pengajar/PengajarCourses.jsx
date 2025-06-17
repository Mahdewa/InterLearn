import React, { useEffect, useState } from "react";
import axios from "axios";
import AddMateri from "../../../components/private/Pengajar/AddMateri";
import NavbarPengajar from "../../../components/private/shared/NavbarPengajar";
import Footer from "../../../components/public/shared/Footer";

const MyCourses = () => {
  const [materiList, setMateriList] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);

  const fetchMateri = async () => {
    const res = await axios.get("http://localhost:5000/api/materi");
    setMateriList(res.data);
  };

  useEffect(() => {
    fetchMateri();
  }, []);

  const handleMateriAdded = () => {
    setShowAddForm(false);
    fetchMateri();
  };

  // Helper untuk format tanggal
  const formatDate = (dateStr) => {
    const d = new Date(dateStr);
    return d.toLocaleString("id-ID");
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
          {materiList.map((materi) => (
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
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCourses;