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
              <h3 className="font-semibold text-lg">{materi.judul}</h3>
              <p>{materi.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MyCourses;