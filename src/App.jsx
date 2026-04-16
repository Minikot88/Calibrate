import React, { useEffect, useMemo, useState } from 'react';
import logoImg from './photo/logo.png';
import photo1 from './photo/photo1.jpg';
import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.webp';

const BRAND_NAME = 'Hatyai Color Calibrate - HCC';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61568043921605';
const INSTAGRAM_URL = 'https://www.instagram.com/hatyaicolorcalibrate.hcc/';
const SITE_URL = 'https://yourdomain.com/';
const CALIBRATOR_NAME = 'Calibrite Display Plus HL';
const PAGE_TITLE =
  'คาลิเบรตหน้าจอ หาดใหญ่ | รับปรับสีจอคอม โน้ตบุ๊ก หลายจอ | Hatyai Color Calibrate - HCC';
const PAGE_DESCRIPTION =
  'บริการคาลิเบรตหน้าจอในหาดใหญ่และใกล้เคียง ใช้ Calibrite Display Plus HL ปรับสีจอคอม โน้ตบุ๊ก และหลายจอให้ตรงขึ้น เหมาะกับงานแต่งภาพ กราฟิก วิดีโอ เกม และการใช้งานจริงทุกวัน';

const navItems = [
  { label: 'บริการ', href: '#services' },
  { label: 'อุปกรณ์', href: '#equipment' },
  { label: 'ขั้นตอน', href: '#process' },
  { label: 'ราคา', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'ติดต่อ', href: '#contact' },
];

const heroHighlights = [
  'รองรับ Windows / Mac',
  'เหมาะกับจอเดียวถึงหลายจอ',
  'รับงานในหาดใหญ่และใกล้เคียง',
];

const problemItems = [
  {
    title: 'สีเพี้ยน',
    description: 'ภาพบนจอไม่ตรงกับงานจริง ทำให้แต่งภาพและตัดสินใจเรื่องสีได้ยากขึ้น',
  },
  {
    title: 'หลายจอสีไม่เท่ากัน',
    description: 'เมื่อต้องสลับจอทำงาน สีและความสว่างที่ต่างกันทำให้งานไม่ต่อเนื่อง',
  },
  {
    title: 'แต่งรูปแล้วสีเปลี่ยน',
    description: 'ไฟล์ที่ดูดีในจอหนึ่งอาจเปลี่ยนไปเมื่อเปิดในอีกจอหรืออีกอุปกรณ์',
  },
  {
    title: 'ใช้นานแล้วล้าตา',
    description: 'ความสว่างและโทนสีที่ไม่สมดุลกันทำให้ใช้งานนานแล้วเมื่อยตาได้ง่าย',
  },
  {
    title: 'ทำงานสีไม่มั่นใจ',
    description: 'เมื่อหน้าจอไม่เสถียร งานภาพ กราฟิก วิดีโอ หรือเกมจะควบคุมผลลัพธ์ได้ยากขึ้น',
  },
];

const serviceItems = [
  'จอคอม',
  'โน้ตบุ๊ก',
  'จอแต่งภาพ',
  'จอเกมมิ่ง',
  'จอหลายจอ',
  'Windows / Mac',
];

const specItems = [
  'วัดความสว่างได้สูงสุด 10,000 nits',
  'รองรับหน้าจอ LCD / IPS / OLED / Mini-LED',
  'เหมาะกับจอสมัยใหม่และจอความสว่างสูง',
  'ใช้งานได้กับ Windows / Mac',
  'รองรับการคาลิเบรตหลายจอ',
  'สร้างโปรไฟล์สีแยกสำหรับแต่ละจอได้',
];

