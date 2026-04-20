import {
  BRAND_NAME,
  CALIBRATOR_NAME,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  PAGE_DESCRIPTION,
  PAGE_TITLE,
  faqItems,
  pricingPlans,
  siteAssets,
} from './siteContent.js';

export function buildStructuredData(siteUrl) {
  const pageUrl = `${siteUrl}/`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${pageUrl}#website`,
        url: pageUrl,
        name: BRAND_NAME,
        inLanguage: 'th',
        description: PAGE_DESCRIPTION,
        potentialAction: {
          '@type': 'SearchAction',
          target: `${pageUrl}?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'Organization',
        '@id': `${pageUrl}#organization`,
        name: BRAND_NAME,
        url: pageUrl,
        logo: siteAssets.logoImg,
        sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
      },
      {
        '@type': 'LocalBusiness',
        '@id': `${pageUrl}#localbusiness`,
        name: BRAND_NAME,
        url: pageUrl,
        image: [siteAssets.photo1, siteAssets.photo2, siteAssets.photo3],
        description: PAGE_DESCRIPTION,
        priceRange: '490+ บาท',
        areaServed: [
          { '@type': 'City', name: 'Hat Yai' },
          { '@type': 'AdministrativeArea', name: 'Songkhla' },
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Hat Yai',
          addressRegion: 'Songkhla',
          addressCountry: 'TH',
        },
        sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
      },
      {
        '@type': 'Service',
        '@id': `${pageUrl}#service`,
        name: 'บริการคาลิเบรตหน้าจอในหาดใหญ่',
        serviceType: [
          'คาลิเบรตหน้าจอคอม',
          'คาลิเบรตโน้ตบุ๊ก',
          'คาลิเบรตจอแต่งภาพ',
          'คาลิเบรตจอเกมมิ่ง',
          'คาลิเบรตหลายจอ',
        ],
        provider: { '@id': `${pageUrl}#organization` },
        areaServed: [
          { '@type': 'City', name: 'Hat Yai' },
          { '@type': 'AdministrativeArea', name: 'Songkhla' },
        ],
        description: `${PAGE_DESCRIPTION} ใช้อุปกรณ์ ${CALIBRATOR_NAME}`,
        brand: BRAND_NAME,
        offers: pricingPlans.map((plan) => ({
          '@type': 'Offer',
          priceCurrency: 'THB',
          price: plan.price.replace(/[^\d]/g, ''),
          availability: 'https://schema.org/InStock',
          description: `${plan.name} - ${plan.description}`,
        })),
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${pageUrl}#professional-service`,
        name: BRAND_NAME,
        url: pageUrl,
        areaServed: [
          { '@type': 'City', name: 'Hat Yai' },
          { '@type': 'AdministrativeArea', name: 'Songkhla' },
          { '@type': 'Country', name: 'Thailand' },
        ],
        sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
        description: `${PAGE_DESCRIPTION} ให้บริการทั้งหาดใหญ่ สงขลา และพื้นที่ใกล้เคียง`,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: PAGE_TITLE,
        isPartOf: { '@id': `${pageUrl}#website` },
        about: { '@id': `${pageUrl}#service` },
        inLanguage: 'th',
        description: PAGE_DESCRIPTION,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'หน้าแรก',
            item: pageUrl,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'บริการคาลิเบรตหน้าจอ หาดใหญ่',
            item: pageUrl,
          },
        ],
      },
    ],
  };
}
