import { useState, useEffect } from 'react';
import { HiShieldCheck, HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detection logic for active section and URL update
      const sections = ['features', 'how-it-works', 'services', 'about-us', 'contact-us'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            if (activeSection !== section) {
              setActiveSection(section);
              window.history.replaceState(null, '', `#${section}`);
            }
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const navLinks = [
    { name: 'FEATURES', href: '#features' },
    { name: 'HOW IT WORKS', href: '#how-it-works' },
    { name: 'SERVICES', href: '#services' },
    { name: 'ABOUT US', href: '#about-us' },
    { name: 'CONTACT US', href: '#contact-us' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-blue/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
        }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <a href="/" className="flex items-center gap-2 relative z-10">
          <div className="bg-accent-blue p-1.5 rounded-lg shadow-lg shadow-accent-blue/20">
            <HiShieldCheck className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
          </div>
          <span className="text-xl lg:text-2xl font-bold text-white tracking-tight font-outfit">
            AjoVault
          </span>
        </a>

        {/* Center: Desktop Links (Hidden on Mobile/Medium) */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[10px] font-black transition-colors tracking-[0.2em] cursor-pointer ${activeSection === link.href.substring(1)
                ? 'text-accent-blue'
                : 'text-white/70 hover:text-accent-blue'
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Right Side: Desktop Button / Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a href="https://www.ajovault.ng/" target="_blank" className="hidden lg:block bg-accent-blue hover:bg-blue-600 text-white px-7 py-3 rounded-full font-black text-[10px] transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-accent-blue/20 tracking-widest uppercase cursor-pointer">
            SIGN UP NOW
          </a>
          
          <button
            className="lg:hidden text-white text-3xl p-2 -mr-2 cursor-pointer transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-primary-blue border-t border-white/10 overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <div className="flex flex-col p-8 gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-xl font-bold tracking-widest ${activeSection === link.href.substring(1) ? 'text-accent-blue' : 'text-white/80'
                }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://www.ajovault.ng/"
            target="_blank"
            className="flex items-center justify-center text-center bg-accent-blue text-white w-full py-4 rounded-full font-black shadow-lg mt-4 text-sm tracking-widest uppercase transition-all active:scale-95 hover:bg-blue-600 cursor-pointer"
          >
            SIGN UP NOW
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
