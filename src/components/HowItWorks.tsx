import React from 'react';
import { HiUserAdd, HiCog, HiUsers, HiArrowCircleUp } from 'react-icons/hi';

const steps = [
  {
    title: 'Create your Account',
    description: 'Set up your profile and link your funding source in minutes.',
    icon: HiUserAdd,
  },
  {
    title: 'Set Savings Plan',
    description: 'Join an existing group or create your own with custom rules.',
    icon: HiCog,
  },
  {
    title: 'Invite & Fund with Community',
    description: 'Add your trusted circle and start contributing automatically.',
    icon: HiUsers,
  },
  {
    title: 'Receive Funds & Build Score',
    description: 'Get your payout when it is your turn and grow your credit rating.',
    icon: HiArrowCircleUp,
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-white relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 font-outfit">
          <h2 className="text-sm font-black text-accent-blue uppercase tracking-[0.3em] mb-4">Process</h2>
          <h3 className="text-5xl font-black text-primary-blue mb-4 tracking-tighter">HOW IT WORKS</h3>
          <p className="text-slate-500 font-medium">Simple steps to digitize your community savings experience.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-12 left-0 right-0 h-0.5 bg-slate-100 hidden lg:block" />
          
          <div className="grid lg:grid-cols-4 gap-12 text-center">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center group opacity-100 translate-y-0"
              >
                <div className="w-24 h-24 rounded-full bg-primary-blue text-white flex items-center justify-center mb-8 relative z-10 group-hover:bg-accent-blue transition-colors border-8 border-white shadow-2xl text-4xl">
                  <step.icon />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent-blue text-white font-black flex items-center justify-center text-sm border-2 border-white shadow-lg">
                    {index + 1}
                  </div>
                </div>
                <h4 className="text-2xl font-black text-primary-blue mb-4 font-outfit tracking-tight">{step.title}</h4>
                <p className="text-slate-500 leading-relaxed max-w-[200px] font-medium">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
};

export default HowItWorks;
