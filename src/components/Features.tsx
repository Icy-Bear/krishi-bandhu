export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-black tracking-tight text-emerald-900 mb-12 text-center">Powerful Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-10 rounded-xl bg-white md:col-span-2 border border-gray-200">
            <svg className="w-10 h-10 mb-6 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 0 3 3v1a4 4 0 0 1-8 0v-1a3 3 0 0 0 3-3V6a4 4 0 0 1 4-4z" /><circle cx="8" cy="10" r="1.5" /><circle cx="16" cy="10" r="1.5" /></svg>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Crop Prediction</h3>
            <p className="text-gray-600 text-lg">Our neural networks analyze soil health, historical weather patterns, and genetic data to predict harvests with 98.4% accuracy.</p>
          </div>
          <div className="p-10 rounded-xl bg-white border-l-4 border-emerald-800">
            <svg className="w-10 h-10 mb-6 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M18 20V10M12 20V4M6 20v-6" strokeLinecap="round" /></svg>
            <h3 className="text-2xl font-bold text-emerald-900 mb-4">Field Analysis</h3>
            <p className="text-gray-600 text-lg">Real-time multispectral imaging and drone telemetry integrated directly into your workflow.</p>
          </div>
          <div className="p-10 rounded-xl bg-emerald-900 text-white shadow-xl md:col-span-2">
            <svg className="w-10 h-10 mb-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
            <h3 className="text-2xl font-bold mb-4">Market Intelligence</h3>
            <p className="text-emerald-200 text-lg mb-4">Global commodity pricing trends and local supply-demand metrics updated every 60 seconds.</p>
            <a href="#" className="inline-flex items-center gap-2 text-emerald-300 font-bold hover:gap-3 transition-all">Explore Trends <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M7 17L17 7M17 7H7M17 7v10" strokeWidth={2} /></svg></a>
          </div>
          <div className="p-10 rounded-xl bg-gradient-to-br from-emerald-800 to-emerald-900 text-white">
            <svg className="w-10 h-10 mb-6 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10" /></svg>
            <h3 className="text-2xl font-bold mb-4">Universal API</h3>
            <p className="text-emerald-200 text-lg">Integrate into your existing irrigation and hardware stack with GraphQL endpoints.</p>
            <div className="mt-6 bg-black/30 backdrop-blur-md p-4 rounded-lg font-mono text-sm text-emerald-300">
              <div>$ forge init --project &quot;napa-valley&quot;</div>
              <div className="text-emerald-400/50 mt-1">Connecting to soil sensors...</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
