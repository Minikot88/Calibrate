import React from 'react';
import { CALIBRATOR_NAME, deviceBenefits, deviceSpecs, siteAssets } from '../data/siteContent.js';

function DeviceSection() {
  return (
    <section className="section section-soft equipment-section" id="equipment">
      <div className="container equipment-layout">
        <div className="equipment-copy reveal">
          <span className="section-kicker">Equipment</span>
          <h2>ใช้ {CALIBRATOR_NAME} เพื่อวัดสีหน้าจอได้แม่นยำและน่าเชื่อถือมากขึ้น</h2>
          <p>
            อุปกรณ์เฉพาะทางช่วยให้การวัดและปรับค่าสี ความสว่าง และโทนภาพมีความแม่นยำมากกว่าการตั้งค่าด้วยสายตา
            จึงเหมาะกับทั้งจอแต่งภาพ จอเกมมิ่ง จอคอมทั่วไป และชุดหลายจอ
          </p>

          <div className="equipment-spec-grid">
            {deviceSpecs.map((item, index) => (
              <article className={`equipment-spec-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <aside className="equipment-media reveal reveal-delay-1">
          <article className="equipment-shot">
            <div className="equipment-shot-inner">
              <img
                src={siteAssets.photo2}
                alt={CALIBRATOR_NAME}
                className="media-image media-image-contain equipment-product-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="equipment-benefits">
            <span className="section-kicker">จุดเด่นของอุปกรณ์</span>
            <p className="equipment-benefits-intro">
              อุปกรณ์รุ่นนี้ช่วยให้การวัดค่าและสร้างโปรไฟล์สีเป็นระบบมากขึ้น
              จึงเหมาะกับทั้งงานภาพระดับจริงจังและการใช้งานทั่วไปที่อยากให้จอนิ่งขึ้น
            </p>
            <div className="list-stack compact">
              {deviceBenefits.map((item) => (
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

export default DeviceSection;
