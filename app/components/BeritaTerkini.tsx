function BeritaTerkini() {
  const berita = [
    {
      title: "Kajian Rutin Setiap Jumat Malam",
      desc: "Mari ikuti kajian rutin bersama ustadz setiap ba'da Isya.",
      date: "22 Juni 2026",
    },
    {
      title: "Program TAWAF Dibuka Kembali",
      desc: "Pendaftaran program Tabungan Wafat dibuka untuk jamaah.",
      date: "20 Juni 2026",
    },
    {
      title: "Pengajian Akhir Tahun 1447 H",
      desc: "Acara pengajian dan santunan anak yatim akan diadakan.",
      date: "18 Juni 2026",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto" id="berita">
      <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Berita Terkini
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {berita.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="w-full h-40 bg-gray-100 rounded-lg mb-4 flex items-center justify-center text-gray-400">
              <svg
                className="w-12 h-12"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
            <p className="text-gray-400 text-xs mt-3">{item.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BeritaTerkini;
