import React, { useEffect, useMemo, useState } from 'react';
import logoImg from './photo/logo.png';
import photo1 from './photo/photo1.jpg';
import photo2 from './photo/photo2.jpg';
import photo3 from './photo/photo3.webp';

const BRAND_NAME = 'Hatyai Color Calibrate - HCC';
const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61568043921605';
const INSTAGRAM_URL = 'https://www.instagram.com/hatyaicolorcalibrate.hcc/';
const DEFAULT_SITE_URL = 'https://yourdomain.com';
const CALIBRATOR_NAME = 'Calibrite Display Plus HL';
const PAGE_TITLE = 'คาลิเบรตหน้าจอ หาดใหญ่ | รับคาลิเบรตจอคอม โน้ตบุ๊ก และหลายจอ | HCC';
const PAGE_DESCRIPTION =
  'บริการคาลิเบรตหน้าจอในหาดใหญ่ สงขลา สำหรับจอคอม โน้ตบุ๊ก จอกราฟิก จอเกมมิ่ง และหลายจอ ใช้ Calibrite Display Plus HL ช่วยให้สีตรงขึ้น งานภาพมั่นใจขึ้น เริ่มต้น 490 บาท และนัดคิวง่ายผ่าน Facebook หรือ Instagram';

const navItems = [
  { label: 'คาลิเบรตคืออะไร', href: '#what-is-calibration' },
  { label: 'เหมาะกับใคร', href: '#who-for' },
  { label: 'อุปกรณ์', href: '#equipment' },
  { label: 'ราคา', href: '#pricing' },
  { label: 'พื้นที่บริการ', href: '#service-area' },
  { label: 'FAQ', href: '#faq' },
  { label: 'ติดต่อ', href: '#contact' },
];

const heroHighlights = [
  'เริ่มต้น 490 บาท',
  'รองรับ Windows / Mac',
  'ใช้อุปกรณ์เฉพาะทาง',
  'นัดคิวง่าย',
];

const problemItems = [
  {
    title: 'สีเพี้ยน',
    description: 'ภาพบนจอไม่ตรงกับงานจริง ทำให้แต่งภาพและตัดสินใจเรื่องสีได้ยากขึ้น',
  },
  {
    title: 'หลายจอสีไม่เท่ากัน',
    description: 'เมื่อต้องสลับจอทำงาน สีและความสว่างที่ต่างกันทำให้งานไม่ต่อเนื่อง',
  },
  {
    title: 'แต่งรูปแล้วสีเปลี่ยน',
    description: 'ไฟล์ที่ดูดีในจอหนึ่งอาจเปลี่ยนไปเมื่อเปิดในอีกจอหรืออีกอุปกรณ์',
  },
  {
    title: 'ใช้นานแล้วล้าตา',
    description: 'ความสว่างและโทนสีที่ไม่สมดุลกันทำให้ใช้งานนานแล้วเมื่อยตาได้ง่าย',
  },
  {
    title: 'ทำงานสีไม่มั่นใจ',
    description: 'เมื่อหน้าจอไม่เสถียร งานภาพ กราฟิก วิดีโอ หรือเกมจะควบคุมผลลัพธ์ได้ยากขึ้น',
  },
];

const serviceItems = [
  'จอคอม',
  'โน้ตบุ๊ก',
  'จอแต่งภาพ',
  'จอเกมมิ่ง',
  'จอหลายจอ',
  'Windows / Mac',
];

const answerItems = [
  {
    title: 'คาลิเบรตหน้าจอคืออะไร',
    answer: 'คือการวัดและปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น',
    detail: 'เหมาะกับคนที่ต้องการให้สิ่งที่เห็นบนจอเชื่อถือได้มากกว่าการปรับด้วยตาอย่างเดียว',
  },
  {
    title: 'คาลิเบรตหน้าจอช่วยอะไร',
    answer: 'ช่วยให้สีตรงขึ้น จอหลายตัวใกล้กันมากขึ้น และทำงานภาพได้มั่นใจขึ้น',
    detail: 'เหมาะทั้งกับงานกราฟิก วิดีโอ เกม และคนที่ใช้หน้าจอทำงานทุกวัน',
  },
  {
    title: 'เหมาะกับใครบ้าง',
    answer: 'เหมาะกับช่างภาพ ดีไซเนอร์ คนตัดต่อ เกมเมอร์ โปรแกรมเมอร์ และผู้ใช้หลายจอ',
    detail: 'รวมถึงคนที่ใช้โน้ตบุ๊กหรือเจอปัญหาจอสีไม่ตรงกับงานจริง',
  },
  {
    title: 'ใช้เวลานานไหม',
    answer: 'โดยทั่วไปใช้เวลาไม่นาน ขึ้นอยู่กับจำนวนจอ รุ่นจอ และสภาพการตั้งค่าปัจจุบัน',
    detail: 'หากมีหลายจอหรือใช้จอเฉพาะทาง อาจใช้เวลาเพิ่มขึ้นเล็กน้อยเพื่อให้ผลลัพธ์เสถียรขึ้น',
  },
  {
    title: 'ราคาเริ่มต้นเท่าไร',
    answer: 'ราคาเริ่มต้นที่ 490 บาทสำหรับ 1 จอ',
    detail: 'มีแพ็กเกจสำหรับ 2 จอ 3 จอ และโน้ตบุ๊กร่วมกับจอนอก เพื่อให้เลือกตามการใช้งานจริงได้ง่าย',
  },
  {
    title: 'รองรับจอแบบไหน',
    answer: 'รองรับจอคอม โน้ตบุ๊ก จอกราฟิก จอเกมมิ่ง และจอสมัยใหม่หลายประเภท',
    detail: 'รวมถึง LCD, IPS, OLED และ Mini-LED ตามความเหมาะสมของแต่ละรุ่น',
  },
  {
    title: 'ใช้กับ Windows / Mac ได้ไหม',
    answer: 'ได้ รองรับทั้ง Windows และ Mac รวมถึงการใช้งานกับจอภายนอก',
    detail: 'เหมาะกับทั้งผู้ใช้ที่มีจอเดียวและคนที่ทำงานแบบหลายหน้าจอ',
  },
  {
    title: 'MacBook คาลิเบรตได้ไหม',
    answer: 'ได้ สามารถคาลิเบรต MacBook และโน้ตบุ๊กที่ใช้ทำงานร่วมกับจอภายนอกได้',
    detail: 'เหมาะกับคนที่ต้องการให้สีบนโน้ตบุ๊กและจอเสริมใกล้กันมากขึ้นในการใช้งานจริง',
  },
  {
    title: 'ต้องทำทุกกี่เดือน',
    answer: 'แนะนำทุกประมาณ 3 เดือน หรือเมื่อเปลี่ยนแสง เปลี่ยนจอ หรือเปลี่ยนอุปกรณ์',
    detail: 'สำหรับคนทำงานสีจริงจังหรือใช้หน้าจอทุกวัน การคาลิเบรตเป็นระยะจะช่วยให้ผลลัพธ์นิ่งกว่าเดิม',
  },
  {
    title: 'จอหลายจอสีไม่เท่ากันช่วยได้ไหม',
    answer: 'ช่วยได้ เพราะการคาลิเบรตทำให้แต่ละจอมีแนวทางการแสดงผลใกล้กันมากขึ้น',
    detail: 'แม้จะแก้ความต่างของพาแนลไม่ได้ทั้งหมด แต่ช่วยลดความเพี้ยนที่เห็นได้ชัดในการใช้งานจริง',
  },
];

