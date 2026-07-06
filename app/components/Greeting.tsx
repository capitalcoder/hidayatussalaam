function Sambutan() {
  return (
    <section
      className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
      id="tentang"
    >
      <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 h-40 w-40 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-teal-500/10 blur-3xl" />

      <div className="relative bg-white/70 backdrop-blur rounded-3xl border border-emerald-100/60 shadow-sm p-8 sm:p-10">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="relative w-28 h-28 sm:w-32 sm:h-32">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-emerald-500/20 to-teal-500/10" />
            <div className="absolute inset-1 rounded-full bg-emerald-100/60" />
            <div className="relative w-full h-full rounded-full bg-emerald-200/80 flex items-center justify-center text-emerald-700 text-4xl font-extrabold tracking-tight">
              JS
            </div>
          </div>

          <div className="flex-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 ring-1 ring-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-800">
              <svg
                className="h-4 w-4"
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
              Sambutan Ketua DKM
            </div>

            <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
              Assalamu&apos;alaikum,
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                Selamat datang
              </span>
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              Assalamu&apos;alaikum warahmatullahi wabarakatuh. Selamat datang
              di Mushola Hidayatussalaam. Kami mengucapkan terima kasih atas
              kunjungan Anda. Mushola ini kami bangun sebagai tempat ibadah dan
              pusat kegiatan keislaman masyarakat. Mari kita jaga dan makmurkan
              mushola ini bersama-sama. Semoga Allah SWT meridhoi setiap langkah
              kita.
            </p>

            <div className="mt-6 flex items-center justify-between gap-4">
              <p className="text-gray-800 font-semibold">- Joni Susanto M.pd</p>
              <a
                href="#dukungan"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-white font-semibold shadow-sm transition hover:bg-emerald-700 hover:-translate-y-0.5"
              >
                <span>Berpartisipasi</span>
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
    </section>
  );
}

export default Sambutan;
