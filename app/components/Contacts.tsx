const Contacts = () => {
  return (
    <section id="kontak" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5">
            <div className="relative overflow-hidden rounded-3xl border border-emerald-100 bg-white/70 backdrop-blur shadow-sm p-8">
              <div className="pointer-events-none absolute -top-10 -right-10 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-teal-500/10 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold text-emerald-700">Kontak</p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900">
                  Sapa Mushola Hidayatussalaam
                </h2>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  Tersedia untuk pertanyaan, pendaftaran kegiatan, dan
                  kolaborasi program.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl bg-white/80 ring-1 ring-gray-100 p-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4 6h16v12H4V6Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m4 7 8 6 8-6"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-gray-900">
                        Email
                      </p>
                      <a
                        href="mailto:info@hidayatussalaam.org"
                        className="text-sm text-emerald-700 hover:text-emerald-800 font-semibold break-all"
                      >
                        info@hidayatussalaam.org
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 rounded-2xl bg-white/80 ring-1 ring-gray-100 p-4">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100">
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21s-7-4.35-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.65-9 9-9 9Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">
                        Lokasi
                      </p>
                      <p className="text-sm text-gray-600">
                        Perumahan Bumi Anugrah Sejahtera, Bekasi
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a
                    href="#dukungan"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-sm transition hover:bg-emerald-700 hover:-translate-y-0.5"
                  >
                    <span>Mulai Kolaborasi</span>
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5 12h14"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                      <path
                        d="m13 5 7 7-7 7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-emerald-700">
                    Bantuan cepat
                  </p>
                  <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-gray-900">
                    Respon yang ramah & terarah
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 ring-1 ring-emerald-100 px-4 py-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-semibold text-emerald-800">
                    Tersedia
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    title: "Pendaftaran Kegiatan",
                    desc: "Info jadwal & pendaftaran jamaah",
                    icon: "calendar",
                  },
                  {
                    title: "Kolaborasi Program",
                    desc: "Kemitraan dengan komunitas/instansi",
                    icon: "hand",
                  },
                  {
                    title: "Pertanyaan ZIS",
                    desc: "Panduan infaq, zakat, dan sodaqoh",
                    icon: "wallet",
                  },
                  {
                    title: "Ulasan & Saran",
                    desc: "Masukan untuk meningkatkan layanan",
                    icon: "spark",
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="group rounded-2xl bg-linear-to-br from-white to-emerald-50/30 ring-1 ring-gray-100 p-5 transition hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white ring-1 ring-emerald-100 text-emerald-700">
                        {x.icon === "calendar" && (
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 3v2M17 3v2"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M4 7h16v14H4V7Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M8 11h4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {x.icon === "hand" && (
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7 11V5a2 2 0 0 1 4 0v6"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M11 11V3a2 2 0 0 1 4 0v8"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                            <path
                              d="M15 11V5a2 2 0 0 1 4 0v7c0 5-3 9-8 9S3 17 3 12v-1a2 2 0 0 1 4 0v1"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                        {x.icon === "wallet" && (
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M3 7h18v14H3V7Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M3 7l14-3v3"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M16 14h4"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                        {x.icon === "spark" && (
                          <svg
                            className="h-5 w-5"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2Z"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </span>
                      <div>
                        <p className="font-bold text-gray-900">{x.title}</p>
                        <p className="text-sm text-gray-600 mt-1">{x.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-2xl bg-emerald-600 p-5 text-white">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold">Catatan</p>
                    <p className="text-lg font-extrabold">
                      Kirim pesan singkat, kami bantu arahkan.
                    </p>
                  </div>
                  <a
                    href="mailto:info@hidayatussalaam.org"
                    className="inline-flex items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/30 px-4 py-2 text-sm font-semibold hover:bg-white/20 transition"
                  >
                    Email Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
