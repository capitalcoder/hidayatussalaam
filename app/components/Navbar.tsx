function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-emerald-700">
              Hidayatussalaam
            </span>
          </div>
          <div className="hidden md:flex space-x-8">
            <NavLink href="#beranda">Beranda</NavLink>
            <NavLink href="#pengurus">Tentang</NavLink>
            <div className="relative group">
              <button className="text-gray-600 hover:text-emerald-600 transition-colors py-2 text-sm font-medium">
                PHBI
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
            <NavLink href="#sponsor">Dukungan</NavLink>
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

export default Navbar;
