import React from 'react';
import { 
  HiOutlineUserCircle, 
  HiOutlineUserGroup, 
  HiOutlineCurrencyDollar, 
  HiOutlineCreditCard, 
  HiOutlineSpeakerphone, 
  HiOutlineChartBar 
} from 'react-icons/hi';

const services = [
  {
    title: 'Smart Personal Savings',
    desc: 'Set financial goals, save consistently, and manage your money with ease.',
    icon: HiOutlineUserCircle,
  },
  {
    title: 'Group & Cooperative Savings',
    desc: 'Create and manage cooperative groups, onboard members, and track contributions transparently.',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Credit & Loan Access',
    desc: 'Access structured credit with clear eligibility rules and flexible repayment options.',
    icon: HiOutlineCurrencyDollar,
  },
  {
    title: 'Wallet & Transactions',
    desc: 'Fund your wallet, transfer money, withdraw funds, and pay bills securely and instantly.',
    icon: HiOutlineCreditCard,
  },
  {
    title: 'Fundraising Campaigns',
    desc: 'Create and manage fundraising goals for personal, community, or cooperative needs with transparent tracking.',
    icon: HiOutlineSpeakerphone,
  },
  {
    title: 'Admin & Insights',
    desc: 'Powerful tools for managing savings programs, setting rules, and viewing real-time reports and analytics.',
    icon: HiOutlineChartBar,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative">
       {/* Background subtle light blue tint */}
      <div className="absolute inset-0 bg-brand-light/30 -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black text-accent-blue uppercase tracking-[0.3em] mb-4">What We Offer</h2>
          <h3 className="text-5xl lg:text-6xl font-black text-primary-blue mb-8 font-outfit tracking-tighter">
            OUR SERVICES
          </h3>
          <p className="text-slate-500 text-lg font-medium">
            Everything you need to manage your finances, alone or with your community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div 
              key={i}
              className="p-10 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-3xl bg-brand-light flex items-center justify-center text-primary-blue mb-8 group-hover:bg-accent-blue group-hover:text-white transition-all text-4xl shadow-sm">
                <service.icon />
              </div>
              <h4 className="text-2xl font-black text-primary-blue mb-4 font-outfit">{service.title}</h4>
              <p className="text-slate-500 leading-relaxed font-medium">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
