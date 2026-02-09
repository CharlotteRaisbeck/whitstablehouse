import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function NHSFunding() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section self-funding-page">
          <div className="self-funding-container">
            <h1>NHS Funding</h1>
          </div>
        </section>

        <section className="content-section self-funding-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>NHS Funded Nursing Care</h2>
              <p>NHS Funded Nursing Care is paid by the NHS directly to nursing homes to fund the care provided by their Registered Nurses. This includes planning, supervising and monitoring nursing and healthcare tasks, as well as direct nursing care.</p>
              <p>Residents of Whitstable House are eligible for this funding on the basis that they "live in a care home registered to provide nursing care" (click here for details), subject to them having been assessed as needing care from registered nurses.</p>
              <p>Residents usually receive confirmation of NHS Funded Nursing Care by the following letter:</p>
              <p><strong>Confirmation Letter to Resident</strong></p>
              <p>This letter confirms that NHS Funded Nursing Care should be reflected in the care home fee actually charged to the resident. Our advertised fees therefore already exclude NHS Funded Nursing Care and so the amount which a resident pays to the home is unaffected by whether the NHS grants it in his/her particular case.</p>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-financial">
          <div className="section__container">
            <div className="section__text">
              <h2>NHS Continuing Healthcare Funding</h2>
              <p>NHS Continuing Healthcare is care that is arranged and funded by the NHS for individuals who are not in hospital, but who have complex on-going healthcare needs. To be eligible, residents must have substantial on-going care needs where the primary need for care relates to their health.  Unfortunately, people with a long-term illness or condition aren't necessarily eligible.</p>
              <p>Unlike social and community care services provided by Kent County Council, NHS Continuing Healthcare is not means tested and so a resident's income and savings are not taken into account.</p>
              <p>For eligible residents, the NHS will pay both board and accommodation directly to the home. However, until the NHS confirms that the resident is eligible, the resident remains personally liable for payment.</p>
              <p>Our terms and conditions for residents with NHS Continuing Healthcare funding are contained in the following Resident Agreement, which we have endeavoured to make as clear and easy to read as we can.  The Resident Agreement confirming acceptance of these terms and conditions needs to be signed before any placement commences.  If an existing resident has a Tenancy Agreement, this must be surrendered in writing before entering into the Nursing Home Agreement.  Personal expenses (e.g. hairdressing, chiropody, etc.) need to be paid using the following Direct Debit Mandate.</p>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-charges">
          <div className="section__container">
            <div className="section__text">
              <h2>Downloads</h2>
            </div>
            <div className="section__text charges-content">
              <ul className="download-list">
                <li>
                  <a href="#" className="pdf-link">Resident Agreement – NHS CHC Funding (pdf)</a>
                </li>
                <li>
                  <a href="#" className="pdf-link">Download Direct Debit Mandate (pdf)</a>
                </li>
              </ul>
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

export default NHSFunding;
