import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function RespiteCare() {
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
        <section className="content-section respite-care-page">
          <div className="respite-care-container">
            <h1>Respite Care</h1>
          </div>
        </section>

        <section className="content-section respite-care-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>Respite Care at Whitstable House</h2>
              <h3>A break that benefits everyone</h3>
              <p>Caring for a loved one is rewarding but demanding. Respite care provides temporary relief for family carers whilst ensuring your loved one receives excellent care in a safe, comfortable environment. Whether you need a few days or several weeks, respite care here at Whitstable House gives you the peace of mind to rest, recharge, or attend to other commitments.</p>
            </div>
          </div>
        </section>

        <section className="content-section what-is-respite">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('what-is-respite')}
              >
                What is respite care?
                <span className="accordion-arrow">{openSections['what-is-respite'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['what-is-respite'] && (
                <div className="accordion-content">
                  <p>Respite care offers short-term stays here at Whitstable House, providing temporary support when regular care arrangements aren't available or when family carers need a break.</p>
                  <p><strong>Respite care can be:</strong></p>
                  <ul>
                    <li>Planned breaks to allow carers to holiday or rest</li>
                    <li>Emergency cover during carer illness or unexpected circumstances</li>
                    <li>Regular short stays to provide consistent relief</li>
                    <li>Trial stays before considering permanent care</li>
                    <li>Recovery support after hospital discharge</li>
                  </ul>
                  <p>Our respite care includes the same high standards of nursing and personal care as our permanent residents receive, delivered in comfortable care suites with full access to our facilities and activities.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section why-respite-matters">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('why-respite-matters')}
              >
                Why respite care matters
                <span className="accordion-arrow">{openSections['why-respite-matters'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['why-respite-matters'] && (
                <div className="accordion-content">
                  <h3>For family carers</h3>
                  <p>Caring for someone can be physically exhausting and emotionally draining. Taking regular breaks isn't selfish. It's essential for your own health and your ability to continue caring long-term.</p>
                  <p><strong>Respite care allows you to:</strong></p>
                  <ul>
                    <li>Take a holiday without worry</li>
                    <li>Recover from illness or surgery</li>
                    <li>Attend important family events</li>
                    <li>Manage work commitments</li>
                    <li>Simply rest and recharge</li>
                    <li>Reduce stress and prevent burnout</li>
                  </ul>

                  <h3>For the person you care for</h3>
                  <p>Respite stays offer benefits beyond simply covering care needs:</p>
                  <ul>
                    <li>Social interaction and new experiences</li>
                    <li>Professional care from trained staff</li>
                    <li>Activities and stimulation</li>
                    <li>A change of scenery and routine</li>
                    <li>Trial of care home living in a low-pressure way</li>
                    <li>Opportunity to make new connections</li>
                  </ul>
                  <p>Many people enjoy respite stays and look forward to returning, finding the social atmosphere and activities refreshing.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section our-approach">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('our-approach')}
              >
                Our approach to respite care
                <span className="accordion-arrow">{openSections['our-approach'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['our-approach'] && (
                <div className="accordion-content">
                  <h3>Seamless transitions</h3>
                  <p>Here at Whitstable House, we make respite stays as smooth as possible for everyone involved:</p>
                  <ul>
                    <li>Pre-admission assessment to understand needs and preferences</li>
                    <li>Welcome meetings to familiarise with staff and environment</li>
                    <li>Personalised care plans from day one</li>
                    <li>Clear communication with families throughout the stay</li>
                    <li>Flexible dates that work around your schedule</li>
                  </ul>

                  <h3>Continuity of care</h3>
                  <p>During respite stays, we provide:</p>
                  <ul>
                    <li>24-hour nursing care from registered nurses</li>
                    <li>All personal care and support with daily living</li>
                    <li>Medication management</li>
                    <li>Meals and refreshments</li>
                    <li>Activities and social opportunities</li>
                    <li>All the support permanent residents receive</li>
                  </ul>

                  <h3>Building familiarity</h3>
                  <p>Regular respite stays allow our team to get to know your loved one well, making each visit more comfortable. This familiarity also means we're ideally placed to provide permanent care if needs change in future.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section who-benefits">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('who-benefits')}
              >
                Who benefits from respite care?
                <span className="accordion-arrow">{openSections['who-benefits'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['who-benefits'] && (
                <div className="accordion-content">
                  <p>Respite care suits people with various care needs:</p>
                  
                  <h3>Physical frailty</h3>
                  <ul>
                    <li>Mobility limitations requiring assistance</li>
                    <li>Support with personal care</li>
                    <li>Help with daily tasks and activities</li>
                    <li>Management of chronic health conditions</li>
                  </ul>

                  <h3>Dementia and cognitive conditions</h3>
                  <ul>
                    <li>All stages of dementia</li>
                    <li>Memory difficulties requiring supervision</li>
                    <li>Behaviours that challenge</li>
                    <li>Confusion requiring specialist support</li>
                  </ul>

                  <h3>Complex health needs</h3>
                  <ul>
                    <li>Multiple medical conditions</li>
                    <li>Medication management</li>
                    <li>Nursing care requirements</li>
                    <li>Post-operative recovery</li>
                  </ul>

                  <h3>General support needs</h3>
                  <ul>
                    <li>Assistance with personal care</li>
                    <li>Help with meals and nutrition</li>
                    <li>Social interaction and companionship</li>
                    <li>Safe environment with supervision</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section types-of-respite">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('types-of-respite')}
              >
                Types of respite care we offer
                <span className="accordion-arrow">{openSections['types-of-respite'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['types-of-respite'] && (
                <div className="accordion-content">
                  <h3>Emergency respite care</h3>
                  <p>When unexpected situations arise such as carer illness, family emergencies, or sudden changes in circumstances, we can offer emergency respite subject to availability.</p>

                  <h3>Regular respite arrangements</h3>
                  <p>Some families arrange regular respite stays as this provides consistent relief and allows the person receiving care to build relationships with staff and other residents.</p>

                  <h3>Trial stays</h3>
                  <p>Considering permanent care but not quite ready to commit? Respite stays offer a low-pressure opportunity to experience our care, environment, and approach before making long-term decisions.</p>

                  <h3>Convalescence and recovery</h3>
                  <p>After hospital discharge, respite care can provide the support needed during recovery, giving family carers confidence that professional help is available while their loved one regains strength.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section what-to-expect">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('what-to-expect')}
              >
                What to expect during a respite stay
                <span className="accordion-arrow">{openSections['what-to-expect'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['what-to-expect'] && (
                <div className="accordion-content">
                  <h3>Comfortable accommodation</h3>
                  <p>Respite guests stay in our spacious care suites, which include:</p>
                  <ul>
                    <li>Private bedroom area with comfortable furnishings</li>
                    <li>En-suite facilities</li>
                    <li>Dining space and kitchenette</li>
                    <li>Lounge area with armchairs and sofas, with a TV</li>
                    <li>Room for personal belongings and familiar items</li>
                    <li>Space for family visits</li>
                    <li>Many rooms have a sea view / views over the Thames Estuary</li>
                    <li>Ground floor rooms have french doors that open out into the garden areas where your loved one can plant flowers in their own garden sections</li>
                  </ul>

                  <h3>Daily life and activities</h3>
                  <p>We encourage respite guests to participate in home life as much as they wish:</p>
                  <ul>
                    <li>Meals in communal dining areas or in their suite</li>
                    <li>Daily activities and entertainment</li>
                    <li>Social opportunities with other residents</li>
                    <li>Quiet spaces for rest and relaxation</li>
                    <li>Access to outdoor areas and gardens</li>
                  </ul>

                  <h3>Staying connected</h3>
                  <p>We keep families updated during respite stays and welcome visits anytime. Through our Care Records Online platform, you can also check care records and notes remotely if you're away.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section making-it-work">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('making-it-work')}
              >
                Making respite care work for you
                <span className="accordion-arrow">{openSections['making-it-work'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['making-it-work'] && (
                <div className="accordion-content">
                  <h3>Flexible durations</h3>
                  <p>Respite stays can be as short or long as needed, with a minimum of at least a week's stay:</p>
                  <ul>
                    <li>Fortnightly visits</li>
                    <li>Multiple weeks</li>
                    <li>One-off or regular arrangements</li>
                  </ul>
                  <p>We tailor respite care to your specific situation and requirements.</p>

                  <h3>Planning ahead</h3>
                  <p>To make respite care smooth and successful:</p>
                  <ul>
                    <li>Share detailed information about needs and preferences</li>
                    <li>Bring familiar items from home for comfort</li>
                    <li>Discuss any concerns or special requirements</li>
                    <li>Communicate dietary needs and medication details</li>
                  </ul>

                  <h3>Supporting the transition</h3>
                  <p>First-time respite stays can feel daunting. We help by:</p>
                  <ul>
                    <li>Arranging pre-stay visits to familiarise with surroundings</li>
                    <li>Introducing key staff members before admission</li>
                    <li>Creating welcoming, personalised care plans</li>
                    <li>Maintaining regular communication with families</li>
                    <li>Being flexible and responsive to individual needs</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section funding-respite">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('funding-respite')}
              >
                Funding respite care in Whitstable
                <span className="accordion-arrow">{openSections['funding-respite'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['funding-respite'] && (
                <div className="accordion-content">
                  <h3>Self-funding</h3>
                  <p>Many people self-fund respite care, paying directly for the days or weeks needed. We provide transparent pricing and clear invoices.</p>

                  <h3>Local authority support</h3>
                  <p>If your local authority has assessed care needs, they may fund or contribute towards respite care. This is often available to give family carers statutory breaks. As a family carer, you're entitled to a carer's assessment from your local authority. This assessment considers your need for breaks and may result in funding for respite care.</p>

                  <h3>NHS funding</h3>
                  <p>In some cases, particularly following hospital discharge or with complex health needs, NHS funding may cover respite stays. We can advise on eligibility and application processes.</p>

                  <h3>Carers' Direct Payments</h3>
                  <p>Some carers receive Direct Payments following their carer's assessment, which can be used flexibly to arrange respite care.</p>
                  <p>Our team can guide you through funding options and help with applications where appropriate.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section benefits-regular">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('benefits-regular')}
              >
                Benefits of regular respite care
                <span className="accordion-arrow">{openSections['benefits-regular'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['benefits-regular'] && (
                <div className="accordion-content">
                  <ul>
                    <li><strong>Sustainable caring:</strong> Regular, planned respite helps family carers maintain their caring role long-term by preventing burnout and exhaustion.</li>
                    <li><strong>Better relationships:</strong> Time apart can actually strengthen relationships. Carers return refreshed and more patient, while the person receiving care often enjoys the variety and social opportunities.</li>
                    <li><strong>Health protection:</strong> Regular breaks protect carer health, reducing stress-related illness and allowing time for medical appointments, exercise, and self-care.</li>
                    <li><strong>Preparation for future:</strong> Regular respite stays help everyone become comfortable with professional care, making future transitions easier if circumstances change.</li>
                    <li><strong>Early intervention:</strong> Respite care allows professionals to monitor health and wellbeing, often identifying concerns early before they become crises.</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section common-questions">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('common-questions')}
              >
                Common questions about respite care
                <span className="accordion-arrow">{openSections['common-questions'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['common-questions'] && (
                <div className="accordion-content">
                  <h3>Can the same suite be used for regular visits?</h3>
                  <p>Where possible, we try to allocate the same suite for regular respite guests, providing familiarity and comfort.</p>

                  <h3>What should I bring?</h3>
                  <p>Comfortable clothing, personal toiletries, any mobility aids used, medications in original packaging, and familiar items like photographs or books. We provide bedding and towels.</p>

                  <h3>Can we visit during the respite stay?</h3>
                  <p>Absolutely. Family and friends are welcome to visit anytime 24/7 as they wish.</p>

                  <h3>What if care needs change during the stay?</h3>
                  <p>Our nursing teams assess and adapt to changing needs. We'll contact families if significant changes occur and may recommend extended stays or additional support.</p>

                  <h3>Can respite lead to permanent care?</h3>
                  <p>If you and your loved one decide permanent care would be beneficial, we can arrange this transition smoothly. There's never any obligation, but the familiarity makes transitions easier when they happen.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section taking-first-step">
          <div className="section__container">
            <div className="section__text">
              <h2 
                className="accordion-header" 
                onClick={() => toggleSection('taking-first-step')}
              >
                Taking the first step
                <span className="accordion-arrow">{openSections['taking-first-step'] ? '▼' : '▶'}</span>
              </h2>
              {openSections['taking-first-step'] && (
                <div className="accordion-content">
                  <p>If you're feeling overwhelmed by caring responsibilities or simply need a planned break, respite care could provide the solution.</p>
                  <p>Getting started:</p>
                  <ul>
                    <li>Contact us to discuss your needs and preferences</li>
                    <li>Check availability for your preferred dates</li>
                    <li>Arrange a visit to see our homes and meet our teams</li>
                    <li>Complete a pre-admission assessment</li>
                    <li>Prepare for a comfortable, supported stay</li>
                  </ul>
                  <p>We understand that arranging respite care can bring mixed emotions. Our team handles arrangements with sensitivity, ensuring both carers and residents feel supported throughout the process.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="content-section get-in-touch-respite">
          <div className="section__container">
            <div className="section__text get-in-touch-content">
              <h2 className="get-in-touch-heading">Get in touch</h2>
              <p>To arrange respite care or learn more about how we can support you, speak to our friendly Whitstable House team today.</p>
              <p>Email us: <a href="mailto:enquiries@whitstable.house" className="nurse-care-link">enquiries@whitstable.house</a></p>
              <p>Call us: <a href="tel:01227533522" className="nurse-care-link">01227 533522</a></p>
              <p>Or complete our <Link to="/contact-us" className="nurse-care-link">enquiry form</Link> and we'll be in touch within 24 hours to discuss your respite care needs and available dates.</p>
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

export default RespiteCare;
