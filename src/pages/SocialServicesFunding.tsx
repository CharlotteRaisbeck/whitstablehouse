import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function SocialServicesFunding() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section self-funding-page">
          <div className="self-funding-container">
            <h1>Social Services Funding</h1>
          </div>
        </section>

        <section className="content-section self-funding-intro">
          <div className="section__container">
            <div className="section__text">
              <p>Current government policy is that individuals with less than £23,250 in savings and capital and lower income than the cost of their care may be eligible for funding from Social Services.</p>
              <p>We provide some places for people in this situation who have been assessed by Social Services as having on-going nursing needs.</p>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-charges">
          <div className="section__container">
            <div className="section__text">
              <h2>Charges & Agreements</h2>
              <p>Our charges and associated documentation are as follows.   Please note that the "Residents Agreement" is particularly important as it explains the arrangements in detail together with the essential aspects of the agreements.</p>
            </div>
            <div className="section__text charges-content">
              <h3>Downloads</h3>
              <ul className="download-list">
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2DResident%2DCharges%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Residents' Charges (pdf)</a>
                </li>
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?viewid=aee99abc%2D6faa%2D44f1%2Dac47%2D022ddee4714f&id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%20Resident%20Agreement%20%28SS%20Funding%29%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks" className="pdf-link">Resident Agreement – Social Services Funding (pdf)</a>
                </li>
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?viewid=aee99abc%2D6faa%2D44f1%2Dac47%2D022ddee4714f&id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%20House%20DD%20Mandate%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks" className="pdf-link">Direct Debit Mandate (pdf)</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-capacity">
          <div className="section__container">
            <div className="section__text">
              <h2>Residents who lack capacity to consent to moving in</h2>
              <p>If a resident lacks capacity to sign documentation and a registered "Power of Attorney" is not in place, we ask for a personal guarantee from a third party to cover the charges until a Deputyship Order has been made and the account has been paid in full.  Our protocol for executing the Tenancy Agreement when a resident lacks mental capacity to give consent also needs to be followed.</p>
            </div>
            <div className="section__text capacity-content">
              <h3>Downloads</h3>
              <ul className="download-list">
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?viewid=aee99abc%2D6faa%2D44f1%2Dac47%2D022ddee4714f&id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2D3rd%2DParty%2DPersonal%2DGuarantee%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks" className="pdf-link">3rd Party Personal Guarantee (pdf)</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-credit">
          <div className="section__container">
            <div className="section__text">
              <h2>Credit Terms</h2>
              <p>All charges for each month are payable in advance by Direct Debit on the first day of each month.  If accounts are not paid in accordance with these terms, action is taken in line with the following letters.</p>
            </div>
            <div className="section__text credit-content">
              <h3>Overdue Accounts</h3>
              
              <div className="overdue-accounts">
                <div className="overdue-item">
                  <p className="overdue-date">7th of the following month:</p>
                  <ul className="download-list">
                    <li>
                      <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2D1%2DStatement%2Dof%2DArrears%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Statement of Arrears (PDF)</a>
                    </li>
                  </ul>
                </div>
                
                <div className="overdue-item">
                  <p className="overdue-date">14th of the following month:</p>
                  <ul className="download-list">
                    <li>
                      <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2D2%2DSeven%2Dday%2Dwarning%2Dletter%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Seven day warning letter (PDF)</a>
                    </li>
                  </ul>
                </div>
                
                <div className="overdue-item">
                  <p className="overdue-date">21st of the following month:</p>
                  <ul className="download-list">
                    <li>
                      <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2D3%2DNotification%2Dof%2DLegal%2DAction%2DNH%2DAgreements%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Notification of Legal Action – Nursing Home Agreements (PDF)</a>
                    </li>
                  </ul>
                </div>
                
                <div className="overdue-item">
                  <p className="overdue-date">28th of the following month:</p>
                  <ul className="download-list">
                    <li>
                      <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2D4%2DSolicitors%2DLetter%2DNursing%2DHome%2DAgreements%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Solicitor's Notice to Leave – Nursing Home Agreements (PDF)</a>
                    </li>
                  </ul>
                </div>
              </div>
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

export default SocialServicesFunding;
