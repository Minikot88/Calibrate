import React from 'react';
import { overviewCards } from '../data/siteContent.js';

function AnswersSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading centered reveal">
          <span className="section-kicker">Why HCC</span>
          <h2>โครงสร้างบริการชัด เข้าใจง่าย และช่วยให้ตัดสินใจได้เร็วขึ้น</h2>
          <p>
            เราจัดข้อมูลให้คนค้นหาและ Google เห็นชัดว่า HCC คือผู้ให้บริการคาลิเบรตหน้าจอในหาดใหญ่ที่มีอุปกรณ์จริง
            ราคาเริ่มต้นชัด และพร้อมให้ข้อมูลก่อนนัดคิว
          </p>
        </div>

        <div className="feature-grid feature-grid-four">
          {overviewCards.map((item, index) => (
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

export default AnswersSection;
