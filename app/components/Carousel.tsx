"use client";

import { useState, useEffect } from "react";

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Selamat Datang di Mushola Hidayatussalaam",
      subtitle: "Tempat ibadah yang nyaman dan penuh berkah",
      cta: "Explore",
      bg: "bg-gradient-to-r from-emerald-50 to-teal-50",
    },
    {
      title: "Pengajian Rutin",
      subtitle: (
        <div className="space-y-2">
          <p>Setiap Ahad Malam</p>
          <p className="font-semibold text-emerald-700">
            Pemateri: Fathun Mubarok
          </p>
          <p>Pukul 18.30 WIB</p>
          <p className="text-emerald-600">Materi: FIQIH</p>
        </div>
      ),
      cta: "Daftar Sekarang",
      bg: "bg-gradient-to-r from-purple-50 to-pink-50",
    },
    {
      title: "Ayo Berinfaq dan Bersodaqoh",
      subtitle: (
        <div className="space-y-2">
          <p>Salurkan infaq dan shodaqoh terbaik Anda</p>
          <p className="text-emerald-700 font-medium">
            Untuk kemakmuran Mushola Hidayatussalaam
          </p>
          <p className="text-sm text-gray-600">
            &quot;Perumpamaan orang yang menginfakkan hartanya di jalan Allah
            sepertisebutir biji yang menumbuhkan tujuh tangkai, pada setiap
            tangkai ada seratus biji.&quot; (QS. Al-Baqarah: 261)
          </p>
        </div>
      ),
      cta: "Infaq Sekarang",
      bg: "bg-gradient-to-r from-amber-50 to-orange-50",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <section id="beranda" className="pt-16">
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`min-w-full ${slide.bg} py-20 px-4 sm:px-6 lg:px-8`}
              >
                <div className="max-w-3xl mx-auto text-center">
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
                    {slide.title}
                  </h1>
                  <div className="text-lg text-gray-600 mb-8">
                    {slide.subtitle}
                  </div>
                  <button className="bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-8 rounded-lg transition-colors shadow-sm hover:shadow-md">
                    {slide.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() =>
              goToSlide((currentSlide - 1 + slides.length) % slides.length)
            }
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Previous slide"
          >
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentSlide + 1) % slides.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all hover:scale-110"
            aria-label="Next slide"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Carousel indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === currentSlide
                    ? "bg-emerald-600 w-6"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Carousel;
