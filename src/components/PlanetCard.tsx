import { ArrowRight } from 'lucide-react';
import { CelestialBody } from '../data/planets';

interface PlanetCardProps {
  planet: CelestialBody;
  onSelect: (id: string) => void;
}

export const PlanetCard = ({ planet, onSelect }: PlanetCardProps) => {
  return (
    <button 
      onClick={() => onSelect(planet.id)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',
        backgroundColor: 'var(--surface-lavender)',
        borderRadius: '24px',
        padding: '32px',
        border: '1px solid var(--border-subtle)',
        transition: 'all var(--transition-normal)',
        position: 'relative',
        overflow: 'hidden',
        height: '100%',
        width: '100%'
      }}
      className="planet-card"
    >
      <div style={{
        position: 'absolute',
        top: '24px',
        right: '24px',
        fontSize: '1.25rem',
        fontWeight: 800,
        fontFamily: 'var(--font-display)',
        color: 'var(--text-secondary)',
        opacity: 0.5
      }}>
        0{planet.order}
      </div>

      <div style={{
        width: '120px',
        height: '120px',
        borderRadius: '50%',
        background: planet.gradient,
        marginBottom: '24px',
        alignSelf: 'center',
        position: 'relative',
        boxShadow: `inset -12px -12px 24px rgba(0,0,0,0.4), 0 10px 20px ${planet.color}40`,
        transition: 'transform var(--transition-normal)'
      }} className="planet-visual">
        {/* If Saturn, add rings */}
        {planet.id === 'saturn' && (
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '180%',
            height: '40%',
            borderRadius: '50%',
            border: '8px solid rgba(244, 164, 96, 0.6)',
            transform: 'translate(-50%, -50%) rotate(20deg)',
          }} />
        )}
      </div>

      <h3 style={{ fontSize: '2rem', marginBottom: '8px' }}>{planet.name}</h3>
      <p style={{ 
        color: 'var(--accent-purple)', 
        fontWeight: 600, 
        fontSize: '1rem',
        marginBottom: '16px' 
      }}>
        {planet.descriptor}
      </p>
      <p style={{ 
        color: 'var(--text-secondary)', 
        marginBottom: '32px',
        lineHeight: 1.5,
        flexGrow: 1
      }}>
        {planet.facts[0]}
      </p>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--text-primary)',
        fontWeight: 600,
        marginTop: 'auto'
      }} className="explore-link">
        Explore Planet
        <ArrowRight size={18} className="arrow-icon" style={{ transition: 'transform var(--transition-fast)' }} />
      </div>

      <style>{`
        .planet-card:hover, .planet-card:focus-visible {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(78, 85, 216, 0.08);
          border-color: var(--accent-purple);
          outline: none;
        }
        .planet-card:hover .planet-visual, .planet-card:focus-visible .planet-visual {
          transform: scale(1.05);
        }
        .planet-card:hover .arrow-icon, .planet-card:focus-visible .arrow-icon {
          transform: translateX(4px);
        }
      `}</style>
    </button>
  );
};
