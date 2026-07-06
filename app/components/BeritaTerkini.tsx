function BeritaTerkini() {
  const berita = [
    {
      title: "Kajian Rutin Setiap Jumat Malam",
      desc: "Mari ikuti kajian rutin bersama ustadz setiap ba'da Isya.",
      date: "22 Juni 2026",
      tag: "Kajian",
    },
    {
      title: "Program TAWAF Dibuka Kembali",
      desc: "Pendaftaran program Tabungan Wafat dibuka untuk jamaah.",
      date: "20 Juni 2026",
      tag: "Program",
    },
    {
      title: "Pengajian Akhir Tahun 1447 H",
      desc: "Acara pengajian dan santunan anak yatim akan diadakan.",
      date: "18 Juni 2026",
      tag: "Event",
    },
  ];

  return (
    <section id="berita" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-10">
          <div>
            <p className="text-sm font-semibold text-emerald-700">Update</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
              Berita Terkini
            </h2>
            <p className="mt-3 text-gray-600 max-w-2xl">
              Informasi terbaru seputar kegiatan dan program di Mushola
              Hidayatussalaam.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Baru diperbarui
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {berita.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl bg-white/80 backdrop-blur border border-gray-100 p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              <div
                className="absolute inset-x-0 top-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(16,185,129,0) 0%, rgba(16,185,129,0.9) 50%, rgba(20,184,166,0) 100%)",
                }}
              />

              <div className="flex items-start justify-between gap-4">
                <div className="inline-flex items-center rounded-full bg-emerald-50 ring-1 ring-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800">
                  {item.tag}
                </div>
                <div className="rounded-xl bg-gray-50 ring-1 ring-gray-100 p-2 text-emerald-700">
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2v20"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <path
                      d="M17 7H9a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div className="mt-4 w-full h-36 rounded-xl bg-linear-to-br from-gray-100 to-emerald-50 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-gray-400"
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

              <h3 className="mt-5 text-lg font-bold tracking-tight text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {item.desc}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <p className="text-gray-400 text-xs">{item.date}</p>
                <a
                  href="#kontak"
                  className="text-sm font-semibold text-emerald-700 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition"
                >
                  Detail →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BeritaTerkini;
