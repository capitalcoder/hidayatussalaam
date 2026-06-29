function Sambutan() {
  return (
    <section
      id="beranda"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-emerald-100 shrink-0 overflow-hidden">
            <div className="w-full h-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-4xl font-bold">
              JS
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Sambutan Ketua DKM
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Assalamu&apos;alaikum warahmatullahi wabarakatuh. Selamat datang
              di Mushola Hidayatussalaam. Kami mengucapkan terima kasih atas
              kunjungan Anda. Mushola ini kami bangun sebagai tempat ibadah dan
              pusat kegiatan keislaman masyarakat. Mari kita jaga dan makmurkan
              mushola ini bersama-sama. Semoga Allah SWT meridhoi setiap langkah
              kita.
            </p>
            <p className="text-gray-700 font-medium mt-4">
              - Joni Susanto M.pd
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sambutan;
