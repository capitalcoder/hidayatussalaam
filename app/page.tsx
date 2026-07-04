import BeritaTerkini from "./components/BeritaTerkini";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sambutan from "./components/Greeting";
import Tentang from "./components/About";
import Actions from "./components/Activities";
import BigDays from "./components/BigDays";
import Charity from "./components/Zis";
import Support from "./components/Support";
import Contacts from "./components/Contacts";

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

      {/* Big Days */}
      <BigDays />

      {/* Kegiatan */}
      <Actions />

      {/* ZIS */}
      <Charity />

      {/* Dukungan */}
      <div className="py-12" id="dukungan">
        <Support />
      </div>

      {/* Kontak */}
      <div className="py-12" id="kontak">
        <Contacts />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
