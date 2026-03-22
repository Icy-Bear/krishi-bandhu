export default function AboutSection() {
  return (
    <section id="docs" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-emerald-900 mb-8">Built for the modern <br /><span className="text-gray-400">agricultural engineer.</span></h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">TerraLogic Forge isn&apos;t just a dashboard. It&apos;s a high-performance development kit for your land. We provide the primitives you need to build custom automation, predictive models, and resource management systems at scale.</p>
          <ul className="space-y-4">
            {['Real-time WebSocket telemetry', 'GraphQL API for custom integrations', 'Edge computing support for remote fields', 'Open-source hardware drivers'].map((item) => (
              <li key={item} className="flex items-center gap-3 text-emerald-900 font-bold">
                <div className="w-5 h-5 rounded-full bg-emerald-200 flex items-center justify-center">
                  <svg className="w-3 h-3 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 6 9 17l-5-5" strokeWidth={3} /></svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-gradient-to-br from-emerald-200 via-emerald-100 to-teal-100">
            <svg viewBox="0 0 400 400" className="w-full h-full" fill="none">
              <defs><linearGradient id="ag" x1="0" y1="0" x2="400" y2="400"><stop offset="0%" stopColor="#003527" /><stop offset="50%" stopColor="#064e3b" /><stop offset="100%" stopColor="#4edea3" /></linearGradient></defs>
              <rect width="400" height="400" fill="url(#ag)" />
              <circle cx="200" cy="150" r="60" stroke="#95d3ba" strokeWidth="2" fill="none" />
              <path d="M200 90 L240 150 H160 Z" fill="#b0f0d6" opacity="0.8" />
              <path d="M200 210 L160 150 H240 Z" fill="#4edea3" opacity="0.8" />
              <circle cx="200" cy="150" r="20" fill="#003527" stroke="white" strokeWidth="3" />
            </svg>
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 max-w-xs">
            <p className="text-sm italic text-gray-600 mb-4">&quot;The transition from manual tracking to TerraLogic Forge was like moving from a typewriter to a supercomputer.&quot;</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-200" />
              <div><div className="text-sm font-bold text-emerald-900">Dr. Elena Vance</div><div className="text-xs text-gray-500">Chief Agronomist, GreenHorizon</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
