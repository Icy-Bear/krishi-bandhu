'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="text-xl font-black tracking-tighter text-primary">TerraLogic Forge</Link>
          <div className="hidden md:flex items-center gap-8">
            {['Features', 'Documentation', 'Demo', 'Pricing'].map((name) => (
              <Link key={name} href={`/#${name.toLowerCase()}`} className="text-sm font-semibold text-gray-600 hover:text-emerald-800 transition-colors">{name}</Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center relative group">
            <svg className="absolute left-3 w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" /></svg>
            <input type="search" placeholder="Search..." className="bg-gray-100 border-none rounded-lg pl-10 pr-4 py-1.5 text-sm w-48 outline-none focus:ring-2 focus:ring-emerald-200" />
          </div>
          <button className="hidden sm:block bg-emerald-900 text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-emerald-800 transition-colors">Get Started</button>
          <button className="md:hidden p-2 text-emerald-900" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6h16M4 12h16M4 18h16" strokeWidth={2} /></svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-200 p-6 md:hidden">
          <div className="flex flex-col gap-4">
            {['Features', 'Documentation', 'Demo', 'Pricing'].map((name) => (
              <Link key={name} href={`/#${name.toLowerCase()}`} className="text-lg font-semibold text-gray-600" onClick={() => setIsMobileMenuOpen(false)}>{name}</Link>
            ))}
            <button className="w-full bg-emerald-900 text-white py-3 rounded-lg font-bold">Get Started</button>
          </div>
        </div>
      )}
    </nav>
  );
}
