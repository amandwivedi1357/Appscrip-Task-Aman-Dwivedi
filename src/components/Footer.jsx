"use client"

import { useState, useEffect } from "react"
import "@/styles/Footer.css"

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    brand: false,
    quickLinks: false,
    followUs: false,
  })
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    
    handleResize()


    window.addEventListener("resize", handleResize)

   
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const toggleSection = (section) => {
    if (isMobile) {
      setExpandedSections((prev) => ({
        ...prev,
        [section]: !prev[section],
      }))
    }
  }

  const toggleDropdown = (section) => {
    setOpenDropdown(openDropdown === section ? null : section);
  };

  const footerSections = {
    metaMuse: [
      'About Us',
      'Stories',
      'Artisans',
      'Boutique',
      'Contact Us',
      'EU Compliance Docs'
    ],
    quickLinks: [
      'Orders & Shipping',
      'Join/Login as Seller',
      'Payment & Pricing',
      'Returns & Refunds',
      'FAQs',
      'Privacy Policy',
      'Terms & Conditions'
    ],
    followUs: [
      'Instagram',
      'Facebook',
      'Twitter',
      'LinkedIn'
    ]
  };

  return (
    <footer className="footer-container">
      <div className="footer-top-border" />
      <div className="footer-content">
        <div className="footer-row footer-top-row">
          <div className="footer-newsletter">
            <div className="footer-newsletter-title">BE THE FIRST TO KNOW</div>
            <div className="footer-newsletter-text">Sign up for updates from metta muse.</div>
            <form className="footer-newsletter-form">
              <input type="email" placeholder="Enter your e-mail..." />
              <button type="submit">SUBSCRIBE</button>
            </form>
          </div>
          <div className="footer-contact">
            <div className="footer-contact-title">CONTACT US</div>
            <div className="footer-contact-phone">+44 221 133 5360</div>
            <div className="footer-contact-email">customercare@mettamuse.com</div>
            <div className="footer-currency-title">CURRENCY</div>
            <div className="footer-currency">
              <img src="https://flagcdn.com/24x18/us.png" alt="US flag" width="24" height="18" style={{ verticalAlign: 'middle' }} />
              <span style={{ marginLeft: 5,fontWeight:"700",fontSize:"16px" }}>USD</span>
            </div>
            <div className="footer-currency-note">Transactions will be completed in US Dollars (USD).<br/>While the content of your cart is currently displayed in <b>USD</b>, you will checkout using <b>USD</b> at the most current exchange rate.</div>
          </div>
        </div>
        <div className="footer-divider" />
        <div className="footer-links-container">
          {Object.entries(footerSections).map(([sectionKey, links]) => (
            <div key={sectionKey} className="footer-section">
              <div 
                className="footer-section-title" 
                onClick={() => toggleDropdown(sectionKey)}
              >
                {sectionKey === 'metaMuse' ? 'METTA MUSE' : sectionKey === 'quickLinks' ? 'QUICK LINKS' : 'FOLLOW US'}
                <span className={`dropdown-icon ${openDropdown === sectionKey ? 'open' : ''}`}>
                  ▼
                </span>
              </div>
              <div 
                className={`footer-section-links ${openDropdown === sectionKey ? 'open' : ''}`}
              >
                {links.map((link, index) => (
                  <a key={index} href="#">{link}</a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="footer-row footer-links-row">
          <div className="footer-links-col footer-follow">
            <div className="footer-links-header">FOLLOW US</div>
            <div className="footer-social-icons">
              {/* Social icons would go here. Placeholder: */}
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="24" height="24" />
              <img src="https://cdn-icons-png.flaticon.com/512/4494/4494475.png" alt="Facebook" width="24" height="24" style={{ marginLeft: 8 }} />
            </div>
            <div className="footer-accepts">
              <div className="footer-links-header">metta muse ACCEPTS</div>
              <div className="footer-payment-icons">
                <img src="/gpay.svg" alt="Google Pay" width="40" height="24" />
                <img src="/mastercard.svg" alt="Mastercard" width="40" height="24" style={{ marginLeft: 4 }} />
                <img src="/paypal.svg" alt="Paypal" width="40" height="24" style={{ marginLeft: 4 }} />
                <img src="/amex.svg" alt="American Express" width="40" height="24" style={{ marginLeft: 4 }} />
                <img src="/applepay.svg" alt="Apple Pay" width="40" height="24" style={{ marginLeft: 4 }} />
                <img src="/pay.svg" alt="Pay" width="40" height="24" style={{ marginLeft: 4 }} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">Copyright 2023 mettamuse. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
