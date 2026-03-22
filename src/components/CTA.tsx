import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section className="bg-primary py-24 text-center px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-white rounded-full blur-[120px]" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-tertiary-fixed-dim rounded-full blur-[120px]" />
      </div>
      <div className="relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-8 leading-none"
        >
          Ready to lead the next <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-fixed via-tertiary-fixed-dim to-primary-fixed">
            Green Revolution?
          </span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <button className="bg-white text-primary px-10 py-5 rounded-xl font-bold text-lg hover:scale-105 hover:bg-primary-fixed transition-all">
            Get API Key
          </button>
          <button className="border-2 border-primary-container text-white px-10 py-5 rounded-xl font-bold text-lg hover:bg-primary-container/30 transition-all">
            Talk to Sales
          </button>
        </motion.div>
      </div>
    </section>
  );
}
