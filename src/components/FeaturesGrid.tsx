import React from 'react';
import { HiExclamationCircle, HiCheckCircle, HiClipboardList, HiUsers, HiChartBar } from 'react-icons/hi';

const FeaturesGrid = () => {
  const points = [
    {
      problemTitle: 'Manual Record Keeping',
      problemDesc: 'Outdated systems lead to errors and disputes. Tracking contributions by hand is risky and inefficient.',
      solutionTitle: 'Automated Ledger',
      solutionDesc: 'AjoVault automates everything with digital precision. Every kobo is accounted for in real-time.',
      icon: HiClipboardList,
      color: 'blue'
    },
    {
      problemTitle: 'Limited Transparency',
      problemDesc: 'Members often lack visibility into group savings, leading to mistrust and communication gaps.',
      solutionTitle: 'Real-time Visibility',
      solutionDesc: 'Get a clear view of contributions, payouts, and group standing directly from your dashboard.',
      icon: HiUsers,
      color: 'purple'
    },
    {
      problemTitle: 'No Credit Scores',
      problemDesc: "Traditional savings don't contribute to your credit history, making formal loans unreachable.",
      solutionTitle: 'Credit Score Building',
      solutionDesc: 'Now your consistent contributions help build your credit rating, unlocking formal financial tools.',
      icon: HiChartBar,
      color: 'emerald'
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-black text-accent-blue uppercase tracking-[0.3em] mb-4">The Solution</h2>
          <h3 className="text-5xl lg:text-6xl font-black text-primary-blue mb-8 font-outfit tracking-tighter">
            Bridging the Gap Between <span className="text-accent-blue">Tradition</span> & <span className="text-accent-blue">Tech</span>
          </h3>
          <p className="text-slate-500 text-lg font-medium">
            We identified the core flaws in traditional savings and built the digital infrastructure to fix them.
          </p>
        </div>

        <div className="space-y-12">
          {points.map((point, index) => (
            <div 
              key={index} 
              className="grid lg:grid-cols-2 gap-8 items-stretch"
            >
              {/* Problem Card */}
              <div className="p-8 lg:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden group hover:bg-slate-100 transition-colors">
                <div className="absolute top-0 right-0 p-8 text-slate-200 text-6xl group-hover:text-slate-300 transition-colors">
                  <HiExclamationCircle />
                </div>
                <div className="relative z-10">
                  <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">The Problem</h4>
                  <h5 className="text-2xl font-black text-primary-blue mb-4 font-outfit">{point.problemTitle}</h5>
                  <p className="text-slate-500 leading-relaxed max-w-sm">{point.problemDesc}</p>
                </div>
              </div>

              {/* Solution Card */}
              <div className="p-8 lg:p-12 rounded-[2.5rem] bg-primary-blue text-white relative overflow-hidden group hover:bg-slate-900 transition-all border border-white/5">
                <div className="absolute top-0 right-0 p-8 text-white/5 text-6xl group-hover:text-white/10 transition-colors">
                  <HiCheckCircle />
                </div>
                <div className="relative z-10">
                  <h4 className="text-sm font-bold text-accent-blue uppercase tracking-widest mb-4">The Solution</h4>
                  <h5 className="text-2xl font-black text-white mb-4 font-outfit">{point.solutionTitle}</h5>
                  <p className="text-white/60 leading-relaxed max-w-sm">{point.solutionDesc}</p>
                  
                  <div className={`mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-accent-blue font-bold text-xs`}>
                    <point.icon className="text-lg" />
                    Feature Enabled
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