const reasonItems = [
  'วัดสีได้แม่นยำกว่าการปรับด้วยตา',
  'ช่วยให้จอหลายตัวมีสีใกล้กันมากขึ้น',
  'เหมาะกับทั้งงานภาพและการใช้งานทั่วไปที่จริงจัง',
  'ลดปัญหาสีเพี้ยน สีไม่ตรง และความไม่สม่ำเสมอของแต่ละจอ',
  'เพิ่มความมั่นใจเวลาแต่งภาพ ออกแบบ หรือลากงานข้ามหลายจอ',
  'ใช้งานได้กับจอรุ่นใหม่และจอความสว่างสูง',
];

const outcomeItems = [
  'สีจอตรงขึ้น ใช้งานมั่นใจขึ้น',
  'จอหลายตัวมีสีใกล้กันมากขึ้น',
  'ทำงานภาพ งานกราฟิก และวิดีโอได้แม่นยำขึ้น',
  'ใช้งานทุกวันสบายตาขึ้น',
  'ลดปัญหาสีเพี้ยนจากการตั้งค่าด้วยตา',
  'เหมาะกับทั้งผู้ใช้ทั่วไปและผู้ใช้มืออาชีพ',
];

const processItems = [
  {
    step: '01',
    title: 'ตรวจเช็กค่าปัจจุบัน',
    description: 'เริ่มจากดูสภาพการใช้งานจริง ความสว่าง และค่าที่หน้าจอแสดงอยู่ในตอนนี้',
  },
  {
    step: '02',
    title: 'วางอุปกรณ์บนหน้าจอ',
    description: `ใช้ ${CALIBRATOR_NAME} ตรวจวัดสี ความสว่าง และโทนภาพโดยตรงจากจอ`,
  },
  {
    step: '03',
    title: 'ปรับค่าและสร้างโปรไฟล์สี',
    description: 'ตั้งค่าให้เหมาะกับจอนั้นโดยเฉพาะ เพื่อให้สีใกล้มาตรฐานและใช้งานได้เสถียรขึ้น',
  },
  {
    step: '04',
    title: 'พร้อมใช้งานทันที',
    description: 'ใช้เวลาไม่นาน เห็นผลจริง และเหมาะกับทั้งจอเดียวจนถึงหลายจอ',
  },
];

const pricingItems = [
  {
    title: '1 จอ',
    price: '690 บาท',
    detail: 'เหมาะกับจอหลักที่ต้องการสีตรงขึ้นและใช้งานมั่นใจขึ้นทันที',
  },
  {
    title: '2 จอ',
    price: '1,190 บาท',
    detail: 'เหมาะกับผู้ใช้จอคู่ที่ต้องการให้สีใกล้กันมากขึ้น',
    featured: true,
  },
  {
    title: '3 จอ',
    price: '1,590 บาท',
    detail: 'ตอบโจทย์ผู้ใช้หลายจอที่ต้องการภาพรวมสีสมดุลขึ้น',
  },
  {
    title: 'Notebook + จอนอก',
    price: '990 บาท',
    detail: 'เหมาะกับโต๊ะทำงานที่ใช้โน้ตบุ๊กร่วมกับจอเสริม',
  },
  {
    title: 'งานหลายเครื่อง / บริษัท',
    price: 'สอบถามราคา',
    detail: 'สำหรับทีมงาน ออฟฟิศ หรืออุปกรณ์หลายชุดที่ต้องการนัดบริการรวม',
  },
];

const confidenceItems = [
  'ใช้ Calibrite Display Plus HL',
  'เหมาะกับจอคอมและโน้ตบุ๊ก',
  'รองรับหลายจอ',
  'เหมาะกับงานสีจริง',
  'รับงานในหาดใหญ่และใกล้เคียง',
  'นัดหมายสะดวก',
];

