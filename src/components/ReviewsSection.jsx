import React from 'react';
import photo1 from '../photo/photo1.jpg';
import photo2 from '../photo/photo2.jpg';
import photo3 from '../photo/photo3.webp';
import { FACEBOOK_URL, reviewItems } from '../data/siteContent.js';

const reviewImageModules = import.meta.glob('../photo/review/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default',
});

const reviewGalleryImages = Object.values(reviewImageModules);
const fallbackReviewImages = [photo1, photo2, photo3];
const activeReviewImages = reviewGalleryImages.length > 0 ? reviewGalleryImages : fallbackReviewImages;

function ReviewsSection() {
  return (
    <section className="section section-soft reviews-section" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-heading reveal centered">
          <span className="section-kicker">Social Proof</span>
          <h2 id="reviews-title">ลูกค้ากลุ่มไหนเหมาะกับบริการนี้ และมักได้ผลลัพธ์แบบไหน</h2>
          <p>
            เราเน้นสื่อสารผลลัพธ์ที่เกิดขึ้นจริงหลังคาลิเบรต เพื่อช่วยให้ทั้งผู้ใช้ทั่วไปและคนทำงานภาพเข้าใจประโยชน์ได้ชัดขึ้น
          </p>
        </div>

        <div className="feature-grid feature-grid-three feature-grid-equal reviews-grid">
          {reviewItems.map((item, index) => (
            <article
              className={`feature-card feature-card-equal review-card reveal reveal-delay-${(index % 3) + 1}`}
              key={item.title}
            >
              <span className="review-card-trust">{item.label}</span>
              <span className="review-card-label">{item.title}</span>
              <p>{item.quote}</p>
            </article>
          ))}
        </div>

        <div className="review-gallery reveal reveal-delay-1" aria-label="ภาพรีวิวจากลูกค้า">
          {activeReviewImages.map((imageSrc, index) => (
            <article className="review-gallery-item" key={`${imageSrc}-${index}`}>
              <img className="review-gallery-image" src={imageSrc} alt={`ภาพรีวิวลูกค้า ${index + 1}`} loading="lazy" decoding="async" />
              <span className="review-gallery-badge">Client Feedback</span>
            </article>
          ))}
        </div>

        <div className="reviews-cta reveal reveal-delay-2">
          <strong>รีวิวและภาพผลงานช่วยให้คุณเห็นแนวทางการบริการจริงก่อนตัดสินใจนัดคิว</strong>
          <p>ส่งรูปหน้าจอหรือแจ้งลักษณะการใช้งานมาได้ทันที เพื่อประเมินแนวทางที่เหมาะกับงานของคุณ</p>
          <div className="reviews-cta-actions">
            <a className="button button-primary reviews-cta-button" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ส่งรูปหน้าจอเพื่อประเมินเบื้องต้น
            </a>
            <a className="button button-secondary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              จองคิว Calibrate
            </a>
            <a className="button button-ghost" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ขอใบเสนอราคาองค์กร
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ReviewsSection;
