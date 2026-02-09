import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function WellbeingCentredCare() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section wellbeing-page">
          <div className="wellbeing-container">
            <h1>Wellbeing Centred Care</h1>
          </div>
        </section>

        <section className="content-section wellbeing-intro">
          <div className="section__container">
            <div className="section__text">
              <p>For many years, nursing homes have based their care planning on Activities of Daily Living (ADLs) — such as eating, washing, dressing, and mobility. While this model has been valuable in ensuring essential care needs are met, it can often become task-oriented. In practice, this can lead to care being described and delivered in terms of what staff do to a person, rather than how we support the person to live well.</p>

              <p><strong>We believe that a person's wellbeing is more than the sum of their physical needs</strong> — it is about living meaningfully, comfortably, and with dignity, even in the context of frailty or cognitive decline. This is why we are evolving our approach towards a Wellbeing Model of Care, built around the <strong>Five Pillars of Wellbeing: Eating, Sleeping, Moving, Thinking, and Relating.</strong></p>
            </div>
            <div className="section__image">
              <img src="/five-pillars-of-wellbeing.jpg" alt="The 5 Pillars of Wellbeing" />
            </div>
          </div>
        </section>

        <section className="content-section pillar-eating">
          <div className="section__container">
            <div className="section__text">
              <h2>Eating</h2>
              <p>Good food and drink nourish the body and lift the spirit. <strong>We support healthy, enjoyable mealtimes — taking into account personal preferences, cultural needs, and medical conditions.</strong> Continence management is also an essential part of wellbeing, as it relates directly to nutrition and hydration. We promote dignity and comfort through thoughtful continence care, helping residents feel confident and comfortable every day.</p>
            </div>
            <div className="section__image">
              <img src="/eating-wellbeing.jpg" alt="Eating - Wellbeing Centred Care" />
            </div>
          </div>
        </section>

        <section className="content-section pillar-sleeping">
          <div className="section__container">
            <div className="section__text">
              <h2>Sleeping</h2>
              <p>Rest is vital for the body and mind. We focus on helping residents maintain comfortable, personalised sleep routines — supporting their preferred bedtime, night-time comfort, and emotional security. <strong>For residents with disrupted sleep patterns or dementia-related restlessness, we use calm environments, familiar cues, and safety measures to promote peaceful rest.</strong></p>
            </div>
            <div className="section__image">
              <img src="/sleeping-wellbeing.jpg" alt="Sleeping - Wellbeing Centred Care" />
            </div>
          </div>
        </section>

        <section className="content-section pillar-moving">
          <div className="section__container">
            <div className="section__text">
              <h2>Moving</h2>
              <p>Staying active helps maintain strength, confidence, and independence. Whether it's walking, gentle exercise, or supported transfers, <strong>we encourage safe movement with personal encouragement to maintain dignity and confidence in daily life</strong>. Pressure care is another important part of this pillar. We work proactively to maintain skin integrity and prevent pressure injuries through regular repositioning, specialist mattresses, and attentive monitoring.</p>
            </div>
            <div className="section__image">
              <img src="/moving-wellbeing.jpg" alt="Moving - Wellbeing Centred Care" />
            </div>
          </div>
        </section>

        <section className="content-section pillar-thinking">
          <div className="section__container">
            <div className="section__text">
              <h2>Thinking</h2>
              <p>Everyone's mind and memories are unique. <strong>We support cognitive health through meaningful engagement</strong>, whether it be conversation, music, reminiscence, or activities that bring joy and connection. Our staff are trained to communicate sensitively, adapting to each resident's needs and pace.</p>
            </div>
            <div className="section__image">
              <img src="/thinking-wellbeing.jpg" alt="Thinking - Wellbeing Centred Care" />
            </div>
          </div>
        </section>

        <section className="content-section pillar-relating">
          <div className="section__container">
            <div className="section__text">
              <h2>Relating</h2>
              <p>Relationships are what make life meaningful. <strong>We help residents stay connected with loved ones, staff, and their sense of self.</strong> This includes supporting communication, reducing isolation, and celebrating faith and culture, <strong>ensuring everyone feels valued and included.</strong></p>
            </div>
            <div className="section__image">
              <img src="/relating-wellbeing.jpg" alt="Relating - Wellbeing Centred Care" />
            </div>
          </div>
        </section>

        <section className="content-section commitment-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Our Commitment</h2>
              <p>Whether someone is staying with us for rehabilitation or for lifelong care, our goal is to support their wellbeing every day. <strong>Our care planning therefore balances clinical excellence with human connection</strong>, allowing each person's lived experience to be as positive, comfortable, and fulfilling as it can be – for life.</p>
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

export default WellbeingCentredCare;
