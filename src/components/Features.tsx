import { Brain, BarChart3, LineChart, Globe } from 'lucide-react';
import { motion } from 'motion/react';

export default function Features() {
  const features = [
    {
      title: 'Crop Prediction',
      description: 'Our neural networks analyze soil health, historical weather patterns, and genetic data to predict harvests with 98.4% accuracy.',
      icon: Brain,
      className: 'md:col-span-2 bg-surface-container-lowest',
      iconColor: 'text-primary',
    },
    {
      title: 'Field Analysis',
      description: 'Real-time multispectral imaging and drone telemetry integrated directly into your workflow.',
      icon: BarChart3,
      className: 'bg-surface-container-lowest border-l-4 border-primary',
      iconColor: 'text-primary',
    },
    {
      title: 'Market Intelligence',
      description: 'Global commodity pricing trends and local supply-demand metrics updated every 60 seconds.',
      icon: LineChart,
      className: 'bg-primary text-white shadow-xl shadow-primary/20',
      iconColor: 'text-primary-fixed',
      isDark: true,
    },
    {
      title: 'Universal API',
      description: 'Integrate TerraLogic Forge into your existing irrigation and hardware stack with our lightning-fast GraphQL endpoints.',
      icon: Globe,
      className: 'md:col-span-2 bg-gradient-to-br from-primary-container to-primary text-white',
      iconColor: 'text-primary-fixed',
      isDark: true,
      hasCode: true,
    },
  ];

  return (
    <section id="features" className="bg-surface-container-low py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`p-10 rounded-xl relative overflow-hidden group border border-outline-variant/10 ${feature.className}`}
            >
              <div className="relative z-10 h-full flex flex-col">
                <feature.icon className={`w-10 h-10 mb-6 ${feature.iconColor}`} />
                <h3 className={`text-2xl font-bold tracking-tight mb-4 ${feature.isDark ? 'text-white' : 'text-primary'}`}>
                  {feature.title}
                </h3>
                <p className={`text-lg ${feature.isDark ? 'text-white/70' : 'text-on-surface-variant'}`}>
                  {feature.description}
                </p>

                {feature.hasCode && (
                  <div className="mt-8 bg-black/20 backdrop-blur-md p-6 rounded-lg font-mono text-sm text-primary-fixed border border-white/10">
                    <code className="block">$ forge init --project "napa-valley"</code>
                    <code className="block text-white/50 mt-2">Connecting to soil sensors...</code>
                    <code className="block text-primary-fixed-dim mt-2">Yield optimization active.</code>
                  </div>
                )}

                {feature.isDark && !feature.hasCode && (
                  <a href="#" className="mt-auto pt-8 flex items-center gap-2 text-primary-fixed font-bold hover:gap-3 transition-all">
                    Explore Trends <ArrowUpRight className="w-4 h-4" />
                  </a>
                )}
              </div>
              {!feature.isDark && (
                <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ArrowUpRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}
