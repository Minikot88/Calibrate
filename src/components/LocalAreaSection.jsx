import React from 'react';
import { localSeoItems, localSeoParagraphs } from '../data/siteContent.js';

function LocalAreaSection() {
  return (
    <section className="section" id="service-area">
      <div className="container split-layout local-layout">
        <div className="content-panel reveal">
          <span className="section-kicker">Local SEO</span>
          <h2>ให้บริการคาลิเบรตหน้าจอในหาดใหญ่และพื้นที่ใกล้เคียง</h2>
          {localSeoParagraphs.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>

        <aside className="local-panel reveal reveal-delay-1">
          <div className="list-stack">
            {localSeoItems.map((item) => (
              <div className="list-item" key={item}>
                <span className="support-dot" aria-hidden="true" />
                <p>{item}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default LocalAreaSection;
