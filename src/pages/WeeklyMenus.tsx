import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function WeeklyMenus() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section weekly-menus-page">
          <div className="weekly-menus-container">
            <h1>Weekly Menus</h1>
            
            <div className="weekly-menus-content">
              {/* Add your content here */}
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

export default WeeklyMenus;
