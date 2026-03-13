import { contact } from '../data/content';
import { Icon } from './IconSet';

// Pune imaginile aici: public/images/
const heroImagePath = '/images/service-1.jpeg';

export function Hero() {
  return (
    <section className="hero section" id="top">
      <div className="container hero__grid">
        <div className="hero__content">
          <span className="trust-badge">Servicii locale în Iași</span>
          <h1>Service Auto Profesional în Iași</h1>
          <p className="hero__lead">
            Borcea Stefan oferă mentenanță, reparații, tuning auto și verificare
            erori, cu atenție la detalii și servicii profesionale.
          </p>
          <div className="hero__actions">
            <a href="#servicii" className="button button--primary">
              Vezi serviciile
            </a>
            <a href={contact.phoneHref} className="button button--secondary">
              <Icon name="phone" />
              <span>Sună acum</span>
            </a>
          </div>
          <div className="hero__meta">
            <div>
              <strong>Locație</strong>
              <span>Iași, România</span>
            </div>
            <div>
              <strong>Program</strong>
              <span>{contact.schedule}</span>
            </div>
          </div>
        </div>

        <div className="hero__visual" aria-label="Placeholder imagine auto premium">
          <div className="hero-card hero-card--primary" aria-label="Fotografie atelier sau automobil">
            <img
              className="hero-card__image"
              src={heroImagePath}
              alt="Fotografie atelier sau automobil Borcea Stefan"
            />
          </div>
          <div className="hero-card hero-card--secondary">
            <span className="hero-card__eyebrow">Focus local</span>
            <strong>Diagnoză, întreținere și reparații</strong>
          </div>
          <div className="hero-card hero-card--stats">
            <div>
              <span>Servicii</span>
              <strong>4 direcții clare</strong>
            </div>
            <div>
              <span>Contact</span>
              <strong>{contact.phoneDisplay}</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
