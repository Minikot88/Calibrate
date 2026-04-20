import React from 'react';
import { reviewItems } from '../data/siteContent.js';

function ReviewsSection() {
  return (
    <section className="section section-soft" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-kicker">Social Proof</span>
          <h2 id="reviews-title">ลูกค้ากลุ่มไหนเหมาะกับบริการนี้ และมักได้ผลลัพธ์แบบไหน</h2>
          <p>
            เราเน้นสื่อสารผลลัพธ์ที่เกิดขึ้นจริงหลังคาลิเบรต เพื่อช่วยให้ทั้งผู้ใช้ทั่วไปและคนทำงานภาพเข้าใจประโยชน์ได้ชัดขึ้น
          </p>
        </div>

        <div className="feature-grid feature-grid-three reviews-grid">
          {reviewItems.map((item, index) => (
            <article className={`feature-card review-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
              <span className="review-card-label">{item.title}</span>
              <p>{item.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
