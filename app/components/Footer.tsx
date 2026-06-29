function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Mushola Hidayatussalaam. All rights
          reserved.
        </p>
        <p className="text-gray-400 text-xs mt-1">
          Perumahan Bumi Anugrah Sejahtera, Bekasi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
