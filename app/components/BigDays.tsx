const BigDays = () => {
  return (
    <section id="bigdays" className="py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-100/70 bg-linear-to-br from-emerald-50/70 to-teal-50/50">
          <div className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" />

          <div className="relative p-8 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <p className="text-sm font-semibold text-emerald-700">Agenda</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                  Peringatan Hari Besar Islam
                </h2>
                <p className="mt-3 text-gray-600 max-w-2xl">
                  Catatan penting untuk merencanakan ibadah dan kegiatan
                  bersama.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white/70 ring-1 ring-white/70 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500">Focus</p>
                  <p className="text-lg font-bold text-gray-900">Kebersamaan</p>
                </div>
                <div className="hidden sm:block h-px w-12 bg-linear-to-r from-transparent via-emerald-500/60 to-transparent" />
                <div className="rounded-2xl bg-white/70 ring-1 ring-white/70 px-4 py-3 shadow-sm">
                  <p className="text-xs font-semibold text-gray-500">Misi</p>
                  <p className="text-lg font-bold text-emerald-700">Berbagi</p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                {
                  day: "Ramadhan",
                  title: "Kuliah & Tadabbur",
                  desc: "Kajian intensif & buka bersama.",
                },
                {
                  day: "Idul Fitri",
                  title: "Silaturahmi",
                  desc: "Kegiatan bersama keluarga besar.",
                },
                {
                  day: "Idul Adha",
                  title: "Kurban & Berbagi",
                  desc: "Penyaluran daging kurban.",
                },
              ].map((x) => (
                <div
                  key={x.day}
                  className="group rounded-2xl bg-white/70 ring-1 ring-emerald-100/60 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                    {x.day}
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-gray-900 group-hover:text-emerald-700 transition">
                    {x.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">{x.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BigDays;
