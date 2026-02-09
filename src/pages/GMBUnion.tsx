import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

// Vimeo: GMB - Ernie Graham and Paul Maloney talk about working in partnership
const GMB_VIMEO_VIDEO_ID = '182372369';

function GMBUnion() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section gmb-union-page">
          <div className="gmb-union-container">
            <h1>GMB Union</h1>
          </div>
        </section>

        <section className="content-section gmb-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>Whitstable House and GMB Recognition Agreement</h2>
              <p>Whitstable House have signed a ground-breaking recognition agreement with the GMB union. GMB have provided support to our staff and helped us to serve our staff to the best of our ability.</p>
              <p>The agreement was signed on a voluntary basis by both parties and is a recognition that the interests of residents, staff and management are best represented when staff speak with an independent voice through a recognised trade union.</p>
            </div>
          </div>
        </section>

        {GMB_VIMEO_VIDEO_ID && (
          <section className="content-section gmb-video" aria-label="GMB video">
            <div className="section__container">
              <div className="gmb-video-wrapper">
                <iframe
                  src={`https://player.vimeo.com/video/${GMB_VIMEO_VIDEO_ID}`}
                  title="GMB Union video"
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </section>
        )}

        <section className="content-section gmb-quotes">
          <div className="section__container">
            <div className="section__text">
              <blockquote className="gmb-quote">
                <p>This is a welcoming and innovative approach to industrial relations in the care sector where funding is being cut on a yearly basis by central government and county councils. GMB is committed to working together with employers to ensure that care is fully funded from county councils and that care of the elderly and people with mental health issues does not become a Cinderella service. I look forward to a long and fruitful working relationship with Graham Care.</p>
                <footer>— Paul Maloney, GMB's south east regional secretary</footer>
              </blockquote>
              <blockquote className="gmb-quote">
                <p>The health and wellbeing of our residents is our top priority and GMB shares our aim to facilitate this by means of maximising opportunities for our staff, who are our most important asset. By working in collaboration with the GMB, we can benchmark ourselves against industry best practice and be more transparent and accountable to our workforce.</p>
                <footer>— Ernie Graham</footer>
              </blockquote>
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

export default GMBUnion;
