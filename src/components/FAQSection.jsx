import React, { useState } from 'react';
import { faqItems } from '../data/siteContent.js';

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section section-soft" id="faq">
      <div className="container faq-layout">
        <div className="section-heading reveal">
          <span className="section-kicker">FAQ / AEO</span>
          <h2>คำถามที่พบบ่อยเกี่ยวกับการคาลิเบรตหน้าจอในหาดใหญ่</h2>
          <p>
            รวบรวมคำถามจริงที่คนค้นหาบ่อยเกี่ยวกับคาลิเบรตหน้าจอ ราคา ระยะเวลา อุปกรณ์ที่ใช้
            และรูปแบบการให้บริการ เพื่อให้ทั้งคนอ่านและ AI Search หยิบคำตอบไปใช้ได้ง่าย
          </p>
        </div>

        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;

            return (
              <article className={`faq-item reveal reveal-delay-${(index % 3) + 1}`} key={item.question}>
                <button
                  type="button"
                  className={`faq-trigger ${isOpen ? 'is-open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                >
                  <span className="faq-question">{item.question}</span>
                  <span className="faq-symbol" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                <div className={`faq-panel ${isOpen ? 'is-open' : ''}`} id={panelId}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
