import React from 'react';
import { problemItems } from '../data/siteContent.js';

function ProblemsSection() {
  return (
    <section className="section section-soft" id="problems">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-kicker">Pain Points</span>
          <h2>ปัญหาที่ลูกค้าส่วนใหญ่เจอก่อนตัดสินใจคาลิเบรตหน้าจอ</h2>
          <p>
            ถ้าหน้าจอเริ่มทำให้คุณลังเลเวลามองภาพ ปรับโทน หรือสลับระหว่างหลายจอ
            นั่นมักเป็นสัญญาณว่าควรคาลิเบรตหน้าจอเพื่อให้กลับมามีความสมดุลอีกครั้ง
          </p>
        </div>

        <div className="feature-grid">
          {problemItems.map((item, index) => (
            <article className={`feature-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemsSection;
