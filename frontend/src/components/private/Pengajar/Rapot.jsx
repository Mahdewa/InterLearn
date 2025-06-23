import { useState, useEffect } from "react";
import axios from "axios";
import LayoutWithSidebar from "./LayoutWithSidebar";

const RapotPengajar = () => {
  // State untuk tambah rapot
  const [user, setUser] = useState("");
  const [materi, setMateri] = useState("");
  const [skor, setSkor] = useState("");

  // State untuk update rapot
  const [updateUser, setUpdateUser] = useState("");
  const [updateMateri, setUpdateMateri] = useState("");
  const [updateSkor, setUpdateSkor] = useState("");
  const [updateId, setUpdateId] = useState("");

  // Dropdown
  const [userList, setUserList] = useState([]);
  const [materiList, setMateriList] = useState([]);

  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchUserList();
    fetchMateriList();
  }, []);

  const fetchUserList = async () => {
    try {
      const res = await axios.get(
        "https://be-inter-learn.vercel.app/api/auth/users"
      );
      setUserList(res.data);
    } catch (err) {
      setUserList([]);
    }
  };

  const fetchMateriList = async () => {
    try {
      const res = await axios.get("https://be-inter-learn.vercel.app/api/materi");
      setMateriList(res.data);
    } catch (err) {
      setMateriList([]);
    }
  };

  // Tambah rapot
  const handleAdd = async (event) => {
    event.preventDefault();
    try {
      await axios.post(
        "https://be-inter-learn.vercel.app/api/rapot",
        { user, materi, skor },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Rapot berhasil ditambahkan");
      setUser("");
      setMateri("");
      setSkor("");
    } catch (err) {
      alert("Gagal menyimpan rapot");
    }
  };

  // Fetch rapot untuk update berdasarkan user & materi
  useEffect(() => {
    const fetchRapotForUpdate = async () => {
      if (!updateUser || !updateMateri) {
        setUpdateSkor("");
        setUpdateId("");
        return;
      }
      try {
        const res = await axios.get(
          `https://be-inter-learn.vercel.app/api/rapot/user/${updateUser}?materi=${updateMateri}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const rapot = Array.isArray(res.data) ? res.data[0] : res.data;
        if (rapot) {
          setUpdateSkor(rapot.skor);
          setUpdateId(rapot._id);
        } else {
          setUpdateSkor("");
          setUpdateId("");
        }
      } catch (err) {
        setUpdateSkor("");
        setUpdateId("");
      }
    };
    fetchRapotForUpdate();
  }, [updateUser, updateMateri, token]);

  // Update rapot
  const handleUpdate = async (event) => {
    event.preventDefault();
    if (!updateId) {
      alert("Data rapot tidak ditemukan untuk kombinasi user & materi ini.");
      return;
    }
    try {
      await axios.put(
        `https://be-inter-learn.vercel.app/api/rapot/${updateId}`,
        { user: updateUser, materi: updateMateri, skor: updateSkor },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Rapot berhasil diupdate");
      setUpdateUser("");
      setUpdateMateri("");
      setUpdateSkor("");
      setUpdateId("");
    } catch (err) {
      alert("Gagal update rapot");
    }
  };

  return (
    <LayoutWithSidebar>
      <div className="flex justify-center min-h-screen bg-gray-50 py-8">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-4xl space-y-12">
          {/* Form Tambah Rapot */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600 text-center mb-4">
              Tambah Rapot
            </h1>
            <form onSubmit={handleAdd} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium mb-2">User</label>
                  <select
                    className="w-full border rounded p-2"
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    required
                  >
                    <option value="">Pilih User</option>
                    {userList.map((u) => (
                      <option key={u._id} value={u._id}>
                        {u.nama} ({u.email})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">Materi</label>
                  <select
                    className="w-full border rounded p-2"
                    value={materi}
                    onChange={(e) => setMateri(e.target.value)}
                    required
                  >
                    <option value="">Pilih Materi</option>
                    {materiList.map((m) => (
                      <option key={m._id} value={m._id}>
                        {m.judul}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">Skor</label>
                  <input
                    type="number"
                    className="w-full border rounded p-2"
                    value={skor}
                    onChange={(e) => setSkor(e.target.value)}
                    required
                  />
                </div>
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

          {/* Form Update Rapot */}
          <div>
            <h1 className="text-2xl font-bold text-green-600 text-center mb-4">
              Update Rapot
            </h1>
            <form onSubmit={handleUpdate} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-medium mb-2">User</label>
                  <select
                    className="w-full border rounded p-2"
                    value={updateUser}
                    onChange={(e) => setUpdateUser(e.target.value)}
                    required
                  >
                    <option value="">Pilih User</option>
                    {userList.map((u) => (
                      <option key={u._id} value={u._id}>
                        {u.nama} ({u.email})
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">Materi</label>
                  <select
                    className="w-full border rounded p-2"
                    value={updateMateri}
                    onChange={(e) => setUpdateMateri(e.target.value)}
                    required
                  >
                    <option value="">Pilih Materi</option>
                    {materiList.map((m) => (
                      <option key={m._id} value={m._id}>
                        {m.judul}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block font-medium mb-2">Skor</label>
                  <input
                    type="number"
                    className="w-full border rounded p-2"
                    value={updateSkor}
                    onChange={(e) => setUpdateSkor(e.target.value)}
                    required
                    disabled={!updateId}
                  />
                  {!updateId && (
                    <p className="text-sm text-red-500 mt-1">
                      Pilih kombinasi User & Materi yang sudah punya rapot.
                    </p>
                  )}
                </div>
              </div>
              <div className="pt-4 text-right">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  disabled={!updateId}
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutWithSidebar>
  );
};

export default RapotPengajar;
