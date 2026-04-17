import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';
import logoImg from './photo/logo.png';

const applyBrandAssets = () => {
  document.documentElement.lang = 'th';
  document.title = 'คาลิเบรตหน้าจอ หาดใหญ่ | Hatyai Color Calibrate - HCC';

  const upsertLink = (selector, rel, href, type) => {
    let element = document.head.querySelector(selector);
    if (!element) {
      element = document.createElement('link');
      document.head.appendChild(element);
    }
    element.setAttribute('rel', rel);
    element.setAttribute('href', href);
    if (type) {
      element.setAttribute('type', type);
    }
  };

  upsertLink('link[rel="icon"]', 'icon', logoImg, 'image/png');
  upsertLink('link[rel="shortcut icon"]', 'shortcut icon', logoImg, 'image/png');
  upsertLink('link[rel="apple-touch-icon"]', 'apple-touch-icon', logoImg);
};

applyBrandAssets();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
