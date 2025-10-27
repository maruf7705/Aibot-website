class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1e293b;
          color: #f8fafc;
          padding: 4rem 2rem;
        }
        
        .footer-container {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
        }
        
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        
        .footer-logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .footer-logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: white;
          font-family: 'Playfair Display', serif;
        }
        
        .footer-about {
          max-width: 300px;
        }
        
        .footer-about p {
          color: #94a3b8;
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }
        
        .social-links {
          display: flex;
          gap: 1rem;
        }
        
        .social-link {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background-color 0.2s;
        }
        
        .social-link:hover {
          background-color: #3b82f6;
        }
        
        .footer-heading {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          color: white;
        }
        
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        
        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-link:hover {
          color: #3b82f6;
        }
        
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .newsletter-input {
          padding: 0.75rem 1rem;
          border-radius: 6px;
          border: 1px solid #334155;
          background-color: #1e293b;
          color: white;
        }
        
        .newsletter-input::placeholder {
          color: #64748b;
        }
        
        .newsletter-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.75rem 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .newsletter-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
        }
        
        .footer-bottom {
          max-width: 1440px;
          margin: 4rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #334155;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 1rem;
        }
        
        .footer-bottom-links {
          display: flex;
          gap: 1.5rem;
        }
        
        .footer-bottom-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        
        .footer-bottom-link:hover {
          color: #3b82f6;
        }
        
        .copyright {
          color: #94a3b8;
          font-size: 0.875rem;
        }
        
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #3b82f6;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          opacity: 0;
          transition: opacity 0.3s, transform 0.3s;
          z-index: 50;
        }
        
        .back-to-top.visible {
          opacity: 1;
        }
        
        .back-to-top:hover {
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
          }
          
          .footer-bottom {
            flex-direction: column-reverse;
            align-items: center;
            text-align: center;
          }
          
          .footer-bottom-links {
            flex-wrap: wrap;
            justify-content: center;
          }
        }
      </style>
      
      <footer>
        <div class="footer-container">
          <div>
            <div class="footer-logo">
              <div class="footer-logo-icon">
                <i data-feather="cpu" stroke="white" stroke-width="2"></i>
              </div>
              <div class="footer-logo-text">AI Connect</div>
            </div>
            <div class="footer-about">
              <p>Leading provider of enterprise-grade AI communication solutions, helping businesses automate and scale customer interactions.</p>
              <div class="social-links">
                <a href="#" class="social-link" aria-label="LinkedIn">
                  <i data-feather="linkedin" stroke-width="2" width="16"></i>
                </a>
                <a href="#" class="social-link" aria-label="Twitter">
                  <i data-feather="twitter" stroke-width="2" width="16"></i>
                </a>
                <a href="#" class="social-link" aria-label="YouTube">
                  <i data-feather="youtube" stroke-width="2" width="16"></i>
                </a>
                <a href="#" class="social-link" aria-label="GitHub">
                  <i data-feather="github" stroke-width="2" width="16"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div>
            <h3 class="footer-heading">Solutions</h3>
            <div class="footer-links">
              <a href="#" class="footer-link">AI Chatbots</a>
              <a href="#" class="footer-link">AI Calling</a>
              <a href="#" class="footer-link">Omnichannel</a>
              <a href="#" class="footer-link">CRM Integrations</a>
              <a href="#" class="footer-link">Sentiment Analysis</a>
            </div>
          </div>
          
          <div>
            <h3 class="footer-heading">Company</h3>
            <div class="footer-links">
              <a href="#" class="footer-link">About Us</a>
              <a href="#" class="footer-link">Careers</a>
              <a href="#" class="footer-link">Press</a>
              <a href="#" class="footer-link">Partners</a>
              <a href="#" class="footer-link">Contact</a>
            </div>
          </div>
          
          <div>
            <h3 class="footer-heading">Resources</h3>
            <div class="footer-links">
              <a href="#" class="footer-link">Documentation</a>
              <a href="#" class="footer-link">API Reference</a>
              <a href="#" class="footer-link">Case Studies</a>
              <a href="#" class="footer-link">Blog</a>
              <a href="#" class="footer-link">Support</a>
            </div>
          </div>
          
          <div>
            <h3 class="footer-heading">Newsletter</h3>
            <form class="newsletter-form">
              <input type="email" class="newsletter-input" placeholder="Your email address" required>
              <button type="submit" class="newsletter-btn">Subscribe</button>
            </form>
            <p style="color: #94a3b8; font-size: 0.875rem; margin-top: 1rem;">
              Get the latest AI insights and company news.
            </p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <div class="footer-bottom-links">
            <a href="#" class="footer-bottom-link">Privacy Policy</a>
            <a href="#" class="footer-bottom-link">Terms of Service</a>
            <a href="#" class="footer-bottom-link">Cookie Policy</a>
            <a href="#" class="footer-bottom-link">GDPR</a>
            <a href="#" class="footer-bottom-link">CCPA</a>
          </div>
          <div class="copyright">
            &copy; ${new Date().getFullYear()} AI Connect Solutions. All rights reserved.
          </div>
        </div>
        
        <button class="back-to-top" aria-label="Back to top">
          <i data-feather="arrow-up" stroke-width="2"></i>
        </button>
      </footer>
    `;
    
    // Initialize feather icons in shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    this.shadowRoot.appendChild(featherScript);
    
    featherScript.onload = () => {
      if (window.feather) {
        window.feather.replace();
        
        // Back to top functionality
        const backToTop = this.shadowRoot.querySelector('.back-to-top');
        window.addEventListener('scroll', () => {
          if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
          } else {
            backToTop.classList.remove('visible');
          }
        });
        
        backToTop.addEventListener('click', () => {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        });
      }
    };
  }
}

customElements.define('custom-footer', CustomFooter);