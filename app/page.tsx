import BeritaTerkini from "./components/BeritaTerkini";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sambutan from "./components/Greeting";
import Tentang from "./components/About";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navbar Fixed */}
      <Navbar />

      {/* Carousel */}
      <Carousel />

      {/* Sambutan Ketua DKM */}
      <Sambutan />

      {/* Carita Musholla */}
      <Tentang />

      {/* Berita Terkini */}
      <BeritaTerkini />

      {/* Footer */}
      <Footer />
    </main>
  );
}
