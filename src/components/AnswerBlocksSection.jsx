import React from 'react';
import { answerBlocks } from '../data/siteContent.js';

function AnswerBlocksSection() {
  return (
    <section className="section section-soft" aria-labelledby="answer-blocks-title">
      <div className="container">
        <div className="section-heading reveal">
          <span className="section-kicker">Quick Answers</span>
          <h2 id="answer-blocks-title">คำตอบสั้นแบบตรงประเด็นสำหรับ Google และ AI Search</h2>
          <p>
            ส่วนนี้สรุปคำตอบที่คนค้นหาบ่อยเกี่ยวกับการคาลิเบรตหน้าจอในหาดใหญ่ เพื่อให้เข้าใจบริการได้เร็ว
            และช่วยให้ระบบค้นหาดึงคำตอบไปแสดงได้ง่ายขึ้น
          </p>
        </div>

        <div className="feature-grid feature-grid-two">
          {answerBlocks.map((item, index) => (
            <article className={`feature-card answer-card reveal reveal-delay-${(index % 3) + 1}`} key={item.question}>
              <span className="answer-card-label">คำถามยอดค้นหา</span>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AnswerBlocksSection;
