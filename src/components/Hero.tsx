import { ArrowRight, Zap, Droplets, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40 hero-gradient">
      {/* Abstract Dynamic Background Elements */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-primary-fixed-dim/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-tertiary-fixed-dim/20 rounded-full blur-[100px] animate-pulse" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col items-start text-left"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-8 border border-primary/10 backdrop-blur-sm">
            <Zap className="w-3 h-3 fill-primary" />
            The Next Generation of Ag-Tech
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-primary mb-8 leading-[0.9]">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary-container to-tertiary-fixed-dim">
              Farming, Faster.
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-on-surface-variant max-w-xl mb-12 font-medium leading-relaxed">
            Harness AI-driven yield forecasting and real-time market intelligence to cultivate with scientific precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="bg-primary text-white px-10 py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2 group">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-surface-container-low/50 backdrop-blur-md border border-outline-variant/30 text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-all">
              View Docs
            </button>
          </div>
          <div className="mt-12 flex items-center gap-4 text-on-surface-variant/60 font-mono text-sm">
            <span className="w-12 h-[1px] bg-outline-variant" />
            <span>$ npm install @terralogic/forge</span>
          </div>
        </motion.div>

        {/* Dynamic Visual Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 w-80 h-80">
              <svg
                className="w-full h-full drop-shadow-[0_0_40px_rgba(43,105,84,0.3)]"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100 20L130 80H70L100 20Z" fill="url(#grad1)" fillOpacity="0.9" />
                <path d="M100 180L70 120H130L100 180Z" fill="url(#grad2)" fillOpacity="0.7" />
                <rect x="40" y="85" width="120" height="30" rx="4" fill="url(#grad3)" fillOpacity="0.8" />
                <circle cx="100" cy="100" r="15" fill="#003527" stroke="white" strokeWidth="2" />
                <path d="M100 20V5" stroke="#95d3ba" strokeDasharray="2 2" strokeWidth="1" />
                <path d="M100 180V195" stroke="#95d3ba" strokeDasharray="2 2" strokeWidth="1" />
                <path d="M40 100H10" stroke="#95d3ba" strokeDasharray="2 2" strokeWidth="1" />
                <path d="M160 100H190" stroke="#95d3ba" strokeDasharray="2 2" strokeWidth="1" />
                <defs>
                  <linearGradient id="grad1" x1="100" y1="20" x2="100" y2="80" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#003527" />
                    <stop offset="1" stopColor="#2b6954" />
                  </linearGradient>
                  <linearGradient id="grad2" x1="100" y1="120" x2="100" y2="180" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#2b6954" />
                    <stop offset="1" stopColor="#95d3ba" />
                  </linearGradient>
                  <linearGradient id="grad3" x1="40" y1="100" x2="160" y2="100" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#003527" />
                    <stop offset="0.5" stopColor="#4edea3" />
                    <stop offset="1" stopColor="#003527" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Glassy UI Elements */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute -top-4 -right-4 bg-white/40 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-xl shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary-fixed-dim flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">Growth Index</div>
                    <div className="text-sm font-black text-primary">+12.4%</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="absolute bottom-10 -left-12 bg-white/40 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-xl shadow-primary/10"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-tertiary-fixed-dim flex items-center justify-center">
                    <Droplets className="w-4 h-4 text-primary-container" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-on-surface-variant">Hydration</div>
                    <div className="text-sm font-black text-primary">Optimal</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
