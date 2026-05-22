bantu buatkan brief dalam bentuk md untuk referensi projek ini sebagai dokumentasi

PROJECT PLAN
Dokumen Project Plan
Coding Camp 2026 powered by DBS Foundation

ID Tim Capstone Project : CC26-PSU263
Tema Capstone : Future-Ready Work & Economy
Nama/Judul Proyek : Bisakerja
List Anggota :
CDCC183D6X0746 - Tasya Anggraeni Firdaus - Data Scientist - [Aktif]
CDCC183D6Y1799 - Dzikri Albantani - Data Scientist - [Aktif]
CFCC183D6Y1124 - Salman Abdurrahman - Full-Stack Web Developer - [Aktif]
CFCC183D6Y1549 - Agel Saputra - Full-Stack Web Developer - [Aktif]
CACC183D6X0902 - Linda David - AI Engineer - [Aktif]
Ringkasan Eksekutif
Bisakerja hadir sebagai respons atas dinamika pasar tenaga kerja Indonesia yang kompetitif namun terhambat oleh inefisiensi pencocokan kualifikasi. Berdasarkan data Badan Pusat Statistik (BPS) per Agustus 2025, Tingkat Pengangguran Terbuka (TPT) nasional tercatat sebesar 4,85% atau mencakup 7,46 juta jiwa. Meskipun secara umum menurun, tingkat pengangguran untuk lulusan universitas masih berada pada angka yang mengkhawatirkan yaitu 5,83%. Kondisi ini diperburuk oleh fenomena horizontal mismatch atau ketidaksesuaian bidang studi dengan pekerjaan yang mencapai 73,97% pada kelompok lulusan vokasi muda. Masalah utama dalam ekosistem ini adalah rendahnya visibilitas terhadap tingkat kecocokan kerja serta fragmentasi informasi lowongan di berbagai platform yang memaksa pencari kerja menggunakan metode trial and error dalam melamar pekerjaan. Dampaknya adalah rendahnya tingkat respons lamaran yang hanya berkisar 2%, serta meningkatnya beban psikososial akibat fenomena ghosting rekrutmen yang dialami oleh 41% kandidat. Berdasarkan permasalahan tersebut, penelitian ini merumuskan pertanyaan mengenai bagaimana memanfaatkan teknologi Artificial Intelligence untuk mengklasifikasikan profil kompetensi pencari kerja dengan persyaratan industri secara akurat, bagaimana merancang sistem pendukung keputusan yang memberikan penjelasan transparan terkait skor kecocokan, serta bagaimana memetakan kesenjangan keterampilan (skill gap) secara objektif. Bisakerja dirancang sebagai Career Decision Engine berbasis web dengan fitur Job Fit Scoring otomatis dan Application Intelligence untuk melacak progres lamaran secara cerdas. Proyek ini dipilih karena tim melihat peluang besar untuk mentransformasi proses pencarian kerja menjadi pengambilan keputusan strategis berbasis data yang diproyeksikan mampu meningkatkan peluang keberhasilan lamaran hingga 15-40% guna mendukung produktivitas ekonomi menuju visi Indonesia Emas 2045.
Cakupan Proyek dan Hasil Kerja
Cakupan Proyek
Cakupan proyek Bisakerja difokuskan pada pengembangan sebuah sistem pendukung keputusan karir (Career Decision Engine) berbasis web yang dirancang untuk meningkatkan efisiensi pencarian kerja melalui integrasi data dan kecerdasan buatan. Proyek ini memfokuskan batasan operasionalnya pada pengembangan algoritma Job Fit Scoring dan Skill Gap Analysis yang bertujuan membantu pengguna mengenali tingkat kecocokan mereka terhadap suatu posisi secara objektif. Dengan durasi pengerjaan 4-5 minggu, tim membagi tanggung jawab secara spesifik mulai dari pengadaan data pipeline otomatis, pemodelan AI yang transparan, hingga pembangunan infrastruktur full-stack yang stabil untuk memastikan sistem dapat dikirimkan tepat waktu tanpa terjadi perluasan fitur yang tidak terencana.
Pendekatan interaksi dalam proyek ini dirancang agar tetap inklusif bagi seluruh pencari kerja. Pengguna tanpa akun diberikan akses terbatas untuk melakukan pencarian dan penjelajahan agregasi lowongan kerja dari berbagai platform sumber. Sementara itu, pengguna yang telah terautentikasi akan mendapatkan pengalaman penuh berupa analisis mendalam terkait kecocokan kompetensi, rekomendasi strategi karir yang personal, serta fitur pelacakan lamaran secara terpusat. Melalui pembagian ini, Bisakerja diharapkan mampu mentransformasi proses pencarian kerja dari metode trial and error menjadi pengambilan keputusan strategis berbasis data.
Fitur Utama yang Menjadi Fokus Pengembangan
Agregasi Lowongan Kerja
Sistem pengumpulan data lowongan secara otomatis dari platform Glints, Jobstreet, Kalibrr, dan Dealls.
Job Fit Scoring
Perhitungan skor kecocokan (0-100) berdasarkan kesesuaian keahlian, pengalaman, dan preferensi pengguna.
Explainable AI (XAI)
Pemberian transparansi dan penjelasan detail mengenai alasan di balik skor kecocokan yang dihasilkan oleh model.
Skill Gap Analysis
Identifikasi kesenjangan kompetensi dan pemberian rekomendasi prioritas keahlian yang perlu ditingkatkan oleh pengguna.
Application Tracker
Sistem manajemen untuk memantau status lamaran (Applied, Interview, Rejected) secara mandiri.
User Preference Management
Fitur pengaturan profil yang mencakup keahlian, lokasi impian, dan ekspektasi gaji sebagai basis perhitungan AI.
Batasan di Luar Cakupan Proyek
Pengembangan aplikasi dalam bentuk mobile native (Android/iOS).
Fitur pengiriman lamaran otomatis langsung ke website mitra/sumber.
Integrasi langsung dengan sistem rekrutmen internal perusahaan (B2B/ATS Integration).
Implementasi sistem pembayaran atau payment gateway untuk fitur premium.
Proses verifikasi dokumen resmi atau CV menggunakan teknologi OCR tingkat lanjut.
Deskripsi Tugas dan Tanggung Jawab Tim
Pembagian peran strategis bagi setiap anggota tim berdasarkan learning path masing-masing. Pembagian ini dirancang untuk memaksimalkan spesialisasi individu dalam sinkronisasi sistem, mulai dari pengolahan data mentah oleh tim Data Science hingga implementasi antarmuka oleh tim Full-Stack.
Dzikri Albantani
Peran : Data Science
Deskripsi Pekerjaan :
Bertanggung jawab penuh dalam siklus teknis pengolahan data, mulai dari pengadaan dataset awal melalui scraping data lowongan kerja historis hingga melakukan analisis eksploratif (EDA) untuk memetakan tren pasar kerja. Fokus utama mencakup pembangunan infrastruktur Automated Scraping Pipeline guna memastikan pembaruan data harian berjalan otomatis dan terintegrasi ke sistem. Selain itu, peran ini mencakup tahap Deployment menggunakan dashboard Streamlit serta pengujian validasi melalui A/B Testing untuk menjamin akurasi rekomendasi harian. Seluruh proses diakhiri dengan penyusunan dokumentasi teknis dan serah terima sistem untuk memastikan rilis final proyek mencapai standar performa optimal
Output :
Menghasilkan koleksi data lowongan kerja industri teknologi hasil scraping yang berfungsi sebagai basis utama pelatihan model. Output teknis mencakup laporan analisis eksploratif (EDA) berupa visualisasi tren keterampilan dan gaji yang dilengkapi narasi strategis. Dibangun pula infrastruktur Automated Scraping Pipeline menggunakan skrip otomatisasi untuk menjamin ketersediaan data terbaru yang terintegrasi ke database situs web setiap hari. Selain itu, tersedia Dashboard Validasi berbasis Streamlit serta laporan pengujian A/B Testing untuk memverifikasi akurasi serta relevansi rekomendasi harian. Seluruh proses diakhiri dengan dokumentasi teknis final yang mencakup performa model dengan target akurasi di atas 85% serta panduan integrasi API.
Tasya Anggraeni . F
Peran : Data Science
Deskripsi Pekerjaan :
Bertanggung jawab penuh dalam membangun fondasi data dan logika bisnis proyek ini. Dimulai dari mendefinisikan masalah serta menentukan tujuan proyek agar hasil akhirnya terukur secara bisnis. Mengelola seluruh alur data dari melakukan scraping ribuan data lowongan kerja historis untuk pelatihan model, hingga membangun sistem penarikan data otomatis (automated scraper) untuk pembaruan setiap hari. Menjaga kualitas data dengan melakukan pembersihan secara manual dan otomatis agar model AI tidak bias dan menghasilkan prediksi yang relevan. Serta berperan dalam mengekstraksi wawasan pasar kerja melalui analisis trend serta memvalidasi performa model menggunakan dashboard Streamlit sebelum sistem diserahkan ke tim Fullstack untuk rilis final.
Output :
Dokumen Landasan Masalah berisi dokumentasi strategis yang menetapkan target proyek serta metrik keberhasilan yang terukur. Koleksi data lowongan kerja industri teknologi yang telah melalui tahap pembersihan dan standarisasi. Sistem ekstraksi data harian yang menjamin ketersediaan data terbaru pada platform secara berkelanjutan. Visualisasi data mengenai pola kompetensi dan kebutuhan terkini di industri teknologi. Dashboard Validasi berbasis Streamlit untuk memverifikasi dan menguji akurasi skor rekomendasi model secara berkala. Skrip pemrosesan data otomatis yang memastikan data mentah dapat langsung dikonsumsi oleh model AI. Dokumentasi final mengenai performa sistem dan panduan integrasi untuk diserahkan kepada tim pengembang.
Linda David
Peran : Artificial Intelligence
Deskripsi Pekerjaan : Bertanggung Jawab membangun Model Deep Learning menggunakan TensorFlow Functional API dengan Membangun dan melatih arsitektur model inti berbasis Deep Learning untuk menghitung skor kecocokan. Mengimplementasikan Explainable AI (XAI) agar model dapat menjelaskan alasan di balik setiap skor secara transparan (breakdown skill, experience, dan preference match). Membuat Inference Code dan membungkusnya menjadi REST API menggunakan FastAPI. Melakukan integrasi dan end-to-end testing bersama tim Backend, serta menyiapkan paket model export dan dokumentasi.
Output : Hasil utama dari pekerjaan ini adalah sebuah program kecerdasan buatan yang sudah matang dan siap digunakan, yang disimpan dalam format file .keras. Program ini tidak hanya mampu memberikan penilaian secara otomatis, tetapi juga dilengkapi dengan sistem laporan digital yang dapat menjelaskan secara rinci alasan di balik pemberian skor tersebut, termasuk analisis kecocokan keahlian kandidat. Agar sistem ini dapat langsung digunakan oleh bagian lain, diperlukan jalur akses layanan mandiri (REST API) yang memungkinkan sistem berkomunikasi dengan aplikasi lainnya secara cepat. Seluruh fungsi tersebut sudah melalui tahap uji coba menyeluruh untuk memastikan kinerjanya berjalan lancar dari awal hingga akhir, yang dibuktikan melalui rekaman dan tangkapan layar proses pengujian. Terakhir, sebagai bagian dari proses serah terima, disusun paket dokumen lengkap yang berisi program inti, alur kerja sistem, petunjuk penggunaan, serta daftar kebutuhan teknis lainnya. Hal ini bertujuan agar tim teknis selanjutnya dapat mengoperasikan atau mengembangkan sistem ini dengan mudah di masa mendatang.
Salman Abdurrahman
Peran : Full-Stack Backend
Deskripsi Pekerjaan : Bertanggung jawab penuh atas arsitektur server, keamanan sistem, dan manajemen database pada platform Bisakerja. Peran ini mencakup perancangan pondasi sistem yang kokoh melalui pembuatan skema database yang efisien serta implementasi sistem autentikasi dan otorisasi pengguna untuk menjamin keamanan data. Secara strategis, bertugas membangun layanan komunikasi data (API) yang memungkinkan pengguna melakukan pencarian dan filtrasi lowongan kerja secara real-time. Selain itu, berperan penting dalam proses integrasi data dengan membangun jalur masuk (data pipeline) otomatis dari hasil scraping tim Data Science ke database utama. Pada tahap akhir, fokus pada penyambungan sistem backend dengan API model kecerdasan buatan agar hasil prediksi dan rekomendasi karir dapat dikonsumsi dengan lancar oleh sisi frontend, serta memastikan seluruh sistem berjalan stabil dan bebas hambatan sebelum dirilis ke tahap produksi.
Output :
Output dari peran ini mencakup arsitektur server dan skema database yang telah dioptimalkan untuk skalabilitas data lowongan kerja, sistem autentikasi keamanan pengguna yang menjamin integritas data akun, serta serangkaian layanan RESTful API untuk mendukung fitur pencarian dan filtrasi informasi secara real-time. Selain itu, dihasilkan pula jalur integrasi data yang menghubungkan hasil riset tim Data Science ke lingkungan produksi, modul interaksi pengguna untuk fitur penyimpanan lowongan dan pelacakan lamaran, serta konektor teknis yang menghubungkan backend dengan API inferensi model AI untuk menyajikan skor rekomendasi karir yang transparan. Seluruh rangkaian output ini ditutup dengan dokumentasi teknis backend yang komprehensif serta sistem yang telah melalui tahap uji coba akhir sehingga siap untuk dirilis secara stabil di lingkungan produksi tanpa kendala teknis yang berarti.
Agel Saputra
Peran : Full-Stack Frontend
Deskripsi Pekerjaan : Bertanggung jawab penuh dalam merancang pengalaman pengguna (UI/UX) hingga pengembangan frontend dan integrasi sistem secara end-to-end pada proyek. Dimulai dari menerjemahkan kebutuhan sistem menjadi desain visual yang intuitif melalui pembuatan wireframe dan prototype interaktif di Figma. Berperan langsung dalam slicing design untuk mengubah rancangan visual menjadi antarmuka frontend yang responsif. Selain itu, bertugas memastikan kelancaran fungsionalitas aplikasi dengan mengintegrasikan fitur-fitur umum ke database backend, serta mengimplementasikan kapabilitas kecerdasan buatan dengan menghubungkan aplikasi ke model AI melalui API backend, sehingga menghasilkan produk akhir yang fungsional
Output : Secara keseluruhan, output yang dihasilkan dari peran ini mencakup aset desain UI/UX berupa wireframe dan prototype interaktif di Figma, serta antarmuka frontend yang responsif sebagai hasil slicing desain. Lebih lanjut, dihasilkan pula sistem yang sepenuhnya terintegrasi, di mana fungsionalitas umum aplikasi telah terhubung lancar ke database backend, lengkap dengan fitur kecerdasan buatan (AI) yang diimplementasikan melalui integrasi API.
Milestone Proyek
Milestone ini merupakan titik capaian mingguan yang harus dipenuhi oleh tim untuk memastikan seluruh komponen aplikasi mulai dari riset data hingga integrasi sistem siap dikirimkan sesuai jadwal yang telah disepakati bersama.
Minggu
Deskripsi Hasil Pekerjaan
M1
Fokus minggu pertama adalah membangun fondasi teknis dan konseptual proyek. Tim secara bersama-sama menetapkan landasan masalah, tujuan proyek, serta merancang arsitektur model AI yang akan digunakan. Sembari mengumpulkan dataset primer dalam skala besar, infrastruktur dasar sistem seperti server, skema database, dan keamanan. Mulai dibangun, diikuti dengan perancangan UI/UX dari wireframe hingga prototipe interaktif.
M2
Minggu kedua difokuskan pada penyiapan data dan pengembangan visual aplikasi. Tim mengekstraksi (melalui web scraping) dan membersihkan lebih dari 1000 data historis lowongan kerja teknologi, yang kemudian dianalisis karakteristiknya untuk proses feature engineering dan vektorisasi AI. Di sisi pengembangan web, desain Figma mulai diterjemahkan ke dalam komponen front-end (slicing) serta dibangunnya layanan komunikasi data agar lowongan dapat dicari dan difilter.
M3
Pada tahap ini, pengembangan bergerak menuju automasi dan kecerdasan sistem. Tim mengembangkan scraper otomatis agar data selalu diperbarui dan mulai melatih arsitektur model inti berbasis Deep Learning. Secara paralel, data pipeline diintegrasikan agar masuk secara otomatis ke database utama, dan fitur-fitur umum aplikasi mulai disinkronkan dengan backend.
M4
Fokus bergeser pada validasi sistem dan peningkatan pengalaman pengguna. Hasil automasi dan sistem scoring dievaluasi serta divisualisasikan melalui dashboard Streamlit. Agar keputusan AI lebih transparan, tim mengembangkan modul Explainable AI (XAI) dan mengemas kode inferensinya menggunakan FastAPI. Aplikasi juga diperkaya dengan fitur interaktif seperti menyimpan lowongan kerja dan melacak progres lamaran.
M5
Minggu kelima adalah fase krusial untuk menyatukan semua komponen yang telah dibangun. Model AI final diekspor dan API-nya (FastAPI) dihubungkan secara langsung dengan sistem backend. Seluruh fitur cerdas berbasis AI tersebut kemudian diintegrasikan sepenuhnya ke dalam antarmuka pengguna agar aplikasi dapat berjalan sebagai satu kesatuan produk yang utuh.
M6
Minggu terakhir didedikasikan untuk pemolesan akhir dan administrasi. Tim melakukan pengujian menyeluruh untuk memastikan seluruh sistem bebas dari bug dan siap untuk dirilis ke tahap produksi. Seluruh proses ini ditutup dengan penyelesaian laporan teknis proyek serta dokumentasi model AI secara komprehensif.

