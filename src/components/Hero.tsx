export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-b from-emerald-50 to-white">
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-emerald-200/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -left-24 w-72 h-72 bg-teal-200/30 rounded-full blur-[100px] animate-pulse" />
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-8 border border-emerald-200">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
            The Next Generation of Ag-Tech
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-emerald-900 mb-8 leading-[0.9]">
            The Future of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-600 to-emerald-500">Farming, Faster.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-xl mb-12 font-medium leading-relaxed">
            Harness AI-driven yield forecasting and real-time market intelligence to cultivate with scientific precision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-emerald-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all flex items-center justify-center gap-2">
              Get Started
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M5 12h14M12 5l7 7-7 7" strokeWidth={2} /></svg>
            </button>
            <button className="bg-white border-2 border-emerald-200 text-emerald-900 px-10 py-4 rounded-xl font-bold text-lg hover:bg-emerald-50 transition-all">View Docs</button>
          </div>
          <div className="mt-12 flex items-center gap-4 text-gray-400 font-mono text-sm">
            <span className="w-12 h-[1px] bg-gray-300" />
            <span>$ npm install @terralogic/forge</span>
          </div>
        </div>
        <div className="relative hidden lg:block animate-fade-in-scale" aria-hidden="true">
          <div className="relative w-full aspect-square flex items-center justify-center animate-float">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 w-80 h-80">
              <svg className="w-full h-full drop-shadow-2xl" viewBox="0 0 200 200" fill="none">
                <path d="M100 20L130 80H70L100 20Z" fill="url(#g1)" />
                <path d="M100 180L70 120H130L100 180Z" fill="url(#g2)" />
                <rect x="40" y="85" width="120" height="30" rx="4" fill="url(#g3)" />
                <circle cx="100" cy="100" r="15" fill="#003527" stroke="white" strokeWidth="2" />
                <defs>
                  <linearGradient id="g1" x1="100" y1="20" x2="100" y2="80"><stop stopColor="#003527" /><stop offset="1" stopColor="#2b6954" /></linearGradient>
                  <linearGradient id="g2" x1="100" y1="120" x2="100" y2="180"><stop stopColor="#2b6954" /><stop offset="1" stopColor="#95d3ba" /></linearGradient>
                  <linearGradient id="g3" x1="40" y1="100" x2="160" y2="100"><stop stopColor="#003527" /><stop offset="0.5" stopColor="#4edea3" /><stop offset="1" stopColor="#003527" /></linearGradient>
                </defs>
              </svg>
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500">Growth Index</div>
                    <div className="text-sm font-black text-emerald-900">+12.4%</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 -left-12 bg-white/90 backdrop-blur-xl border border-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-teal-200 flex items-center justify-center">
                    <svg className="w-4 h-4 text-teal-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase font-bold text-gray-500">Hydration</div>
                    <div className="text-sm font-black text-emerald-900">Optimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
