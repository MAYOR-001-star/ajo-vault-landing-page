import { useState, useEffect } from 'react';
import { HiShieldCheck, HiMenu, HiX, HiChevronDown } from 'react-icons/hi';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

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
    { 
      name: 'FEATURES', 
      href: '#features',
      submenu: [
        { name: 'Join Circle', href: '#features' },
        { name: 'Fundraising', href: '#features' },
        { name: 'Group Savings', href: '#features' }
      ]
    },
    { 
      name: 'HOW IT WORKS', 
      href: '#how-it-works',
      submenu: [
        { name: 'Become an Agent', href: '#how-it-works' },
      ]
    },
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

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a
                href={link.href}
                className={`flex items-center gap-1 text-[10px] font-black transition-colors tracking-[0.2em] cursor-pointer ${activeSection === link.href.substring(1)
                  ? 'text-accent-blue'
                  : 'text-white/70 hover:text-accent-blue'
                  }`}
              >
                {link.name}
                {link.submenu && <HiChevronDown className="text-xs transition-transform group-hover:rotate-180" />}
              </a>

              {/* Desktop Dropdown */}
              {link.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-48 bg-primary-blue border border-white/10 rounded-2xl shadow-2xl py-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300">
                  {link.submenu.map((sub) => (
                    <a
                      key={sub.name}
                      href={sub.href}
                      className="block px-6 py-2 text-[10px] font-bold text-white/70 hover:text-accent-blue hover:bg-white/5 transition-colors"
                    >
                      {sub.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
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

      {/* Backdrop for Mobile Sidebar */}
      <div 
        className={`fixed inset-0 bg-[#08152b]/80 backdrop-blur-md z-[60] lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Sidebar (Small/Medium Screens) */}
      <div 
        className={`fixed top-0 right-0 h-screen w-[320px] bg-primary-blue z-[70] lg:hidden border-l border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] shadow-[-20px_0_50px_rgba(0,0,0,0.5)] ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="p-6 flex items-center justify-between border-b border-white/5">
            <div className="flex items-center gap-2">
              <div className="bg-accent-blue p-1.5 rounded-lg">
                <HiShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-outfit">AjoVault</span>
            </div>
            <button 
              className="text-white text-3xl p-2 hover:bg-white/5 rounded-xl transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <HiX />
            </button>
          </div>

          {/* Sidebar Links */}
          <div className="flex-1 overflow-y-auto p-8 flex flex-col gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-4">
                <div 
                  className="flex items-center justify-between cursor-pointer"
                  onClick={() => link.submenu ? setMobileDropdown(mobileDropdown === link.name ? null : link.name) : setIsMobileMenuOpen(false)}
                >
                  <a
                    href={link.submenu ? undefined : link.href}
                    className={`text-xl font-bold tracking-widest transition-colors ${
                      activeSection === link.href.substring(1) ? 'text-accent-blue' : 'text-white/80'
                    }`}
                  >
                    {link.name}
                  </a>
                  {link.submenu && (
                    <HiChevronDown 
                      className={`text-white/50 text-2xl transition-transform duration-300 ${mobileDropdown === link.name ? 'rotate-180 text-accent-blue' : ''}`} 
                    />
                  )}
                </div>

                {/* Mobile Submenu Accordion */}
                {link.submenu && (
                  <div 
                    className={`flex flex-col gap-4 pl-4 border-l-2 border-accent-blue/20 overflow-hidden transition-all duration-500 ease-in-out ${
                      mobileDropdown === link.name ? 'max-h-[300px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}
                  >
                    {link.submenu.map((sub) => (
                      <a
                        key={sub.name}
                        href={sub.href}
                        className="text-sm font-bold text-white/50 hover:text-accent-blue transition-colors py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {sub.name}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Sidebar Footer */}
          <div className="p-8 border-t border-white/5">
            <a
              href="https://www.ajovault.ng/"
              target="_blank"
              className="flex items-center justify-center text-center bg-accent-blue text-white w-full py-4 rounded-full font-black shadow-lg shadow-accent-blue/20 text-sm tracking-widest uppercase transition-all active:scale-95 hover:bg-blue-600"
            >
              SIGN UP NOW
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
