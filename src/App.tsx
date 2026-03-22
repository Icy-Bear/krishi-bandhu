import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import MetricCluster from './components/MetricCluster';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import { Check, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AboutSection />
        <MetricCluster />
        <PricingSection />
        <FAQSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function AboutSection() {
  return (
    <section id="docs" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-primary mb-8">
            Built for the modern <br />
            <span className="text-on-surface-variant/40">agricultural engineer.</span>
          </h2>
          <p className="text-lg text-on-surface-variant mb-8 leading-relaxed">
            TerraLogic Forge isn't just a dashboard. It's a high-performance development kit for your land.
            We provide the primitives you need to build custom automation, predictive models, and
            resource management systems at scale.
          </p>
          <ul className="space-y-4">
            {[
              'Real-time WebSocket telemetry',
              'GraphQL API for custom integrations',
              'Edge computing support for remote fields',
              'Open-source hardware drivers',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-primary font-bold">
                <div className="w-5 h-5 rounded-full bg-primary-fixed flex items-center justify-center">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-outline-variant/20">
            <img
              src="https://picsum.photos/seed/tech/1000/1000"
              alt="Technology in agriculture"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-2xl shadow-xl border border-outline-variant/10 max-w-xs">
            <p className="text-sm italic text-on-surface-variant mb-4">
              "The transition from manual tracking to TerraLogic Forge was like moving from a typewriter to a supercomputer."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-fixed-dim" />
              <div>
                <div className="text-sm font-bold text-primary">Dr. Elena Vance</div>
                <div className="text-xs text-on-surface-variant">Chief Agronomist, GreenHorizon</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: 'Hobbyist',
      price: '$0',
      description: 'Perfect for small gardens and personal experimentation.',
      features: ['Up to 5 sensors', 'Basic analytics', 'Community support', 'Public API access'],
      cta: 'Start for Free',
      popular: false,
    },
    {
      name: 'Professional',
      price: '$49',
      description: 'Advanced tools for commercial farms and researchers.',
      features: ['Unlimited sensors', 'Predictive AI models', 'Priority support', 'Private API endpoints', 'Edge node support'],
      cta: 'Get Started',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'Scalable solutions for global agricultural organizations.',
      features: ['Custom SLA', 'Dedicated account manager', 'On-premise deployment', 'Custom AI training', 'White-labeling'],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black tracking-tighter text-primary mb-4">Simple, transparent pricing.</h2>
          <p className="text-on-surface-variant">Choose the plan that fits your cultivation scale.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-10 rounded-2xl border flex flex-col h-full transition-all hover:shadow-xl ${
                plan.popular
                  ? 'bg-primary text-white border-primary shadow-2xl shadow-primary/20 scale-105 z-10'
                  : 'bg-white border-outline-variant/20 text-primary'
              }`}
            >
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-black">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-sm opacity-60">/month</span>}
                </div>
                <p className={`text-sm ${plan.popular ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {plan.description}
                </p>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm font-medium">
                    <Check className={`w-4 h-4 ${plan.popular ? 'text-primary-fixed' : 'text-primary'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-4 rounded-xl font-bold transition-all ${
                  plan.popular
                    ? 'bg-white text-primary hover:bg-primary-fixed'
                    : 'bg-primary text-white hover:bg-primary-container'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: 'How accurate are the crop yield predictions?',
      answer: 'Our models currently achieve a 98.4% accuracy rate across major grain and vegetable categories, based on over 5 years of historical data and real-time sensor feedback.',
    },
    {
      question: 'Can I integrate my own sensors?',
      answer: 'Yes! TerraLogic Forge supports a wide range of industry-standard protocols. Our Universal API makes it easy to connect custom hardware via MQTT or HTTP.',
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Absolutely. We use enterprise-grade encryption for all data at rest and in transit. You retain full ownership of your agricultural data.',
    },
    {
      question: 'Do you offer on-site setup assistance?',
      answer: 'For Enterprise customers, we provide full on-site deployment and training services. Professional users have access to detailed remote onboarding.',
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-black tracking-tighter text-primary mb-12 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-outline-variant/20 rounded-2xl overflow-hidden bg-white"
            >
              <button
                className="w-full p-6 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold text-primary">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary" />
                ) : (
                  <Plus className="w-5 h-5 text-primary" />
                )}
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-on-surface-variant leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
