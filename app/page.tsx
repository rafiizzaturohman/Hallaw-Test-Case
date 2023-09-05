import Hero from "./components/Hero";
import Navbar from "./components/Navbar/NavBar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Tentang from "./components/Tentang";
import Layanan from "./components/Layanan";

const Home = () => {
  return (
    <main className="container max-w-7xl mx-auto space-y-24">
      <div className="relative before:absolute before:top-0 before:left-0 before:bg-gradient-to-b before:from-blue-400/50 before:to-transparent before:pointer-events-none">
        <div className="bg-cover bg-hero bg-no-repeat md:my-0">
          <Navbar />
          <Hero />
        </div>
      </div>
      <Tentang />
      <Layanan />
    </main>
  );
};

export default Home;