Jadwal Pengerjaan
Penjadwalan ini menyajikan rincian aktivitas harian guna memantau progres secara mendalam. Rencana ini juga berfungsi sebagai panduan sinkronisasi tim melalui weekly standup untuk mendeteksi kendala teknis sejak dini dan memastikan setiap anggota bekerja sesuai timeline.

Uraian Rencana Penugasan/Job Desk Setiap Learning Path
Data Science
Penugasan pada jalur Data Science berfokus pada pembangunan fondasi data dan logika bisnis proyek Bisakerja. Tim bertanggung jawab mulai dari fase inisiasi untuk menentukan landasan masalah dan tujuan proyek yang terukur secara bisnis. Tugas utama mencakup akuisisi data melalui scraping ribuan informasi lowongan kerja historis, melakukan pembersihan data secara manual dan otomatis untuk memitigasi bias, hingga membangun sistem scraper otomatis yang menjamin pembaruan data harian di platform. Selain mengelola pipeline data, tim ini bertugas mengekstraksi wawasan pasar melalui analisis tren industri dan melakukan validasi performa model menggunakan dashboard Streamlit untuk memastikan akurasi data sebelum diintegrasikan ke sistem utama. Seluruh proses ini ditutup dengan penyusunan laporan teknis komprehensif mengenai kualitas dan karakteristik data yang digunakan.
Artificial Intelligence
Penugasan pada jalur Artificial Intelligence berfokus pada pengembangan mesin kecerdasan buatan sebagai fitur inti rekomendasi karir. Tanggung jawab dimulai dengan melakukan problem framing teknis dan merancang arsitektur model Deep Learning menggunakan TensorFlow Functional API. AI Engineer berperan aktif dalam tahap persiapan data melalui feature engineering dan vektorisasi agar informasi lowongan kerja siap diproses oleh algoritma. Tugas berlanjut pada pelatihan model inti, implementasi Explainable AI (XAI) untuk memberikan transparansi alasan pemberian skor rekomendasi kepada pengguna, hingga pengemasan model ke dalam kode inferensi menggunakan FastAPI. Hasil akhirnya adalah model final yang telah teruji akurasinya, terdokumentasi secara teknis, dan siap untuk diakses oleh sistem backend melalui API.
Full Stack
Penugasan pada jalur Full-Stack mencakup pengembangan infrastruktur backend hingga antarmuka frontend secara menyeluruh untuk memastikan aplikasi Bisakerja berfungsi dengan stabil. Tugas dimulai dari perancangan arsitektur server, skema database, sistem keamanan autentikasi, serta pembuatan desain UI/UX melalui wireframe dan prototype interaktif di Figma. Tim bertanggung jawab dalam melakukan slicing design ke dalam komponen frontend yang responsif dan membangun layanan API untuk fitur pencarian serta filtrasi lowongan kerja. Peran krusial lainnya adalah melakukan integrasi data pipeline dari tim DS ke database utama serta menghubungkan sistem backend dengan API model AI agar hasil rekomendasi dapat tampil secara real-time di sisi pengguna. Penugasan diakhiri dengan pengelolaan fitur interaksi pengguna, uji coba menyeluruh, dan memastikan aplikasi siap dirilis ke lingkungan produksi dengan performa yang optimal.
Sumber Daya Proyek
Teknologi Yang Digunakan
Bahasa Pemrograman
TypeScript
Bahasa JavaScript dengan pengetikan statis (static typing) agar kode frontend atau backend lebih aman dan minim bug
Python
Bahasa serbaguna yang digunakan untuk analisis data dan pengembangan model machine learning.
Framework
React
Pustaka (library) frontend untuk membuat antarmuka pengguna yang interaktif.
ExpressJS
Framework backend Node.js ringan untuk membuat server dan API.
FastAPI
Framework backend Python yang sangat cepat, ideal untuk membuat API dan menyajikan model machine learning.
TensorFlow
Framework utama untuk merancang dan melatih model machine learning / AI.
Sentence-Transforms
Teknologi untuk mengolah bahasa manusia agar komputer dapat memahami makna dan konteks kalimat secara mendalam.
Database
PostgresSQL
Basis data relasional yang andal untuk menyimpan data utama aplikasi (pengguna, profil, pekerjaan).
ORM
Prisma
Penghubung kode aplikasi (TypeScript) dengan database agar pengelolaan data lebih mudah tanpa menulis SQL manual.
Tools Pengembangan
Git
Sistem untuk melacak riwayat perubahan kode dan memudahkan kerja tim.
GitHub
Platform online untuk menyimpan, mengelola, dan berkolaborasi pada repositori Git.
TensorBoard
Alat visualisasi untuk memantau performa pelatihan model machine learning.
Joblib
Library Python untuk menyimpan dan memuat model machine learning secara efisien
Deployment
Docker
Alat untuk mengemas aplikasi ke dalam container agar dapat berjalan konsisten di lingkungan atau server mana pun
Heroku
Platform cloud praktis untuk mempublikasikan (deploy) aplikasi agar bisa diakses di internet.
Dataset
IndoTech-Job Dataset
Data lowongan pekerjaan teknologi di Indonesia untuk bahan pelatihan AI.
TechTalent-Profile Dataset
Data profil/CV talenta digital untuk melatih sistem rekomendasi atau pencocokan kandidat.
ID-TechSkill Taxonomy
Kamus standar keahlian teknologi untuk mengklasifikasikan skill pada lowongan maupun profil kandidat
Daftar Pustaka
[1] Badan Pusat Statistik, "Laporan Angkatan Kerja Nasional Agustus 2025: Tingkat Pengangguran Terbuka," 2025. [Online]. Tersedia: https://m.kumparan.com/kumparanbisnis/pengangguran-jangka-panjang-mendominasi-31-susah-cari-kerja-lebih-dari-setahun-26BRtwRGX3o
[2] G. A. Adrian, "Analisis Pengangguran Terdidik dan Relevansi Lulusan Perguruan Tinggi di Indonesia," Jurnal Bisnis Mahasiswa, 2025. [Online]. Tersedia: https://jurnalbisnismahasiswa.com/index.php/jurnal/article/download/926/488/4093
[3] A. Setiyana dan S. I. Oktora, "Analisis Horizontal Mismatch pada Tenaga Kerja Lulusan SMK di Indonesia," Jurnal Kependudukan Indonesia, vol. 19, no. 2, 2024. [Online]. Tersedia: https://ejournal.brin.go.id/jki/article/download/5513/10605/38472
[4] The SMERU Research Institute, "Readiness of Employers and Jobseekers to Move Online: Challenges Facing Labor Market Platforms," SMERU Working Paper, no. 1, 2024. [Online]. Tersedia: https://smeru.or.id/sites/default/files/publication/wp_employers_and_jobseekers_eng_2024-10-8.pdf
[5] AIApply Research, "The 7-Step Strategic Framework: Application Intelligence and Modern Response Rates," 2025. [Online]. Tersedia: https://aiapply.co/blog/best-way-to-apply-for-jobs
[6] Ruangkerja, "Survei Clutch: Dampak Psikososial dan Fenomena Ghosting dalam Rekrutmen," 2023. [Online]. Tersedia: https://www.ruangkerja.id/blog/fenomena-ghosting-dunia-kerja
[7] S. Roy et al., "AI-Powered Career Guidance: A Scalable Model for Personalized Recommendations," IEEE Access, vol. 11, 2023. [Online]. Tersedia: https://www.researchgate.net/publication/400558524_AI-Powered_Career_Guidance_A_Scalable_Model_for_Personalized_Recommendations
[8] K. R. Chetan, "Smart Resume Matcher: AI-Powered Job and Skill Recommendation System," International Journal of Innovative Research in Technology (IJIRT), vol. 11, 2025. [Online]. Tersedia: https://ijirt.org/publishedpaper/IJIRT189601_PAPER.pdf
[9] A. M. Salih et al., "A Perspective on Explainable Artificial Intelligence Methods: SHAP and LIME," Advanced Intelligent Systems, 2024. [Online]. Tersedia: https://www.scribd.com/document/824180839/Advanced-Intelligent-Systems-2024-Salih-A-Perspective-on-Explainable-Artificial-Intelligence-Methods-SHAP-and-LIME-1
Rencana Manajemen Risiko dan Isu
Dalam mengidentifikasi potensi risiko dan tantangan selama pengembangan proyek Bisakerja, tim menggunakan pendekatan analisis SWOT sebagai berikut:
Strengths (Kekuatan)
Menggunakan pendekatan Decision Support System berbasis profil minat yang lebih personal dibandingkan platform job listing konvensional.
Fitur Job Fit Scoring dan Skill Gap Analysis memberikan nilai guna nyata bagi pencari kerja dalam menentukan strategi karir.
Solusi dirancang untuk menjawab masalah riil pengangguran terdidik dan horizontal mismatch yang datanya sangat terukur di Indonesia.
Weaknesses (Kelemahan)
Keterbatasan waktu pengembangan yang hanya berkisar 4-5 minggu, sehingga fitur yang diimplementasikan masih dalam skala Minimum Viable Product (MVP).
Sangat bergantung pada ketersediaan dan kualitas dataset profil pekerjaan untuk menjaga akurasi sistem rekomendasi.
Model prediksi awal mungkin memerlukan validasi lebih lanjut untuk menangani variasi format resume atau deskripsi pekerjaan di dunia nyata.
Opportunities (Peluang)
Tingginya permintaan tenaga kerja sektor teknologi di Indonesia yang mencapai 600.000 talenta per tahun.
Besarnya segmen pengguna dari kalangan Gen Z (usia 15-24 tahun) yang saat ini menghadapi tingkat pengangguran sebesar 16,26%.
Potensi integrasi dengan lembaga pendidikan atau platform pembelajaran digital untuk membantu menutup celah kompetensi.
Threats (Ancaman)
Adanya risiko bias algoritma atau hasil prediksi yang tidak akurat yang dapat menurunkan kepercayaan pengguna terhadap sistem.
Persaingan dengan platform rekrutmen besar yang sudah memiliki basis data pengguna yang sangat luas.
Rendahnya literasi digital pada sebagian target pengguna yang dapat menghambat adopsi fitur cerdas pada aplikasi.
Untuk mengatasi risiko yang telah diidentifikasi, tim akan melakukan beberapa langkah strategis. Pertama, tim Data Science dan AI Engineer akan fokus pada pengembangan baseline model yang stabil sejak minggu keempat untuk memitigasi risiko kegagalan integrasi dengan sistem frontend dan backend. Kedua, untuk menjaga sinkronisasi antar lini kerja (FS, DS, dan AI), tim mewajibkan koordinasi internal setiap akhir pekan guna menyamakan pemahaman teknis terkait skema API dan database. Ketiga, integritas kode sumber akan dijaga secara disiplin menggunakan sistem version control Git untuk mencegah kehilangan data selama kolaborasi. Terakhir, jika ditemukan kendala teknis yang menghambat linimasa, tim akan melakukan prioritas ulang dengan fokus utama pada fungsi inti aplikasi agar proyek tetap selesai tepat waktu tanpa mengurangi kualitas esensial sistem.

