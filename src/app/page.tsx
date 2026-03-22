import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import MetricCluster from '@/components/MetricCluster';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TerraLogic Forge | AI-Powered Precision Agriculture',
  description: 'Transform your agricultural operations with AI-driven crop yield forecasting, real-time market intelligence, and field analysis. Achieve 98.4% prediction accuracy.',
};

export default function Home() {
  return (
    <>
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
    </>
  );
}
