import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Documentation', href: '#docs' },
    { name: 'Demo', href: '#demo' },
    { name: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'glass-nav shadow-sm py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <a href="/" className="text-xl font-black tracking-tighter text-primary">
            TerraLogic Forge
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-on-surface-variant hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center relative group">
            <Search className="absolute left-3 w-4 h-4 text-outline-variant group-focus-within:text-primary transition-colors" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-surface-container-highest/50 border-none rounded-lg pl-10 pr-4 py-1.5 text-sm focus:ring-2 focus:ring-primary-fixed-dim w-48 transition-all outline-none"
            />
          </div>
          <button className="hidden sm:block bg-primary text-on-surface-container px-5 py-2 rounded-lg font-bold text-sm hover:scale-95 active:opacity-80 transition-transform bg-emerald-900 text-white">
            Get Started
          </button>
          <button
            className="md:hidden p-2 text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-outline-variant/20 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-semibold text-on-surface-variant"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-outline-variant/20" />
              <button className="w-full bg-primary text-white py-3 rounded-lg font-bold">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
