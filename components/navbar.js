class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .nav-container {
          max-width: 1440px;
          width: 100%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        
        .logo-icon {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #3b82f6 0%, #6366f1 100%);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #1e293b;
          font-family: 'Playfair Display', serif;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        
        .nav-link a {
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 1rem;
          transition: color 0.2s;
          position: relative;
        }
        
        .nav-link a:hover {
          color: #3b82f6;
        }
        
        .nav-link a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #3b82f6;
          transition: width 0.3s;
        }
        
        .nav-link a:hover::after {
          width: 100%;
        }
        
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        
        .search-btn {
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .search-btn:hover {
          color: #3b82f6;
        }
        
        .language-selector {
          position: relative;
        }
        
        .language-btn {
          background: none;
          border: none;
          color: #64748b;
          font-weight: 500;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .language-btn:hover {
          color: #3b82f6;
        }
        
        .cta-btn {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          border: none;
          border-radius: 6px;
          padding: 0.75rem 1.5rem;
          font-weight: 600;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 6px -1px rgba(99, 102, 241, 0.3);
        }
        
        .cta-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 15px -3px rgba(99, 102, 241, 0.3);
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
        }
        
        @media (max-width: 1024px) {
          .nav-links, .nav-actions {
            display: none;
          }
          
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      
      <nav>
        <div class="nav-container">
          <div class="logo-container">
            <div class="logo-icon">
              <i data-feather="cpu" stroke="white" stroke-width="2"></i>
            </div>
            <div class="logo-text">AI Connect Solutions</div>
          </div>
          
          <ul class="nav-links">
            <li class="nav-link"><a href="/">Home</a></li>
            <li class="nav-link"><a href="#services">Services</a></li>
            <li class="nav-link"><a href="/pricing.html">Pricing</a></li>
            <li class="nav-link"><a href="/about.html">About Us</a></li>
            <li class="nav-link"><a href="/resources.html">Resources</a></li>
            <li class="nav-link"><a href="/contact.html">Contact</a></li>
          </ul>
          
          <div class="nav-actions">
            <button class="search-btn" aria-label="Search">
              <i data-feather="search" stroke-width="2"></i>
            </button>
            <div class="language-selector">
              <button class="language-btn">
                <span>EN</span>
                <i data-feather="chevron-down" stroke-width="2" width="16"></i>
              </button>
            </div>
            <button class="cta-btn">Schedule Consultation</button>
          </div>
          
          <button class="mobile-menu-btn" aria-label="Menu">
            <i data-feather="menu" stroke-width="2"></i>
          </button>
        </div>
      </nav>
    `;
    
    // Initialize feather icons in shadow DOM
    const featherScript = document.createElement('script');
    featherScript.src = 'https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js';
    this.shadowRoot.appendChild(featherScript);
    
    featherScript.onload = () => {
      if (window.feather) {
        window.feather.replace();
      }
    };
  }
}

customElements.define('custom-navbar', CustomNavbar);