const audienceItems = [
  'ช่างภาพและครีเอเตอร์ที่ต้องการให้สีไฟล์เชื่อถือได้มากขึ้น',
  'นักออกแบบและคนตัดต่อที่ต้องทำงานข้ามหลายจอ',
  'เกมเมอร์หรือผู้ใช้ทั่วไปที่อยากให้จอมองสบายและสมดุลขึ้น',
  'ผู้ใช้โน้ตบุ๊กและจอนอกที่ต้องการให้สีใกล้กันมากขึ้น',
];

const serviceAreaItems = [
  'หาดใหญ่',
  'สงขลา',
  'พื้นที่ใกล้เคียงในภาคใต้ตอนล่างตามการนัดหมาย',
];

const specItems = [
  'วัดความสว่างได้สูงสุด 10,000 nits',
  'รองรับหน้าจอ LCD / IPS / OLED / Mini-LED',
  'เหมาะกับจอสมัยใหม่และจอความสว่างสูง',
  'ใช้งานได้กับ Windows / Mac',
  'รองรับการคาลิเบรตหลายจอ',
  'สร้างโปรไฟล์สีแยกสำหรับแต่ละจอได้',
];

const reasonItems = [
  'วัดสีได้แม่นยำกว่าการปรับด้วยตา',
  'ช่วยให้จอหลายตัวมีสีใกล้กันมากขึ้น',
  'เหมาะกับทั้งงานภาพและการใช้งานทั่วไปที่จริงจัง',
  'ลดปัญหาสีเพี้ยน สีไม่ตรง และความไม่สม่ำเสมอของแต่ละจอ',
  'เพิ่มความมั่นใจเวลาแต่งภาพ ออกแบบ หรือลากงานข้ามหลายจอ',
  'ใช้งานได้กับจอรุ่นใหม่และจอความสว่างสูง',
];

const outcomeItems = [
  'สีจอตรงขึ้น ใช้งานมั่นใจขึ้น',
  'จอหลายตัวมีสีใกล้กันมากขึ้น',
  'ทำงานภาพ งานกราฟิก และวิดีโอได้แม่นยำขึ้น',
  'ใช้งานทุกวันสบายตาขึ้น',
  'ลดปัญหาสีเพี้ยนจากการตั้งค่าด้วยตา',
  'เหมาะกับทั้งผู้ใช้ทั่วไปและผู้ใช้มืออาชีพ',
];

const uspItems = [
  {
    title: 'ใช้อุปกรณ์เฉพาะทาง ไม่ใช่ปรับด้วยตา',
    description: 'ใช้เครื่องมือคาลิเบรตจริงเพื่อวัดสีและความสว่าง ช่วยให้ผลลัพธ์แม่นยำกว่าเดาเอง',
  },
  {
    title: 'สีตรงขึ้น ทำงานมั่นใจขึ้น',
    description: 'เหมาะกับแต่งภาพ ออกแบบ ตัดต่อ งานคอนเทนต์ และทุกงานที่ต้องการความแม่นยำของสีมากขึ้น',
  },
  {
    title: 'หลายจอสีใกล้กันมากขึ้น',
    description: 'เหมาะกับคนใช้ 2-3 จอ หรือ notebook + monitor ที่ต้องการให้ภาพรวมของสีทำงานต่อกันได้ง่ายขึ้น',
  },
  {
    title: 'ใช้งานสบายตาขึ้น',
    description: 'ช่วยลดโทนสีเพี้ยน ความสว่างไม่สมดุล และความไม่สบายตาจากจอที่ตั้งค่าไม่เหมาะสม',
  },
  {
    title: 'เริ่มต้นเข้าถึงง่าย',
    description: 'ราคาเริ่มต้นเพียง 490 บาท เลือกแพ็กเกจได้ตามจำนวนจอและลักษณะการใช้งานจริง',
  },
  {
    title: 'อยู่หาดใหญ่ นัดง่าย พร้อมใช้งานต่อได้',
    description: 'เหมาะกับลูกค้าในหาดใหญ่ สงขลา และใกล้เคียง ใช้เวลาไม่นานและทำเสร็จพร้อมใช้งานต่อได้เลย',
  },
];

