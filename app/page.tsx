import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Fixed */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Sambutan Ketua DKM */}
      <Sambutan />

      {/* Berita Terkini */}
      <BeritaTerkini />

      {/* Footer */}
      <Footer />
    </main>
  );
}

// components/Navbar.tsx
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-emerald-700">
              Hidayatussalaam
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#beranda">Beranda</NavLink>
            <NavLink href="#pengurus">Pengurus</NavLink>
            <div className="relative group">
              <button className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-sm font-medium">
                Jadwal PHBI
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Peringatan Hari Besar Islam
              </div>
            </div>
            <NavLink href="#remaja">Remaja</NavLink>
            <NavLink href="#wanita">Wanita</NavLink>
            <div className="relative group">
              <button className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-sm font-medium">
                ZIS
              </button>
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Zakat, Infaq, Sodaqoh
              </div>
            </div>
            <NavLink href="#sponsor">Sponsor</NavLink>
            <NavLink href="#kontak">Kontak</NavLink>
          </div>
          <button className="md:hidden text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-sm font-medium"
    >
      {children}
    </a>
  );
}

// components/Carousel.tsx
function Carousel() {
  const slides = [
    {
      title: "Selamat Datang di Mushola Hidayatussalaam",
      subtitle: "Tempat ibadah yang nyaman dan penuh berkah",
      cta: "Explore",
      bg: "bg-gradient-to-r from-emerald-50 to-teal-50",
    },
    {
      title: "Berinfaq untuk Kemakmuran Mushola",
      subtitle: "Salurkan infaq terbaik Anda melalui kami",
      cta: "Infaq Sekarang",
      bg: "bg-gradient-to-r from-amber-50 to-orange-50",
    },
    {
      title: "Daftar Program TAWAF",
      subtitle: "Tabungan Wafat untuk persiapan akhirat",
      cta: "Daftar Sekarang",
      bg: "bg-gradient-to-r from-blue-50 to-indigo-50",
    },
  ];

  return (
    <section className="pt-16">
      <div className="relative overflow-hidden">
        <div className="flex transition-transform duration-500">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`min-w-full ${slide.bg} py-20 px-4 sm:px-6 lg:px-8`}
            >
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg text-gray-600 mb-8">{slide.subtitle}</p>
                <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm">
                  {slide.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Carousel indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full ${i === 0 ? "bg-emerald-600" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// components/Sambutan.tsx
function Sambutan() {
  return (
    <section
      id="beranda"
      className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto"
    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-32 h-32 rounded-full bg-emerald-100 flex-shrink-0 overflow-hidden">
            <div className="w-full h-full bg-emerald-200 flex items-center justify-center text-emerald-700 text-4xl font-bold">
              KH
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
            <p className="text-gray-700 font-medium mt-4">- KH. Ahmad Dahlan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// components/BeritaTerkini.tsx
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
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
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

// components/Footer.tsx
function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mushola Hidayatussalaam. All rights
          reserved.
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Jl. Masjid No. 123, Jakarta
        </p>
      </div>
    </footer>
  );
}
