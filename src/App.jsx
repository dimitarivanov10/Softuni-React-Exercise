import Header from "./components/Header.jsx";
import Preloader from "./components/Preloader.jsx";
import Welcome from "./components/Welcome.jsx";
import FeaturesSmall from "./components/FeaturesSmall.jsx";
import FeaturesBig from "./components/FeaturesBig.jsx";
import FeaturesBigItem from "./components/FeaturesBigItem.jsx";
import WorkProcessSection from "./components/WorkProcessSection.jsx";
import TestimonialsStart from "./components/TestimonialsStart.jsx";
import PricingPlans from "./components/PricingPlans.jsx";
import CounterParallax from "./components/CounterParallax.jsx";
import Blog from "./components/Blog.jsx";
import ContactUs from "./components/ContactUs.jsx";
import Footer from "./components/Footer.jsx";
function App() {
  return (
    <main>
      <Preloader />

      <Header />

      <Welcome />

      <FeaturesSmall />

      <FeaturesBig />

      <FeaturesBigItem />

      <WorkProcessSection />

      <TestimonialsStart />

      <PricingPlans />

      <CounterParallax />

      <Blog />

      <ContactUs />

      <Footer />
    </main>
  );
}

export default App;
