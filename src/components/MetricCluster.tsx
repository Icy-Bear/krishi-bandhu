import { motion } from 'motion/react';

export default function MetricCluster() {
  const metrics = [
    { value: '98%', label: 'Yield Accuracy', color: 'border-primary' },
    { value: '1.2s', label: 'Analysis Latency', color: 'border-primary-fixed-dim' },
    { value: '14.3k', label: 'Active Sensors', color: 'border-tertiary-fixed-dim' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold tracking-tight text-primary mb-4">One Interface. Complete Mastery.</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto">
          Stop jumping between tools. TerraLogic provides a unified command center for your entire operation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-4 space-y-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-surface-container-lowest p-8 rounded-lg border-l-4 ${metric.color} shadow-sm border border-y-outline-variant/10 border-r-outline-variant/10 transition-transform hover:-translate-y-1`}
            >
              <div className="text-4xl font-black text-primary tracking-tighter">{metric.value}</div>
              <div className="text-xs font-bold uppercase tracking-widest text-on-surface-variant mt-2">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:col-span-8"
        >
          <div className="bg-surface-container-high rounded-xl p-2 shadow-2xl shadow-primary/10 aspect-video relative overflow-hidden border border-outline-variant/20">
            <div className="bg-surface w-full h-full rounded-lg overflow-hidden flex flex-col">
              <div className="h-12 border-b border-surface-container-low px-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                  Live Feed: Central Valley Block-B
                </div>
              </div>
              <div className="flex-1 p-6 grid grid-cols-3 gap-4">
                <div className="col-span-2 rounded-lg bg-surface-container-low relative overflow-hidden">
                  <img
                    src="https://picsum.photos/seed/agriculture/1200/800"
                    alt="Aerial view of green agricultural fields"
                    className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
                </div>
                <div className="space-y-4">
                  <div className="h-1/2 rounded-lg bg-surface-container-lowest p-4 flex flex-col justify-end border border-outline-variant/10">
                    <div className="h-2 w-12 bg-primary/20 rounded-full mb-2" />
                    <div className="h-1 w-full bg-primary-fixed rounded-full" />
                  </div>
                  <div className="h-[calc(50%-1rem)] rounded-lg bg-primary-container p-4 flex flex-col justify-between">
                    <div className="h-2 w-8 bg-white/20 rounded-full" />
                    <div className="space-y-2">
                      <div className="h-1 w-full bg-white/10 rounded-full" />
                      <div className="h-1 w-2/3 bg-white/10 rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