IDE PRODUK
Template Ide Produk — Bisakerja (Final Version)

1. Nama Ide
   Bisakerja: AI-Powered Career Decision Engine untuk Pencari Kerja Indonesia
2. Latar Belakang Masalah
   Target pengguna:
   Fresh graduate, early career (0–3 tahun pengalaman), dan career switcher di bidang digital/tech.
   Pengguna yang aktif mencari kerja namun kesulitan menentukan strategi yang tepat dan efisien.
   Masalah utama:
   Lowongan kerja tersebar di berbagai platform sehingga proses pencarian menjadi tidak efisien dan memakan waktu.
   Pengguna tidak memiliki visibilitas terhadap tingkat kecocokan (job fit) mereka dengan suatu lowongan.
   Tidak adanya sistem yang mampu mengidentifikasi kesenjangan skill (skill gap) terhadap pekerjaan yang diinginkan.
   Proses melamar kerja cenderung berbasis trial & error tanpa strategi yang jelas.
   Tidak terdapat feedback loop untuk mengevaluasi hasil lamaran (diterima, ditolak, atau tidak ada respons).
   Minimnya guidance berbasis data untuk menentukan langkah karir selanjutnya.
   Dampak:
   Pengguna membuang waktu dan energi pada lowongan yang kurang relevan.
   Peluang kerja yang sesuai sering terlewat.
   Proses pencarian kerja menjadi tidak terarah dan menurunkan motivasi.
   Pengguna tidak memiliki insight untuk meningkatkan peluang keberhasilan.
   Kenapa penting:
   Dunia kerja semakin kompetitif dan berbasis skill.
   Pencari kerja membutuhkan decision support system, bukan sekadar platform listing.
   Pendekatan berbasis data dan AI dapat membantu meningkatkan efisiensi dan peluang diterima kerja.
