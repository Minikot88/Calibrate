import React from 'react';
import { benefitItems, trustPoints, siteAssets } from '../data/siteContent.js';

function TrustSection() {
  return (
    <section className="section">
      <div className="container split-layout trust-layout">
        <div className="content-panel reveal">
          <span className="section-kicker">Benefits</span>
          <h2>ผลลัพธ์ที่ควรเห็นหลังคาลิเบรตคือหน้าจอใช้งานง่ายและเชื่อถือได้ขึ้น</h2>
          <p>
            จุดสำคัญของบริการนี้ไม่ใช่แค่การวัดค่า แต่คือการทำให้หน้าจอของคุณพร้อมใช้งานจริงมากขึ้น
            ทั้งเรื่องสี ความสบายตา และความมั่นใจเวลาใช้งาน
          </p>

          <div className="feature-grid feature-grid-two">
            {benefitItems.map((item, index) => (
              <article className={`feature-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="trust-side reveal reveal-delay-1">
          <article className="trust-image-card">
            <img
              src={siteAssets.photo3}
              alt="ตัวอย่างชุดหลายจอที่เหมาะกับการคาลิเบรตหน้าจอ"
              className="media-image"
              loading="lazy"
              decoding="async"
            />
          </article>
          <article className="trust-note-card">
            <span className="section-kicker">Why HCC</span>
            <div className="list-stack compact">
              {trustPoints.map((item) => (
                <div className="list-item" key={item}>
                  <span className="support-dot" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default TrustSection;
