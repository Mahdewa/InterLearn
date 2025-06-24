import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import Logo from '/logo/logo.png';
import userAvatar from '/avatar/kevin.png';

// Sidebar data
const sidebarModules = [
  {
    title: "Module 1",
    subtitle: "Introduction to Data Analysis",
    lessons: [
      { label: "Lesson 1.1: What is Data Analysis?" },
      { label: "Lesson 1.2: Types of Data" },
      { label: "Lesson 1.3: Tools and Technologies" },
      { label: "Quiz", isQuiz: true },
    ],
  },
  {
    title: "Module 2",
    subtitle: "Data Collection and Cleaning",
    lessons: [
      { label: "Lesson 2.1: Data Sources" },
      { label: "Lesson 2.2: Data Cleaning Techniques" },
      { label: "Lesson 2.3: Handling Missing Values" },
      { label: "Quiz", isQuiz: true },
    ],
  },
  {
    title: "Module 3",
    subtitle: "Data Manipulation with Excel & SQL",
    lessons: [
      { label: "Lesson 3.1: Excel Formulas & Functions" },
      { label: "Lesson 3.2: SQL Basics" },
      { label: "Lesson 3.3: Data Joins in SQL" },
      { label: "Quiz", isQuiz: true },
    ],
  },
  {
    title: "Module 4",
    subtitle: "Data Visualization with Power BI",
    lessons: [
      { label: "Lesson 4.1: Introduction to Power BI" },
      { label: "Lesson 4.2: Creating Visualizations" },
      { label: "Lesson 4.3: Dashboard Design" },
      { label: "Quiz", isQuiz: true },
    ],
  },
  {
    title: "Module 5",
    subtitle: "Basic Statistical Analysis",
    lessons: [
      { label: "Lesson 5.1: Descriptive Statistics" },
      { label: "Lesson 5.2: Inferential Statistics" },
      { label: "Lesson 5.3: Hypothesis Testing" },
      { label: "Quiz", isQuiz: true },
    ],
  },
  {
    title: "Module 6",
    subtitle: "Real-world Case Studies and Applications",
    lessons: [
      { label: "Lesson 6.1: Business Case Study" },
      { label: "Lesson 6.2: Healthcare Data Analysis" },
      { label: "Lesson 6.3: Social Media Analytics" },
      { label: "Quiz", isQuiz: true },
    ],
  },
];

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

