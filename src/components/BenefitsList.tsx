import React from 'react';
import { HiShieldCheck, HiViewGrid, HiCreditCard, HiBadgeCheck } from 'react-icons/hi';

const benefits = [
  {
    title: 'Secure & Transparent',
    description: 'Every transaction is encrypted and recorded, providing a clear trail for all members.',
    icon: HiShieldCheck,
    color: 'bg-emerald-500',
  },
  {
    title: 'Built for Communities',
    description: 'Tailored specifically for the dynamics of Ajo, Esusu, and rotational savings models.',
    icon: HiViewGrid,
    color: 'bg-yellow-500',
  },
  {
    title: 'Modernized Logistics',
    description: 'No more manual collections. Fund your wallet and automate your payouts seamlessly.',
    icon: HiCreditCard,
    color: 'bg-emerald-500',
  },
  {
    title: 'Trust and Compliance',
    description: 'We partner with licensed institutions to ensure your funds are protected by regulations.',
    icon: HiBadgeCheck,
    color: 'bg-yellow-500',
  },
];

const BenefitsList = () => {
  return (
    <section className="py-24 bg-[#F9FBFA]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h3 className="text-4xl lg:text-5xl font-extrabold text-primary-dark mb-6">
            AjoVault Brings <span className="text-accent-green">Trust to Digital Finance</span>
          </h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Our platform combines traditional wisdom with modern technology to create a safer saving environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all opacity-100 translate-x-0"
            >
              <div className={`flex-shrink-0 w-16 h-16 rounded-2xl ${benefit.color} flex items-center justify-center text-white shadow-lg text-3xl`}>
                <benefit.icon />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary-dark mb-2">{benefit.title}</h4>
                <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsList;
