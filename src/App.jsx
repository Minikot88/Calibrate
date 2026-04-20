import React, { useEffect, useMemo } from 'react';
import SEOHead from './components/SEOHead.jsx';
import Header from './components/Header.jsx';
import HeroSection from './components/HeroSection.jsx';
import AnswerBlocksSection from './components/AnswerBlocksSection.jsx';
import AnswersSection from './components/AnswersSection.jsx';
import ProblemsSection from './components/ProblemsSection.jsx';
import ServicesSection from './components/ServicesSection.jsx';
import AudienceSection from './components/AudienceSection.jsx';
import LocalAreaSection from './components/LocalAreaSection.jsx';
import DeviceSection from './components/DeviceSection.jsx';
import ProcessSection from './components/ProcessSection.jsx';
import PricingSection from './components/PricingSection.jsx';
import ReviewsSection from './components/ReviewsSection.jsx';
import TrustSection from './components/TrustSection.jsx';
import FAQSection from './components/FAQSection.jsx';
import ContactSection from './components/ContactSection.jsx';
import Footer from './components/Footer.jsx';
import {
  DEFAULT_SITE_URL,
  PAGE_DESCRIPTION,
  PAGE_KEYWORDS,
  PAGE_TITLE,
  siteAssets,
} from './data/siteContent.js';
import { buildStructuredData } from './data/structuredData.js';

function App() {
  const siteUrl = useMemo(
    () => (typeof window !== 'undefined' ? window.location.origin : DEFAULT_SITE_URL),
    [],
  );

  const canonicalUrl = `${siteUrl}/`;
  const structuredData = useMemo(() => buildStructuredData(siteUrl), [siteUrl]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <SEOHead
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
        keywords={PAGE_KEYWORDS.join(', ')}
        image={siteAssets.photo1}
        canonicalUrl={canonicalUrl}
        structuredData={structuredData}
      />
      <Header />
      <main className="site-main">
        <HeroSection />
        <AnswerBlocksSection />
        <AnswersSection />
        <ProblemsSection />
        <ServicesSection />
        <AudienceSection />
        <LocalAreaSection />
        <DeviceSection />
        <ProcessSection />
        <PricingSection />
        <ReviewsSection />
        <TrustSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