// --- Tambahkan konten lesson di sini ---
const lessonContents = {
  // Module 1
  "Lesson 1.1: What is Data Analysis?": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 1.1: What is Data Analysis?</h2>
      <p className="mb-2">
        <b>Data analysis</b> adalah proses sistematis untuk mengekstrak wawasan dan pengetahuan dari data mentah. Proses ini melibatkan beberapa tahapan utama, mulai dari pengumpulan data, pembersihan data, eksplorasi data, hingga interpretasi hasil analisis. Dalam dunia bisnis, data analysis digunakan untuk mendukung pengambilan keputusan strategis, mengidentifikasi peluang pasar, serta mengoptimalkan proses operasional.
      </p>
      <p className="mb-2">
        Terdapat beberapa pendekatan dalam analisis data, seperti analisis deskriptif (menjelaskan apa yang terjadi), analisis diagnostik (mengapa sesuatu terjadi), analisis prediktif (apa yang mungkin terjadi di masa depan), dan analisis preskriptif (tindakan apa yang sebaiknya diambil). Setiap pendekatan memiliki tujuan dan metode yang berbeda, namun semuanya bertujuan untuk memberikan nilai tambah dari data yang tersedia.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Mengidentifikasi pola, tren, dan anomali dalam data</li>
        <li>Menggunakan teknik statistik, machine learning, dan visualisasi data</li>
        <li>Mendukung pengambilan keputusan berbasis data (data-driven decision making)</li>
        <li>Memastikan data yang digunakan valid, relevan, dan dapat dipercaya</li>
      </ul>
      <p>
        Dengan berkembangnya teknologi, analisis data kini menjadi kompetensi inti di berbagai bidang, mulai dari bisnis, kesehatan, pemerintahan, hingga pendidikan.
      </p>
    </div>
  ),
  "Lesson 1.2: Types of Data": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 1.2: Types of Data</h2>
      <p className="mb-2">
        Dalam analisis data, sangat penting untuk memahami berbagai jenis data yang akan dianalisis. Secara umum, data dapat dikategorikan menjadi:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>Data Terstruktur:</b> Data yang tersimpan dalam format tabel dengan baris dan kolom, seperti database relasional (SQL), spreadsheet, dan CSV. Data ini mudah diolah menggunakan query dan fungsi statistik.
        </li>
        <li>
          <b>Data Tidak Terstruktur:</b> Data yang tidak memiliki format tetap, seperti teks bebas (dokumen, email), gambar, audio, dan video. Analisis data tidak terstruktur membutuhkan teknik khusus seperti text mining atau image processing.
        </li>
        <li>
          <b>Data Semi-Terstruktur:</b> Data yang memiliki struktur namun tidak seketat tabel, misal file JSON, XML, atau log file.
        </li>
      </ul>
      <p className="mb-2">
        Berdasarkan sifatnya, data juga dibagi menjadi:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>Data Kuantitatif:</b> Data numerik yang dapat diukur, seperti pendapatan, suhu, atau jumlah penjualan. Data kuantitatif dibagi lagi menjadi <i>diskrit</i> (bilangan bulat, misal jumlah anak) dan <i>kontinu</i> (misal berat badan).
        </li>
        <li>
          <b>Data Kualitatif:</b> Data kategorikal yang menggambarkan atribut atau karakteristik, seperti warna, jenis kelamin, atau tingkat kepuasan pelanggan. Data ini dapat berupa nominal (tanpa urutan, misal warna) atau ordinal (ada urutan, misal tingkat pendidikan).
        </li>
        <li>
          <b>Time Series:</b> Data yang dikumpulkan secara berkala dalam rentang waktu tertentu, misal data penjualan harian.
        </li>
        <li>
          <b>Cross-sectional:</b> Data yang dikumpulkan pada satu titik waktu dari banyak objek, misal survei pelanggan pada bulan tertentu.
        </li>
      </ul>
      <p>
        Memahami tipe data sangat penting untuk menentukan metode analisis dan visualisasi yang tepat.
      </p>
    </div>
  ),
  "Lesson 1.3: Tools and Technologies": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 1.3: Tools and Technologies</h2>
      <p className="mb-2">
        Analisis data modern didukung oleh berbagai tools dan teknologi, mulai dari perangkat lunak sederhana hingga platform analitik canggih:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>Microsoft Excel:</b> Digunakan untuk analisis data dasar, pembuatan grafik, pivot table, dan fungsi statistik. Cocok untuk data berukuran kecil hingga menengah.
        </li>
        <li>
          <b>SQL (Structured Query Language):</b> Bahasa standar untuk mengelola dan mengambil data dari database relasional. SQL memungkinkan pengguna melakukan query kompleks, join antar tabel, dan agregasi data.
        </li>
        <li>
          <b>Python & R:</b> Bahasa pemrograman populer untuk analisis data lanjutan, statistik, machine learning, dan visualisasi data. Python memiliki library seperti pandas, numpy, matplotlib, dan scikit-learn, sedangkan R unggul dalam analisis statistik dan visualisasi.
        </li>
        <li>
          <b>Power BI & Tableau:</b> Platform visualisasi data interaktif yang memudahkan pembuatan dashboard, laporan dinamis, dan eksplorasi data secara visual.
        </li>
        <li>
          <b>Big Data Tools:</b> Untuk data berukuran sangat besar, digunakan teknologi seperti Hadoop, Spark, dan cloud data warehouse (Google BigQuery, AWS Redshift).
        </li>
      </ul>
      <p>
        Pemilihan tools harus disesuaikan dengan kebutuhan analisis, volume data, dan kompetensi tim.
      </p>
    </div>
  ),
  // Module 2
  "Lesson 2.1: Data Sources": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 2.1: Data Sources</h2>
      <p className="mb-2">
        Sumber data sangat beragam dan dapat berasal dari internal organisasi maupun eksternal. Memahami sumber data penting untuk memastikan kualitas dan relevansi analisis.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>Internal:</b> Data transaksi, data pelanggan, log sistem, data keuangan, data produksi, dan data dari sistem ERP/CRM.
        </li>
        <li>
          <b>Eksternal:</b> Data open source (misal data pemerintah), data pasar, data dari mitra bisnis, data media sosial, dan data hasil survei publik.
        </li>
        <li>
          <b>Primary Data:</b> Data yang dikumpulkan langsung melalui survei, wawancara, eksperimen, atau observasi.
        </li>
        <li>
          <b>Secondary Data:</b> Data yang dikumpulkan pihak lain, seperti laporan riset, publikasi ilmiah, atau data agregat dari lembaga statistik.
        </li>
      </ul>
      <p>
        Penting untuk mengevaluasi kualitas, legalitas, dan etika penggunaan data sebelum digunakan dalam analisis.
      </p>
    </div>
  ),
  "Lesson 2.2: Data Cleaning Techniques": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 2.2: Data Cleaning Techniques</h2>
      <p className="mb-2">
        Data cleaning adalah proses penting untuk memastikan data yang digunakan dalam analisis bebas dari kesalahan dan inkonsistensi. Teknik umum dalam data cleaning meliputi:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Menghapus duplikasi data yang dapat menyebabkan bias</li>
        <li>Menangani missing values dengan mengisi, menghapus, atau melakukan imputasi</li>
        <li>Standarisasi format data (tanggal, angka, teks) agar konsisten</li>
        <li>Validasi data untuk memastikan sesuai aturan bisnis</li>
        <li>Deteksi dan penanganan outlier yang dapat mempengaruhi hasil analisis</li>
        <li>Normalisasi dan encoding data kategorikal untuk analisis lanjutan</li>
      </ul>
      <p>
        Proses cleaning dapat dilakukan secara manual (misal di Excel) atau otomatis menggunakan script di Python/R.
      </p>
    </div>
  ),
  "Lesson 2.3: Handling Missing Values": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 2.3: Handling Missing Values</h2>
      <p className="mb-2">
        Missing values adalah masalah umum dalam data analysis. Penanganan yang tepat sangat penting agar hasil analisis tidak bias.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>Deletion:</b> Menghapus baris atau kolom yang mengandung missing values jika proporsinya kecil.
        </li>
        <li>
          <b>Imputation:</b> Mengisi missing values dengan mean, median, modus, atau nilai prediksi dari model machine learning.
        </li>
        <li>
          <b>Flagging:</b> Menandai missing values sebagai kategori tersendiri, terutama untuk data kategorikal.
        </li>
        <li>
          <b>Model-based:</b> Menggunakan algoritma yang robust terhadap missing values, seperti decision tree.
        </li>
      </ul>
      <p>
        Pilihan metode tergantung pada jenis data, proporsi missing values, dan tujuan analisis.
      </p>
    </div>
  ),
  // Module 3
  "Lesson 3.1: Excel Formulas & Functions": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 3.1: Excel Formulas & Functions</h2>
      <p className="mb-2">
        Microsoft Excel menyediakan berbagai formula dan fungsi yang sangat membantu dalam analisis data:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>SUM, AVERAGE, COUNT:</b> Untuk perhitungan dasar seperti penjumlahan, rata-rata, dan jumlah data.
        </li>
        <li>
          <b>VLOOKUP, HLOOKUP, INDEX-MATCH:</b> Untuk pencarian data secara vertikal/horizontal dan referensi data antar tabel.
        </li>
        <li>
          <b>IF, AND, OR:</b> Untuk logika dan pengambilan keputusan otomatis dalam data.
        </li>
        <li>
          <b>PIVOT TABLE:</b> Untuk meringkas, mengelompokkan, dan menganalisis data dalam jumlah besar secara interaktif.
        </li>
        <li>
          <b>Conditional Formatting:</b> Untuk menyoroti data penting secara visual.
        </li>
      </ul>
      <p>
        Penguasaan formula dan fungsi Excel sangat penting bagi analis data pemula hingga menengah.
      </p>
    </div>
  ),
  "Lesson 3.2: SQL Basics": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 3.2: SQL Basics</h2>
      <p className="mb-2">
        SQL (Structured Query Language) adalah bahasa standar untuk mengakses dan memanipulasi data pada database relasional. Beberapa perintah dasar SQL:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>SELECT:</b> Mengambil data dari satu atau lebih tabel.
        </li>
        <li>
          <b>WHERE:</b> Menyaring data berdasarkan kondisi tertentu.
        </li>
        <li>
          <b>ORDER BY:</b> Mengurutkan data berdasarkan satu atau lebih kolom.
        </li>
        <li>
          <b>GROUP BY:</b> Mengelompokkan data untuk agregasi (SUM, AVG, COUNT, dsb).
        </li>
        <li>
          <b>INSERT, UPDATE, DELETE:</b> Untuk menambah, mengubah, dan menghapus data.
        </li>
      </ul>
      <p>
        Penguasaan SQL sangat penting untuk mengambil insight dari data yang tersimpan di database perusahaan.
      </p>
    </div>
  ),
  "Lesson 3.3: Data Joins in SQL": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 3.3: Data Joins in SQL</h2>
      <p className="mb-2">
        JOIN digunakan untuk menggabungkan data dari dua atau lebih tabel berdasarkan kolom yang berhubungan. Jenis-jenis JOIN:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>INNER JOIN:</b> Mengambil data yang cocok di kedua tabel.
        </li>
        <li>
          <b>LEFT JOIN:</b> Mengambil semua data dari tabel kiri dan data yang cocok dari tabel kanan.
        </li>
        <li>
          <b>RIGHT JOIN:</b> Sebaliknya dari LEFT JOIN.
        </li>
        <li>
          <b>FULL OUTER JOIN:</b> Mengambil semua data dari kedua tabel, baik yang cocok maupun tidak.
        </li>
      </ul>
      <p>
        JOIN sangat penting untuk analisis data yang tersebar di banyak tabel, seperti data transaksi dan data pelanggan.
      </p>
    </div>
  ),
  // Module 4
  "Lesson 4.1: Introduction to Power BI": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 4.1: Introduction to Power BI</h2>
      <p className="mb-2">
        Power BI adalah platform business intelligence dari Microsoft yang memungkinkan pengguna untuk menghubungkan, memodelkan, dan memvisualisasikan data dari berbagai sumber secara interaktif. Power BI mendukung integrasi dengan Excel, database, API, dan layanan cloud.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Membuat dashboard dan laporan interaktif dengan drag-and-drop</li>
        <li>Mengimpor data dari berbagai sumber (Excel, database, API)</li>
        <li>Fitur DAX (Data Analysis Expressions) untuk kalkulasi lanjutan</li>
        <li>Berbagi laporan secara online melalui Power BI Service</li>
      </ul>
      <p>
        Power BI sangat populer di dunia bisnis karena kemudahan penggunaan dan kemampuannya dalam visualisasi data skala besar.
      </p>
    </div>
  ),
  "Lesson 4.2: Creating Visualizations": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 4.2: Creating Visualizations</h2>
      <p className="mb-2">
        Visualisasi data membantu menyampaikan informasi secara efektif. Power BI menyediakan berbagai jenis visualisasi:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Bar chart, line chart, pie chart, scatter plot untuk data numerik dan kategorikal</li>
        <li>Map visualizations untuk data geografis</li>
        <li>Custom visual untuk kebutuhan khusus</li>
        <li>Interaktivitas melalui filter, slicer, dan drill-down</li>
      </ul>
      <p>
        Pilih visualisasi yang sesuai dengan tipe data dan tujuan analisis agar insight mudah dipahami oleh pengguna.
      </p>
    </div>
  ),
  "Lesson 4.3: Dashboard Design": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 4.3: Dashboard Design</h2>
      <p className="mb-2">
        Dashboard yang baik harus informatif, mudah dibaca, dan menampilkan metrik utama secara jelas. Prinsip desain dashboard:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Gunakan visualisasi yang sesuai dengan tipe data</li>
        <li>Minimalkan clutter dan gunakan warna secara konsisten</li>
        <li>Fokus pada insight utama dan KPI</li>
        <li>Pastikan dashboard responsif dan mudah diakses</li>
        <li>Gunakan hierarki visual untuk menonjolkan informasi penting</li>
      </ul>
      <p>
        Dashboard yang efektif dapat mempercepat proses pengambilan keputusan di organisasi.
      </p>
    </div>
  ),
  // Module 5
  "Lesson 5.1: Descriptive Statistics": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 5.1: Descriptive Statistics</h2>
      <p className="mb-2">
        Statistik deskriptif digunakan untuk meringkas dan mendeskripsikan karakteristik utama dari sekumpulan data. Ukuran yang umum digunakan:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>
          <b>Mean (Rata-rata):</b> Nilai rata-rata dari data, digunakan untuk mengetahui kecenderungan sentral.
        </li>
        <li>
          <b>Median:</b> Nilai tengah dari data yang diurutkan, berguna jika data mengandung outlier.
        </li>
        <li>
          <b>Mode:</b> Nilai yang paling sering muncul dalam data.
        </li>
        <li>
          <b>Standar Deviasi & Variansi:</b> Mengukur sebaran data terhadap rata-rata.
        </li>
        <li>
          <b>Range, Quartile, Percentile:</b> Menggambarkan distribusi data.
        </li>
      </ul>
      <p>
        Statistik deskriptif adalah fondasi sebelum melakukan analisis statistik lanjutan.
      </p>
    </div>
  ),
  "Lesson 5.2: Inferential Statistics": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 5.2: Inferential Statistics</h2>
      <p className="mb-2">
        Statistik inferensial digunakan untuk membuat generalisasi atau kesimpulan tentang populasi berdasarkan data sampel. Teknik yang umum:
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Estimasi parameter populasi (mean, proporsi, dsb.)</li>
        <li>Pengujian hipotesis (uji t, uji chi-square, dsb.)</li>
        <li>Analisis regresi dan korelasi</li>
        <li>Penentuan interval kepercayaan</li>
        <li>Analisis ANOVA untuk membandingkan rata-rata lebih dari dua kelompok</li>
      </ul>
      <p>
        Statistik inferensial sangat penting dalam riset ilmiah dan pengambilan keputusan berbasis data.
      </p>
    </div>
  ),
  "Lesson 5.3: Hypothesis Testing": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 5.3: Hypothesis Testing</h2>
      <p className="mb-2">
        Pengujian hipotesis adalah metode statistik untuk menentukan apakah ada cukup bukti dalam sampel data untuk mendukung suatu klaim tentang populasi.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Menentukan hipotesis nol (H0) dan alternatif (H1)</li>
        <li>Menentukan tingkat signifikansi (alpha, biasanya 0.05)</li>
        <li>Menghitung nilai statistik uji (z, t, chi-square, dsb.) dan p-value</li>
        <li>Membandingkan p-value dengan alpha untuk mengambil keputusan</li>
        <li>Contoh aplikasi: uji perbedaan rata-rata, uji proporsi, uji asosiasi antar variabel</li>
      </ul>
      <p>
        Pengujian hipotesis membantu memastikan keputusan yang diambil berdasarkan data memiliki dasar statistik yang kuat.
      </p>
    </div>
  ),
  // Module 6
  "Lesson 6.1: Business Case Study": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 6.1: Business Case Study</h2>
      <p className="mb-2">
        Studi kasus bisnis menampilkan penerapan analisis data untuk memecahkan masalah nyata, seperti meningkatkan efisiensi operasional, mengoptimalkan pemasaran, atau memprediksi permintaan pasar.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Mengidentifikasi masalah bisnis dan tujuan analisis</li>
        <li>Mengumpulkan dan menganalisis data terkait</li>
        <li>Mengembangkan solusi berbasis data, misal segmentasi pelanggan atau prediksi churn</li>
        <li>Mengukur dampak dan merekomendasikan tindakan</li>
        <li>Studi kasus nyata: analisis penjualan retail, optimasi rantai pasok, dsb.</li>
      </ul>
      <p>
        Studi kasus membantu mengasah kemampuan analitis dan penerapan konsep dalam dunia nyata.
      </p>
    </div>
  ),
  "Lesson 6.2: Healthcare Data Analysis": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 6.2: Healthcare Data Analysis</h2>
      <p className="mb-2">
        Analisis data di bidang kesehatan digunakan untuk memantau tren penyakit, mengevaluasi efektivitas pengobatan, dan meningkatkan manajemen rumah sakit.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Analisis data pasien untuk deteksi dini penyakit dan personalisasi pengobatan</li>
        <li>Evaluasi outcome pengobatan dan efisiensi biaya</li>
        <li>Penggunaan machine learning untuk prediksi diagnosis dan prognosis</li>
        <li>Analisis data epidemiologi untuk kebijakan kesehatan masyarakat</li>
        <li>Studi kasus: prediksi lonjakan pasien, analisis klaim asuransi kesehatan</li>
      </ul>
      <p>
        Data kesehatan sangat sensitif, sehingga aspek privasi dan keamanan data harus selalu diperhatikan.
      </p>
    </div>
  ),
  "Lesson 6.3: Social Media Analytics": (
    <div>
      <h2 className="text-xl font-bold mb-2">Lesson 6.3: Social Media Analytics</h2>
      <p className="mb-2">
        Analitik media sosial membantu organisasi memahami perilaku pengguna, tren, dan efektivitas kampanye digital melalui data dari platform seperti Twitter, Facebook, dan Instagram.
      </p>
      <ul className="list-disc ml-6 mb-2">
        <li>Analisis sentimen dan opini publik menggunakan text mining dan NLP</li>
        <li>Identifikasi influencer dan jaringan sosial dengan graph analysis</li>
        <li>Monitoring performa kampanye digital secara real-time</li>
        <li>Visualisasi tren hashtag, engagement, dan reach</li>
        <li>Studi kasus: analisis viral marketing, deteksi hoaks, prediksi tren</li>
      </ul>
      <p>
        Social media analytics kini menjadi bagian penting dalam strategi pemasaran digital modern.
      </p>
    </div>
  ),
};

