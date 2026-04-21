import React from 'react';
import { HiDeviceMobile, HiLightningBolt, HiHeart, HiTrendingUp } from 'react-icons/hi';

const Community = () => {
  const items = [
    { title: 'Tailored for Ajo/Esusu', desc: 'Designed specifically for traditional social saving models.', icon: HiDeviceMobile },
    { title: 'Flexible Funding', desc: 'Multiple ways to fund your contributions and receive payouts.', icon: HiLightningBolt },
    { title: 'Community & Savings', desc: 'Strengthen bonds while growing your financial potential.', icon: HiHeart },
    { title: 'Growth and Inclusion', desc: 'We help you build a future, not just a pot of money.', icon: HiTrendingUp },
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent-green font-bold text-sm mb-4">FOR THE PEOPLE</p>
          <h3 className="text-5xl font-black text-primary-dark mb-4">Built for <span className="text-accent-green">Real Communities</span></h3>
          <p className="text-slate-500">Empowering traditional savings with modern reliability.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative opacity-100 translate-x-0 transition-all duration-1000">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/ajovault_community_usage_1776691299674.png" 
                alt="Community using AjoVault" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-xl z-20 border border-slate-100 flex items-center gap-4">
              <div className="flex -space-x-2 text-xl text-slate-300">
                <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white" />
                <div className="w-8 h-8 rounded-full bg-slate-50 border-2 border-white" />
              </div>
              <div className="text-sm">
                <p className="font-bold text-primary-dark">50+ Communities</p>
                <p className="text-slate-400">Joined this week</p>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-green/5 rounded-full blur-[100px] -z-10" />
          </div>

          <div className="space-y-8">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-6 group opacity-100 translate-x-0 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary-dark group-hover:bg-accent-green group-hover:text-white transition-colors border border-slate-100 shadow-sm flex-shrink-0 text-2xl">
                  <item.icon />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-primary-dark mb-2">{item.title}</h4>
                  <p className="text-slate-500 leading-relaxed max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
