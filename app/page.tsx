import Hero from "./components/Hero";
import Navbar from "./components/Navbar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";
import Keunggulan from "./components/Keunggulan";
import LayananDarurat from "./components/LayananDarurat";
import Praktisi from "./components/Praktisi";
import Testimoni from "./components/KataMereka";

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
        <LayananDarurat />
      </div>
    </main>
  );
};

export default Home;
