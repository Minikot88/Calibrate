import React from 'react';
import { audienceItems, whyCalibrateItems, siteAssets } from '../data/siteContent.js';

function AudienceSection() {
  return (
    <section className="section" id="why-calibrate">
      <div className="container split-layout split-layout-balanced">
        <div className="content-panel reveal">
          <span className="section-kicker">Why Calibrate</span>
          <h2>ทำไมต้องคาลิเบรตหน้าจอ ถ้าคุณอยากให้สีตรงและทำงานได้มั่นใจขึ้น</h2>
          <p>
            เพราะหน้าจอที่ดูดีด้วยตาอาจยังไม่ใช่หน้าจอที่สมดุลพอสำหรับการใช้งานจริง
            การคาลิเบรตช่วยให้คุณได้ผลลัพธ์ที่นิ่งขึ้นอย่างมีเหตุผลมากกว่าการพยายามปรับเอง
          </p>

          <div className="list-stack">
            {whyCalibrateItems.map((item) => (
              <div className="list-item" key={item}>
                <span className="support-dot" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        <aside className="audience-side reveal reveal-delay-1">
          <article className="audience-visual-card">
            <div className="audience-visual">
              <img
                src={siteAssets.photo1}
                alt="ตัวอย่างการใช้งานบริการคาลิเบรตหน้าจอ"
                className="media-image"
                loading="lazy"
                decoding="async"
              />
            </div>
          </article>

          <article className="audience-copy-card">
            <div className="audience-copy">
              <span className="section-kicker">เหมาะกับใคร</span>
              <h3>ออกแบบมาเพื่อคนที่อยากให้หน้าจอเชื่อถือได้ขึ้นในชีวิตจริง</h3>
              <div className="list-stack compact">
                {audienceItems.map((item) => (
                  <div className="list-item" key={item}>
                    <span className="support-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </aside>
      </div>
    </section>
  );
}

export default AudienceSection;