const LearningSectionVideo = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { course_id } = useParams();

  // Ambil module & lesson dari query param
  function getQueryParams() {
    const params = new URLSearchParams(location.search);
    return {
      module: parseInt(params.get("module") || "1", 10),
      lesson: parseInt(params.get("lesson") || "1", 10),
    };
  }

  const { module, lesson } = getQueryParams();

  // State untuk lesson yang sedang dipilih
  const [selectedLesson, setSelectedLesson] = useState({
    moduleIdx: module - 1,
    lessonIdx: lesson - 1,
    lesson: sidebarModules[module - 1]?.lessons[lesson - 1] || sidebarModules[0].lessons[0],
  });

  // Sync selectedLesson dengan query param
  useEffect(() => {
    const moduleIdx = module - 1;
    const lessonIdx = lesson - 1;
    if (
      sidebarModules[moduleIdx] &&
      sidebarModules[moduleIdx].lessons[lessonIdx]
    ) {
      setSelectedLesson({
        moduleIdx,
        lessonIdx,
        lesson: sidebarModules[moduleIdx].lessons[lessonIdx],
      });
    }
  }, [module, lesson]);

  const [openModule, setOpenModule] = useState(module - 1);
  const [commentInput, setCommentInput] = useState("");
  const [tab, setTab] = useState("comment"); // "comment" or "downloads"

  const handleGoBack = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  const handleModuleClick = (idx) => {
    setOpenModule(idx === openModule ? null : idx);
  };

  const handleBreadcrumbClick = (name) => {
    if (name === "My Courses") {
      navigate("/dashboard/mycourses");
    }
  };

  // Handler klik lesson: update URL agar langsung direct ke lesson yang diklik
  const handleLessonClick = (lesson, moduleIdx, lessonIdx) => {
    if (lesson.isQuiz) {
      // Gunakan template literal agar moduleIdx + 1 dievaluasi
      navigate(`/dashboard/workshop/learningquiz?module=${moduleIdx + 1}`);
    } else {
      navigate(
        `/dashboard/user/mycourses/learningsectionvideo/${course_id}?module=${moduleIdx + 1}&lesson=${lessonIdx + 1}`
      );
    }
  };

  // Render konten lesson sesuai yang dipilih
  const renderLessonContent = () => {
    if (!selectedLesson.lesson) return null;
    return lessonContents[selectedLesson.lesson.label] || lessonContents["Lesson 1.2: Types of Data"];
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
                    onClick={() => navigate("/dashboard/user/mycourses/learningsectionvideo/" + course_id + "?module=1&lesson=1")}
                    className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                    type="button"
                  >
                    Data Analysis Fundamentals
                  </button>
                </li>
                <li className="mx-1">&gt;</li>
                <li>
                  <button
                    onClick={() => navigate(`/dashboard/user/mycourses/learningsectionvideo/${course_id}?module=${selectedLesson.moduleIdx + 1}&lesson=1`)}
                    className="hover:underline text-inherit bg-transparent border-0 p-0 m-0 cursor-pointer"
                    type="button"
                  >
                    Module {selectedLesson.moduleIdx + 1}
                  </button>
                </li>
                <li className="mx-1">&gt;</li>
                <li>
                  <span className="text-blue-700 font-semibold">
                    {selectedLesson.lesson.label}
                  </span>
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
                    {mod.lessons.map((lesson, i) => {
                      const isSelected =
                        selectedLesson.moduleIdx === idx && selectedLesson.lessonIdx === i;
                      return (
                        <React.Fragment key={lesson.label || lesson}>
                          <button
                            className={`flex items-center w-full py-2 pl-6 pr-2 text-left rounded-none border-0 bg-transparent transition group
                              ${isSelected ? "bg-[#F3F6FC]" : ""}
                              ${lesson.isQuiz ? "text-[#2854C6] font-semibold" : "text-[#1B2342]"}
                            `}
                            style={{
                              fontWeight: lesson.isQuiz || lesson.bold || isSelected ? 600 : 400,
                              fontSize: lesson.isQuiz ? "16px" : "15px"
                            }}
                            onClick={() => handleLessonClick(lesson, idx, i)}
                          >
                            <span className="flex-1 truncate flex items-center gap-2">
                              <span className={`
                                ${isSelected ? "text-[#2854C6] font-semibold" : ""}
                                ${lesson.bold && !isSelected ? "font-semibold" : ""}
                                ${lesson.isQuiz && !isSelected ? "font-semibold" : ""}
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
                        </React.Fragment>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full text-left px-4 py-2 text-[#1B2342] font-semibold rounded-[8px] border border-[#E0E5F2] bg-white hover:bg-[#F3F6FC] mt-0">
              Final Exam
            </button>
          </div>
        </aside>

        {/* MAIN CONTENT */}
        <section className="flex-1 flex flex-col min-w-0">
          {/* --- VIDEO SECTION --- */}
          <div className="w-full rounded-lg border border-[#E0E5F2] bg-black h-[250px] flex flex-col justify-center items-center mb-3 relative overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              style={{
                minHeight: 250,
                maxHeight: 250,
                borderRadius: "0.5rem",
              }}
              src="https://www.youtube.com/embed/WUZ03ATlOkk?si=XfO4dVXqN1G4lyJZ"
              title="Module 1 Lesson 1.2 Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* --- END VIDEO SECTION --- */}

          {/* --- KONTEN LESSON --- */}
          <div className="bg-white px-2 py-4 mb-4">
            {renderLessonContent()}
          </div>

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

          {/* Comment List */}
          {tab === "comment" && (
            <>
              <div className="flex-1 mb-2 max-h-[340px] min-h-[180px] bg-white px-0 pt-2">
                {comments.map((c, idx) => (
                  <div key={idx} className="mb-0">
                    <div className="flex items-start mb-2">
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