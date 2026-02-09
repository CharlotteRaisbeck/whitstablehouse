import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

// Declare Feathery global type
declare global {
  interface Window {
    Feathery: {
      init: (apiKey: string) => void;
      renderAt: (containerId: string, options: { formId: string }, loginEnabled: boolean) => void;
    };
  }
}

function ContactUs() {
  useEffect(() => {
    // Check if script already exists
    const scriptSelector = 'script[src*="@feathery/react"]';
    let script = document.querySelector(scriptSelector) as HTMLScriptElement;
    
    const initializeForm = () => {
      const container = document.getElementById('feathery-form-container');
      
      if (!container) {
        console.error('Feathery form container not found');
        return;
      }
      
      if (!window.Feathery) {
        console.warn('Feathery is not available yet, retrying...');
        setTimeout(initializeForm, 200);
        return;
      }
      
      try {
        // Clear container first to prevent duplicates (including loading message)
        container.innerHTML = '';
        
        // Initialize Feathery
        window.Feathery.init('649416df-c617-435e-a75a-b8cbe9ed5fdb');
        const loginEnabled = false;
        window.Feathery.renderAt('feathery-form-container', { formId: 'bLjv32' }, loginEnabled);
        console.log('Feathery form initialized successfully');
      } catch (error) {
        console.error('Error initializing Feathery form:', error);
        // Show error message if form fails to load
        container.innerHTML = '<p style="padding: 20px; color: #063B74;">Unable to load form. Please refresh the page or contact us directly.</p>';
      }
    };
    
    if (!script) {
      // Load Feathery script
      script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@feathery/react@latest/umd/index.js';
      script.async = true;
      script.onerror = () => {
        console.error('Failed to load Feathery script');
      };
      script.onload = () => {
        console.log('Feathery script loaded');
        // Wait a bit for Feathery to be available
        setTimeout(initializeForm, 100);
      };
      document.body.appendChild(script);
    } else {
      // Script already exists
      if (window.Feathery) {
        // Feathery is already available
        initializeForm();
      } else {
        // Script exists but Feathery might not be ready yet
        script.onload = () => {
          setTimeout(initializeForm, 100);
        };
        // Also try after a delay in case script was already loaded
        setTimeout(initializeForm, 500);
      }
    }
    
    // Cleanup
    return () => {
      const container = document.getElementById('feathery-form-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section contact-us-page">
          <div className="contact-us-container">
            <h1>Contact Us</h1>
            
            <div className="contact-layout">
              <section className="contact-form-section">
                <div id="feathery-form-container" className="feathery-form-container">
                  <p style={{ padding: '20px', color: '#063B74' }}>Loading form...</p>
                </div>
              </section>

              <div className="contact-right-column">
                <section className="contact-section-main">
                  <h2>For more information or to ask any questions you might have, please phone, email or write to us.</h2>
                  
                  <div className="contact-details">
                    <div className="contact-address">
                      <p>Whitstable House</p>
                      <p>Boorman Way</p>
                      <p>Whitstable</p>
                      <p>Kent</p>
                      <p>CT5 3SE</p>
                    </div>

                    <div className="contact-info">
                      <p><strong>Tel:</strong> <a href="tel:01227533522">01227 533522</a></p>
                      <p><strong>Enquiries:</strong> <a href="mailto:enquiries@whitstable.house">enquiries@whitstable.house</a></p>
                    </div>
                  </div>
                </section>

                <section className="find-us-section">
                  <h2>Find Us</h2>
                  <p>Whitstable House overlooks the Thames Estuary and is within easy reach of Estuary View Medical Centre.</p>
                  
                  <div className="map-container">
                    <iframe
                      src="https://www.google.com/maps?q=Whitstable+House,+Boorman+Way,+Whitstable+CT5+3SE&output=embed"
                      width="100%"
                      height="450"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Whitstable House Location"
                      className="google-map-iframe"
                    ></iframe>
                  </div>
                </section>
              </div>
            </div>
          </div>
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

export default ContactUs;

