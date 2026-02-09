import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Documents from './pages/Documents';
import WellbeingCentredCare from './pages/WellbeingCentredCare';
import ServantLeadership from './pages/ServantLeadership';
import CQCRegistration from './pages/CQCRegistration';
import ContactUs from './pages/ContactUs';
import CareSuites from './pages/CareSuites';
import Activities from './pages/Activities';
import MeetTheTeam from './pages/MeetTheTeam';
import WeeklyMenus from './pages/WeeklyMenus';
import PhotoGallery from './pages/PhotoGallery';
import RespiteCare from './pages/RespiteCare';
import DementiaCare from './pages/DementiaCare';
import NursingCare from './pages/NursingCare';
import QualityAssurance from './pages/QualityAssurance';
import GMBUnion from './pages/GMBUnion';
import SelfFunding from './pages/SelfFunding';
import SocialServicesFunding from './pages/SocialServicesFunding';
import NHSFunding from './pages/NHSFunding';
import WorkWithUs from './pages/WorkWithUs';
import HelpAndAdvice from './pages/HelpAndAdvice';
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header';
import { isArchived } from './config/archivedPages';

function Home() {
  // Array of image paths for the slideshow
  const heroImages = [
    '/hero-image-2.jpg',
    '/hero-image-6.jpg',
    '/hero-image-7.jpg',
    '/hero-image-8.jpg',
    '/hero-image-9.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [fadeClass, setFadeClass] = useState('fade-in');

  useEffect(() => {
    // Only run slideshow if there are multiple images
    if (heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setFadeClass('fade-out');
      
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setFadeClass('fade-in');
      }, 500); // Half of transition duration (1s = 1000ms, half = 500ms)
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="hero">
          <div 
            className={`hero__image ${fadeClass}`} 
            style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
          ></div>
          <div className="hero__content">
            <h1 className="hero__title">
              <span>Welcome to</span>
              <span className="hero__title-main">Whitstable House</span>
            </h1>
            <div className="hero__contact-icons">
              <a href="tel:01227533522" className="hero__contact-icon" aria-label="Call us">
                <span className="icon-phone">📞</span>
              </a>
              <a href="mailto:enquiries@whitstable.house" className="hero__contact-icon" aria-label="Email us">
                <span className="icon-email">✉️</span>
              </a>
            </div>
            <Link to="/contact-us" className="btn-enquiry">New resident enquiry</Link>
          </div>
        </section>

        <section className="content-section introduction">
          <div className="section__container">
            <div className="section__text">
              <p>Whitstable House is a brand new, purpose-built care home, offering residential, nursing care to people with care needs, particularly those with physical frailty or dementia-type illnesses.</p>
            </div>
          </div>
        </section>

        <section className="content-section care-suites">
          <div className="section__container">
            <div className="section__text">
              <h2>Care Suites</h2>
              <p>The 100 new rooms at Whitstable House are all 27m² Care Suites – larger rooms than those found in traditional care settings – equipped with kitchenettes and living areas. Our Care Suites help residents feel that they have their own space and their own home.</p>
              <p>Learn more about our care suites <Link to="/care-suites" className="nurse-care-link">here</Link>.</p>
            </div>
            <div className="section__image">
              <img src="/care-suites-image.jpg" alt="Care Suites" />
            </div>
          </div>
        </section>

        <section className="content-section quality-facilities">
          <div className="section__container">
            <div className="section__text">
              <h2>Purpose-Built, Quality Facilities</h2>
              <p>Built with its residents at the heart of its design, Whitstable House offers high quality, care-orientated facilities, creating the ideal environment for our residents to feel safe and at home in. What's more, the home is situated in a picturesque location, overlooking the Thames estuary, and is ideally placed next to the GP surgery.</p>
              <p>View our brochure <Link to="/brochure" className="nurse-care-link">here</Link>.</p>
            </div>
            <div className="section__image">
              <img src="/lounge-image.jpg" alt="Purpose-Built, Quality Facilities" />
            </div>
          </div>
        </section>

        <section className="content-section serving-community">
          <div className="section__container">
            <div className="section__text">
              <h2>Serving the Community</h2>
              <p>Residents at Whitstable House reflect the demographic of the surrounding area. We facilitate families to benefit from Local Authority or NHS funding, where private funding may not be an option, making our services accessible to the whole community.</p>
              <p>Learn more about our different funding options, whether it's <Link to="/self-funding" className="nurse-care-link">self-funding</Link>, <Link to="/social-services-funding" className="nurse-care-link">social services funding</Link> or <Link to="/nhs-funding" className="nurse-care-link">NHS funding</Link>.</p>
            </div>
            <div className="section__image">
              <img src="/hero-image-5.jpg" alt="Serving the Community" />
            </div>
          </div>
        </section>

        <section className="content-section care-services">
          <div className="section__container">
            <div className="section__text">
              <h2>Long-Term and Short-Term Care Services</h2>
              <p>Whitstable House is a 'home for life' for those who require long term care, whilst also offering short term care for others who require assessment, rehabilitation, or respite before returning home.</p>
              <p>Read more about respite care <Link to="/respite-care" className="nurse-care-link">here</Link>.</p>
            </div>
            <div className="section__image">
              <img src="/reception-image.jpg" alt="Long-Term and Short-Term Care Services" />
            </div>
          </div>
        </section>

        <section className="content-section nurse-led-care">
          <div className="section__container">
            <div className="section__text">
              <h2>24/7 Nurse-Led Care</h2>
              <p>Our experienced and trained nurses are always on-hand to support our residents. They lead and oversee each resident's care at every step of their care journeys, from initial assessment, to reviews of the care plan, to their personalised social programme.</p>
              <p>Read more about our approach to <Link to="/nursing-care" className="nurse-care-link">nursing care</Link> and <Link to="/dementia-care" className="nurse-care-link">dementia care</Link>.</p>
            </div>
            <div className="section__image">
              <img src="/iStock-1165981632-scaled.jpg" alt="24/7 Nurse-Led Care" />
            </div>
          </div>
        </section>

        <section className="content-section relationship-care">
          <div className="section__container">
            <div className="section__text">
              <h2>Wellbeing Centred Care</h2>
              <p>We believe that a person's wellbeing is more than the sum of their physical needs — it is about living meaningfully, comfortably, and with dignity, even in the context of frailty or cognitive decline.</p>
              <p>Read more about Wellbeing Centred Care <Link to="/wellbeing-centred-care" className="nurse-care-link">here</Link>.</p>
            </div>
            <div className="section__image">
              <img src="/pillars-of-wellbeing.jpg" alt="Wellbeing Centred Care" />
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

function NotFound() {
  return (
    <div className="page">
      <Header />
      <main id="main-content" style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1>Page not found</h1>
        <p>This page is not available. It may have been moved or is not yet published.</p>
        <Link to="/">Return to home</Link>
      </main>
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {!isArchived('/documents') && <Route path="/documents" element={<Documents />} />}
        {!isArchived('/wellbeing-centred-care') && <Route path="/wellbeing-centred-care" element={<WellbeingCentredCare />} />}
        {!isArchived('/servant-leadership') && <Route path="/servant-leadership" element={<ServantLeadership />} />}
        {!isArchived('/cqc-registration') && <Route path="/cqc-registration" element={<CQCRegistration />} />}
        {!isArchived('/contact-us') && <Route path="/contact-us" element={<ContactUs />} />}
        {!isArchived('/care-suites') && <Route path="/care-suites" element={<CareSuites />} />}
        {!isArchived('/activities') && <Route path="/activities" element={<Activities />} />}
        {!isArchived('/meet-the-team') && <Route path="/meet-the-team" element={<MeetTheTeam />} />}
        {!isArchived('/weekly-menus') && <Route path="/weekly-menus" element={<WeeklyMenus />} />}
        {!isArchived('/photo-gallery') && <Route path="/photo-gallery" element={<PhotoGallery />} />}
        {!isArchived('/respite-care') && <Route path="/respite-care" element={<RespiteCare />} />}
        {!isArchived('/dementia-care') && <Route path="/dementia-care" element={<DementiaCare />} />}
        {!isArchived('/nursing-care') && <Route path="/nursing-care" element={<NursingCare />} />}
        {!isArchived('/quality-assurance') && <Route path="/quality-assurance" element={<QualityAssurance />} />}
        {!isArchived('/gmb-union') && <Route path="/gmb-union" element={<GMBUnion />} />}
        {!isArchived('/self-funding') && <Route path="/self-funding" element={<SelfFunding />} />}
        {!isArchived('/social-services-funding') && <Route path="/social-services-funding" element={<SocialServicesFunding />} />}
        {!isArchived('/nhs-funding') && <Route path="/nhs-funding" element={<NHSFunding />} />}
        {!isArchived('/work-with-us') && <Route path="/work-with-us" element={<WorkWithUs />} />}
        {!isArchived('/help-and-advice') && <Route path="/help-and-advice" element={<HelpAndAdvice />} />}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
