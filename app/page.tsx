import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import InfoBanner from "@/components/InfoBanner";
import PopularProducts from "@/components/PopularProducts";
import PromoBanner from "@/components/PromoBanner";
import TutorialSection from "@/components/TutorialSection";
import DeliverySection from "@/components/DeliverySection";
import PreFooter from "@/components/PreFooter";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSlider />
        <InfoBanner />
        <PopularProducts />
        <PromoBanner />
        <TutorialSection />
        <DeliverySection />
      </main>
      <PreFooter />
      <Footer />
    </div>
  );
}
