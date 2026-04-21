import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesGrid from './components/FeaturesGrid';
import BenefitsList from './components/BenefitsList';
import HowItWorks from './components/HowItWorks';
import Security from './components/Security';
import Community from './components/Community';
import Services from './components/Services';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-[#FCFCF9]">
      <Navbar />
      <main>
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
              and shared prosperity.
            </p>
          </div>
        </section>

        <Security />
        <Community />

        {/* Contact Us Placeholder */}
        <section id="contact-us" className="py-24 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-black text-primary-dark mb-6 font-outfit">CONTACT US</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed font-medium mb-8">
              Have questions or want to partner with us? Reach out and our team will get back to you shortly.
            </p>
            <button className="bg-primary-dark text-white px-10 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:bg-slate-800 transition-all">
              Send Message
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;