import { useEffect } from 'react';

function SEOHead({ title, description, keywords, image, canonicalUrl, structuredData }) {
  useEffect(() => {
    document.title = title;
    document.documentElement.lang = 'th';

    const upsertMeta = (selector, attrs) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    const upsertLink = (selector, attrs) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[name="keywords"]', { name: 'keywords', content: keywords });
    upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index, follow, max-image-preview:large' });
    upsertMeta('meta[name="theme-color"]', { name: 'theme-color', content: '#101b2a' });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: description,
    });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'th_TH' });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: image });
    upsertMeta('meta[property="og:image:alt"]', {
      property: 'og:image:alt',
      content: title,
    });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: description,
    });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: image });
    upsertMeta('meta[name="twitter:image:alt"]', {
      name: 'twitter:image:alt',
      content: title,
    });
    upsertLink('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });

    let script = document.getElementById('structured-data-hcc');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data-hcc';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      const currentScript = document.getElementById('structured-data-hcc');
      if (currentScript) {
        currentScript.textContent = '';
      }
    };
  }, [title, description, keywords, image, canonicalUrl, structuredData]);

  return null;
}

export default SEOHead;