const reassuranceItems = [
  'ทักมาสอบถามก่อนได้ ไม่มีค่าใช้จ่าย',
  'แจ้งรุ่นจอเพื่อประเมินเบื้องต้นได้',
  'เหมาะทั้งมืออาชีพและใช้งานทั่วไป',
  'ให้คำแนะนำหลังคาลิเบรตเบื้องต้น',
];

const searchIntentLinks = [
  { label: 'คาลิเบรตหน้าจอคืออะไร', href: '#what-is-calibration' },
  { label: 'คาลิเบรตจอราคาเท่าไร', href: '#pricing' },
  { label: 'จอหลายจอสีไม่เท่ากัน', href: '#process' },
  { label: 'คาลิเบรตจอ หาดใหญ่', href: '#service-area' },
];

const processItems = [
  {
    step: '01',
    title: 'ตรวจเช็กค่าปัจจุบัน',
    description: 'เริ่มจากดูสภาพการใช้งานจริง ความสว่าง และค่าที่หน้าจอแสดงอยู่ในตอนนี้',
  },
  {
    step: '02',
    title: 'วางอุปกรณ์บนหน้าจอ',
    description: `ใช้ ${CALIBRATOR_NAME} ตรวจวัดสี ความสว่าง และโทนภาพโดยตรงจากจอ`,
  },
  {
    step: '03',
    title: 'ปรับค่าและสร้างโปรไฟล์สี',
    description: 'ตั้งค่าให้เหมาะกับจอนั้นโดยเฉพาะ เพื่อให้สีใกล้มาตรฐานและใช้งานได้เสถียรขึ้น',
  },
  {
    step: '04',
    title: 'พร้อมใช้งานทันที',
    description: 'ใช้เวลาไม่นาน เห็นผลจริง และเหมาะกับทั้งจอเดียวจนถึงหลายจอ',
  },
];

const pricingItems = [
  {
    title: '1 จอ',
    price: '490 บาท',
    detail: 'เหมาะสำหรับผู้ที่ต้องการคาลิเบรตหน้าจอหลัก 1 จอ เพื่อให้สีตรงและใช้งานได้มั่นใจขึ้น',
    tag: 'ราคาเริ่มต้น',
  },
  {
    title: '2 จอ',
    price: '890 บาท',
    detail: 'เหมาะสำหรับผู้ที่ใช้งาน 2 จอ และต้องการให้สีใกล้เคียงกันมากขึ้นในการทำงาน',
    featured: true,
    tag: 'แนะนำ',
  },
  {
    title: '3 จอ',
    price: '1,290 บาท',
    detail: 'คุ้มค่าสำหรับผู้ที่ใช้งานหลายจอ และต้องการความสม่ำเสมอของสีระหว่างจอ',
  },
  {
    title: 'Notebook + จอนอก',
    price: '790 บาท',
    detail: 'เหมาะสำหรับผู้ที่ใช้โน้ตบุ๊กต่อจอนอก และต้องการให้ทั้งสองจอแสดงผลใกล้เคียงกัน',
  },
  {
    title: 'งานหลายจอ / บริษัท',
    price: 'สอบถามราคา',
    detail: 'สำหรับงานที่มีหลายจอหรือใช้งานในบริษัท สามารถสอบถามราคาเพิ่มเติมตามจำนวนและลักษณะงาน',
  },
];

const confidenceItems = [
  {
    title: 'ใช้ Calibrite Display Plus HL',
    description: 'ใช้อุปกรณ์คาลิเบรตหน้าจอเฉพาะทางสำหรับตรวจวัดจริง ไม่ใช่การลองปรับด้วยตาเพียงอย่างเดียว',
  },
  {
    title: 'รองรับ Windows / Mac และหลายประเภทจอ',
    description: 'เหมาะกับจอ LCD, IPS, OLED, Mini-LED รวมถึงโน้ตบุ๊ก จอคอม และหลายจอในชุดเดียวกัน',
  },
  {
    title: 'เหมาะทั้งงานภาพและใช้งานทั่วไป',
    description: 'ไม่จำเป็นต้องเป็นช่างภาพก็ใช้บริการได้ หากอยากให้หน้าจอสมดุลขึ้นและมองสบายขึ้น',
  },
  {
    title: 'มีแพ็กเกจหลายแบบ เริ่มต้นเข้าถึงง่าย',
    description: 'เริ่มต้นเพียง 490 บาท และมีตัวเลือกสำหรับจอคู่ หลายจอ หรือ notebook + จอนอก',
  },
  {
    title: 'บริการในหาดใหญ่ นัดคิวสะดวก',
    description: 'เหมาะกับลูกค้าในหาดใหญ่ สงขลา และพื้นที่ใกล้เคียง สามารถทักมาคุยรายละเอียดก่อนได้',
  },
  {
    title: 'ให้คำแนะนำหลังคาลิเบรตเบื้องต้น',
    description: 'ช่วยให้เข้าใจการใช้งานหลังคาลิเบรตมากขึ้นและหยิบไปใช้งานต่อได้อย่างมั่นใจ',
  },
];

const faqItems = [
  {
    question: 'คาลิเบรตหน้าจอคืออะไร',
    answer:
      'คือการวัดและปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น เพื่อให้สิ่งที่เห็นบนจอเชื่อถือได้กว่าเดิม',
  },
  {
    question: 'ทำไมจอแต่ละเครื่องสีไม่เหมือนกัน',
    answer:
      'เพราะพาแนล การตั้งค่า อายุจอ ความสว่าง และสภาพแสงรอบตัวต่างกัน แม้เป็นจอรุ่นเดียวกันก็อาจให้สีไม่เหมือนกันได้',
  },
  {
    question: 'คาลิเบรตหน้าจอช่วยอะไร',
    answer:
      'ช่วยให้สีตรงขึ้น ภาพนิ่งขึ้น และลดความต่างระหว่างหลายจอ ทำให้แต่งภาพ ออกแบบ ตัดต่อ หรือทำงานประจำวันได้มั่นใจขึ้น',
  },
  {
    question: 'เหมาะกับงานประเภทไหน',
    answer:
      'เหมาะกับงานภาพถ่าย กราฟิก วิดีโอ งานคอนเทนต์ เกม และงานทั่วไปที่ต้องการให้จอสมดุลและเชื่อถือได้มากขึ้น',
  },
  {
    question: 'ใช้เวลานานแค่ไหน',
    answer:
      'โดยทั่วไปใช้เวลาไม่นาน ขึ้นอยู่กับจำนวนจอ รุ่นของหน้าจอ และค่าการใช้งานเดิมของแต่ละเครื่อง',
  },
  {
    question: 'ใช้ได้กับ Windows และ Mac ไหม',
    answer:
      'ได้ รองรับทั้ง Windows และ Mac รวมถึงการทำงานร่วมกับจอภายนอกและชุดหลายจอ',
  },
  {
    question: 'MacBook คาลิเบรตได้ไหม',
    answer:
      'ได้ สามารถคาลิเบรต MacBook และโน้ตบุ๊กที่ใช้ร่วมกับจอภายนอกได้ เพื่อให้สีใกล้กันมากขึ้นและใช้งานต่อเนื่องได้สบายกว่าเดิม',
  },
  {
    question: 'โน้ตบุ๊กคาลิเบรตได้ไหม',
    answer:
      'ได้ เหมาะกับทั้งโน้ตบุ๊กเดี่ยวและโน้ตบุ๊กร่วมกับจอนอก โดยเฉพาะคนที่ทำงานนอกสถานที่หรือสลับโต๊ะทำงานบ่อย',
  },
  {
    question: 'จอเกมมิ่งคาลิเบรตได้ไหม',
    answer:
      'ได้ การคาลิเบรตช่วยให้สีและความสว่างสมดุลขึ้น มองสบายขึ้น และช่วยให้จอดูเป็นธรรมชาติกว่าการปรับด้วยตาอย่างเดียว',
  },
  {
    question: 'จอหลายจอสีไม่เท่ากันแก้ได้ไหม',
    answer:
      'ช่วยได้มาก เพราะการคาลิเบรตทำให้แต่ละจอมีแนวทางการแสดงผลใกล้กันขึ้น แม้จะไม่ลบข้อจำกัดของพาแนลทั้งหมดก็ตาม',
  },
  {
    question: 'ต้องคาลิเบรตทุกกี่เดือน',
    answer:
      'แนะนำทุกประมาณ 3 เดือน หรือเมื่อเปลี่ยนแสง เปลี่ยนจอ เปลี่ยนอุปกรณ์ หรือเริ่มรู้สึกว่าสีไม่เหมือนเดิม',
  },
  {
    question: 'หลังคาลิเบรตแล้วได้อะไร',
    answer:
      'จะได้หน้าจอที่สีตรงขึ้น ใช้งานมั่นใจขึ้น และมีโปรไฟล์สีที่เหมาะกับจอนั้นมากขึ้น ทำให้ทำงานต่อได้ง่ายกว่าเดิม',
  },
  {
    question: 'ใช้อุปกรณ์อะไรในการคาลิเบรต',
    answer:
      `เราใช้ ${CALIBRATOR_NAME} สำหรับตรวจวัดและปรับค่าสี ความสว่าง และโทนภาพของหน้าจออย่างแม่นยำกว่าการตั้งค่าด้วยตา`,
  },
  {
    question: 'Calibrite Display Plus HL คืออะไร',
    answer:
      'เป็นเครื่องคาลิเบรตหน้าจอระดับมืออาชีพที่รองรับจอสมัยใหม่และจอความสว่างสูง ช่วยให้การวัดสีและการสร้างโปรไฟล์สีแม่นยำขึ้น',
  },
  {
    question: 'ต้องนำเครื่องไปเองไหม',
    answer:
      'โดยทั่วไปเป็นการนัดบริการตามพื้นที่ให้บริการในหาดใหญ่ สงขลา และใกล้เคียง สามารถทักมาสอบถามรูปแบบการนัดได้ก่อน',
  },
  {
    question: 'ราคาเริ่มต้นเท่าไร',
    answer:
      'ราคาเริ่มต้นอยู่ที่ 490 บาทสำหรับ 1 จอ และมีแพ็กเกจสำหรับ 2 จอ 3 จอ รวมถึงโน้ตบุ๊กร่วมกับจอนอก',
  },
  {
    question: 'คนทั่วไปจำเป็นต้องทำไหม',
    answer:
      'ถ้าใช้งานที่เกี่ยวกับสี ใช้หลายจอ หรือรู้สึกว่าจอแสดงผลไม่สมดุล การคาลิเบรตก็มีประโยชน์มาก แต่คนทั่วไปที่อยากให้จอใช้งานสบายขึ้นก็ทำได้เช่นกัน',
  },
  {
    question: 'ต่างจากการปรับสีด้วยตาอย่างไร',
    answer:
      'การปรับด้วยตาอาศัยความรู้สึกส่วนตัวและสภาพแสงรอบตัว แต่การคาลิเบรตใช้เครื่องวัดจริง จึงให้ผลที่สม่ำเสมอและเชื่อถือได้มากกว่า',
  },
  {
    question: 'นัดคิวยังไง',
    answer:
      'ทักแชทผ่าน Facebook หรือ Instagram เพื่อสอบถามราคา นัดคิว และแจ้งจำนวนจอที่ต้องการคาลิเบรตได้เลย',
  },
  {
    question: 'ต้องนัดคิวไหม',
    answer:
      'แนะนำให้นัดคิวก่อน เพื่อแจ้งรุ่นจอ จำนวนจอ และช่วงเวลาที่สะดวก จะช่วยให้ประเมินงานและจัดคิวได้ง่ายขึ้น',
  },
];

function App() {
  const [openFaq, setOpenFaq] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const siteUrl = useMemo(
    () => (typeof window !== 'undefined' ? window.location.origin : DEFAULT_SITE_URL),
    [],
  );

  const structuredData = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'LocalBusiness',
          '@id': `${siteUrl}/#localbusiness`,
          name: BRAND_NAME,
          url: `${siteUrl}/`,
          image: [photo1, photo2, photo3, logoImg],
          description: PAGE_DESCRIPTION,
          priceRange: '฿490+',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Hat Yai',
            addressRegion: 'Songkhla',
            addressCountry: 'TH',
          },
          areaServed: [
            { '@type': 'City', name: 'Hat Yai' },
            { '@type': 'AdministrativeArea', name: 'Songkhla' },
            { '@type': 'Country', name: 'Thailand' },
          ],
          sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
        },
        {
          '@type': 'ProfessionalService',
          '@id': `${siteUrl}/#professional-service`,
          name: BRAND_NAME,
          url: `${siteUrl}/`,
          description:
            'บริการคาลิเบรตหน้าจอในหาดใหญ่และสงขลา สำหรับจอคอม โน้ตบุ๊ก จอกราฟิก และหลายจอ โดยใช้ Calibrite Display Plus HL',
          areaServed: [
            { '@type': 'City', name: 'Hat Yai' },
            { '@type': 'AdministrativeArea', name: 'Songkhla' },
          ],
          sameAs: [FACEBOOK_URL, INSTAGRAM_URL],
        },
        {
          '@type': 'Service',
          '@id': `${siteUrl}/#service`,
          name: 'บริการคาลิเบรตจอคอม จอโน้ตบุ๊ก และหลายจอในหาดใหญ่',
          serviceType: 'Monitor Calibration',
          provider: {
            '@id': `${siteUrl}/#localbusiness`,
          },
          areaServed: {
            '@type': 'City',
            name: 'Hat Yai',
          },
          description:
            'บริการคาลิเบรตหน้าจอในหาดใหญ่ ใช้ Calibrite Display Plus HL สำหรับตรวจวัดและปรับค่าสี ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น',
        },
        {
          '@type': 'FAQPage',
          '@id': `${siteUrl}/#faq`,
          mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: item.answer,
            },
          })),
        },
      ],
    }),
    [siteUrl],
  );

  useEffect(() => {
    document.title = PAGE_TITLE;

    const upsertMeta = (selector, attrs) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    const upsertLink = (selector, attrs) => {
      let element = document.head.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        document.head.appendChild(element);
      }
      Object.entries(attrs).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    };

    upsertMeta('meta[name="application-name"]', {
      name: 'application-name',
      content: BRAND_NAME,
    });
    upsertMeta('meta[name="robots"]', {
      name: 'robots',
      content: 'index, follow, max-image-preview:large',
    });
    upsertMeta('meta[name="description"]', {
      name: 'description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="keywords"]', {
      name: 'keywords',
      content:
        'คาลิเบรตหน้าจอ หาดใหญ่, คาลิเบรตจอ หาดใหญ่, รับคาลิเบรตจอ หาดใหญ่, ปรับสีจอ หาดใหญ่, คาลิเบรตจอคอม หาดใหญ่, คาลิเบรตจอโน้ตบุ๊ก หาดใหญ่, monitor calibration hatyai, screen calibration hatyai',
    });
    upsertMeta('meta[property="og:title"]', {
      property: 'og:title',
      content: PAGE_TITLE,
    });
    upsertMeta('meta[property="og:description"]', {
      property: 'og:description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[property="og:type"]', {
      property: 'og:type',
      content: 'website',
    });
    upsertMeta('meta[property="og:locale"]', {
      property: 'og:locale',
      content: 'th_TH',
    });
    upsertMeta('meta[property="og:url"]', {
      property: 'og:url',
      content: `${siteUrl}/`,
    });
    upsertMeta('meta[property="og:image"]', {
      property: 'og:image',
      content: photo1,
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: 'twitter:card',
      content: 'summary_large_image',
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: 'twitter:title',
      content: PAGE_TITLE,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: 'twitter:description',
      content: PAGE_DESCRIPTION,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: 'twitter:image',
      content: photo1,
    });
    upsertLink('link[rel="canonical"]', {
      rel: 'canonical',
      href: `${siteUrl}/`,
    });

    let script = document.getElementById('structured-data-hcc');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = 'structured-data-hcc';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);

    return () => {
      const currentScript = document.getElementById('structured-data-hcc');
      if (currentScript) {
        currentScript.textContent = '';
      }
    };
  }, [siteUrl, structuredData]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="topbar">
        <div className="container topbar-inner">
          <a className="brand" href="#home" onClick={closeMenu}>
            <img className="brand-logo" src={logoImg} alt={BRAND_NAME} />
            <span className="brand-text">
              <strong>{BRAND_NAME}</strong>
              <small>บริการคาลิเบรตหน้าจอในหาดใหญ่</small>
            </span>
          </a>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'menu-toggle-open' : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="เปิดเมนู"
            aria-expanded={menuOpen}
          >
            <span />
            <span />
          </button>

          <div className={`nav-wrap ${menuOpen ? 'nav-wrap-open' : ''}`}>
            <nav className="nav" aria-label="เมนูหลัก">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              ))}
            </nav>

            <a className="button button-primary topbar-cta" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              ติดต่อผ่าน Facebook
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="hero section" id="home">
          <div className="container hero-grid">
            <div className="hero-copy reveal reveal-visible">
              <p className="eyebrow">บริการคาลิเบรตหน้าจอ หาดใหญ่</p>
              <div className="hero-badge">โปรโมชั่น คาลิเบรตรอบถัดไปหลัง 3 เดือน ลด 50% 1 ครั้ง</div>
              <h1>บริการคาลิเบรตหน้าจอในหาดใหญ่ สีตรงขึ้น ใช้งานมั่นใจขึ้น</h1>
              <p className="hero-description">
                เหมาะกับจอคอม โน้ตบุ๊ก จอแต่งภาพ จอหลายจอ และผู้ที่ต้องการสีแม่นยำมากขึ้น เริ่มต้นเพียง
                490 บาท ใช้อุปกรณ์เฉพาะทางและนัดคิวง่ายในหาดใหญ่
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                  ติดต่อผ่าน Facebook
                </a>
                <a className="button button-ghost" href="#pricing">
                  ดูราคา
                </a>
                <a className="button button-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                  ติดต่อผ่าน Instagram
                </a>
              </div>

              <div className="hero-note-list">
                {reassuranceItems.slice(0, 3).map((item) => (
                  <p className="hero-note" key={item}>
                    <span className="hero-note-dot" aria-hidden="true" />
                    {item}
                  </p>
                ))}
              </div>

              <div className="hero-topic-links" aria-label="หัวข้อสำคัญบนหน้านี้">
                {searchIntentLinks.map((item) => (
                  <a className="topic-link" key={item.href} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="hero-highlights">
                {heroHighlights.map((item, index) => (
                  <article className={`mini-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                    <span className="mini-card-line" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>

            <aside className="hero-media reveal reveal-delay-1">
              <div className="hero-visual-frame">
                <img
                  src={photo1}
                  alt="บริการคาลิเบรตหน้าจอในหาดใหญ่สำหรับจอคอมและโน้ตบุ๊ก"
                  className="hero-image"
                />
                <div className="hero-floating-card">
                  <span className="section-kicker">ใช้อุปกรณ์เฉพาะทาง</span>
                  <strong>{CALIBRATOR_NAME}</strong>
                  <p>ช่วยให้สีจอตรงขึ้น สม่ำเสมอขึ้น และเหมาะกับการทำงานที่ต้องการความแม่นยำมากขึ้น</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section section-soft" id="what-is-calibration">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">คาลิเบรตหน้าจอคืออะไร</p>
              <h2>คาลิเบรตหน้าจอคือการปรับสีและความสว่างของจอให้ใกล้มาตรฐานมากขึ้น</h2>
              <p>เมื่อจอแสดงผลไม่แม่น งานภาพจะตัดสินใจยากขึ้น สีหลายจอจะไม่ตรงกัน และการใช้งานประจำวันอาจไม่สบายตาเท่าที่ควร</p>
            </div>

            <div className="problem-grid compact-grid">
              {problemItems.map((item, index) => (
                <article className={`card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="services">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">ทำไมคาลิเบรตหน้าจอจึงสำคัญ</p>
              <h2>ช่วยให้สีจอตรงขึ้น งานภาพมั่นใจขึ้น และหลายจอทำงานต่อกันได้ง่ายขึ้น</h2>
              <p>รองรับทั้งจอคอม โน้ตบุ๊ก จอเกมมิ่ง และหลายจอ เหมาะกับทั้งงานสีจริงและการใช้งานทั่วไปที่อยากให้จอสมดุลขึ้น</p>
            </div>

            <div className="service-grid compact-grid">
              {serviceItems.map((item, index) => (
                <article className={`service-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                  <div className="service-icon" aria-hidden="true" />
                  <h3>{item}</h3>
                  <p>ประเมินตามการใช้งานจริงของแต่ละเครื่อง เพื่อให้ได้ผลลัพธ์ที่เหมาะที่สุด</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="answers">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">คำตอบที่คนค้นหาบ่อย</p>
              <h2>ตอบตรงทั้งเรื่องราคา เวลา อุปกรณ์ และการรองรับจอแต่ละแบบ</h2>
              <p>ช่วยให้ทั้งคนอ่านจริงและระบบค้นหาเข้าใจบริการได้เร็ว โดยไม่ต้องเลื่อนหาเนื้อหายาวเกินจำเป็น</p>
            </div>

            <div className="answer-grid answer-grid-wide">
              {answerItems.map((item, index) => (
                <article className={`answer-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                  <h3>{item.title}</h3>
                  <p className="answer-strong">{item.answer}</p>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="who-for">
          <div className="container audience-shell reveal">
            <article className="audience-panel">
              <div className="section-heading compact-heading">
                <p className="eyebrow">เหมาะกับใครบ้าง</p>
                <h2>เหมาะกับคนที่ต้องพึ่งพาสีหน้าจอในงานจริง</h2>
                <p>โดยเฉพาะคนที่ใช้หลายจอ ใช้โน้ตบุ๊กร่วมกับจอนอก หรืออยากให้หน้าจอแสดงผลเชื่อถือได้มากขึ้น</p>
              </div>
              <div className="audience-list">
                {audienceItems.map((item) => (
                  <article className="bullet-card" key={item}>
                    <span className="bullet-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </article>

            <article className="audience-panel audience-panel-soft" id="service-area">
              <div className="section-heading compact-heading">
                <p className="eyebrow">พื้นที่ให้บริการ</p>
                <h2>บริการคาลิเบรตหน้าจอในหาดใหญ่ สงขลา และพื้นที่ใกล้เคียงในภาคใต้</h2>
                <p>เหมาะสำหรับลูกค้าในหาดใหญ่และพื้นที่ใกล้เคียงที่ต้องการนัดคิวสะดวก พูดคุยรายละเอียดได้ง่าย และใช้บริการได้ใกล้ตัว</p>
              </div>
              <div className="service-area-list">
                {serviceAreaItems.map((item) => (
                  <span className="area-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section section-accent" id="equipment">
          <div className="container equipment-shell reveal">
            <div className="equipment-copy">
              <p className="eyebrow">ใช้อุปกรณ์คาลิเบรตระดับมืออาชีพ</p>
              <h2>ใช้ Calibrite Display Plus HL ในการคาลิเบรต</h2>
              <p>
                เราใช้ <strong>{CALIBRATOR_NAME}</strong> เครื่องคาลิเบรตหน้าจอระดับมืออาชีพ สำหรับตรวจวัดและปรับค่าสี
                ความสว่าง และโทนภาพของหน้าจอให้ใกล้มาตรฐานมากขึ้น ช่วยให้สีตรงขึ้น สม่ำเสมอขึ้น และใช้งานได้มั่นใจมากขึ้น
              </p>
              <div className="equipment-points">
                {reasonItems.slice(0, 3).map((item) => (
                  <div className="equipment-point" key={item}>
                    <span className="bullet-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="equipment-visual reveal reveal-delay-2">
              <div className="equipment-visual-card">
                <img
                  src={photo2}
                  alt="อุปกรณ์ Calibrite Display Plus HL สำหรับคาลิเบรตหน้าจอ"
                  className="equipment-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="container reveal">
            <div className="spec-grid compact-grid">
              {specItems.map((item, index) => (
                <article className={`spec-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                  <span className="spec-mark" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="container why-shell reveal">
            <div className="why-copy">
              <p className="eyebrow">ทำไมฮาร์ดแวร์คาลิเบรตจึงสำคัญ</p>
              <h2>การวัดจริงเชื่อถือได้กว่าการปรับสีด้วยตา</h2>
              <div className="bullet-grid compact-grid">
                {reasonItems.map((item, index) => (
                  <article className={`bullet-card reveal reveal-delay-${(index % 3) + 1}`} key={item}>
                    <span className="bullet-dot" aria-hidden="true" />
                    <p>{item}</p>
                  </article>
                ))}
              </div>
            </div>
            <div className="support-visual">
              <img
                src={photo3}
                alt="บรรยากาศการให้บริการคาลิเบรตหน้าจอในหาดใหญ่"
                className="support-image reveal reveal-delay-2"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </section>

        <section className="section" id="process">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">ขั้นตอนการคาลิเบรต</p>
              <h2>รู้ขั้นตอนก่อนนัดคิวได้ง่าย และคาดหวังผลลัพธ์ได้ชัดเจน</h2>
              <p>เหมาะกับคนที่อยากรู้ว่าคาลิเบรตหน้าจอใช้เวลานานไหม และหลังทำแล้วได้อะไรกลับไปใช้งานจริง</p>
            </div>

            <div className="process-grid compact-grid">
              {processItems.map((item, index) => (
                <article className={`process-card reveal reveal-delay-${(index % 3) + 1}`} key={item.step}>
                  <span className="process-step">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>

            <div className="outcome-panel reveal reveal-delay-2">
              <div className="outcome-copy">
                <p className="eyebrow">คาลิเบรตหน้าจอช่วยอะไร</p>
                <h2>หลังคาลิเบรตแล้วจะได้หน้าจอที่เชื่อถือได้มากขึ้นและใช้งานง่ายขึ้นทันที</h2>
                <p>ช่วยลดเวลาปรับจอเอง ทำให้ภาพบนจอดูนิ่งขึ้น และเหมาะกับทั้งงานจริงจังกับการใช้งานทุกวัน</p>
              </div>
              <div className="outcome-grid">
                {outcomeItems.map((item) => (
                  <div className="outcome-item" key={item}>
                    <span className="outcome-mark" aria-hidden="true" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section section-dark" id="pricing">
          <div className="container reveal">
            <div className="section-heading section-heading-dark">
              <p className="eyebrow">คาลิเบรตจอราคาเท่าไร</p>
              <h2>แพ็กเกจคาลิเบรตหน้าจอในหาดใหญ่ เริ่มต้น 490 บาท</h2>
              <p>เลือกตามจำนวนจอได้ง่าย ทั้ง 1 จอ 2 จอ 3 จอ และ notebook + จอนอก พร้อมสอบถามงานหลายจอหรือใช้งานในบริษัทได้</p>
            </div>

            <div className="promo-strip reveal reveal-visible">
              <div>
                <span className="promo-strip-label">โปรโมชั่น</span>
                <strong>คาลิเบรตรอบถัดไปหลัง 3 เดือน ลด 50% 1 ครั้ง</strong>
              </div>
              <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                สอบถาม / ติดต่อผ่าน Facebook
              </a>
            </div>

            <div className="pricing-grid pricing-grid-compact">
              {pricingItems.map((item, index) => (
                <article
                  className={`price-card reveal reveal-delay-${(index % 3) + 1} ${item.featured ? 'price-card-featured' : ''}`}
                  key={item.title}
                >
                  <div className="price-head">
                    <p className="price-title">{item.title}</p>
                    {item.tag ? <span className={`price-badge ${item.featured ? 'price-badge-featured' : ''}`}>{item.tag}</span> : null}
                  </div>
                  <div className="price-value">{item.price}</div>
                  <p className="price-detail">{item.detail}</p>
                  <a className="button button-secondary button-full" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                    จองคิว / ติดต่อผ่าน Facebook
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section section-soft" id="trust">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">ทำไมเลือกใช้บริการนี้</p>
              <h2>รวมเหตุผลที่ทำให้บริการคาลิเบรตจอในหาดใหญ่คุ้มค่าและน่าเชื่อถือ</h2>
              <p>ทั้งเรื่องอุปกรณ์เฉพาะทาง การรองรับหลายประเภทจอ ราคาเริ่มต้นชัดเจน และการติดต่อที่ไม่ซับซ้อน</p>
            </div>

            <div className="trust-shell">
              <div className="trust-grid compact-grid">
                {uspItems.map((item, index) => (
                  <article className={`trust-card reveal reveal-delay-${(index % 3) + 1}`} key={item.title}>
                    <span className="trust-mark" aria-hidden="true" />
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </article>
                ))}
              </div>

              <aside className="trust-panel reveal reveal-delay-2">
                <p className="eyebrow">ความน่าเชื่อถือ</p>
                <h3>ติดต่อได้ง่าย เข้าใจง่าย และเหมาะกับการใช้งานจริง</h3>
                <div className="trust-panel-list">
                  {confidenceItems.map((item) => (
                    <article className="trust-panel-item" key={item.title}>
                      <span className="trust-mark" aria-hidden="true" />
                      <div>
                        <strong>{item.title}</strong>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="section section-dark contact-section" id="contact">
          <div className="container contact-shell reveal">
            <div className="contact-copy">
              <p className="eyebrow">จองคิว / ติดต่อผ่าน Facebook หรือ Instagram</p>
              <h2>ส่งรุ่นจอเพื่อประเมินราคาและนัดคิวได้ง่าย เหมาะกับลูกค้าในหาดใหญ่และพื้นที่ใกล้เคียง</h2>
              <p>
                เหมาะสำหรับคนที่กำลังมองหาบริการคาลิเบรตหน้าจอในหาดใหญ่ สงขลา และพื้นที่ใกล้เคียง
                ไม่จำเป็นต้องมีความรู้เทคนิคมาก่อนก็คุยรายละเอียดและเลือกแพ็กเกจที่เหมาะได้
              </p>
            </div>

            <div className="contact-actions contact-actions-compact">
              <a className="button button-primary" href={FACEBOOK_URL} target="_blank" rel="noreferrer">
                จองคิว / ติดต่อผ่าน Facebook
              </a>
              <a className="button button-secondary" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
                ส่งรุ่นจอผ่าน Instagram
              </a>
            </div>

            <div className="contact-note-list">
              {reassuranceItems.map((item) => (
                <article className="contact-note" key={item}>
                  <span className="trust-mark" aria-hidden="true" />
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container reveal">
            <div className="section-heading">
              <p className="eyebrow">FAQ</p>
              <h2>คำถามที่พบบ่อยเกี่ยวกับคาลิเบรตหน้าจอ ราคา เวลา และการรองรับอุปกรณ์</h2>
              <p>รวมคำตอบที่ตรงกับคำค้นจริง เช่น คาลิเบรตหน้าจอช่วยอะไร ราคาเริ่มต้นเท่าไร ใช้เวลานานไหม และใช้กับ Windows, Mac หรือ MacBook ได้ไหม</p>
            </div>

            <div className="faq-list faq-list-compact">
              {faqItems.map((item, index) => {
                const isOpen = openFaq === index;
                const panelId = `faq-panel-${index}`;
                const buttonId = `faq-trigger-${index}`;

                return (
                  <article className={`faq-item reveal reveal-delay-${(index % 3) + 1}`} key={item.question}>
                    <button
                      type="button"
                      id={buttonId}
                      className={`faq-trigger ${isOpen ? 'faq-trigger-open' : ''}`}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                    >
                      <span>{item.question}</span>
                      <span className="faq-icon" aria-hidden="true">
                        {isOpen ? '−' : '+'}
                      </span>
                    </button>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`faq-panel ${isOpen ? 'faq-panel-open' : ''}`}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img src={logoImg} alt="โลโก้ Hatyai Color Calibrate - HCC" className="footer-logo" />
            <div>
              <strong>{BRAND_NAME}</strong>
              <p>หาดใหญ่ สงขลา ประเทศไทย</p>
            </div>
          </div>

          <div className="footer-links">
            <a href="#services">บริการ</a>
            <a href="#equipment">อุปกรณ์</a>
            <a href="#pricing">ราคา</a>
            <a href={FACEBOOK_URL} target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <p className="footer-copy">© 2026 {BRAND_NAME}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
