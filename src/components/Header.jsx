import React, { useEffect, useRef, useState } from 'react';
import { BRAND_NAME, FACEBOOK_URL, navItems, siteAssets } from '../data/siteContent.js';

const MOBILE_BREAKPOINT = 768;

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelRef = useRef(null);
  const menuButtonRef = useRef(null);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    document.body.classList.toggle('menu-open', menuOpen);

    const handleResize = () => {
      if (window.innerWidth >= MOBILE_BREAKPOINT) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        return;
      }

      if (!menuOpen || event.key !== 'Tab' || !menuPanelRef.current) {
        return;
      }

      const focusableItems = menuPanelRef.current.querySelectorAll(
        'button, [href], [tabindex]:not([tabindex="-1"])',
      );

      if (focusableItems.length === 0) {
        return;
      }

      const firstItem = focusableItems[0];
      const lastItem = focusableItems[focusableItems.length - 1];

      if (event.shiftKey && document.activeElement === firstItem) {
        event.preventDefault();
        lastItem.focus();
      } else if (!event.shiftKey && document.activeElement === lastItem) {
        event.preventDefault();
        firstItem.focus();
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.classList.remove('menu-open');
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      menuButtonRef.current?.focus();
      return;
    }

    const firstFocusable = menuPanelRef.current?.querySelector(
      'button, [href], [tabindex]:not([tabindex="-1"])',
    );
    firstFocusable?.focus();
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={closeMenu}>
          <img className="brand-logo" src={siteAssets.logoImg} alt={BRAND_NAME} />
          <span className="brand-copy">
            <strong>{BRAND_NAME}</strong>
            <small className="brand-tagline">บริการคาลิเบรตหน้าจอในหาดใหญ่</small>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          type="button"
          className={`menu-button ${menuOpen ? 'is-open' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="site-mobile-menu"
          aria-label={menuOpen ? 'ปิดเมนูหลัก' : 'เปิดเมนูหลัก'}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="header-panel header-panel-desktop">
          <nav className="site-nav" aria-label="เมนูหลัก">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="button button-primary header-cta" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ติดต่อผ่าน Facebook
            </a>
          </div>
        </div>
      </div>

      <div
        className={`mobile-menu-overlay ${menuOpen ? 'is-open' : ''}`}
        onClick={closeMenu}
        aria-hidden={menuOpen ? 'false' : 'true'}
      />

      <div
        ref={menuPanelRef}
        id="site-mobile-menu"
        className={`mobile-menu-panel ${menuOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="เมนูหลัก"
      >
        <nav className="mobile-menu-nav" aria-label="เมนูมือถือ">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="mobile-menu-link" onClick={closeMenu}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mobile-menu-footer">
          <a
            className="button button-primary mobile-menu-cta"
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            onClick={closeMenu}
          >
            ติดต่อผ่าน Facebook
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