3. Solusi
   Bisakerja dikembangkan sebagai Career Decision Engine yang membantu pengguna dalam:
   Menemukan lowongan kerja yang relevan
   Memahami tingkat kecocokan diri terhadap suatu pekerjaan
   Mengidentifikasi skill yang perlu ditingkatkan
   Menentukan strategi melamar yang optimal
   Mengevaluasi performa pencarian kerja secara berkelanjutan
   Solusi ini mengintegrasikan:
   Agregasi lowongan kerja
   AI-based job fit scoring
   Skill gap analysis
   Career strategy recommendation
   Application intelligence (feedback loop)
4. Fitur MVP
   Core Features
   Agregasi lowongan kerja dari 1–2 sumber utama.
   Pencarian lowongan dengan filter (keyword, lokasi, tipe kerja).
   Detail lowongan yang terstruktur dan mudah dipahami.
   Sistem autentikasi (register/login).
   Preferences user:
   Skill
   Lokasi
   Tipe kerja
   Ekspektasi gaji
   AI & Intelligence Features (Fokus Utama)
5. Job Fit Scoring (Explainable)
   Menghitung skor kecocokan user terhadap lowongan (0–100).
   Berdasarkan:
   Skill match
   Experience match
   Preferences match
   Output:
   Persentase kecocokan
   Breakdown alasan (explainable AI)
