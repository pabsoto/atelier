
import Navbar from "@/components/Navbar";
import HeroCarousel from "@/components/HeroCarousel";
import ArtistSection from "@/components/ArtistSection";
import MerchSection from "@/components/MerchSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900">
      <Navbar />
      <main>
        <HeroCarousel />
        <ArtistSection />
        <MerchSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
