import React from 'react';
import {
  CALIBRATOR_NAME,
  conversionPills,
  FACEBOOK_URL,
  INSTAGRAM_URL,
  heroPills,
  heroStats,
  siteAssets,
} from '../data/siteContent.js';

function HeroSection() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-layout">
        <div className="hero-copy reveal reveal-visible">
          <div className="hero-copy-shell">
            <span className="section-badge">รับคาลิเบรตหน้าจอในหาดใหญ่</span>
            <p className="hero-promo">คาลิเบรตรอบถัดไปหลัง 3 เดือน ลด 50%</p>
            <h1>
              <span>บริการคาลิเบรตหน้าจอในหาดใหญ่</span>
              <span>สีตรงขึ้น ใช้งานมั่นใจขึ้น</span>
            </h1>
            <p className="hero-description">
              รับคาลิเบรตจอคอม โน้ตบุ๊ก จอแต่งภาพ จอเกมมิ่ง และหลายจอ ด้วยอุปกรณ์เฉพาะทาง
              เพื่อให้สีตรงขึ้น ลดความเพี้ยน และช่วยให้คุณทำงานหรือใช้งานทั่วไปได้มั่นใจขึ้น
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                ทักสอบถามผ่าน Facebook
              </a>
              <a className="button button-secondary" href="#pricing">
                ดูแพ็กเกจราคา
              </a>
              <a className="button button-ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </div>

            <div className="hero-conversion-row" aria-label="จุดเด่นการให้บริการ">
              {conversionPills.map((item) => (
                <span className="hero-conversion-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="hero-trust-block">
            <div className="hero-stat-grid">
              {heroStats.map((item) => (
                <article className="stat-card reveal" key={item.value}>
                  <strong>{item.value}</strong>
                  <p>{item.label}</p>
                </article>
              ))}
            </div>

            <div className="hero-pill-row" aria-label="ประเภทบริการ">
              {heroPills.map((item) => (
                <span className="hero-pill" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <aside className="hero-media reveal reveal-delay-1" aria-label="ภาพประกอบบริการคาลิเบรตหน้าจอ">
          <div className="hero-media-grid">
            <article className="hero-visual hero-primary-visual">
              <img
                src={siteAssets.photo1}
                alt="บริการคาลิเบรตหน้าจอสำหรับจอคอมและโน้ตบุ๊กในหาดใหญ่"
                className="media-image"
              />
              <div className="overlay-card">
                <span className="overlay-label">อุปกรณ์ที่ใช้</span>
                <strong>{CALIBRATOR_NAME}</strong>
                <p>ช่วยวัดและปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้แม่นยำมากขึ้น</p>
              </div>
            </article>

            <article className="hero-visual hero-secondary-visual">
              <img
                src={siteAssets.photo2}
                alt="Calibrite Display Plus HL สำหรับคาลิเบรตหน้าจอ"
                className="media-image media-image-contain"
                loading="lazy"
                decoding="async"
              />
            </article>

            <article className="hero-brand-card">
              <div className="hero-brand-line">
                <img src={siteAssets.logoImg} alt="โลโก้ HCC" className="hero-brand-logo" />
                <div>
                  <span className="section-kicker">HCC</span>
                  <strong>บริการคาลิเบรตหน้าจอที่ออกแบบมาเพื่อการใช้งานจริง</strong>
                </div>
              </div>
              <p>
                เหมาะกับทั้งคนทำงานภาพ ผู้ใช้หลายจอ เกมเมอร์ และคนทั่วไปที่อยากให้หน้าจอมีความสมดุล
                ดูนิ่ง และใช้งานสบายขึ้น
              </p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default HeroSection;
