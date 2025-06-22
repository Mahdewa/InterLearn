import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePengajar = () => {
  const [profile, setProfile] = useState(null);
  const [initialProfile, setInitialProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  const backend = "https://be-inter-learn.vercel.app";

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userId = localStorage.getItem("userId");
        if (!userId) return alert("User belum login atau userId tidak ditemukan.");

        const res = await axios.get(`${backend}/api/userprofile/public/${userId}`);
        setProfile(res.data.data);
        setInitialProfile(res.data.data);
      } catch (e) {
        console.error("Gagal mengambil profil:", e.response?.data || e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleUploadPhoto = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prev) => ({ ...prev, image_url: reader.result }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const isSame = JSON.stringify(profile) === JSON.stringify(initialProfile);
    if (isSame) {
      alert("Tidak ada perubahan untuk disimpan.");
      setIsEditing(false);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(`${backend}/api/userprofile`, profile, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Profil berhasil diperbarui!");
      setInitialProfile(profile);
      setIsEditing(false);
    } catch (e) {
      console.error("Update gagal:", e.response?.data || e.message);
      alert("Update gagal, ukuran foto terlalu besar.");
    }
  };

  if (loading) return <div>Memuat...</div>;
  if (!profile) return <div>Profil tidak ditemukan.</div>;

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Profil Saya</h2>

      {/* Foto Profil */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={profile.image_url || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
          alt="Profile"
          className="w-32 h-32 rounded-full object-cover border-2 border-gray-300"
        />
        {isEditing && (
          <input
            type="file"
            accept="image/*"
            onChange={handleUploadPhoto}
            className="mt-2"
          />
        )}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Nama */}
        <div>
          <label className="font-medium">Username*</label>
          <input
            type="text"
            name="nama"
            value={profile.user?.nama || ""}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Email */}
        <div>
          <label className="font-medium">Email*</label>
          <input
            type="email"
            name="email"
            value={profile.user?.email || ""}
            disabled
            className="w-full p-2 border rounded bg-gray-100"
          />
        </div>

        {/* Username */}
        <div>
          <label className="font-medium">Nama Lengkap</label>
          <input
            type="text"
            name="username"
            value={profile.username || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Lain-lain */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label>Tanggal Lahir</label>
            <input
              name="date_of_birth"
              type="date"
              value={profile.date_of_birth?.split("T")[0] || ""}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Gender</label>
            <select
              name="gender"
              value={profile.gender}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded"
            >
              <option value="">Pilih</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label>No. HP</label>
            <input
              name="phone_number"
              type="text"
              value={profile.phone_number || ""}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Kota</label>
            <input
              name="city"
              type="text"
              value={profile.city || ""}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Perusahaan</label>
            <input
              name="company"
              type="text"
              value={profile.company || ""}
              onChange={handleChange}
              disabled={!isEditing}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label>Role</label>
            <input
              type="text"
              name="role"
              value={profile.user?.role || profile.role || ""}
              disabled
              className="w-full p-2 border rounded bg-gray-100"
            />
          </div>
        </div>

        {/* Bio */}
        <div>
          <label>Bio</label>
          <textarea
            name="bio"
            value={profile.bio || ""}
            onChange={handleChange}
            disabled={!isEditing}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Tombol Aksi */}
        <div className="flex justify-end gap-2">
          {isEditing ? (
            <>
              <button
                type="submit"
                disabled={JSON.stringify(profile) === JSON.stringify(initialProfile)}
                className={`px-4 py-2 rounded text-white ${
                  JSON.stringify(profile) === JSON.stringify(initialProfile)
                    ? "bg-green-300 cursor-not-allowed"
                    : "bg-green-600 hover:bg-green-700"
                }`}
              >
                Simpan
              </button>
              <button
                type="button"
                onClick={() => {
                  setProfile(initialProfile);
                  setIsEditing(false);
                }}
                className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded"
              >
                Batal
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Edit Profil
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfilePengajar;