import React from 'react';
import { FACEBOOK_URL, INSTAGRAM_URL, contactSupportItems } from '../data/siteContent.js';

function ContactSection() {
  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="contact-card reveal reveal-visible">
          <div className="contact-copy">
            <span className="section-kicker">Contact</span>
            <h2>พร้อมให้หน้าจอของคุณสีตรงขึ้น ใช้งานมั่นใจขึ้น และนัดคิวได้ง่ายขึ้น</h2>
            <p>
              หากต้องการสอบถามราคา จำนวนจอ รุ่นจอ หรือรูปแบบการให้บริการในหาดใหญ่และพื้นที่ใกล้เคียง
              สามารถทักมาได้โดยตรงผ่าน Facebook หรือ Instagram
            </p>
            <div className="contact-support-list">
              {contactSupportItems.map((item) => (
                <div className="contact-support-item" key={item}>
                  <span className="support-dot" aria-hidden="true" />
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-actions contact-actions-panel">
            <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ติดต่อผ่าน Facebook
            </a>
            <a className="button button-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              ติดต่อผ่าน Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
