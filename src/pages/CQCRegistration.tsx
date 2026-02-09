import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

const CQC_WIDGET_SCRIPT_URL = 'https://www.cqc.org.uk/sites/all/modules/custom/cqc_widget/widget.js?data-id=1-18338921346&data-host=https://www.cqc.org.uk&type=location';

function CQCRegistration() {
  const widgetWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = widgetWrapperRef.current;
    if (!wrapper) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = CQC_WIDGET_SCRIPT_URL;
    script.async = true;
    wrapper.appendChild(script);

    return () => {
      if (wrapper.contains(script)) {
        wrapper.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section cqc-registration-page">
          <div className="cqc-registration-container">
            <h1>CQC Registration</h1>
            
            <div className="cqc-content">
              <p>Our personal care and nursing care services are registered with the Care Quality Commission (CQC), which regulates and inspects all adult social care services in the public, private and voluntary sectors in England.</p>
            </div>
          </div>
        </section>

        <section className="content-section statement-of-purpose">
          <div className="cqc-registration-container">
            <h1>Statement of Purpose</h1>
            <div className="cqc-content">
              <p>We are required by Regulation to provide a Statement of Purpose.</p>
              <p>This will tell you all about the home, our aims and objectives together with philosophy of care. It includes a description of the services and facilities on offer at the home.</p>
              <p><Link to="/statement-of-purpose.pdf" className="nurse-care-link" target="_blank" rel="noopener noreferrer">Download Statement of Purpose (PDF)</Link></p>
            </div>
          </div>
        </section>

        <section className="content-section cqc-widget-section" aria-label="CQC widget">
          <div id="cqc-widget-container" className="cqc-widget-wrapper" ref={widgetWrapperRef} />
        </section>
      </main>

      <footer className="footer">
        <section className="footer__enquiry">
          <div className="footer__enquiry-container">
            <Link to="/contact-us" className="footer__enquiry-link">
              Enquire about Whitstable House <span className="footer__arrow">▶</span>
            </Link>
          </div>
        </section>
        <div className="footer__container">
          <section className="contact-section">
            <div className="contact-section__content">
              <p>Whitstable House, Boorman Way, Whitstable CT5 3SE</p>
              <p>Copyright © Whitstable House</p>
            </div>
          </section>
        </div>
      </footer>
    </div>
  );
}

export default CQCRegistration;

