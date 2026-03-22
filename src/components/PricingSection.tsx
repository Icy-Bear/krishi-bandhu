export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter text-emerald-900 mb-4">Simple, transparent pricing.</h2>
          <p className="text-gray-600">Choose the plan that fits your cultivation scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-10 rounded-2xl border border-gray-200 bg-white flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">Hobbyist</h3>
            <div className="flex items-baseline gap-1 mb-4"><span className="text-4xl font-black text-emerald-900">$0</span><span className="text-sm text-gray-500">/month</span></div>
            <p className="text-sm text-gray-600 mb-6">Perfect for small gardens and personal experimentation.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {['Up to 5 sensors', 'Basic analytics', 'Community support', 'Public API access'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><svg className="w-4 h-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 6 9 17l-5-5" strokeWidth={2} /></svg>{f}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-emerald-900 text-white hover:bg-emerald-800 transition-colors">Start for Free</button>
          </div>
          <div className="p-10 rounded-2xl bg-emerald-900 text-white shadow-2xl scale-105 z-10">
            <h3 className="text-xl font-bold mb-2">Professional</h3>
            <div className="flex items-baseline gap-1 mb-4"><span className="text-4xl font-black">$49</span><span className="text-sm opacity-60">/month</span></div>
            <p className="text-sm text-emerald-200 mb-6">Advanced tools for commercial farms and researchers.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {['Unlimited sensors', 'Predictive AI models', 'Priority support', 'Private API endpoints', 'Edge node support'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm"><svg className="w-4 h-4 text-emerald-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 6 9 17l-5-5" strokeWidth={2} /></svg>{f}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-100 transition-colors">Get Started</button>
          </div>
          <div className="p-10 rounded-2xl border border-gray-200 bg-white flex flex-col">
            <h3 className="text-xl font-bold mb-2 text-emerald-900">Enterprise</h3>
            <div className="flex items-baseline gap-1 mb-4"><span className="text-4xl font-black text-emerald-900">Custom</span></div>
            <p className="text-sm text-gray-600 mb-6">Scalable solutions for global agricultural organizations.</p>
            <ul className="space-y-3 mb-8 flex-1">
              {['Custom SLA', 'Dedicated account manager', 'On-premise deployment', 'Custom AI training', 'White-labeling'].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-gray-600"><svg className="w-4 h-4 text-emerald-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M20 6 9 17l-5-5" strokeWidth={2} /></svg>{f}</li>
              ))}
            </ul>
            <button className="w-full py-3 rounded-xl font-bold bg-emerald-900 text-white hover:bg-emerald-800 transition-colors">Contact Sales</button>
          </div>
        </div>
      </div>
    </section>
  );
}
