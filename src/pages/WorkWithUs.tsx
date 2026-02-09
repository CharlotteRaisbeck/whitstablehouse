import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function WorkWithUs() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section work-with-us-page">
          <div className="work-with-us-container">
            <h1>Work with Us</h1>
            
            <div className="work-with-us-content">
              <h2>Career Opportunities to Work as a Carer or Registered Nurse</h2>
              <p>Working in care is a very important role and suits anyone who has a genuine empathy for vulnerable people.</p>
              
              <p>If you are interested in joining us, we have routes of employment for both UK and overseas workers:</p>
              
              <h3>1. UK Residents</h3>
              <p>You will be either British/Irish citizens or those with existing right to work in the UK</p>
              <p>We offer:</p>
              <ul>
                <li>Paid breaks</li>
                <li>Subsidised meals</li>
                <li>Free training</li>
                <li>Pay above the National Minimum wage for those who have studied towards a relevant qualification.</li>
              </ul>
              <p>If you are a UK resident and are interested in applying to become either a Care Worker or Registered Nurse with us, please complete the online application form below.</p>
              <a href="https://graham.care/forms/whitstable-house-application-form/" target="_blank" rel="noopener noreferrer" className="btn-application-form">
                Application Form for UK Residents
              </a>
              
              <h3>2. Overseas nationals who qualify for Skilled Workers Visa</h3>
              <p>The UK government has deemed care workers and registered nurses to be "shortage occupations" as the domestic workforce is not large enough to fulfil the demand for these roles. This opens up a good opportunity for overseas nationals with an interest in care work to be granted visas to move to the UK, provided they are sponsored by a licenced care provider.</p>
              
              <p>We have the necessary sponsorship licence in place, and we are proud to offer the following support to potential candidates:</p>
              <ul>
                <li>Visa Application Advice: We provide advice to care workers and registered nurses for them to go through the visa application process and cover the cost of the Skills Charge (£3000 for 3 years).</li>
                <li>Training: We provide Care Workers with the opportunity to undertake a Level 3 National Vocational Qualification (NVQ) in Health and Social Care. Unfortunately the government does not currently fund this qualification for newly sponsored workers, so candidates need to pay the current government rate of £4,000.00 to us for this before commencing employment.</li>
                <li>Attractive pay in-line with UK Visa and Immigration guidance</li>
                <li>Subsidised meals</li>
                <li>Subsidised accommodation for Care Workers.</li>
                <li>Ongoing Support: Our commitment extends beyond placement. We offer continuous support to sponsored care workers to help them succeed in their roles.</li>
              </ul>
              <p>If you are interested in applying for a role either as a Care Worker or Registered Nurse, please complete the online application form below.</p>
              <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=-nVt42LoIECTnlSxtEZK4ZUU5fSxww1Kusg-lV2sZV1UNEJRNDVVU0ZHMjNMRkw2SUJNMk5HTEQ0QiQlQCN0PWcu" target="_blank" rel="noopener noreferrer" className="btn-application-form">
                Application Form for Overseas Nationals
              </a>
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

export default WorkWithUs;
