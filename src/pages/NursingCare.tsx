import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function NursingCare() {
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

  const toggleSection = (sectionId: string) => {
    setOpenSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section nursing-care-page">
          <div className="nursing-care-container">
            <h1>Nursing Care at Whitstable House</h1>
          </div>
        </section>

        <section className="content-section nursing-care-intro">
          <div className="section__container">
            <div className="section__text">
              <h3>Expert nursing care that feels like home</h3>
              <p>When complex health needs require professional nursing support, you shouldn't have to compromise on quality of life. At Whitstable House, our registered nurses provide 24-hour clinical care within purpose-built care suites designed for comfort and connection.</p>
            </div>
          </div>
        </section>

        <section className="content-section what-is-nursing">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('what-is-nursing')}
              >
                What is nursing care?
                <span className="accordion-arrow">{openSections['what-is-nursing'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['what-is-nursing'] && (
                <div className="accordion-content">
                  <p>Nursing care provides round-the-clock clinical support from qualified, registered nurses for people with complex or ongoing health conditions.</p>
                  <p><strong>Our nursing teams provide:</strong></p>
                  <ul>
                    <li>Medication management and administration</li>
                    <li>Wound care and pressure area management</li>
                    <li>Management of chronic conditions (diabetes, COPD, heart disease)</li>
                    <li>Complex continence care</li>
                    <li>Nutrition monitoring and feeding support, including PEG feeds</li>
                    <li>End-of-life and palliative care</li>
                    <li>Post-operative recovery support</li>
                    <li>Management of unpredictable health conditions</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section who-benefits-nursing">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('who-benefits-nursing')}
              >
                Who benefits from nursing care?
                <span className="accordion-arrow">{openSections['who-benefits-nursing'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['who-benefits-nursing'] && (
                <div className="accordion-content">
                  <p>Nursing care suits individuals whose health needs require clinical expertise and regular nursing intervention.</p>
                  <p><strong>You might consider nursing care if you or your loved one:</strong></p>
                  <ul>
                    <li>Has been diagnosed with dementia requiring specialist support</li>
                    <li>Lives with complex physical frailty or multiple conditions</li>
                    <li>Needs consistent medication management</li>
                    <li>Requires wound care or pressure area management</li>
                    <li>Has conditions that deteriorate unpredictably</li>
                    <li>Is recovering from surgery or illness</li>
                    <li>Needs end-of-life care with dignity and comfort</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section our-approach-nursing">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('our-approach-nursing')}
              >
                Our approach to nursing care
                <span className="accordion-arrow">{openSections['our-approach-nursing'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['our-approach-nursing'] && (
                <div className="accordion-content">
                  <h3>Person-centred care with clinical excellence</h3>
                  <p>We take person-centred care further by recognising that wellbeing depends on relationships, not just with staff, but with family and friends too. Our nursing care combines clinical expertise with genuine warmth and understanding.</p>
                  
                  <h3>Technology that enhances care - "personalisation through digitalisation"</h3>
                  <p>We've integrated smart technology throughout our homes to support better care:</p>
                  <ul>
                    <li><strong>Real-time monitoring:</strong> Call bells, sleep sensors, and bed-exit monitors. The use of technology is very much on a case by case basis like for those at high risks of falls or deterioration. The use ensures carers respond only when needed, reducing unnecessary disturbances</li>
                    <li><strong>Compliance dashboards:</strong> Our nurses and managers have comprehensive, real-time insights into care standards</li>
                    <li><strong>Care Records Online:</strong> Families can access their loved one's care records anytime, providing peace of mind</li>
                  </ul>
                  <p>This technology means residents get restful nights and our nurses can focus on delivering exceptional, personalised care.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section life-in-suites">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('life-in-suites')}
              >
                Life in our nursing care suites
                <span className="accordion-arrow">{openSections['life-in-suites'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['life-in-suites'] && (
                <div className="accordion-content">
                  <h3>Purpose-built for comfort</h3>
                  <p>Traditional care homes can often feel institutional. Our care suites are different because they're spacious, homely rooms designed for real living.</p>
                  <p><strong>Each care suite includes:</strong></p>
                  <ul>
                    <li>Generous space for personal furniture and belongings</li>
                    <li>Dining area and kitchenette for independence</li>
                    <li>Room for family and friends to visit comfortably</li>
                    <li>Modern facilities designed with dignity in mind</li>
                    <li>You have the freedom to personalise your room in your way</li>
                  </ul>

                  <h3>Maintaining relationships and routines</h3>
                  <p>We understand that staying connected matters. Our homes encourage family involvement, and we support residents to maintain the activities and relationships that bring them joy.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section our-nursing-teams">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('our-nursing-teams')}
              >
                Our nursing teams
                <span className="accordion-arrow">{openSections['our-nursing-teams'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['our-nursing-teams'] && (
                <div className="accordion-content">
                  <h3>Qualified, compassionate professionals</h3>
                  <p>Whitstable House has registered nurses on duty 24-hours a day, supported by experienced care teams. Our staff are carefully selected for both their clinical skills and their genuine care for residents.</p>

                  <h3>Continuity of care</h3>
                  <p>We assign small groups of residents to dedicated care teams. This consistency means your nurses and carers truly know you and your preferences, your history, and what matters most to you.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section conditions-we-specialise">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('conditions-we-specialise')}
              >
                Conditions we specialise in
                <span className="accordion-arrow">{openSections['conditions-we-specialise'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['conditions-we-specialise'] && (
                <div className="accordion-content">
                  <p>Our nursing teams have extensive experience supporting residents with:</p>
                  
                  <h3>Dementia and cognitive conditions</h3>
                  <ul>
                    <li>Specialist dementia care environments</li>
                    <li>Support for behaviours that challenge</li>
                    <li>Memory care and cognitive stimulation</li>
                    <li>Family support and guidance</li>
                  </ul>

                  <h3>Physical frailty</h3>
                  <ul>
                    <li>Fall prevention and mobility support</li>
                    <li>Rehabilitation after illness or surgery</li>
                    <li>Management of age-related conditions</li>
                    <li>Pressure area care and prevention</li>
                  </ul>

                  <h3>Chronic health conditions</h3>
                  <ul>
                    <li>Diabetes management</li>
                    <li>Respiratory conditions (COPD, asthma)</li>
                    <li>Cardiac conditions</li>
                    <li>Parkinson's disease</li>
                    <li>Stroke recovery</li>
                  </ul>

                  <h3>End-of-life care</h3>
                  <ul>
                    <li>Palliative care with dignity</li>
                    <li>Pain and symptom management</li>
                    <li>Emotional support for residents and families</li>
                    <li>Fast-track NHS Continuing Healthcare arrangements</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section funding-nursing">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('funding-nursing')}
              >
                Funding your nursing care
                <span className="accordion-arrow">{openSections['funding-nursing'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['funding-nursing'] && (
                <div className="accordion-content">
                  <h3>NHS Continuing Healthcare (CHC)</h3>
                  <p>If you have complex health needs, you may be eligible for NHS Continuing Healthcare, which fully funds your care. Our team can guide you through the assessment process.</p>

                  <h3>NHS-funded nursing care</h3>
                  <p>If you don't qualify for full CHC but need nursing care, you may be eligible for NHS-funded nursing care which is a weekly contribution towards your nursing costs.</p>

                  <h3>Self-funding and local authority support</h3>
                  <p>We also welcome self-funding residents and those supported by their local authority. Our team can help you understand your options and arrange the appropriate funding.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section visiting-staying-connected">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('visiting-staying-connected')}
              >
                Visiting and staying connected
                <span className="accordion-arrow">{openSections['visiting-staying-connected'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['visiting-staying-connected'] && (
                <div className="accordion-content">
                  <h3>Open visiting</h3>
                  <p>Family and friends are always welcome, whether it be morning, afternoon or night, as we don't have set visiting hours. At the end of the day, this would be your loved one's new home, so we encourage your loved ones to treat it as such. Our spacious care suites provide comfortable spaces for visits, and we encourage you to be as involved as you wish in your loved one's care.</p>

                  <h3>Care Records Online</h3>
                  <p>Through our web app, families can access their loved one's care records in real time, offering reassurance and keeping you connected even when you can't visit. This includes vital signs recording, notes from care staff, activities they've partaken in throughout the day, sleep score etc. It also shows risk assessments and current care plans should you want to refer to it.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section moving-to-nursing">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('moving-to-nursing')}
              >
                Moving to nursing care
                <span className="accordion-arrow">{openSections['moving-to-nursing'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['moving-to-nursing'] && (
                <div className="accordion-content">
                  <h3>Taking the first step</h3>
                  <p>Choosing nursing care is a significant decision. We're here to support you through the process with patience, clarity, and understanding.</p>
                  <p><strong>How it works:</strong></p>
                  <ul>
                    <li><strong>Get in touch:</strong> Call us or complete our enquiry form</li>
                    <li><strong>Arrange a visit:</strong> Tour our homes and meet our teams</li>
                    <li><strong>Assessment:</strong> We'll discuss needs and ensure we're the right fit</li>
                    <li><strong>Moving in:</strong> We'll plan a smooth transition at a pace that suits you</li>
                  </ul>
                  <p>Our admissions team guides you through every stage, from understanding funding options to settling into your new home.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section providing-nursing-whitstable">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('providing-nursing-whitstable')}
              >
                Providing nursing care in Whitstable
                <span className="accordion-arrow">{openSections['providing-nursing-whitstable'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['providing-nursing-whitstable'] && (
                <div className="accordion-content">
                  <p>Whitstable House provides 24-hour nursing care for the community of Whitstable with on-site registered nurses. The home is purpose-built with modern facilities and welcoming care suites.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section why-families-choose">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('why-families-choose')}
              >
                Why families choose Whitstable House
                <span className="accordion-arrow">{openSections['why-families-choose'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['why-families-choose'] && (
                <div className="accordion-content">
                  <p>"TESTIMONIAL HERE"</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section get-in-touch-nursing">
          <div className="section__container">
            <div className="section__text get-in-touch-content">
              <h2 className="get-in-touch-heading">Get in touch</h2>
              <p>Ready to learn more about nursing care at Whitstable House? Our team is here to answer your questions and arrange a visit.</p>
              <p>Email us: <a href="mailto:enquiries@whitstable.house" className="nurse-care-link">enquiries@whitstable.house</a></p>
              <p>Call us: <a href="tel:01227533522" className="nurse-care-link">01227 533 522</a></p>
              <p>Or complete our <Link to="/contact-us" className="nurse-care-link">enquiry form</Link> and we'll be in touch within 24 hours.</p>
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

export default NursingCare;
