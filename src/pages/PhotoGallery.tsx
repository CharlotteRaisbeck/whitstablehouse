import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function PhotoGallery() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section photo-gallery-page">
          <div className="photo-gallery-container">
            <h1>Photo Gallery</h1>
          </div>
        </section>

        <section className="photo-gallery-grid">
          <div className="gallery-grid">
              <div className="gallery-item">
                <img src="/hero-image-2.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-3.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-4.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-5.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-6.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-7.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-8.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/hero-image-9.jpg" alt="Whitstable House" />
              </div>
              <div className="gallery-item">
                <img src="/whitstable-suite-image.jpg" alt="Care Suite" />
              </div>
              <div className="gallery-item">
                <img src="/whitstable-suite-image-2.jpg" alt="Care Suite" />
              </div>
              <div className="gallery-item">
                <img src="/whitstable-suite-image-3.jpg" alt="Care Suite" />
              </div>
              <div className="gallery-item">
                <img src="/whitstable-suite-main-room.jpg" alt="Care Suite Main Room" />
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

export default PhotoGallery;
