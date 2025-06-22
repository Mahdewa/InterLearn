import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function ShowRapot() {
  const [rapot, setRapot] = useState([]);
  const [loadingRapot, setLoadingRapot] = useState(true);
  const [errorRapot, setErrorRapot] = useState('');

  useEffect(() => {
    const fetchRapot = async () => {
      try {
        setLoadingRapot(true);
        const userId = localStorage.getItem('userId');
        if (!userId) return;
        const res = await axios.get(`https://be-inter-learn.vercel.app/api/rapot/user/${userId}`);
        setRapot(res.data);
      } catch (err) {
        setErrorRapot('Gagal mengambil data rapot');
      } finally {
        setLoadingRapot(false);
      }
    };

    fetchRapot();
  }, []);


  return (
    <div className="min-h-screen bg-white">
      

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8"></main>   
      <h2 className="text-2xl font-bold text-center mb-8">Nilai Rapot</h2>
      {loadingRapot && <div className="text-center text-gray-500">Loading nilai...</div>}
      {errorRapot && <div>{errorRapot}</div>}
      {!loadingRapot && !errorRapot && rapot.length === 0 && (
        <div className="text-center text-gray-500">Kamu Belum Mengerjakan Apapun...</div>
      )}
      {rapot.length > 0 && (
        <div>
          <h4>Nilai Rapot:</h4>
          <ul>
            {rapot.map(item => (
              <li key={item._id}>
                Materi: {item.materi?.judul || '-'}, Nilai: {item.skor}, Tanggal: {new Date(item.tanggal).toLocaleDateString()}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
