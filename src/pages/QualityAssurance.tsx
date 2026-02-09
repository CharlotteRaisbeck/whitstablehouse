import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function QualityAssurance() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section quality-assurance-page">
          <div className="quality-assurance-container">
            <h1>Quality Assurance</h1>
          </div>
        </section>

        <section className="content-section quality-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>Commitment to Quality</h2>
              <p>Our priority is the wellbeing of our residents. To that end, we have established a multifaceted, quality-focused system to improve upon the standards of our care continuously and proactively.</p>
            </div>
          </div>
        </section>

        <section className="content-section quality-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Weekly Visits</h2>
              <p>Our Compliance Manager has a wealth of experience and expertise in social care compliance and is committed to visiting Whitstable House at least once per week. During these visits, the Compliance Manager will pay close attention to the care being given, using these insights to give constructive feedback to our Home Manager.</p>
              <p>Equipped with our digitised Compliance Assessment tool, the manager can evidence their observations in the moment as they inspect the Home. These recorded observations can then be used to determine any necessary actions that the Home Manager may need to take moving forward.</p>
              <p>Weekly compliance meetings, involving the Compliance Manager and the Owner, set out actions to address areas for improvement.</p>
            </div>
          </div>
        </section>

        <section className="content-section quality-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Real Time Compliance Management</h2>
              <p>Our managers and nurses are supported with a Care Compliance Dashboard. Data is streamed from all our systems into a user-friendly dashboard, giving a comprehensive view of the standard of care in real-time. We also incorporate the qualitative judgements from our Compliance Manager to supplement these quantitative metrics with a human insight.</p>
              <p>Our automated Compliance Dashboard frees managers and nurses from paperwork and reporting, enabling them to focus solely on delivering excellent care.</p>
            </div>
          </div>
        </section>

        <section className="content-section quality-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Staff Training and Network of Buddies</h2>
              <p>All training is led by our expert Training Manager who visits Whitstable House on a frequent basis, ensuring that all our staff are equipped with the knowledge and skills they need to provide excellent care.</p>
              <p>We have implemented a 'buddy' system which involves picking outstanding individuals to lead by example for new starters as well as individuals who may need a bit of extra guidance. Our buddies are guided and supported by our experienced Induction Manager.</p>
            </div>
          </div>
        </section>

        <section className="content-section quality-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Customer Satisfaction Surveys</h2>
              <p>Paramount in our approach to care are the views and concerns of our residents and their relatives. With this in mind, everyone who visits the Home is given the opportunity to give feedback after their visit. This feedback is automatically visualised in our Compliance Dashboard and reviewed by the Home Manager.</p>
              <p>We also hold Customer Satisfaction Surveys twice a year by a specialist independent research organisation. Views regarding the standard of care are ascertained anonymously and audited for comparison with other care homes. Suggested areas for improvement are compiled so that an improvement plan can be implemented.</p>
            </div>
          </div>
        </section>

        <section className="content-section quality-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Care Plan Reviews</h2>
              <p>In addition to the daily reporting by carers in each resident's care plan, a monthly review of all care plans is undertaken by the Home Manager, as well as when needed on an individual basis.</p>
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

export default QualityAssurance;