6. Skill Gap Analysis
   Mengidentifikasi gap antara skill user dan requirement job.
   Output:
   Daftar skill yang belum dimiliki
   Prioritas skill (high/medium/low)
   Rekomendasi pembelajaran (basic)
7. Career Strategy Recommendation (Key Feature)
   Memberikan rekomendasi langkah strategis berbasis data.
   Contoh:
   Apakah job layak dilamar sekarang
   Skill apa yang harus diprioritaskan
   Estimasi kesiapan (readiness level)
   Output:
   Actionable next steps
   Probabilitas keberhasilan (estimasi sederhana)
8. AI Career Copilot (Basic)
   Membantu user memahami konteks lowongan:
   Ringkasan job description
   Highlight requirement penting
   Insight tambahan
9. Application Intelligence (Feedback Loop)
   Melacak proses lamaran:
   Applied
   Interview
   Rejected
   Analisis:
   Pola keberhasilan/penolakan
   Identifikasi bottleneck (misalnya skill tertentu)
   Output:
   Insight untuk perbaikan strategi
   Supporting Features
   Bookmark lowongan
   Application tracker sederhana
   Riwayat aktivitas pengguna
10. Unique Value (UVP)
    Keunggulan utama:
    Mengubah proses pencarian kerja dari sekadar browsing menjadi data-driven decision making.
    Pembeda dari kompetitor:
    Job Fit Scoring yang explainable dan transparan.
    Skill Gap Analysis yang actionable.
    Career Strategy Recommendation yang memberikan arahan nyata.
    Feedback loop berbasis data dari hasil lamaran.
    Nilai unik:
    Mengurangi trial & error dalam melamar kerja.
    Memberikan insight berbasis data untuk meningkatkan peluang diterima.
    Membantu pengguna membangun strategi karir yang terarah.
