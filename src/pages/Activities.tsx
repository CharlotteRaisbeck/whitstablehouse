import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function Activities() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section activities-page">
          <div className="activities-container">
            <h1>Activities</h1>
          </div>
        </section>

        <section className="content-section activities-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>Vibrant Day Services</h2>
              <p>We offer four main group activities every day – two in the morning and two in the afternoon – in each our First Floor and Second Floor Lounges, so that patients can choose the hobbies or entertainment that most excite them.</p>
              <p>We also give all patients the opportunity to engage in discussion about the day's current affairs during the daily coffee morning.</p>
            </div>
            <div className="section__image">
              <img src="/activities-lounge-stock.jpg" alt="Activities lounge" />
            </div>
          </div>
        </section>

        <section className="content-section first-floor-programme">
          <div className="section__container">
            <div className="section__text">
              <h2>First Floor Lounge Programme</h2>
              <p>We offer four main group activities every day – two in the morning and two in the afternoon – in both our First Floor and Second Floor Lounges, so that residents can choose the hobbies or entertainment that most excite them. We also give all residents the opportunity to engage in discussion about the day's current affairs during the daily coffee morning.</p>
            </div>
          </div>
        </section>

        <section className="content-section powerbi-dashboard">
          <div className="powerbi-container">
            <div className="powerbi-ratio">
              <iframe 
                title="Whitstable First Floor Group Activities Programme" 
                width="600" 
                height="373.5" 
                src="https://app.powerbi.com/view?r=eyJrIjoiZjBiNDllYmUtODJkMC00NTQxLWFlMGUtNjRiN2QwMGI5YzNiIiwidCI6ImUzNmQ3NWZhLWU4NjItNDAyMC05MzllLTU0YjFiNDQ2NGFlMSJ9" 
                frameBorder="0" 
                allowFullScreen={true}
              ></iframe>
            </div>
          </div>
        </section>

        <section className="content-section second-floor-programme">
          <div className="section__container">
            <div className="section__text">
              <h2>Second Floor Lounge Programme</h2>
            </div>
          </div>
        </section>

        <section className="content-section powerbi-dashboard">
          <div className="powerbi-container">
            <div className="powerbi-ratio">
              <iframe 
                title="Whitstable PAU Second Floor Group Activities Programme" 
                width="600" 
                height="373.5" 
                src="https://app.powerbi.com/view?r=eyJrIjoiYmRjMDlkZDgtMDVkNy00ZjcyLWFjOTYtMTg4ZDNiYTJiZTNmIiwidCI6ImUzNmQ3NWZhLWU4NjItNDAyMC05MzllLTU0YjFiNDQ2NGFlMSJ9" 
                frameBorder="0" 
                allowFullScreen={true}
              ></iframe>
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

export default Activities;
