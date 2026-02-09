import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { isArchived } from '../config/archivedPages';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isFundingDropdownOpen, setIsFundingDropdownOpen] = useState(false);
  const [isOurCareDropdownOpen, setIsOurCareDropdownOpen] = useState(false);
  const [isOurServicesDropdownOpen, setIsOurServicesDropdownOpen] = useState(false);
  const [isOurEthosDropdownOpen, setIsOurEthosDropdownOpen] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
    setIsFundingDropdownOpen(false);
    setIsOurCareDropdownOpen(false);
    setIsOurServicesDropdownOpen(false);
    setIsOurEthosDropdownOpen(false);
  }, [location]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('.header__nav');
      const hamburger = document.querySelector('.hamburger');
      if (isMenuOpen && nav && !nav.contains(event.target as Node) && hamburger && !hamburger.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleFundingDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsFundingDropdownOpen(!isFundingDropdownOpen);
  };

  const toggleOurCareDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOurCareDropdownOpen(!isOurCareDropdownOpen);
  };

  const toggleOurServicesDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOurServicesDropdownOpen(!isOurServicesDropdownOpen);
  };

  const toggleOurEthosDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOurEthosDropdownOpen(!isOurEthosDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          {location.pathname === '/' ? (
            <img src="/whitstable-logo.png" alt="Whitstable House Relationship Centred Care" className="logo__image" />
          ) : (
            <Link to="/">
              <img src="/whitstable-logo.png" alt="Whitstable House Relationship Centred Care" className="logo__image" />
            </Link>
          )}
        </div>
        
        <button 
          className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
          <span className="hamburger__line"></span>
        </button>

        <nav className={`header__nav ${isMenuOpen ? 'is-open' : ''}`}>
          <ul className="nav__list">
            <li><Link to="/">Home</Link></li>
            <li className={`has-dropdown ${isDropdownOpen ? 'dropdown-open' : ''}`}>
              <a href="#about" onClick={toggleDropdown}>
                About Us <span className="dropdown-arrow">▼</span>
              </a>
              <ul className="dropdown">
                <li className={`has-nested-dropdown ${isOurCareDropdownOpen ? 'nested-dropdown-open' : ''}`}>
                  <a 
                    href="#our-care" 
                    onClick={toggleOurCareDropdown}
                    onMouseEnter={() => setIsOurCareDropdownOpen(true)}
                    onMouseLeave={() => setIsOurCareDropdownOpen(false)}
                  >
                    Our Care <span className="dropdown-arrow">▶</span>
                  </a>
                  <ul className="nested-dropdown">
                    {!isArchived('/care-suites') && <li><Link to="/care-suites">Care Suites</Link></li>}
                    {!isArchived('/activities') && <li><Link to="/activities">Activities</Link></li>}
                    {!isArchived('/wellbeing-centred-care') && <li><Link to="/wellbeing-centred-care">Wellbeing Centred Care</Link></li>}
                    {!isArchived('/meet-the-team') && <li><Link to="/meet-the-team">Meet the Team</Link></li>}
                    {!isArchived('/weekly-menus') && <li><Link to="/weekly-menus">Weekly Menus</Link></li>}
                    {!isArchived('/photo-gallery') && <li><Link to="/photo-gallery">Photo Gallery</Link></li>}
                  </ul>
                </li>
                <li className={`has-nested-dropdown ${isOurServicesDropdownOpen ? 'nested-dropdown-open' : ''}`}>
                  <a 
                    href="#our-services" 
                    onClick={toggleOurServicesDropdown}
                    onMouseEnter={() => setIsOurServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsOurServicesDropdownOpen(false)}
                  >
                    Our Services <span className="dropdown-arrow">▶</span>
                  </a>
                  <ul className="nested-dropdown">
                    {!isArchived('/respite-care') && <li><Link to="/respite-care">Respite Care</Link></li>}
                    {!isArchived('/dementia-care') && <li><Link to="/dementia-care">Dementia Care</Link></li>}
                    {!isArchived('/nursing-care') && <li><Link to="/nursing-care">Nursing Care</Link></li>}
                  </ul>
                </li>
                <li className={`has-nested-dropdown ${isOurEthosDropdownOpen ? 'nested-dropdown-open' : ''}`}>
                  <a 
                    href="#our-ethos" 
                    onClick={toggleOurEthosDropdown}
                    onMouseEnter={() => setIsOurEthosDropdownOpen(true)}
                    onMouseLeave={() => setIsOurEthosDropdownOpen(false)}
                  >
                    Our Ethos <span className="dropdown-arrow">▶</span>
                  </a>
                  <ul className="nested-dropdown">
                    {!isArchived('/servant-leadership') && <li><Link to="/servant-leadership">Servant Leadership</Link></li>}
                    {!isArchived('/quality-assurance') && <li><Link to="/quality-assurance">Quality Assurance</Link></li>}
                    {!isArchived('/gmb-union') && <li><Link to="/gmb-union">GMB Union</Link></li>}
                  </ul>
                </li>
                {!isArchived('/help-and-advice') && <li><Link to="/help-and-advice">Help and Advice</Link></li>}
                {!isArchived('/cqc-registration') && <li><Link to="/cqc-registration">CQC Registration</Link></li>}
              </ul>
            </li>
            <li className={`has-dropdown ${isFundingDropdownOpen ? 'dropdown-open' : ''}`}>
              <a href="#funding" onClick={toggleFundingDropdown}>
                Funding <span className="dropdown-arrow">▼</span>
              </a>
              <ul className="dropdown">
                {!isArchived('/self-funding') && <li><Link to="/self-funding">Self Funding</Link></li>}
                {!isArchived('/social-services-funding') && <li><Link to="/social-services-funding">Social Services Funding</Link></li>}
                {!isArchived('/nhs-funding') && <li><Link to="/nhs-funding">NHS Funding</Link></li>}
              </ul>
            </li>
            {!isArchived('/documents') && <li><Link to="/documents">Documents</Link></li>}
            {!isArchived('/work-with-us') && <li><Link to="/work-with-us">Work with Us</Link></li>}
            {!isArchived('/contact-us') && <li><Link to="/contact-us">Contact Us</Link></li>}
          </ul>
          <a href="https://carerecords.online" target="_blank" rel="noopener noreferrer" className="btn-relatives">Relatives Login</a>
        </nav>
      </div>
      <div className="header__mast">
        <img src="/wide-mast.png" alt="" className="mast-image" />
      </div>
    </header>
  );
}

export default Header;

