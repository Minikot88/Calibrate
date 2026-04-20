import React from 'react';
import { BRAND_NAME, footerLinks, siteAssets } from '../data/siteContent.js';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand-block">
          <div className="footer-brand">
            <img className="footer-logo" src={siteAssets.logoImg} alt={BRAND_NAME} />
            <div className="footer-brand-copy">
              <strong>{BRAND_NAME}</strong>
              <p>บริการคาลิเบรตหน้าจอในหาดใหญ่ สงขลา และพื้นที่ใกล้เคียง</p>
            </div>
          </div>
          <p className="footer-copy">© 2026 Hatyai Color Calibrate - HCC</p>
        </div>

        <nav className="footer-links-wrap" aria-label="ลิงก์ท้ายเว็บไซต์">
          <span className="footer-links-title">ลิงก์ด่วน</span>
          <div className="footer-links">
            {footerLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noreferrer' : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
