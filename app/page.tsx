import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar/NavBar";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import Keunggulan from "./components/Keunggulan";
import Praktisi from "./components/Praktisi";
import Testimoni from "./components/KataMereka";
import Event from "./components/Event";
import Kontak from "./components/Kontak";
import Berita from "./components/Berita";
import Download from "./components/DownloadUs";
import Footer from "./components/Footer";

import LayananDarurat from "./components/LayananDarurat";

const Home = () => {
  return (
    <main className="space-y-20">
      <Hero />
      <Tentang />
      <Layanan />
      <Keunggulan />
      <Praktisi />
      <Testimoni />
      <Event />
      <Kontak />
      <Berita />
      <Download />
      <LayananDarurat />
      <Footer />
    </main>
  );
};

export default Home;
