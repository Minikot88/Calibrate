import React from 'react';
import { processItems } from '../data/siteContent.js';

function ProcessSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-kicker">Process</span>
          <h2>ขั้นตอนการคาลิเบรตหน้าจอที่เรียบง่าย แต่ชัดเจนและใช้งานได้จริง</h2>
          <p>
            ทุกขั้นตอนออกแบบให้สื่อสารง่าย เข้าใจง่าย และช่วยให้ลูกค้ารู้สึกมั่นใจก่อนเริ่มใช้งานจริงหลังคาลิเบรต
          </p>
        </div>

        <div className="process-grid">
          {processItems.map((item, index) => (
            <article className={`process-card reveal reveal-delay-${(index % 3) + 1}`} key={item.step}>
              <span className="process-step">{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
