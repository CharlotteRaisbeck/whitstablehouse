import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function DementiaCare() {
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
        <section className="content-section dementia-care-page">
          <div className="dementia-care-container">
            <h1>Dementia Care at Whitstable House</h1>
          </div>
        </section>

        <section className="content-section dementia-care-intro">
          <div className="section__container">
            <div className="section__text">
              <h3>Specialist dementia care with dignity and compassion</h3>
              <p>Living with dementia presents unique challenges for individuals and their families. At Whitstable House, our specialist dementia care combines expert nursing support with purpose-designed environments that promote independence, wellbeing, and meaningful connection. We understand that behind every diagnosis is a person with a lifetime of experiences, relationships, and preferences that matter.</p>
            </div>
          </div>
        </section>

        <section className="content-section understanding-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('understanding-dementia')}
              >
                Understanding dementia care
                <span className="accordion-arrow">{openSections['understanding-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['understanding-dementia'] && (
                <div className="accordion-content">
                  <p>Dementia affects everyone differently, requiring flexible, individualised support that adapts as needs change.</p>
                  <p><strong>Our dementia care provides:</strong></p>
                  
                  <h3>Clinical expertise</h3>
                  <ul>
                    <li>24-hour nursing care from registered nurses trained in dementia care</li>
                    <li>Management of behaviours that challenge with understanding and patience</li>
                    <li>Support with physical health conditions alongside dementia</li>
                    <li>Medication management and monitoring</li>
                  </ul>

                  <h3>Person-centred approach</h3>
                  <ul>
                    <li>Care plans built around life history, preferences, and what brings joy</li>
                    <li>Support to maintain independence for as long as possible</li>
                    <li>Activities designed to stimulate memory and engagement</li>
                    <li>Familiar routines that provide comfort and security</li>
                  </ul>

                  <h3>Family support</h3>
                  <ul>
                    <li>Guidance and education about dementia progression</li>
                    <li>Open communication about care decisions</li>
                    <li>Involvement in care planning and daily life</li>
                    <li>Peace of mind through Care Records Online</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section types-of-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('types-of-dementia')}
              >
                Types of dementia we support
                <span className="accordion-arrow">{openSections['types-of-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['types-of-dementia'] && (
                <div className="accordion-content">
                  <p>Our teams have extensive experience caring for residents with all forms of dementia, including:</p>
                  <ul>
                    <li>Alzheimer's disease</li>
                    <li>Vascular dementia</li>
                    <li>Lewy body dementia</li>
                    <li>Frontotemporal dementia</li>
                    <li>Mixed dementia</li>
                    <li>Dementia with Parkinson's disease</li>
                    <li>Alcohol-related dementia</li>
                  </ul>
                  <p>We adapt our approach to each individual, recognising that dementia manifests differently in every person.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section purpose-built-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('purpose-built-dementia')}
              >
                Purpose-built dementia environments
                <span className="accordion-arrow">{openSections['purpose-built-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['purpose-built-dementia'] && (
                <div className="accordion-content">
                  <h3>Designed for wellbeing</h3>
                  <p>Our homes feature specialist dementia-friendly design that supports independence and reduces confusion:</p>
                  <ul>
                    <li>Clear signage and visual cues throughout</li>
                    <li>Colour contrasts to aid navigation</li>
                    <li>Safe outdoor spaces for walking and fresh air</li>
                    <li>Quiet areas for rest and calm</li>
                    <li>Activity spaces for engagement and stimulation</li>
                    <li>Photo walls outside rooms for personalisation</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section life-with-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('life-with-dementia')}
              >
                Life with dementia care
                <span className="accordion-arrow">{openSections['life-with-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['life-with-dementia'] && (
                <div className="accordion-content">
                  <h3>Supporting daily routines</h3>
                  <p>We help residents maintain familiar routines and activities that provide structure and comfort:</p>
                  <ul>
                    <li>Personal care delivered with dignity and patience</li>
                    <li>Mealtimes that encourage social connection</li>
                    <li>Activities tailored to abilities and interests</li>
                    <li>Support with mobility and movement</li>
                    <li>Management of continence needs sensitively</li>
                  </ul>

                  <h3>Meaningful activities</h3>
                  <p>Our activity programmes focus on engagement and entertainment:</p>
                  <ul>
                    <li>Reminiscence therapy using music, photos, and memories</li>
                    <li>Gentle exercise and movement</li>
                    <li>Creative activities like art and crafts</li>
                    <li>Sensory stimulation</li>
                    <li>Social activities and communal gatherings</li>
                    <li>One-to-one time with staff</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section technology-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('technology-dementia')}
              >
                Technology that supports care
                <span className="accordion-arrow">{openSections['technology-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['technology-dementia'] && (
                <div className="accordion-content">
                  <p>We use innovative technology to enhance dementia care without intrusion:</p>
                  <ul>
                    <li>Sleep monitoring to ensure restful nights without unnecessary disturbance</li>
                    <li>Movement sensors that alert staff when support is needed</li>
                    <li>Call systems that provide reassurance</li>
                    <li>Real-time vital signs monitoring that helps us spot changes in wellbeing early</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section challenging-behaviours">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('challenging-behaviours')}
              >
                Supporting challenging behaviours
                <span className="accordion-arrow">{openSections['challenging-behaviours'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['challenging-behaviours'] && (
                <div className="accordion-content">
                  <p>Behaviours that challenge often reflect unmet needs or distress. Our approach focuses on understanding and responding to the underlying cause:</p>
                  <p><strong>We focus on:</strong></p>
                  <ul>
                    <li>Identifying triggers and patterns</li>
                    <li>Creating calm, reassuring environments</li>
                    <li>Distraction and redirection techniques</li>
                    <li>Consistent, familiar staff who understand residents</li>
                    <li>Medication only when necessary and appropriate</li>
                  </ul>
                  <p>Our nurses and care staff receive specialist training in managing behaviours that challenge with empathy and professionalism.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section stages-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('stages-dementia')}
              >
                Stages of dementia care
                <span className="accordion-arrow">{openSections['stages-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['stages-dementia'] && (
                <div className="accordion-content">
                  <h3>Early-stage dementia</h3>
                  <p>In the early stages, we focus on maintaining independence and supporting remaining abilities. Residents often participate actively in social life and may require minimal support.</p>

                  <h3>Mid-stage dementia</h3>
                  <p>As dementia progresses, we increase support while maintaining dignity and choice. We help with daily tasks, manage confusion, and provide reassurance during difficult moments.</p>

                  <h3>Advanced dementia</h3>
                  <p>In later stages, we provide comprehensive care focused on comfort, dignity, and quality of life. Our care expertise ensures residents remain comfortable and pain-free.</p>

                  <p>Throughout every stage, we adapt our approach to meet changing needs while preserving individuality.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section importance-relationships">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('importance-relationships')}
              >
                The importance of relationships
                <span className="accordion-arrow">{openSections['importance-relationships'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['importance-relationships'] && (
                <div className="accordion-content">
                  <h3>Maintaining connections</h3>
                  <p>We recognise that relationships are fundamental to wellbeing. Our spacious care suites provide comfortable spaces for family visits, and we actively encourage families to remain involved in daily life.</p>

                  <h3>Communication support</h3>
                  <p>As dementia affects communication, we:</p>
                  <ul>
                    <li>Train staff in effective communication techniques</li>
                    <li>Use visual aids and non-verbal cues</li>
                    <li>Allow time for responses without pressure</li>
                    <li>Focus on emotional connection over words</li>
                    <li>Help families understand changing communication needs</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section expert-staff-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('expert-staff-dementia')}
              >
                Expert staff who care
                <span className="accordion-arrow">{openSections['expert-staff-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['expert-staff-dementia'] && (
                <div className="accordion-content">
                  <h3>Trained dementia specialists</h3>
                  <p>Our team here at Whitstable House receive ongoing dementia training covering:</p>
                  <ul>
                    <li>Understanding different types of dementia</li>
                    <li>Person-centred care approaches</li>
                    <li>Communication techniques</li>
                    <li>Managing behaviours that challenge</li>
                    <li>End-of-life care for dementia</li>
                  </ul>

                  <h3>Consistency and familiarity</h3>
                  <p>We assign small groups of residents to dedicated care teams. This consistency helps residents feel secure with familiar faces who understand their needs, preferences, and personalities.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section when-consider-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('when-consider-dementia')}
              >
                When to consider dementia care
                <span className="accordion-arrow">{openSections['when-consider-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['when-consider-dementia'] && (
                <div className="accordion-content">
                  <p>It can be difficult to know when it's time to seek specialist dementia care. You might consider it when:</p>
                  <ul>
                    <li>Home care becomes insufficient for safety or wellbeing</li>
                    <li>Family carers are becoming exhausted or overwhelmed</li>
                    <li>Behaviours become challenging to manage at home</li>
                    <li>The person with dementia is at risk of wandering</li>
                    <li>Complex health needs develop alongside dementia</li>
                    <li>Isolation increases due to reduced social opportunities</li>
                    <li>Quality of life is diminishing despite home support</li>
                  </ul>
                  <p>There's no "right" time, but seeking support earlier often leads to better outcomes and reduces crisis situations.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section supporting-families-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('supporting-families-dementia')}
              >
                Supporting families in Whitstable
                <span className="accordion-arrow">{openSections['supporting-families-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['supporting-families-dementia'] && (
                <div className="accordion-content">
                  <h3>Your wellbeing matters too</h3>
                  <p>Caring for someone with dementia is emotionally and physically demanding. We support families by:</p>
                  <ul>
                    <li>Providing respite care to allow breaks</li>
                    <li>Offering guidance on dementia progression</li>
                    <li>Being available to answer questions and concerns</li>
                    <li>Including families in care decisions</li>
                    <li>Providing emotional support during difficult times</li>
                  </ul>

                  <h3>Staying connected</h3>
                  <p>Through our Care Records Online platform, you can access your loved one's care records in real time, even when you can't visit. This transparency provides reassurance and keeps you connected to their daily life.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section funding-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('funding-dementia')}
              >
                Funding dementia care
                <span className="accordion-arrow">{openSections['funding-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['funding-dementia'] && (
                <div className="accordion-content">
                  <h3>NHS Continuing Healthcare</h3>
                  <p>People with dementia may be eligible for NHS Continuing Healthcare, which fully funds care. We can guide you through the assessment process and support applications.</p>

                  <h3>Other funding options</h3>
                  <p>We also work with:</p>
                  <ul>
                    <li>Self-funding residents</li>
                    <li>Local authority funding</li>
                    <li>NHS-funded nursing care contributions</li>
                    <li>Joint funding arrangements</li>
                  </ul>
                  <p>Our team helps you understand your options and arrange appropriate funding for your circumstances.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section making-move-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('making-move-dementia')}
              >
                Making the move to dementia care
                <span className="accordion-arrow">{openSections['making-move-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['making-move-dementia'] && (
                <div className="accordion-content">
                  <h3>A gradual transition</h3>
                  <p>We understand that moving into care is significant. We work at your pace, offering:</p>
                  <ul>
                    <li>Pre-admission visits to meet staff and see the environment</li>
                    <li>Trial stays to ease the transition</li>
                    <li>Familiar items from home to create comfort</li>
                    <li>Flexible moving-in schedules</li>
                    <li>Support for both residents and families during adjustment</li>
                  </ul>

                  <h3>Assessment and planning</h3>
                  <p>Before admission, we conduct a thorough assessment to ensure:</p>
                  <ul>
                    <li>We can meet all care needs appropriately</li>
                    <li>Our environment suits the individual</li>
                    <li>We understand preferences, history, and personality</li>
                    <li>Families feel confident in our approach</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section dementia-care-whitstable">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('dementia-care-whitstable')}
              >
                Dementia care in Whitstable
                <span className="accordion-arrow">{openSections['dementia-care-whitstable'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['dementia-care-whitstable'] && (
                <div className="accordion-content">
                  <p>Here at our purpose built care home in Whitstable we offer specialist dementia care with dedicated areas and trained teams, offering:</p>
                  <ul>
                    <li>Purpose-built environment with dementia-friendly design</li>
                    <li>24-hour nursing care</li>
                    <li>Specialist activities and support</li>
                    <li>Secure outdoor spaces</li>
                    <li>Comfortable care suites for living well</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section why-choose-dementia">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('why-choose-dementia')}
              >
                Why families choose our dementia care
                <span className="accordion-arrow">{openSections['why-choose-dementia'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['why-choose-dementia'] && (
                <div className="accordion-content">
                  <p>Here at Whitstable House we specialise in caring for people with complex needs, including dementia. Families choose us because:</p>
                  <ul>
                    <li>Our clinical expertise ensures proper health management</li>
                    <li>Our person-centred approach maintains dignity and identity</li>
                    <li>Our purpose-built homes support independence safely</li>
                    <li>Our technology enhances care without intrusion</li>
                    <li>Our consistent staff build genuine relationships</li>
                    <li>Our family involvement keeps loved ones connected</li>
                  </ul>
                  <p>We combine the highest standards of nursing care with the warmth, understanding, and patience that dementia care requires.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section get-in-touch-dementia">
          <div className="section__container">
            <div className="section__text get-in-touch-content">
              <h2 className="get-in-touch-heading">Get in touch</h2>
              <p>If you're considering dementia care for yourself or a loved one, the Whitstable House team is here to answer your questions and guide you through the process.</p>
              <p>Email us: <a href="mailto:enquiries@whitstable.house" className="nurse-care-link">enquiries@whitstable.house</a></p>
              <p>Call us: <a href="tel:01227533522" className="nurse-care-link">01227 533 522</a></p>
              <p>Or complete our <Link to="/contact-us" className="nurse-care-link">enquiry form</Link> and we'll be in touch within 24 hours to discuss how we can support you.</p>
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

export default DementiaCare;
