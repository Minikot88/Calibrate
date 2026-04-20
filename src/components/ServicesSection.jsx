import React from 'react';
import { serviceCards, serviceSupportItems } from '../data/siteContent.js';

function ServicesSection() {
  return (
    <section className="section" id="services">
      <div className="container services-layout">
        <div className="section-heading reveal">
          <span className="section-kicker">Services</span>
          <h2>บริการคาลิเบรตหน้าจอที่เลือกง่าย เหมาะกับการใช้งานจริงหลายแบบ</h2>
          <p>
            ไม่ว่าจะเป็นคาลิเบรตจอคอม คาลิเบรตโน้ตบุ๊ก คาลิเบรตจอแต่งภาพ คาลิเบรตจอเกมมิ่ง
            หรือคาลิเบรตหลายจอ เราจัดบริการให้เข้าใจง่ายและเลือกต่อได้ทันที
          </p>
        </div>

        <div className="feature-grid">
          {serviceCards.map((item, index) => (
            <article className={`feature-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        <div className="support-panel reveal">
          {serviceSupportItems.map((item) => (
            <div className="support-item" key={item}>
              <span className="support-dot" aria-hidden="true" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
