// Hero section component

export const Hero = () => {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      paddingTop: '80px',
      overflow: 'hidden'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap-reverse',
        gap: '48px',
        position: 'relative',
        zIndex: 2
      }}>
        
        {/* Text Content: ~55% width on desktop */}
        <div style={{ flex: '1 1 500px', maxWidth: '650px', padding: '40px 0' }}>
          <div style={{
            color: 'var(--accent-purple)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            marginBottom: '16px',
            fontSize: '1rem',
            fontFamily: 'var(--font-display)'
          }}>
            A JOURNEY BEYOND EARTH
          </div>
          
          <h1 style={{
            fontSize: 'clamp(4rem, 8vw, 7rem)',
            lineHeight: 1,
            marginBottom: '24px',
            textTransform: 'uppercase'
          }}>
            <div style={{ color: '#100D28' }}>EXPLORE THE</div>
            <div className="text-gradient">SOLAR SYSTEM</div>
          </h1>
          
          <p style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            marginBottom: '40px',
            maxWidth: '520px',
            lineHeight: 1.5
          }}>
            Discover incredible worlds, follow their orbits, and explore the wonders of our cosmic neighborhood.
          </p>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            flexWrap: 'wrap',
            marginBottom: '32px'
          }}>
            <a href="#explorer" className="btn-primary">Start Exploring</a>
            <a href="#planets" className="btn-secondary">Meet the Planets</a>
          </div>
          
          <div style={{
            color: 'var(--text-secondary)',
            fontSize: '0.875rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span>8 planets</span>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <span>1 star</span>
            <span style={{ color: 'var(--border-subtle)' }}>•</span>
            <span>Endless discovery</span>
          </div>
        </div>

        {/* Artwork: ~45% width on desktop */}
        <div style={{
          flex: '1 1 400px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative'
        }}>
          {/* We'll use the generated image as a background element with some CSS masking/border-radius to make it look like a window */}
          <div style={{
            width: '100%',
            maxWidth: '600px',
            aspectRatio: '1/1',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(78, 85, 216, 0.15)',
            border: '8px solid white',
            position: 'relative',
            transform: 'translateX(5%)', // Cropped slightly at the right edge
            animation: 'float 6s ease-in-out infinite'
          }}>
            <img 
              src="/hero-artwork.jpg" 
              alt="Artistic rendering of the solar system"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Decorative background arc */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-10%',
        width: '60vw',
        height: '60vw',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(240,236,252,0.8) 0%, rgba(250,249,255,0) 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <style>{`
        @keyframes float {
          0% { transform: translate(5%, 0px); }
          50% { transform: translate(5%, -15px); }
          100% { transform: translate(5%, 0px); }
        }
        @media (max-width: 900px) {
          @keyframes float {
            0% { transform: translate(0%, 0px); }
            50% { transform: translate(0%, -10px); }
            100% { transform: translate(0%, 0px); }
          }
          .hero-artwork {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  );
};
