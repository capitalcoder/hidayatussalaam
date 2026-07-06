"use client";

import React from "react";

type Partner = {
  name: string;
  tagline: string;
  gradient: string;
  badge: string;
};

const partners: Partner[] = [
  {
    name: "KaryaSehat",
    tagline: "Program layanan sosial",
    gradient: "from-emerald-500/20 to-teal-500/10",
    badge: "Social",
  },
  {
    name: "BarokahCare",
    tagline: "Layanan kemanusiaan",
    gradient: "from-teal-500/20 to-cyan-500/10",
    badge: "Care",
  },
  {
    name: "SedekahPrime",
    tagline: "Transparansi dukungan",
    gradient: "from-emerald-600/20 to-lime-500/10",
    badge: "Trust",
  },
  {
    name: "InfaqWorks",
    tagline: "Kolaborasi komunitas",
    gradient: "from-emerald-500/20 to-green-500/10",
    badge: "Partner",
  },
  {
    name: "WakafNext",
    tagline: "Gerakan keberlanjutan",
    gradient: "from-teal-500/20 to-emerald-500/10",
    badge: "Waqf",
  },
  {
    name: "TaqwaDigital",
    tagline: "Edukasi & digital outreach",
    gradient: "from-cyan-500/20 to-emerald-500/10",
    badge: "Digital",
  },
];

function LogoWordmark({ name }: { name: string }) {
  // Simple inline SVG wordmarks (sample company logos)
  return (
    <div className="flex items-center justify-center">
      <svg
        width="160"
        height="44"
        viewBox="0 0 160 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`${name} logo`}
      >
        <defs>
          <linearGradient
            id="g"
            x1="0"
            y1="0"
            x2="160"
            y2="44"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#059669" />
            <stop offset="1" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
        {/* mark */}
        <path
          d="M22 22c0-7.732 6.268-14 14-14 7.732 0 14 6.268 14 14 0 7.732-6.268 14-14 14-7.732 0-14-6.268-14-14Z"
          stroke="url(#g)"
          strokeWidth="2"
        />
        <path d="M35 13l-6 9 6 9 6-9-6-9Z" fill="url(#g)" opacity="0.9" />

        {/* word */}
        <text
          x="52"
          y="26"
          fontFamily="ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial"
          fontWeight="700"
          fontSize="16"
          fill="#052e2b"
        >
          {name}
        </text>
      </svg>
    </div>
  );
}