11. Target User
    Primary segment:
    Fresh graduate bidang digital/tech
    Early career (0–3 tahun pengalaman)
    Secondary segment:
    Career switcher ke bidang digital/tech
    Karakteristik umum:
    Digital-savvy
    Aktif mencari peluang kerja
    Membutuhkan guidance berbasis data
12. Model Bisnis (Optional)
    Model utama: Freemium (B2C)
    Free:
    Akses lowongan
    Job fit scoring terbatas
    Bookmark & tracker dasar
    Pro (future scope):
    Skill gap analysis lengkap
    Career strategy lebih advanced
    Insight & analytics lebih detail
13. Validasi Awal (Optional)
    Problem Validation
    Interview pencari kerja:
    kesulitan menentukan job yang cocok
    pengalaman trial & error saat melamar
    Solution Validation
    Uji:
    Akurasi job fit scoring
    Relevansi skill gap analysis
    Kegunaan rekomendasi strategi
    Indikator Keberhasilan
    User kembali menggunakan platform (retention)
    Penggunaan fitur AI secara berulang
    User merasa terbantu dalam pengambilan keputusan
14. Scope & Timeline (High-Level)
    Scope MVP
    Job aggregation (basic)
    Job fit scoring
    Skill gap analysis
    Career strategy recommendation (basic)
    Simple tracker
    Timeline (6–8 minggu)
    Week 1–2:
    Setup project, database, auth
    Basic job aggregation
    Week 3–4:
    Job search & preferences
    Job fit scoring
    Week 5–6:
    Skill gap analysis
    Career strategy recommendation
    Week 7–8:
    UI/UX refinement
    Testing & demo preparation
