import React from 'react';
import photo2 from '../photo/photo2.jpg';
import { FACEBOOK_URL, pricingPlans, pricingPromo } from '../data/siteContent.js';

function PricingSection() {
  const packageDetails = {
    '1 จอ': ['เหมาะกับจอหลัก 1 ตัว', 'สีตรงขึ้นทันที', 'คุ้มค่าสำหรับเริ่มต้น'],
    '2 จอ': ['เหมาะกับโน้ตบุ๊ก + จอนอก', 'สีใกล้กันทั้งสองจอ', 'ทำงานภาพสบายขึ้น'],
    '3 จอ': ['เหมาะกับชุดทำงานหลายจอ', 'คุมภาพให้ไปในทางเดียวกัน', 'เหมาะกับงานจริงจังมากขึ้น'],
    'Notebook + จอนอก': [
      'เหมาะกับการทำงานข้ามเครื่อง',
      'ลดความต่างของจอหลักและจอเสริม',
      'ช่วยให้ workflow ต่อเนื่องขึ้น',
    ],
  };

  return (
    <section className="section pricing-section" id="pricing">
      <div className="pricing-shell">
        <div className="pricing-top">
          <div className="pricing-intro reveal">
            <span className="pricing-eyebrow">แพ็กเกจราคา</span>

            <h2>
              <span>เลือกแพ็กเกจคาลิเบรตหน้าจอ</span>
              <span>ที่เหมาะกับจำนวนจอ</span>
              <span>และรูปแบบการใช้งาน</span>
            </h2>

            <p>
              ราคาเริ่มต้น 490 บาท เลือกได้ทั้งจอเดี่ยว จอคู่ หลายจอ และโน้ตบุ๊กร่วมกับจอนอก
              เพื่อให้ตัดสินใจได้เร็วและตรงกับลักษณะการใช้งานจริงของคุณ
            </p>

            <div className="pricing-intro-points">
              <div className="pricing-intro-point">
                <span className="pricing-point-dot" aria-hidden="true" />
                <p>เลือกตามจำนวนจอได้ทันทีแบบไม่ต้องตีความเยอะ</p>
              </div>
              <div className="pricing-intro-point">
                <span className="pricing-point-dot" aria-hidden="true" />
                <p>เหมาะกับทั้งผู้ใช้ทั่วไป งานภาพ และชุดทำงานหลายจอ</p>
              </div>
              <div className="pricing-intro-point">
                <span className="pricing-point-dot" aria-hidden="true" />
                <p>สอบถามรายละเอียดก่อนนัดได้ผ่าน Facebook และ Instagram</p>
              </div>
            </div>

            <div className="pricing-trust-note">
              <span className="pricing-trust-label">เริ่มต้นง่าย</span>
              <strong>แพ็กเกจอ่านง่าย ราคาเห็นชัด และพร้อมทักสอบถามได้ทันที</strong>
            </div>
          </div>

          <div className="pricing-utility reveal reveal-delay-1">
            <div className="pricing-visual-panel">
              <div className="pricing-visual-image-wrap">
                <img
                  className="pricing-visual-image"
                  src={photo2}
                  alt="Calibrite Display Plus HL"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="pricing-visual-stats">
                <div className="pricing-visual-stat">
                  <span className="pricing-visual-label">รองรับแพ็กเกจ</span>
                  <strong>1 จอ ถึงหลายจอ</strong>
                </div>
                <div className="pricing-visual-stat">
                  <span className="pricing-visual-label">อุปกรณ์เฉพาะทาง</span>
                  <strong>Calibrite Display Plus HL</strong>
                </div>
              </div>

              <div className="pricing-visual-caption">
                <span className="pricing-visual-label">เหมาะกับงานจริง</span>
                <strong>แพ็กเกจถูกจัดให้เลือกง่ายตามจำนวนจอและรูปแบบการใช้งานจริง</strong>
              </div>
            </div>

            <div className="pricing-promo">
              <div className="pricing-promo-copy">
                <span className="pricing-promo-icon" aria-hidden="true">
                  %
                </span>
                <span className="pricing-promo-label">{pricingPromo.label}</span>
              </div>
              <strong className="pricing-promo-value">{pricingPromo.detail}</strong>
            </div>

            <div className="pricing-utility-note">
              <div className="pricing-utility-card">
                <span className="pricing-utility-kicker">เหมาะกับใคร</span>
                <strong>จอเดี่ยว จอคู่ หลายจอ และชุดทำงานที่ต้องการสีไปในทางเดียวกัน</strong>
              </div>
              <div className="pricing-utility-card">
                <span className="pricing-utility-kicker">การตัดสินใจ</span>
                <strong>ดูราคาแล้วเลือกแพ็กเกจที่ใกล้รูปแบบใช้งานของคุณที่สุดได้เลย</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <article
              className={`pricing-card ${plan.featured ? 'is-featured' : ''} reveal reveal-delay-${(index % 3) + 1}`}
              key={plan.name}
            >
              <div className="pricing-card-glow" aria-hidden="true" />

              <div className="pricing-card-meta">
                <div className="pricing-card-title-group">
                  <h3>{plan.name}</h3>
                  <p className="price-description">{plan.description}</p>
                </div>
                <span className={`pricing-card-badge ${plan.featured ? 'is-featured' : ''}`}>{plan.badge}</span>
              </div>

              <div className="pricing-card-price">
                <strong>{plan.price}</strong>
              </div>

              <div className="pricing-card-benefits">
                {packageDetails[plan.name]?.map((item) => (
                  <div className="pricing-card-benefit" key={item}>
                    <span className="pricing-card-benefit-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <div className="pricing-card-action">
                <a className="pricing-card-button" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                  สอบถามแพ็กเกจนี้
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
