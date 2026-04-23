import Hero from '../components/Hero';
import FeaturesGrid from '../components/FeaturesGrid';
import BenefitsList from '../components/BenefitsList';
import HowItWorks from '../components/HowItWorks';
import Community from '../components/Community';
import Services from '../components/Services';

const Home = () => {
  return (
    <>
      <Hero />

      {/* Features Section */}
      <section id="features">
        <FeaturesGrid />
        <BenefitsList />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works">
        <HowItWorks />
      </section>

      {/* Services Section */}
      <Services />

      {/* About Us Placeholder */}
      <section id="about-us" className="py-24 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-primary-dark mb-6 font-outfit">ABOUT US</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium">
            AjoVault is on a mission to bring financial inclusion to millions by digitizing
            trusted community savings models. We believe in the power of collective growth
            and the resilience of community-driven finance.
          </p>
        </div>
      </section>

      {/* Community Section */}
      <Community />

      {/* Contact Section Placeholder */}
      <section id="contact-us" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-black text-primary-dark mb-6 font-outfit">CONTACT US</h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mb-8">
            Have questions or want to partner with us? Reach out and our team will get back to you shortly.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
