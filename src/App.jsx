import React from 'react';
import logoImg from './photo/logo.png';
import heroImg from './photo/HeroBanner.png';

const navItems = [
  { label: 'บริการ', href: '#services' },
  { label: 'ราคา', href: '#pricing' },
  { label: 'ขั้นตอน', href: '#process' },
  { label: 'ติดต่อ', href: '#contact' },
];

const highlightItems = [
  'รองรับ Windows / Mac',
  'เหมาะกับ 1 จอ ถึงหลายจอ',
  'รับงานในหาดใหญ่และใกล้เคียง',
];

const painPoints = [
  {
    title: 'สีจอเพี้ยน',
    description: 'ภาพดูไม่ตรงกับงานจริง สีหลุด โทนเพี้ยน และตัดสินใจเรื่องสีได้ยากขึ้น',
  },
  {
    title: 'จอแต่ละตัวสีไม่เท่ากัน',
    description: 'ทำงานข้ามจอแล้วคุมสีลำบาก โดยเฉพาะคนที่ใช้ 2-3 จอพร้อมกัน',
  },
  {
    title: 'แต่งรูปแล้วสีเปลี่ยน',
    description: 'สิ่งที่เห็นบนจอไม่สอดคล้องกับไฟล์ ทำให้แก้งานซ้ำและเสียเวลา',
  },
  {
    title: 'ใช้หลายจอแล้วล้าตา',
    description: 'ความสว่างและโทนสีที่ไม่สมดุล ส่งผลต่อความสบายตาระหว่างทำงาน',
  },
  {
    title: 'คุมสีงานไม่มั่นใจ',
    description: 'คาลิเบรตช่วยให้สีตรงขึ้น ใช้งานง่ายขึ้น และลดความคลาดเคลื่อนระหว่างอุปกรณ์',
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

const packageItems = [
  {
    title: '1 จอ',
    price: '690 บาท',
    detail: 'เหมาะสำหรับผู้ใช้ทั่วไป งานภาพ หรือจอหลักที่ต้องการสีตรงขึ้น',
  },
  {
    title: '2 จอ',
    price: '1,190 บาท',
    detail: 'ช่วยให้สีใกล้เคียงกันมากขึ้นระหว่างสองจอ ใช้งานลื่นขึ้น',
  },
  {
    title: '3 จอ',
    price: '1,590 บาท',
    detail: 'ตอบโจทย์สายงานที่ใช้หลายหน้าจอ และต้องการภาพรวมสีที่สมดุล',
  },
  {
    title: 'Notebook + จอนอก',
    price: '990 บาท',
    detail: 'เหมาะกับสายทำงานพกพาและโต๊ะทำงานที่มีจอเสริม',
  },
  {
    title: 'งานหลายเครื่อง / บริษัท',
    price: 'สอบถามราคา',
    detail: 'สำหรับทีมงาน ออฟฟิศ หรือเครื่องหลายชุดที่ต้องการนัดบริการ',
  },
];

const processItems = [
  {
    step: '01',
    title: 'นัดวันและสถานที่',
    description: 'แจ้งรุ่นจอ จำนวนจอ และพื้นที่ให้บริการ เพื่อประเมินคิวได้รวดเร็ว',
  },
  {
    step: '02',
    title: 'ตรวจเช็กและคาลิเบรตหน้าจอ',
    description: 'เช็กสภาพการใช้งาน ปรับค่าที่เหมาะสม และคาลิเบรตด้วยอุปกรณ์เฉพาะทาง',
  },
  {
    step: '03',
    title: 'พร้อมใช้งานและแนะนำเบื้องต้น',
    description: 'ส่งมอบจอที่พร้อมใช้งาน พร้อมแนะนำการดูแลค่าแสงและสีในชีวิตประจำวัน',
  },
];

const trustItems = [
  'ใช้เครื่องคาลิเบรตเฉพาะทาง',
  'เหมาะกับงานสีและการใช้งานจริง',
  'รองรับจอคอมและโน้ตบุ๊ก',
  'เหมาะกับผู้ใช้หลายจอ',
  'นัดหมายสะดวกในพื้นที่หาดใหญ่',
];

const confidenceNotes = [
  'เหมาะสำหรับคนที่ต้องการสีใกล้เคียงกันทุกจอ',
  'ช่วยลดปัญหาสีไม่ตรงระหว่างการทำงาน',
  'เหมาะกับสายแต่งภาพ กราฟิก วิดีโอ และผู้ใช้ทั่วไปที่จริงจังเรื่องสี',
];

const contactItems = [
  { label: 'Facebook Page', value: 'facebook.com/yourpage', href: 'https://facebook.com/yourpage' },
  { label: 'Instagram', value: 'instagram.com/yourpage', href: 'https://instagram.com/yourpage' },
  { label: 'Messenger', value: 'm.me/yourpage', href: 'https://m.me/yourpage' },
  { label: 'เบอร์โทร', value: '080-000-0000', href: 'tel:0800000000' },
];

function App() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home">
            <img className="brand-logo" src={logoImg} alt="Hatyai Color Calibrate" />
            <span className="brand-text">
              <strong>Hatyai Color Calibrate</strong>
              <small>บริการคาลิเบรตหน้าจอในหาดใหญ่</small>
            </span>
          </a>

          <nav className="nav" aria-label="เมนูหลัก">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a
            className="button button-primary topbar-cta"
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noreferrer"
          >
            ติดต่อผ่าน Facebook
          </a>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">บริการคาลิเบรตหน้าจอระดับพรีเมียมในพื้นที่หาดใหญ่</p>
              <h1>บริการคาลิเบรตหน้าจอในหาดใหญ่</h1>
              <p className="hero-description">
                ปรับสีหน้าจอคอมและโน้ตบุ๊กให้ตรงขึ้น ใช้งานสบายตา เหมาะกับงานแต่งภาพ กราฟิก วิดีโอ เกม
                และการใช้งานหลายจอ
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
                  Facebook
                </a>
                <a className="button button-secondary" href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
                  Instagram
                </a>
                <a className="button button-ghost" href="#pricing">
                  ดูราคา
                </a>
              </div>

              <div className="promo-banner">
                <span className="promo-label">โปรโมชั่น</span>
                <strong>คาลิเบรตรอบถัดไปหลัง 3 เดือน ลด 50%</strong>
              </div>
            </div>

            <aside className="hero-media">
              <div className="hero-image-frame">
                <img src={heroImg} alt="ภาพบริการคาลิเบรตหน้าจอ" className="hero-image" />
                <div className="hero-image-overlay">
                  <div className="hero-overlay-card">
                    <span className="hero-overlay-label">บริการในพื้นที่</span>
                    <strong>หาดใหญ่ และใกล้เคียง</strong>
                    <p>งานเดี่ยว งานหลายจอ และนัดหมายตามการใช้งานจริง</p>
                  </div>
                </div>
              </div>

              <div className="hero-highlights">
                {highlightItems.map((item) => (
                  <div className="info-card" key={item}>
                    <span className="info-card-line" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-muted" id="problems">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">ปัญหาที่ลูกค้าเจอ</p>
              <h2>เมื่อสีจอไม่ตรง งานก็ช้าลง</h2>
              <p>
                จัดการปัญหาสีเพี้ยน สีไม่เท่ากัน และความล้าตาจากการใช้งานหลายจอ
                ด้วยการคาลิเบรตที่เหมาะกับการใช้งานจริง
              </p>
            </div>

            <div className="card-grid problems-grid">
              {painPoints.map((item) => (
                <article className="card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">บริการของเรา</p>
              <h2>ออกแบบมาเพื่อผู้ใช้ที่จริงจังเรื่องสี</h2>
              <p>รองรับการใช้งานตั้งแต่จอเดียว ไปจนถึงหลายจอสำหรับงานภาพ งานตัดต่อ เกม และงานประจำวัน</p>
            </div>

            <div className="service-grid">
              {serviceItems.map((item) => (
                <article className="service-card" key={item}>
                  <div className="service-icon" aria-hidden="true" />
                  <h3>{item}</h3>
                  <p>บริการแบบนัดหมาย พร้อมประเมินหน้างานตามลักษณะการใช้งานของแต่ละเครื่อง</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark" id="pricing">
          <div className="container">
            <div className="section-heading section-heading-dark">
              <p className="eyebrow">แพ็กเกจราคา</p>
              <h2>ราคาอ่านง่าย ตัดสินใจง่าย</h2>
              <p>เหมาะสำหรับทั้งลูกค้าทั่วไป ฟรีแลนซ์ และทีมงานที่ต้องการความสม่ำเสมอของสีในทุกจอ</p>
            </div>

            <div className="promo-card">
              <div>
                <p className="promo-label">ข้อเสนอเด่น</p>
                <h3>กลับมาคาลิเบรตอีกครั้งหลัง 3 เดือน ลด 50%</h3>
              </div>
              <a className="button button-primary" href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
                สอบถามโปรโมชัน
              </a>
            </div>

            <div className="pricing-grid">
              {packageItems.map((item) => (
                <article className="price-card" key={item.title}>
                  <p className="price-title">{item.title}</p>
                  <div className="price-value">{item.price}</div>
                  <p className="price-detail">{item.detail}</p>
                  <a
                    className="button button-secondary button-full"
                    href="https://facebook.com/yourpage"
                    target="_blank"
                    rel="noreferrer"
                  >
                    ติดต่อเพื่อจองคิว
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">ขั้นตอนการให้บริการ</p>
              <h2>นัดง่าย ทำงานชัด และใช้งานต่อได้ทันที</h2>
              <p>กระบวนการกระชับ เข้าใจง่าย และเหมาะกับลูกค้าที่ต้องการบริการแบบมืออาชีพในพื้นที่หาดใหญ่</p>
            </div>

            <div className="timeline">
              {processItems.map((item) => (
                <article className="timeline-card" key={item.step}>
                  <span className="timeline-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-muted" id="trust">
          <div className="container trust-layout">
            <div className="section-heading section-heading-left">
              <p className="eyebrow">จุดเด่น / ความน่าเชื่อถือ</p>
              <h2>บริการที่เน้นผลลัพธ์จริงและความสบายใจในการใช้งาน</h2>
              <p>เหมาะกับทั้งคนทำงานภาพ ผู้ใช้หลายจอ และผู้ที่ต้องการให้หน้าจอมีความสม่ำเสมอมากขึ้นในทุกวัน</p>
            </div>

            <div className="trust-list">
              {trustItems.map((item) => (
                <div className="trust-item" key={item}>
                  <span className="trust-mark" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="confidence">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow">ข้อความสร้างความมั่นใจ</p>
              <h2>เหมาะกับงานจริง ไม่ใช่แค่ตัวเลขบนหน้าจอ</h2>
              <p>สื่อสารอย่างตรงไปตรงมา ให้ลูกค้าเห็นภาพว่าการคาลิเบรตช่วยอะไรได้บ้างในการใช้งานประจำวัน</p>
            </div>

            <div className="confidence-grid">
              {confidenceNotes.map((item) => (
                <article className="confidence-card" key={item}>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-dark contact-section" id="contact">
          <div className="container contact-layout">
            <div className="contact-copy">
              <p className="eyebrow">ติดต่อเรา</p>
              <h2>ทักแชทเพื่อสอบถามราคา นัดคิว และเช็กพื้นที่ให้บริการได้เลย</h2>
              <p>พร้อมให้บริการสำหรับลูกค้าในหาดใหญ่และพื้นที่ใกล้เคียง ทั้งงานเดี่ยว งานหลายจอ และงานสำหรับทีม</p>
              <a className="button button-primary contact-primary" href="https://m.me/yourpage" target="_blank" rel="noreferrer">
                จองคิว / สอบถามผ่าน Messenger
              </a>
            </div>

            <div className="contact-card-grid">
              {contactItems.map((item) => (
                <a className="contact-card" key={item.label} href={item.href} target="_blank" rel="noreferrer">
                  <span className="contact-label">{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Hatyai Color Calibrate</strong>
            <p>หาดใหญ่ ประเทศไทย</p>
          </div>

          <div className="footer-links">
            <a href="https://facebook.com/yourpage" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com/yourpage" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="https://m.me/yourpage" target="_blank" rel="noreferrer">
              Messenger
            </a>
          </div>

          <p className="footer-copy">© 2026 Hatyai Color Calibrate</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