function PartnerCard({ partner, index }: { partner: Partner; index: number }) {
  return (
    <div
      className={
        "group relative overflow-hidden rounded-2xl border border-white/60 bg-white/80 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl" +
        " focus-within:-translate-y-1"
      }
      style={{
        // Subtle variety in the animated stripe
        // (keeps it light; no extra JS)
        animationDelay: `${index * 60}ms`,
      }}
    >
      {/* Animated gradient sheen */}
      <div
        className={
          "pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        }
      >
        <div
          className={
            "absolute -top-24 -left-24 h-40 w-40 rounded-full bg-linear-to-br " +
            partner.gradient +
            " blur-2xl"
          }
        />
        <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
      </div>

      <div className="relative p-5 sm:p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200">
              {partner.badge}
            </div>
            <h3 className="mt-3 text-lg font-bold tracking-tight text-gray-900">
              {partner.name}
            </h3>
            <p className="mt-1 text-sm text-gray-600">{partner.tagline}</p>
          </div>

          {/* Logo */}
          <div className="shrink-0">
            <div className="rounded-xl bg-linear-to-br from-emerald-50 to-teal-50 p-2 ring-1 ring-emerald-100">
              <LogoWordmark name={partner.name} />
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
            Dukungan Bermakna
          </span>
          <span className="rounded-full bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700 ring-1 ring-gray-200">
            Kolaborasi Aktif
          </span>
        </div>
      </div>

      {/* hover underline */}
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-linear-to-r from-emerald-500/0 via-emerald-500/70 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}

const Support = () => {
  return (
    <section id="dukungan" className="relative overflow-hidden py-16 sm:py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />
        <div className="absolute top-24 -left-24 h-64 w-64 rounded-full bg-teal-500/10 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6">
            <div className="inline-flex items-center gap-3 rounded-full bg-white/70 backdrop-blur px-4 py-2 ring-1 ring-white/60">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm">
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
              <p className="text-sm font-semibold text-gray-800">
                Dukungan untuk kemakmuran mushola
              </p>
            </div>

            <h2 className="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">
              Dukungan yang terasa,
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-500">
                berdampak nyata
              </span>
            </h2>

            <p className="mt-5 text-lg text-gray-600 leading-relaxed">
              Kami mengajak Anda untuk berkolaborasi dalam layanan spiritual dan
              sosial. Setiap bantuan membantu menjaga kegiatan rutin, program
              kemanusiaan, dan keberlangsungan fasilitas mushola.
            </p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur px-5 py-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Amanah & Terarah</p>
                    <p className="text-sm text-gray-600">
                      Penyaluran terukur dan bertanggung jawab.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/70 bg-white/70 backdrop-blur px-5 py-4 shadow-sm">
                <div className="flex items-center gap-3">
                  <span className="h-10 w-10 rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100 flex items-center justify-center">
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 7L10 17l-5-5"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <div>
                    <p className="font-bold text-gray-900">Kolaborasi Aktif</p>
                    <p className="text-sm text-gray-600">
                      Membangun program bersama komunitas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#kontak"
                className="inline-flex justify-center items-center rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-emerald-700 hover:-translate-y-0.5"
              >
                Hubungi Kami
              </a>
              <a
                href="#zis"
                className="inline-flex justify-center items-center rounded-xl bg-white/70 backdrop-blur px-6 py-3 font-semibold text-emerald-700 ring-1 ring-emerald-200 shadow-sm transition hover:bg-white hover:-translate-y-0.5"
              >
                Lihat Program ZIS
              </a>
            </div>
          </div>

          {/* Right info card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-white/70 bg-white/70 backdrop-blur shadow-sm overflow-hidden">
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-emerald-700">
                      Komitmen dukungan
                    </p>
                    <h3 className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
                      Kenali bagaimana dukungan bekerja
                    </h3>
                  </div>
                  <div className="rounded-2xl bg-linear-to-br from-emerald-600 to-teal-500 p-3 text-white shadow-sm">
                    <svg
                      className="h-7 w-7"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 6v6l4 2"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        stroke="currentColor"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 font-bold">
                      1
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">
                        Diskusi kebutuhan
                      </p>
                      <p className="text-sm text-gray-600">
                        Menentukan program yang paling mendesak.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-teal-50 text-teal-700 ring-1 ring-teal-100 font-bold">
                      2
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">
                        Penyaluran dukungan
                      </p>
                      <p className="text-sm text-gray-600">
                        Dukungan diarahkan sesuai rencana pelaksanaan.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100 font-bold">
                      3
                    </span>
                    <div>
                      <p className="font-bold text-gray-900">
                        Laporan & evaluasi
                      </p>
                      <p className="text-sm text-gray-600">
                        Transparansi dampak dan evaluasi program berkelanjutan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative px-6 pb-6">
                <div className="rounded-2xl bg-linear-to-r from-emerald-600 to-teal-500 p-px">
                  <div className="rounded-2xl bg-white/80 backdrop-blur px-5 py-4">
                    <p className="text-sm text-gray-700">
                      Butuh proposal kolaborasi?
                      <span className="font-semibold text-gray-900">
                        {" "}
                        Kirimkan tujuan dukungan Anda.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* subtle animated line */}
            <div className="mt-6 hidden sm:block">
              <div className="h-1 w-full rounded-full bg-linear-to-r from-emerald-500/0 via-emerald-500/60 to-emerald-500/0 opacity-70 animate-pulse" />
            </div>
          </div>
        </div>

        {/* Partners grid */}
        <div className="mt-14">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-emerald-700">
                Dukungan dari mitra
              </p>
              <h3 className="mt-1 text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                Tim yang mendukung perjalanan kami
              </h3>
              <p className="mt-2 text-gray-600 max-w-2xl">
                Sample company logos (placeholder) untuk menunjukkan tampilan
                partner/support. Ganti nama & logo sesuai kebutuhan.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-gray-500">
                Hover untuk detail
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>
          </div>

          <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {partners.map((p, i) => (
              <div
                key={p.name}
                className="animate-[fadeInUp_500ms_ease_forwards]"
              >
                <PartnerCard partner={p} index={i} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS animation (scoped) */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 10px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default Support;
