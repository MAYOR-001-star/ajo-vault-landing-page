import { HiShieldCheck } from 'react-icons/hi';
import { FaTwitter, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary-blue text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* CTA Section */}
        <div className="bg-white/5 border border-white/10 rounded-[4rem] p-12 lg:p-20 text-center mb-24 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-full bg-accent-blue/5 blur-[100px] -z-10" />
          <h3 className="text-4xl lg:text-7xl font-black mb-8 font-outfit tracking-tighter">
            Your Community. <span className="text-accent-blue underline decoration-accent-blue/20">Your Savings.</span><br />
            Secured.
          </h3>
          <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-medium">
            Join thousands of users who have digitized their community savings.
            Start building your financial future today.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://www.ajovault.ng/" target="_blank" className="bg-accent-blue hover:bg-blue-600 text-white px-12 py-5 rounded-full font-black text-lg transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-accent-blue/20 font-outfit uppercase tracking-widest">
              SIGN UP NOW
            </a>
            <button className="bg-transparent hover:bg-white/5 text-white border border-white/20 px-12 py-5 rounded-full font-black text-lg transition-all font-outfit uppercase tracking-widest">
              Learn More
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid md:grid-cols-4 gap-16 mb-16 border-b border-white/10 pb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="bg-accent-blue p-1.5 rounded-lg shadow-lg shadow-accent-blue/20">
                <HiShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight font-outfit">AjoVault</span>
            </div>
            <p className="text-white/50 leading-relaxed max-w-xs mb-8 font-medium">
              “Digitizing community savings and empowering financial freedom for every circle, everywhere.”
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all text-xl">
                <FaLinkedin />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all text-xl">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-black mb-8 text-accent-blue uppercase tracking-widest text-xs">The Company</h4>
            <ul className="space-y-4 text-white/40 text-sm font-bold uppercase tracking-tighter">
              <li><a href="#about-us" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#contact-us" className="hover:text-white transition-colors text-white font-black underline decoration-accent-blue">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-accent-blue uppercase tracking-widest text-xs">Product</h4>
            <ul className="space-y-4 text-white/40 text-sm font-bold uppercase tracking-tighter">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#security" className="hover:text-white transition-colors">Security</a></li>
              <li><a href="https://www.ajovault.ng/" target="_blank" className="hover:text-white transition-colors text-white font-black underline decoration-accent-blue">Get Started</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black mb-8 text-accent-blue uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4 text-white/40 text-sm font-bold uppercase tracking-tighter">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Safety Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Community Rules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-white/20 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2024 AjoVault Financial Technologies. All rights reserved.</p>
          <p>Built with <span className="text-red-500 mx-1">❤️</span> by AjoVault Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
