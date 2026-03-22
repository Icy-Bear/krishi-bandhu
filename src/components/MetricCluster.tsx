export default function MetricCluster() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-emerald-900 mb-4">One Interface. Complete Mastery.</h2>
        <p className="text-gray-600 max-w-xl mx-auto">Stop jumping between tools. TerraLogic provides a unified command center for your entire operation.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white p-8 rounded-lg border-l-4 border-emerald-900 shadow-sm"><div className="text-4xl font-black text-emerald-900">98%</div><div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Yield Accuracy</div></div>
          <div className="bg-white p-8 rounded-lg border-l-4 border-emerald-400 shadow-sm"><div className="text-4xl font-black text-emerald-900">1.2s</div><div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Analysis Latency</div></div>
          <div className="bg-white p-8 rounded-lg border-l-4 border-teal-400 shadow-sm"><div className="text-4xl font-black text-emerald-900">14.3k</div><div className="text-xs font-bold uppercase tracking-widest text-gray-500 mt-2">Active Sensors</div></div>
        </div>
        <div className="lg:col-span-8">
          <div className="bg-gray-200 rounded-xl aspect-video relative overflow-hidden border border-gray-300">
            <div className="bg-white w-full h-full rounded-lg overflow-hidden flex flex-col">
              <div className="h-12 border-b border-gray-200 px-6 flex items-center justify-between">
                <div className="flex gap-2"><div className="w-3 h-3 rounded-full bg-red-400" /><div className="w-3 h-3 rounded-full bg-yellow-400" /><div className="w-3 h-3 rounded-full bg-green-400" /></div>
                <div className="text-[10px] font-bold uppercase text-gray-500">Live Feed: Central Valley Block-B</div>
              </div>
              <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-lg bg-gradient-to-br from-emerald-700 to-emerald-400 relative overflow-hidden">
                  <svg className="w-full h-full opacity-30" viewBox="0 0 400 225"><defs><pattern id="f" width="20" height="20" patternUnits="userSpaceOnUse"><line x1="0" y1="20" x2="20" y2="0" stroke="white" strokeWidth="1" /></pattern></defs><rect width="400" height="225" fill="url(#f)" /></svg>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/50 to-transparent" />
                </div>
                <div className="space-y-4">
                  <div className="h-1/2 rounded-lg bg-gray-100 p-4"><div className="h-2 w-12 bg-emerald-200 rounded-full mb-2" /><div className="h-1 w-full bg-emerald-400 rounded-full" /></div>
                  <div className="h-[calc(50%-1rem)] rounded-lg bg-emerald-800 p-4"><div className="h-2 w-8 bg-white/30 rounded-full" /><div className="space-y-2 mt-4"><div className="h-1 w-full bg-white/20 rounded-full" /><div className="h-1 w-2/3 bg-white/20 rounded-full" /></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
