export default function FAQSection() {
  const faqs = [
    { q: 'How accurate are the crop yield predictions?', a: 'Our models currently achieve a 98.4% accuracy rate across major grain and vegetable categories, based on over 5 years of historical data and real-time sensor feedback.' },
    { q: 'Can I integrate my own sensors?', a: 'Yes! TerraLogic Forge supports a wide range of industry-standard protocols. Our Universal API makes it easy to connect custom hardware via MQTT or HTTP.' },
    { q: 'Is my data secure and private?', a: 'Absolutely. We use enterprise-grade encryption for all data at rest and in transit. You retain full ownership of your agricultural data.' },
    { q: 'Do you offer on-site setup assistance?', a: 'For Enterprise customers, we provide full on-site deployment and training services. Professional users have access to detailed remote onboarding.' },
  ];

  return (
    <section className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black tracking-tight text-emerald-900 mb-12 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group border border-stone-200 rounded-2xl overflow-hidden bg-white">
              <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-stone-50 list-none">
                <span className="font-bold text-emerald-900 pr-4">{faq.q}</span>
                <svg className="w-5 h-5 text-emerald-800 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M19 9l-7 7-7-7" strokeWidth={2} /></svg>
              </summary>
              <div className="px-6 pb-6 text-gray-600 leading-relaxed">{faq.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
