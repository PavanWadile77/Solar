import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolarSystemExplorer } from './components/SolarSystemExplorer';
import { PlanetCard } from './components/PlanetCard';
import { DiscoverySection } from './components/DiscoverySection';
import { Footer } from './components/Footer';
import { celestialBodies } from './data/planets';

function App() {
  const [selectedBodyId, setSelectedBodyId] = useState('earth');

  const handleSelectBody = (id: string) => {
    setSelectedBodyId(id);
    // Smooth scroll to explorer when selecting from gallery
    const explorerEl = document.getElementById('explorer');
    if (explorerEl) {
      const headerOffset = 80;
      const elementPosition = explorerEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerOffset,
        behavior: 'smooth'
      });
    }
  };

  const planetsOnly = celestialBodies.filter(b => b.type === 'planet');

  return (
    <>
      <Header />
      <main>
        <Hero />
        <SolarSystemExplorer
          selectedId={selectedBodyId}
          onSelect={setSelectedBodyId}
        />

        <section id="planets" className="section-padding">
          <div className="container">
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '48px', textAlign: 'center' }}>
              Meet your cosmic neighbors
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '24px'
            }}>
              {planetsOnly.map(planet => (
                <PlanetCard
                  key={planet.id}
                  planet={planet}
                  onSelect={handleSelectBody}
                />
              ))}
            </div>
          </div>
        </section>

        <DiscoverySection />
      </main>
      <Footer />
    </>
  );
}

export default App;
