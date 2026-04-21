import { HiShieldCheck, HiOutlineLockClosed, HiOutlineKey } from 'react-icons/hi';

const Security = () => {
  const cards = [
    {
      title: 'Bank-Grade Security',
      desc: 'Your funds are protected by multi-layered encryption and industry-standard security protocols.',
      icon: HiOutlineLockClosed,
    },
    {
      title: 'Full Compliance',
      desc: 'Compliance is built into everything we do, so you can focus on saving with confidence.',
      icon: HiShieldCheck,
    },
    {
      title: 'Data Privacy',
      desc: 'We never share your personal information. Your privacy is our top priority.',
      icon: HiOutlineKey,
    },
  ];

  return (
    <section id="security" className="py-24 bg-primary-blue text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-white/5 border border-white/10 mb-6 font-bold text-xs uppercase tracking-widest text-accent-blue">
            Safety First
          </div>
          <h3 className="text-5xl lg:text-6xl font-black mb-8 font-outfit tracking-tighter">
            COMPLIANCE AND <span className="text-accent-blue">SECURITY</span>
          </h3>
          <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Your funds are protected by bank-grade security infrastructure. 
            We ensure every transaction is monitored and secured.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {cards.map((card, i) => (
            <div
              key={i}
              className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col items-center group transition-all hover:bg-white/10 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-3xl bg-accent-blue flex items-center justify-center text-white mb-8 shadow-xl shadow-accent-blue/20 text-4xl">
                <card.icon />
              </div>
              <h4 className="text-2xl font-black mb-4 font-outfit">{card.title}</h4>
              <p className="text-white/40 leading-relaxed font-medium">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Security;
