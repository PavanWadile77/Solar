import { useState, useEffect } from 'react';
import { Menu, X, Orbit } from 'lucide-react';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`site-header${isScrolled ? ' scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} aria-label="Solar Explorer Home">
          <Orbit style={{ color: 'var(--accent-purple)' }} />
          <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.25rem' }}>Solar Explorer</span>
        </a>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <a href="#explorer" className="header-nav-link">Explore</a>
          <a href="#planets" className="header-nav-link">Planets</a>
          <a href="#discover" className="header-nav-link">Discover</a>
          <a href="#explorer" className="btn-primary" style={{ padding: '10px 24px', fontSize: '1rem' }}>Start Exploring</a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav" role="navigation">
          <a href="#explorer" onClick={handleNavClick}>Explore</a>
          <a href="#planets" onClick={handleNavClick}>Planets</a>
          <a href="#discover" onClick={handleNavClick}>Discover</a>
          <a href="#explorer" onClick={handleNavClick} className="btn-primary" style={{ alignSelf: 'flex-start' }}>Start Exploring</a>
        </nav>
      )}

      <style>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease;
          background-color: transparent;
          border-bottom: 1px solid transparent;
          padding: 16px 0;
        }
        .site-header.scrolled {
          background-color: rgba(250, 249, 255, 0.92);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom-color: var(--border-subtle);
        }
        .desktop-nav {
          display: none;
          gap: 32px;
          align-items: center;
        }
        .header-nav-link {
          font-weight: 500;
          transition: color 0.18s ease;
        }
        .header-nav-link:hover {
          color: var(--accent-purple);
        }
        .mobile-nav-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          color: var(--text-primary);
        }
        .mobile-nav {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background-color: var(--bg-page);
          border-bottom: 1px solid var(--border-subtle);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .mobile-nav a {
          font-size: 1.25rem;
          font-weight: 500;
        }
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-nav-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
