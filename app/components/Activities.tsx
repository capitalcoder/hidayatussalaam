const Actions = () => {
  return (
    <section id="kegiatan" className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="rounded-3xl border border-gray-100 bg-white shadow-sm overflow-hidden">
          <div className="px-6 sm:px-10 py-10 sm:py-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-emerald-700">
                  Program
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                  Kegiatan di Mushola
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  Tempat berkumpul, belajar, dan beribadah—dengan suasana yang
                  nyaman dan penuh makna.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-800 ring-1 ring-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  Update rutin
                </span>
              </div>
            </div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Pengajian Rutin",
                  time: "Ahad & Jumat",
                  icon: "book",
                },
                { title: "Kajian Anak", time: "Minggu Pagi", icon: "kids" },
                { title: "Kerja Bakti", time: "Sabtu", icon: "spark" },
                { title: "Bantuan Sosial", time: "Insidental", icon: "heart" },
                { title: "Kegiatan Remaja", time: "Bulanan", icon: "bolt" },
                {
                  title: "Konsultasi Ibadah",
                  time: "Berdasarkan jadwal",
                  icon: "chat",
                },
              ].map((c, idx) => (
                <div
                  key={c.title}
                  className="group relative rounded-2xl bg-linear-to-br from-white to-emerald-50/40 p-6 ring-1 ring-gray-100 transition hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ animationDelay: `${idx * 80}ms` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition">
                        {c.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">{c.time}</p>
                    </div>
                    <div className="shrink-0 inline-flex items-center justify-center rounded-xl bg-white/80 ring-1 ring-emerald-100 p-3">
                      {c.icon === "book" && (
                        <svg
                          className="h-5 w-5 text-emerald-700"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M6.5 2H20v20H6.5A2.5 2.5 0 0 0 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {c.icon === "kids" && (
                        <svg
                          className="h-5 w-5 text-emerald-700"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 21h8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M12 17v4"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                          <path
                            d="M7 10a5 5 0 0 1 10 0c0 3-2 7-5 7s-5-4-5-7Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {c.icon === "spark" && (
                        <svg
                          className="h-5 w-5 text-emerald-700"
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
                          <path
                            d="M19 14l.8 3.2L23 18l-3.2.8L19 22l-.8-3.2L15 18l3.2-.8L19 14Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {c.icon === "heart" && (
                        <svg
                          className="h-5 w-5 text-emerald-700"
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
                      )}
                      {c.icon === "bolt" && (
                        <svg
                          className="h-5 w-5 text-emerald-700"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M13 2L3 14h7l-1 8 10-12h-7l1-8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                      {c.icon === "chat" && (
                        <svg
                          className="h-5 w-5 text-emerald-700"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Actions;
