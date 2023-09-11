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

import LayananDarurat from "./components/LayananDarurat";

const Home = () => {
  return (
    <main className="space-y-24">
      <div className="bg-cover bg-hero bg-no-repeat md:my-0">
        <Navbar />
        <Hero />
      </div>
      <div className="container max-w-7xl mx-auto space-y-24">
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
      </div>
    </main>
  );
};

export default Home;