15. Teknologi yang Digunakan
    Frontend:
    React / Next.js
    Tailwind CSS
    Backend:
    Express.js
    Database:
    PostgreSQL (Prisma ORM)
    AI / Processing:
    NLP (OpenAI / model sederhana)
    Rule-based scoring system
    Infrastructure (Optional):
    Docker
    VPS deployment
16. Future Development (Optional)
    Integrasi learning platform (course recommendation)
    CV analyzer & auto-improvement
    Interview preparation assistant
    Employer dashboard
    Mobile application

FITUR MVP

# 🧠 **LIST FITUR BISAKERJA (COMPLETE)**

## 🔐 1. Authentication & User Management

- Register akun user
- Login user
- Logout user
- Manajemen profil user
- Input & update data user:
  - Skill
  - Lokasi
  - Tipe kerja (remote/on-site/hybrid)
  - Ekspektasi gaji

- Penyimpanan preferences user

---

## 🔎 2. Job Aggregation & Job Listing

- Agregasi lowongan kerja dari 4 platform sumber (glints, jobstreet, kalibrr, dealls)
- Reminder harian ke email untuk job yang sesuai dengan preferensi
- Normalisasi & strukturisasi data lowongan (menyamakan struktur job list dan job detail)
- List lowongan kerja
- Detail lowongan kerja:
  - Deskripsi pekerjaan
  - Requirement
  - Lokasi
  - Tipe kerja
  - Gaji (jika ada)
    Link ke website asal
    Skill

