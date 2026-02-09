import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function CareSuites() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section care-suites-page">
          <div className="care-suites-container">
            <h1>Care Suites</h1>
          </div>
        </section>

        <section className="content-section care-suites-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>Much more than nursing home bedrooms</h2>
              <p>We provide residents with much more space than traditional nursing home settings, but with the same level of nursing care and support.</p>
              <p>Our care suites differ from traditional nursing home bedrooms in three important ways:</p>
              <ol>
                <li>Social space with comfortable seats so that residents' families and friends can spend good quality time together in privacy and comfort.</li>
                <li>Dining space so that residents can enjoy their meals in their own room, if they wish.</li>
                <li>A kitchenette so that residents and their guests can prepare drinks and snacks.</li>
              </ol>
            </div>
            <div className="section__image">
              <img src="/whitstable-suite-image-3.jpg" alt="Care Suites at Whitstable House" />
            </div>
          </div>
        </section>

        <section className="content-section nursing-care-section">
          <div className="section__container">
            <div className="section__image">
              <img src="/whitstable-suite-image.jpg" alt="Nursing care at Whitstable House" />
            </div>
            <div className="section__text">
              <h2>Nursing care within your own home</h2>
              <p>Whitstable House is registered to provide both personal and nursing care to the residents of the suites. The in-house team of registered nurses and carers is available 24 hours a day to respond to the residents' care needs when required. With Registered Nurses available on-site, the suites offer a permanent home where the residents do not need to worry about moving when their care needs increase.</p>
            </div>
          </div>
        </section>

        <section className="content-section relationships-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Maintain relationships with family and friends</h2>
              <p>The move into a care setting often results in many key relationships being compromised. Our Care Suites are therefore particularly important as comfortable, spacious places to visit where residents' relationships with their families and friends can flourish.</p>
              <p>Residents' spouses can be accommodated in our studio care suites, so that couples can stay together even when one develops the need for on-going care.</p>
            </div>
            <div className="section__image">
              <img src="/whitstable-suite-main-room.jpg" alt="Care suite main room at Whitstable House" />
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

export default CareSuites;
