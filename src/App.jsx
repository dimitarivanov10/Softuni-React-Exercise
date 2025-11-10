import Header from "./components/Header.jsx";
import Preloader from "./components/Preloader.jsx";
import Welcome from "./components/Welcome.jsx";
import FeaturesSmall from "./components/FeaturesSmall.jsx";
import Features from "./components/Features.jsx";
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

      <Features
        title="Let’s discuss about you project"
        content="Nullam sit amet purus libero. Etiam ullamcorper nisl ut augue blandit, at finibus leo efficitur. Nam gravida purus non sapien auctor, ut aliquam magna ullamcorper."
        imageUrl="assets/images/left-image.png"
      />
      <Features
        title="We can help you to grow your business"
        content="Aenean pretium, ipsum et porttitor auctor, metus ipsum iaculis nisi, a bibendum lectus libero vitae urna. Sed id leo eu dolor luctus congue sed eget ipsum. Nunc nec luctus libero. Etiam quis dolor elit."
        imageUrl="assets/images/right-image.png"
        reverse
      />
      {/* <FeaturesBigItem /> */}

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
