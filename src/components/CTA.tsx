export default function CTA() {
  return (
    <section className="bg-emerald-900 py-24 text-center px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-400 rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8">Ready to lead the next <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-emerald-300">Green Revolution?</span></h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-white text-emerald-900 px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-100 transition-all">Get API Key</button>
          <button className="border-2 border-emerald-700 text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-emerald-800 transition-all">Talk to Sales</button>
        </div>
      </div>
    </section>
  );
}
