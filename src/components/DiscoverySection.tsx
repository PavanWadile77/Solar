
import { Sun, Compass, Orbit } from 'lucide-react';

export const DiscoverySection = () => {
  return (
    <section id="discover" className="section-padding" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '48px', maxWidth: '600px' }}>
          There's more beyond the orbit
        </h2>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          alignItems: 'stretch'
        }} className="discovery-grid">
          
          {/* Large Feature Card */}
          <div style={{
            backgroundColor: 'var(--text-primary)',
            color: 'white',
            padding: '48px',
            borderRadius: '24px',
            gridColumn: '1 / -1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '400px'
          }} className="feature-card">
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '600px' }}>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)', 
                width: '64px', height: '64px', 
                borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px'
              }}>
                <Sun size={32} color="#FFD700" />
              </div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>Our Star, The Sun</h3>
              <p style={{ fontSize: '1.25rem', opacity: 0.9, lineHeight: 1.6 }}>
                The Sun is a yellow dwarf star at the center of our solar system. Its gravity holds everything together, and its energy drives weather, ocean currents, seasons, and life on Earth. Without it, our solar system would be a dark, frozen place.
              </p>
            </div>
            
            {/* Background Illustration */}
            <div style={{
              position: 'absolute',
              right: '-10%',
              bottom: '-30%',
              width: '600px',
              height: '600px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0) 70%)',
              zIndex: 1
            }}></div>
          </div>

          {/* Smaller Supporting Cards */}
          <div style={{
            backgroundColor: 'var(--surface-lavender)',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              width: '56px', height: '56px', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <Compass size={28} color="var(--accent-purple)" />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>Worlds of Rock & Gas</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              The inner planets—Mercury, Venus, Earth, and Mars—are dense, rocky worlds. The outer planets—Jupiter, Saturn, Uranus, and Neptune—are massive giants primarily composed of gas and ice, featuring vast atmospheres and complex ring systems.
            </p>
          </div>

          <div style={{
            backgroundColor: 'var(--bg-page)',
            padding: '40px',
            borderRadius: '24px',
            border: '1px solid var(--border-subtle)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ 
              backgroundColor: 'white', 
              width: '56px', height: '56px', 
              borderRadius: '50%', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '24px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
            }}>
              <Orbit size={28} color="var(--accent-indigo)" />
            </div>
            <h3 style={{ fontSize: '1.75rem', marginBottom: '16px' }}>The Immense Scale</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Space is overwhelmingly vast. If the Sun were a typical front door, Earth would be the size of a nickel. Neptune, the outermost planet, is so far away that sunlight takes more than 4 hours to reach it.
            </p>
          </div>

        </div>
      </div>
      
      <style>{`
        @media (min-width: 992px) {
          .discovery-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
