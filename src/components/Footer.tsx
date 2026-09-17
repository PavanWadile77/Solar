
import { Orbit, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      backgroundColor: 'white',
      borderTop: '1px solid var(--border-subtle)',
      padding: '64px 0 32px 0'
    }}>
      <div className="container" style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '48px'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Orbit style={{ color: 'var(--accent-purple)', width: '32px', height: '32px' }} />
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.5rem' }}>Solar Explorer</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontFamily: 'var(--font-display)', fontWeight: 500 }}>
            Same planet. Bigger dreams.
          </p>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '32px',
          flexWrap: 'wrap'
        }}>
          <a href="#explorer" style={{ color: 'var(--text-secondary)', fontWeight: 500 }} className="footer-link">Explore</a>
          <a href="#planets" style={{ color: 'var(--text-secondary)', fontWeight: 500 }} className="footer-link">Planets</a>
          <a href="#discover" style={{ color: 'var(--text-secondary)', fontWeight: 500 }} className="footer-link">Discover</a>
        </div>

        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid var(--border-subtle)',
          paddingTop: '32px',
          marginTop: '16px',
          flexWrap: 'wrap',
          gap: '16px'
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Solar Explorer. Illustrative purposes only.
          </p>
          <button 
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              color: 'var(--accent-purple)',
              fontWeight: 500,
              fontSize: '0.875rem'
            }}
            aria-label="Back to top"
          >
            Back to top
            <div style={{
              backgroundColor: 'var(--surface-lavender)',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex'
            }}>
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>

      <style>{`
        .footer-link:hover {
          color: var(--accent-purple) !important;
        }
      `}</style>
    </footer>
  );
};