const aeoItems = [
  {
    title: 'คาลิเบรตหน้าจอคืออะไร',
    description: 'การปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น',
  },
  {
    title: 'ทำไมจอแต่ละตัวสีไม่เท่ากัน',
    description: 'เพราะพาแนล การตั้งค่า อายุจอ และสภาพแสงที่ใช้งานต่างกัน',
  },
  {
    title: 'คาลิเบรตแล้วได้อะไร',
    description: 'ช่วยให้สีตรงขึ้น ใช้งานมั่นใจขึ้น และลดปัญหาสีเพี้ยนระหว่างหลายจอ',
  },
  {
    title: 'ควรทำทุกกี่เดือน',
    description: 'แนะนำทุก 3 เดือน หรือเมื่อเปลี่ยนแสง เปลี่ยนจอ หรือเปลี่ยนอุปกรณ์',
  },
  {
    title: 'ใช้เครื่องอะไร',
    description: `ใช้ ${CALIBRATOR_NAME} เครื่องคาลิเบรตหน้าจอระดับมืออาชีพ`,
  },
];

const faqItems = [
  {
    question: 'คาลิเบรตหน้าจอคืออะไร',
    answer:
      'คือการปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น เพื่อให้ภาพที่เห็นน่าเชื่อถือขึ้น',
  },
  {
    question: 'ทำไมจอแต่ละตัวสีไม่เหมือนกัน',
    answer:
      'เพราะพาแนล การตั้งค่า อายุจอ และกระบวนการผลิตของแต่ละรุ่นต่างกัน จึงทำให้สีและแสงไม่เหมือนกัน',
  },
  {
    question: 'คาลิเบรตแล้วเห็นผลไหม',
    answer: 'โดยทั่วไปจะช่วยให้สีตรงขึ้น ภาพนิ่งขึ้น และทำงานข้ามหลายจอได้มั่นใจมากขึ้น',
  },
  {
    question: 'ใช้เวลานานแค่ไหน',
    answer: 'ส่วนใหญ่ใช้เวลาไม่นาน ขึ้นอยู่กับจำนวนจอ รุ่นหน้าจอ และสภาพการใช้งานจริง',
  },
  {
    question: 'ใช้ได้กับ Windows และ Mac ไหม',
    answer: 'ได้ รองรับทั้ง Windows และ Mac รวมถึงโน้ตบุ๊กและจอภายนอก',
  },
  {
    question: 'ถ้ามี 2-3 จอ ควรทำพร้อมกันไหม',
    answer: 'ควร เพราะจะช่วยให้แต่ละจอมีโทนสีใกล้กันมากขึ้นและใช้งานต่อเนื่องได้สบายกว่าเดิม',
  },
  {
    question: 'จอเกมมิ่งคาลิเบรตได้ไหม',
    answer: 'ได้ สามารถช่วยให้สีสมดุลขึ้นและมองสบายตาขึ้นทั้งเล่นเกมและทำงาน',
  },
  {
    question: 'โน้ตบุ๊กทำได้ไหม',
    answer: 'ได้ เหมาะกับทั้งโน้ตบุ๊กเดี่ยวและโน้ตบุ๊กร่วมกับจอภายนอก',
  },
  {
    question: 'รับงานนอกสถานที่ไหม',
    answer: 'รับงานในหาดใหญ่และพื้นที่ใกล้เคียง สามารถทักมาสอบถามพื้นที่และคิวได้',
  },
  {
    question: 'ใช้อุปกรณ์อะไรในการคาลิเบรต',
    answer: `เราใช้ ${CALIBRATOR_NAME} สำหรับตรวจวัดและปรับค่าสี ความสว่าง และโทนภาพอย่างแม่นยำ`,
  },
  {
    question: 'Calibrite Display Plus HL ดีอย่างไร',
    answer:
      'เหมาะกับจอสมัยใหม่และจอความสว่างสูง ช่วยให้วัดค่าได้แม่นยำกว่าการตั้งค่าด้วยตา และรองรับหลายจอได้ดี',
  },
  {
    question: 'นัดคิวยังไง',
    answer: 'ทักแชทผ่าน Facebook หรือ Instagram เพื่อสอบถามราคา นัดคิว และแจ้งจำนวนจอที่ต้องการคาลิเบรตได้เลย',
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${SITE_URL}#localbusiness`,
          name: BRAND_NAME,
          url: SITE_URL,
          image: [photo1, photo2, photo3, logoImg],
          description: PAGE_DESCRIPTION,
          areaServed: [
            { '@type': 'City', name: 'Hat Yai' },
            { '@type': 'Country', name: 'Thailand' },
          ],
          sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
        },
        {
          '@type': 'Service',
          '@id': `${SITE_URL}#service`,
          name: 'บริการคาลิเบรตหน้าจอคอมและโน้ตบุ๊ก',
          serviceType: 'Monitor Calibration',
          provider: {
            '@type': 'LocalBusiness',
            name: BRAND_NAME,
          },
          areaServed: {
            '@type': 'City',
            name: 'Hat Yai',
          },
          description:
            'บริการคาลิเบรตหน้าจอในหาดใหญ่ ใช้ Calibrite Display Plus HL สำหรับตรวจวัดและปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น',
        },
        {
          '@type': 'FAQPage',
          '@id': `${SITE_URL}#faq`,
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    }),
    [],
  );

  useEffect(() => {
    document.title = PAGE_TITLE;

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

    upsertMeta('meta[name="application-name"]', {
      name: 'application-name',
      content: BRAND_NAME,
    });
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content:
        'คาลิเบรตหน้าจอ หาดใหญ่, รับคาลิเบรตจอ หาดใหญ่, ปรับสีจอ หาดใหญ่, Calibrite Display Plus HL, เครื่องคาลิเบรตหน้าจอ, คาลิเบรตจอคอม, หลายจอ สีไม่เท่ากัน',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: PAGE_TITLE,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: SITE_URL,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: photo1,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: PAGE_TITLE,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: photo1,
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: SITE_URL,
    });

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
  }, [structuredData]);

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
      { threshold: 0.16 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img className="brand-logo" src={logoImg} alt={BRAND_NAME} />
            <span className="brand-text">
              <strong>{BRAND_NAME}</strong>
              <small>บริการคาลิเบรตหน้าจอในหาดใหญ่</small>
            </span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="เปิดเมนู"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

          <div className={`nav-wrap ${menuOpen ? 'nav-wrap-open' : ''}`}>
            <nav className="nav" aria-label="เมนูหลัก">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="button button-primary topbar-cta" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ติดต่อผ่าน Facebook
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal reveal-visible">
              <p className="eyebrow">Hatyai Color Calibrate - HCC</p>
              <div className="hero-badge">คาลิเบรตรอบถัดไปหลัง 3 เดือน ลด 50%</div>
              <h1>บริการคาลิเบรตหน้าจอในหาดใหญ่</h1>
              <p className="hero-description">
                ปรับสีหน้าจอคอมและโน้ตบุ๊กให้ตรงขึ้น ใช้งานสบายตา เหมาะกับงานแต่งภาพ กราฟิก วิดีโอ เกม
                และการใช้งานหลายจอ
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                  ติดต่อผ่าน Facebook
                </a>
                <a className="button button-ghost" href="#pricing">
                  ดูราคา
                </a>
                <a className="button button-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </div>

              <div className="hero-highlights">
                {heroHighlights.map((item, index) => (
                  <article className={`mini-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                    <span className="mini-card-line" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-media reveal reveal-delay-1">
              <div className="hero-visual-frame">
                <img src={photo1} alt="บรรยากาศบริการคาลิเบรตหน้าจอ" className="hero-image" />
                <div className="hero-floating-card">
                  <span className="section-kicker">ใช้อุปกรณ์เฉพาะทาง</span>
                  <strong>{CALIBRATOR_NAME}</strong>
                  <p>ช่วยให้สีจอตรงขึ้น สม่ำเสมอขึ้น และใช้งานมั่นใจขึ้น</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-soft" id="problems">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">ปัญหาที่ลูกค้าเจอ</p>
              <h2>เมื่อสีจอไม่ตรง งานก็ช้าลงและตัดสินใจได้ยากขึ้น</h2>
              <p>บริการคาลิเบรตช่วยลดความคลาดเคลื่อนของสี ทำให้ภาพบนจอนิ่งขึ้นและใช้งานสบายขึ้น</p>
            </div>

            <div className="problem-grid compact-grid">
              {problemItems.map((item, index) => (
                <article className={`card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">บริการของเรา</p>
              <h2>รองรับตั้งแต่จอเดียวไปจนถึงหลายจอ</h2>
              <p>เหมาะกับงานภาพ งานกราฟิก วิดีโอ เกม และผู้ใช้ที่ต้องการให้สีหน้าจอสม่ำเสมอขึ้น</p>
            </div>

            <div className="service-grid compact-grid">
              {serviceItems.map((item, index) => (
                <article className={`service-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                  <div className="service-icon" aria-hidden="true" />
                  <h3>{item}</h3>
                  <p>ประเมินตามการใช้งานจริงของแต่ละเครื่อง เพื่อให้ได้ผลลัพธ์ที่เหมาะที่สุด</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-accent" id="equipment">
          <div className="container equipment-shell reveal">
            <div className="equipment-copy">
              <p className="eyebrow">ใช้อุปกรณ์คาลิเบรตระดับมืออาชีพ</p>
              <h2>ใช้ Calibrite Display Plus HL ในการคาลิเบรต</h2>
              <p>
                เราใช้ <strong>{CALIBRATOR_NAME}</strong> เครื่องคาลิเบรตหน้าจอระดับมืออาชีพ สำหรับตรวจวัดและปรับค่าสี
                ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น ช่วยให้สีตรงขึ้น สม่ำเสมอขึ้น และใช้งานได้มั่นใจมากขึ้น
              </p>
              <div className="equipment-points">
                {reasonItems.slice(0, 3).map((item) => (
                  <div className="equipment-point" key={item}>
                    <span className="bullet-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="equipment-visual reveal reveal-delay-2">
              <div className="equipment-visual-card">
                <img src={photo2} alt={CALIBRATOR_NAME} className="equipment-image" />
              </div>
            </div>
          </div>

          <div className="container reveal">
            <div className="spec-grid compact-grid">
              {specItems.map((item, index) => (
                <article className={`spec-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                  <span className="spec-mark" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="container why-shell reveal">
            <div className="why-copy">
              <p className="eyebrow">ทำไมเราเลือกใช้รุ่นนี้</p>
              <h2>ช่วยให้ผลลัพธ์นิ่งขึ้น และเชื่อถือได้มากขึ้น</h2>
              <div className="bullet-grid compact-grid">
                {reasonItems.map((item, index) => (
                  <article className={`bullet-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                    <span className="bullet-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="support-visual">
              <img src={photo3} alt="บรรยากาศการบริการและอุปกรณ์คาลิเบรต" className="support-image reveal reveal-delay-2" />
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">Calibrite Display Plus HL ทำงานอย่างไร</p>
              <h2>ขั้นตอนชัด ใช้เวลาไม่นาน และพร้อมใช้งานทันที</h2>
              <p>ออกแบบกระบวนการให้เข้าใจง่าย เห็นผลจริง และเหมาะกับจอเดียวจนถึงหลายจอ</p>
            </div>

            <div className="process-grid compact-grid">
              {processItems.map((item, index) => (
                <article className={`process-card reveal reveal-delay-${(index % 3) + 1}`} key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="outcome-panel reveal reveal-delay-2">
              <div className="outcome-copy">
                <p className="eyebrow">คาลิเบรตแล้วดียังไง</p>
                <h2>สีจอตรงขึ้น ทำงานมั่นใจขึ้น และใช้งานสบายขึ้นทุกวัน</h2>
              </div>
              <div className="outcome-grid">
                {outcomeItems.map((item) => (
                  <div className="outcome-item" key={item}>
                    <span className="outcome-mark" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="pricing">
          <div className="container reveal">
            <div className="section-heading section-heading-dark">
              <p className="eyebrow">ราคา</p>
              <h2>แพ็กเกจอ่านง่าย เลือกตามจำนวนจอได้ทันที</h2>
              <p>เหมาะกับทั้งผู้ใช้จอเดียว จอคู่ และงานหลายจอ พร้อมโปรโมชันสำหรับการคาลิเบรตรอบถัดไป</p>
            </div>

            <div className="promo-strip reveal reveal-visible">
              <div>
                <span className="promo-strip-label">โปรโมชั่น</span>
                <strong>กลับมาคาลิเบรตอีกครั้งหลัง 3 เดือน ลด 50%</strong>
              </div>
              <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                สอบถามโปรโมชัน
              </a>
            </div>

            <div className="pricing-grid pricing-grid-compact">
              {pricingItems.map((item, index) => (
                <article
                  className={`price-card reveal reveal-delay-${(index % 3) + 1} ${item.featured ? 'price-card-featured' : ''}`}
                  key={item.title}
                >
                  <p className="price-title">{item.title}</p>
                  <div className="price-value">{item.price}</div>
                  <p className="price-detail">{item.detail}</p>
                  <a className="button button-secondary button-full" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                    จองคิว / ติดต่อผ่าน Facebook
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="trust">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">จุดเด่น / ความน่าเชื่อถือ</p>
              <h2>บริการที่ดูโปร ใช้งานจริง และเหมาะกับคนที่ต้องการผลลัพธ์ชัดเจน</h2>
              <p>รวมเหตุผลที่ทำให้บริการนี้เหมาะกับผู้ใช้จอคอม โน้ตบุ๊ก และหลายจอในชีวิตจริง</p>
            </div>

            <div className="trust-grid compact-grid">
              {confidenceItems.map((item, index) => (
                <article className={`trust-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                  <span className="trust-mark" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">AEO / FAQ</p>
              <h2>คำตอบสั้น ๆ ที่ช่วยให้เข้าใจบริการได้เร็วขึ้น</h2>
              <p>จัดวางให้เบา อ่านง่าย และไม่ยัดแน่นเกินไปทั้งบนมือถือและเดสก์ท็อป</p>
            </div>

            <div className="answer-grid compact-grid answer-grid-compact">
              {aeoItems.map((item, index) => (
                <article className={`answer-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="faq-list faq-list-compact">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;

                return (
                  <article className={`faq-item reveal reveal-delay-${(index % 3) + 1}`} key={item.question}>
                    <button
                      type="button"
                      className={`faq-trigger ${isOpen ? 'faq-trigger-open' : ''}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}>
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section section-dark contact-section" id="contact">
          <div className="container contact-shell reveal">
            <div className="contact-copy">
              <p className="eyebrow">ติดต่อเรา</p>
              <h2>ทักแชทผ่าน Facebook หรือ Instagram เพื่อสอบถามราคา นัดคิว และเช็กพื้นที่ให้บริการได้เลย</h2>
              <p>พร้อมคุยรายละเอียดจำนวนจอ รุ่นจอ และช่วงเวลาที่สะดวกแบบตรงไปตรงมา</p>
            </div>

            <div className="contact-actions contact-actions-compact">
              <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                จองคิว / ติดต่อผ่าน Facebook
              </a>
              <a className="button button-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoImg} alt={BRAND_NAME} className="footer-logo" />
            <div>
              <strong>{BRAND_NAME}</strong>
              <p>หาดใหญ่ ประเทศไทย</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#services">บริการ</a>
            <a href="#equipment">อุปกรณ์</a>
            <a href="#pricing">ราคา</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <p className="footer-copy">© 2026 {BRAND_NAME}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
