import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '@/App';
import { initChatwoot } from '@/services/chatwoot';
import '@/styles/tokens.css';
import '@/styles/globals.css';
import '@/index.css';
import '@/styles/sections-intro.css';
import '@/styles/s4-preview.css';
import '@/styles/s4-technology.css';
import '@/styles/s4-governance.css';
import '@/styles/s4-pricing.css';
import '@/styles/s5-testimonials.css';
import '@/styles/s5-faq.css';
import '@/styles/s5-contact.css';
import '@/styles/s5-footer.css';
import '@/styles/s6-forms.css';
import '@/styles/s4-product.css';

initChatwoot();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
