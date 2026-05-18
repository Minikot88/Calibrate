import React from 'react';
import photo2 from '../photo/photo2.jpg';
import { FACEBOOK_URL, pricingPlans, pricingPromo } from '../data/siteContent.js';

function PricingSection() {
  const packageDetails = {
    'Single Monitor Package': [
      'คาลิเบรต 1 จอสำหรับการใช้งานประจำวัน',
      'ปรับสีและความสว่างให้สมดุลขึ้น',
      'ตั้งค่า color profile พร้อมใช้งาน',
    ],
    'Creator / Photographer Package': [
      'เหมาะกับงานภาพที่ต้องตัดสินใจเรื่องสี',
      'ตรวจ before/after หลังคาลิเบรต',
      'ตั้งค่า profile และแนะนำการใช้งานเบื้องต้น',
    ],
    'Multi-Monitor Package': [
      'เหมาะกับชุดทำงาน 2-3 จอ',
      'ช่วยให้สีไปในทางเดียวกันระหว่างหน้าจอ',
      'เหมาะกับ workstation และ workflow ต่อเนื่อง',
    ],
    'Company / Organization Package': [
      'เหมาะสำหรับ 3 จอขึ้นไป หรืองานประเมินเป็นทีม',
      'รองรับบริการนอกสถานที่สำหรับหน่วยงาน',
      'มีสรุปผลก่อน/หลัง พร้อม guidance สำหรับทีม',
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

        <div className="pricing-grid pricing-grid-cards">
          {pricingPlans.map((plan, index) => (
            <article
              className={`pricing-card ${plan.featured ? 'is-featured' : ''} reveal reveal-delay-${(index % 3) + 1}`}
              key={plan.name}
            >
              <div className="pricing-card-glow" aria-hidden="true" />

              <div className="pricing-card-meta">
                <div className="pricing-card-title-group">
                  <span className="pricing-card-fit-tag">{plan.bestFor}</span>
                  <h3 className="pricing-card-name">{plan.name}</h3>
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
                  {plan.name === 'Company / Organization Package' ? 'สอบถามแพ็กเกจองค์กร' : 'สอบถามแพ็กเกจนี้'}
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="pricing-team-cta reveal reveal-delay-2">
          <div className="pricing-team-cta-copy">
            <h3>ต้องการ Calibrate หลายจอหรือทั้งทีม?</h3>
            <p>ส่งจำนวนจอ รุ่นหน้าจอ และสถานที่ เพื่อประเมินราคาเบื้องต้น</p>
          </div>
          <div className="pricing-team-cta-actions">
            <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ขอใบเสนอราคา
            </a>
            <a className="button button-secondary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ทักสอบถาม
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
