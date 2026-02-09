import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function ServantLeadership() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section servant-leadership-page">
          <div className="servant-leadership-container">
            <h1>Servant Leadership</h1>
          </div>
        </section>

        <section className="content-section servant-intro">
          <div className="section__container">
            <div className="section__text">
              <h2>Always asking, "How can we serve you better?"</h2>
              
              <p>Everyone rightly expects care staff to provide residents with care, companionship and stimulation which is personalised to their needs. However, it can be very difficult for staff to fulfil this expectation unless we in turn provide individualised support to staff and genuinely empower them to listen to, facilitate and encourage the residents. In this way, we seek to serve our staff just as we expect them to serve our residents.</p>
            </div>
          </div>
        </section>

        <section className="content-section differences-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Differences in Leadership</h2>
              
              <p>Most organisations today still lead by a command & control style of leadership. We believe that the Servant Leadership model offers a more consensual form of leadership that recognises the value of people to fulfil the organisation's mission. It is about engaging everyone involved and using their talents to the full.</p>

              <div className="comparison-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Command & Control</th>
                      <th>Servant Leadership</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Business Metaphor</strong></td>
                      <td>Organisation is a machine</td>
                      <td>Organic structure of relationships</td>
                    </tr>
                    <tr>
                      <td><strong>Authority</strong></td>
                      <td>Top down</td>
                      <td>Participation by entire group</td>
                    </tr>
                    <tr>
                      <td><strong>People</strong></td>
                      <td>Instruments of production</td>
                      <td>Greatest assets and sources of creativity</td>
                    </tr>
                    <tr>
                      <td><strong>Leadership Style</strong></td>
                      <td>Distant and detached</td>
                      <td>Connected and present</td>
                    </tr>
                    <tr>
                      <td><strong>Supervisory Approach</strong></td>
                      <td>Dictate, control, punitive</td>
                      <td>Listen, facilitate, encourage</td>
                    </tr>
                    <tr>
                      <td><strong>Service Orientation</strong></td>
                      <td>Self-serving – What can you do for me and the organisation?</td>
                      <td>Other serving – what can I do to help you fulfill your goals and mission?</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="content-section characteristics-section">
          <div className="section__container">
            <div className="section__text">
              <h2>Servant Leadership is a holistic approach that encourages:</h2>

              <ol className="characteristics-list">
                <li>
                  <strong>Listening</strong>
                  <p>A servant leader has the motivation to listen actively to subordinates and support them in decision identification. The servant leader pays particular attention to what remains unspoken in the management setting.</p>
                </li>
                <li>
                  <strong>Persuasion</strong>
                  <p>A servant leader does not take advantage of his/her power and status by coercing compliance; he/she rather tries to convince those they manage. This element distinguishes servant leadership most clearly from traditional, authoritarian models.</p>
                </li>
                <li>
                  <strong>Openness</strong>
                  <p>The servant leader will openly share information which is relevant to others as a means of empowering them. Information will not be withheld in order to control others.</p>
                </li>
                <li>
                  <strong>Commitment to the growth of others</strong>
                  <p>A servant leader is convinced that people have an intrinsic value beyond their contributions as workers. Therefore, he/she nurtures the personal, professional and spiritual growth of employees. The servant leader also encourages the ideas of everyone and involves workers in decision making.</p>
                </li>
                <li>
                  <strong>Empathy</strong>
                  <p>A servant leader attempts to understand and empathise with others. Workers are seen not only as employees, but also as people who need respect and appreciation for their personal development.</p>
                </li>
                <li>
                  <strong>Stewardship</strong>
                  <p>Company owners and staff are committed to optimising the value of their organisation for all stakeholders and they see servant leadership as the essential means of doing so.</p>
                </li>
                <li>
                  <strong>Building community</strong>
                  <p>A servant leader seeks to build a strong community within his/her organisation and wants to develop a setting in which the needs of others can be served.</p>
                </li>
              </ol>
            </div>
          </div>
        </section>

        <section className="content-section commitment-section servant-leadership-commitment">
          <div className="section__container">
            <div className="section__text">
              <p><strong>These seven characteristics are by no means exhaustive, but they describe the essential elements of servant leadership.</strong></p>
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

export default ServantLeadership;