---

## 🔍 3. Job Search & Filtering

- Search lowongan berdasarkan keyword
- Filter berdasarkan:
  - Lokasi
  - Tipe kerja
  - (Opsional) range gaji

- Sorting lowongan (opsional, tapi recommended):
  - Relevansi
  - Terbaru

---

## ⭐ 4. Job Bookmarking

- Bookmark lowongan
- Unbookmark lowongan
- List lowongan yang disimpan

---

## 📊 5. Job Fit Scoring (AI - Core Feature)

- Perhitungan skor kecocokan (0–100)
- Perhitungan berdasarkan:
  - Skill match
  - Experience match
  - Preferences match

- Output:
  - Persentase kecocokan
  - Breakdown alasan (explainable AI)

- Visualisasi skor (progress bar / indicator)

---

## 🎯 7. Career Strategy Recommendation (AI - Key Feature)

- Evaluasi apakah job layak dilamar sekarang
- Rekomendasi:
  - Skill yang perlu diprioritaskan (opsional)
  - Langkah selanjutnya (next steps)

- Estimasi:
  - Readiness level
  - Probabilitas keberhasilan (basic estimation)

- Output actionable insights

---## 📈 9. Application Tracker

- Tracking status lamaran:
  - Applied
  - Interview
  - Rejected

- Update status lamaran
- List semua lamaran user

---* Integrasi platform pembelajaran (course recommendation)
*mentoring \*platform Pembelajaran
