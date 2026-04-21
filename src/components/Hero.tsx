import { useState } from 'react';
import { HiCheckCircle, HiMail } from 'react-icons/hi';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Waitlist email:', email);
    alert('Thank you for joining our waitlist!');
    setEmail('');
  };

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-primary-blue flex items-center">
      {/* Background abstract shapes */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[120px] -mr-64 -mt-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] -ml-40 -mb-40" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="transition-all duration-1000 transform translate-x-0 opacity-100">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent-blue text-xs font-bold tracking-widest mb-8 uppercase">
              <span className="flex h-2 w-2 rounded-full bg-accent-blue animate-pulse" />
              Launching Soon • Join the Movement
            </div>
            
            <h1 className="text-6xl lg:text-8xl font-black text-white leading-[1] mb-8 font-outfit tracking-tighter">
              Digitizing <br />
              <span className="text-accent-blue">Community</span> <br />
              Savings.
            </h1>
            
            <p className="text-xl text-white/70 mb-10 max-w-xl leading-relaxed font-medium">
              AjoVault brings trust and efficiency to traditional community savings (Ajo/Esusu). 
              Automate contributions, track payouts in real-time, and build a credit history while you save.
            </p>
            
            {/* Waitlist Section */}
            <div className="mb-12 max-w-md">
              <form onSubmit={handleWaitlist} className="relative flex items-center">
                <div className="absolute left-4 text-white/40 text-xl">
                  <HiMail />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-4 pl-12 pr-40 text-white placeholder:text-white/20 focus:outline-none focus:border-accent-blue/50 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 bg-accent-blue hover:bg-blue-600 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest transition-all"
                >
                  Join Waitlist
                </button>
              </form>
              <p className="text-[10px] text-white/30 mt-3 px-4 italic">
                Be the first to know when we launch and get early access benefits.
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-primary-blue bg-slate-800 flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="user" className="w-full h-full object-cover" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-primary-blue bg-accent-blue flex items-center justify-center text-[10px] font-black text-white">
                  +1k
                </div>
              </div>
              <p className="text-sm text-white/50 font-bold">
                Join <span className="text-white font-black underline decoration-accent-blue/50">1,000+ members</span> on the waitlist
              </p>
            </div>
          </div>
          
          <div className="relative transition-all duration-1000 transform scale-100 translate-y-0 opacity-100">
            {/* Mockup Container */}
            <div className="relative z-10 glass-card rounded-[3rem] border border-white/10 shadow-3xl overflow-hidden bg-white/5 backdrop-blur-sm p-4 translate-y-4 font-outfit uppercase tracking-tighter">
              <img 
                src="/ajovault_hero_dashboard_1776691254384.png" 
                alt="AjoVault Dashboard" 
                className="rounded-[2.5rem] w-full h-auto shadow-2xl"
              />
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-12 -right-12 z-20 bg-[#1e293b]/90 backdrop-blur-md border border-white/10 p-5 rounded-[2rem] shadow-2xl hidden md:block animate-float">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/20 flex items-center justify-center text-2xl">
                  <HiCheckCircle className="text-accent-blue" />
                </div>
                <div>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest font-black">Group Payout</p>
                  <p className="text-white font-black text-lg font-outfit">$4,250.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-[#F8FAFC]" style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 0, 0 80%)' }} />
    </section>
  );
};

export default Hero;
