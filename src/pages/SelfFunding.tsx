import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Header from '../components/Header';

function SelfFunding() {
  return (
    <div className="page">
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />

      <main id="main-content">
        <section className="content-section self-funding-page">
          <div className="self-funding-container">
            <h1>Self Funding</h1>
          </div>
        </section>

        <section className="content-section self-funding-intro">
          <div className="section__container">
            <div className="section__text">
              <p>Most residents pay for their own care</p>
              <p>Current government policy is that everyone with more than £23,250 in savings and capital (2013/14), or with income that covers the cost of their care, have to pay for their care themselves.  With a large proportion of people being home owners, the majority of residents fall into this category.</p>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-charges">
          <div className="section__container">
            <div className="section__text">
              <h2>Charges & Agreements</h2>
              <p>The charges for self-funded residents and the associated documentation are as follows.</p>
            </div>
            <div className="section__text charges-content">
              <h3>Downloads</h3>
              <ul className="download-list">
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks%2FWhitstable%2DResident%2DCharges%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Residents' Charges (pdf)</a>
                </li>
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FArchive%2FWeblinks%2FWhitstable%2DAgreement%2DPrivate%2DFunding%2024%2D02%2D12%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FArchive%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">Resident Agreement – Self Funding (pdf)</a>
                </li>
                <li>
                  <a href="#" className="pdf-link">Direct Debit Mandate (pdf)</a>
                </li>
              </ul>
              
              <p>If a resident is unable to move into the home straight away and we agree to hold a suite in the interim, we charge 50% of the normal amount for the suite for the period that we hold it.</p>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-financial">
          <div className="section__container">
            <div className="section__text">
              <h2>Understanding the financial commitment</h2>
              <p>We recognise that self-funding is a large financial commitment, so it is important to fully understand the implications of this at the outset.  With this in mind, we work with prospective residents on the following areas:</p>
              
              <ul>
                <li>The length of time the resident's savings and capital will cover the home's fees.  We ask for written evidence to show that this period will be at least two years.</li>
                <li>Arrangements for the sale of any property owned by the resident.  If this is required to cover the home's fees, a personal guarantee is needed from a third party to cover the shortfall until it is sold.</li>
                <li>Eligibility for government benefits.  Some benefits are not means tested (e.g. Attendance Allowance), so it is good to check that the resident is not missing out on anything.</li>
                <li>Migration to NHS Continuing Healthcare funding, should the resident become eligible for this. In this circumstance, the NHS fully covers the resident's health care needs but the resident still needs to fund the cost of the additional facilities and enhanced accommodation provided by the home which are not required to meet the resident's health care needs.</li>
              </ul>
              
              <h2>What happens when a Resident's money runs out?</h2>
              <p>We are able to continue to accommodate residents when they are no longer able to pay from their own resources provided that they:</p>
              
              <ul>
                <li>Fully disclosed their financial resources to us in writing when they moved in and have used these resources exclusively for the home's charges in the meantime.</li>
                <li>Are assessed by Kent Social Services as having on-going nursing care needs at the time they are no longer able to pay.</li>
                <li>Provide us with the financial assessment conducted by Kent Social Services (including the Form CM10).</li>
                <li>Successfully claim all eligible benefits.</li>
                <li>Are prepared to use their income to cover our charges.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-capacity">
          <div className="section__container">
            <div className="section__text">
              <h2>Residents who lack capacity to consent to moving in</h2>
              <p>If a resident lacks capacity to sign documentation and a registered "Power of Attorney" is not in place, we ask for a personal guarantee from a third party to cover the charges until a Deputyship Order has been made and the account has been paid in full.</p>
            </div>
            <div className="section__text capacity-content">
              <h3>Downloads</h3>
              <ul className="download-list">
                <li>
                  <a href="https://grahamcare.sharepoint.com/sites/WebDocuments/Shared%20Documents/Forms/AllItems.aspx?id=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FArchive%2FWeblinks%2FWhitstable%2DAgreement%2DSocial%2DServices%2DFunding%2024%2D02%2D12%2Epdf&parent=%2Fsites%2FWebDocuments%2FShared%20Documents%2FGeneral%2FWhitstable%2FArchive%2FWeblinks&p=true&ga=1" className="pdf-link" target="_blank" rel="noopener noreferrer">3rd Party Personal Guarantee (pdf)</a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="content-section self-funding-credit">
          <div className="section__container">
            <div className="section__text">
              <h2>Credit Terms</h2>
              <p>All charges for each month are payable in advance by Direct Debit on the first day of each month. If accounts are not paid in accordance with these terms, action is taken in line with the following letters.</p>
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

export default SelfFunding;
