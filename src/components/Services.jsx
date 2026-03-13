import { serviceItems } from '../data/content';
import { Icon } from './IconSet';
import { SectionTitle } from './SectionTitle';

// Pune imaginile aici: public/images/
const servicesImagePath = '/images/service-2.jpeg';

export function Services() {
  return (
    <section className="section" id="servicii">
      <div className="container">
        <SectionTitle
          eyebrow="Servicii"
          title="Lucrări esențiale pentru întreținerea și buna funcționare a mașinii"
          description="Fiecare serviciu este prezentat clar, într-un format simplu și profesionist, ca să poți identifica rapid ce ai nevoie."
          align="center"
        />

        <div className="services-showcase" aria-label="Imagine reprezentativă servicii auto">
          <img
            className="services-showcase__image"
            src={servicesImagePath}
            alt="Imagine reprezentativă pentru serviciile auto Borcea Stefan"
          />
          <div className="services-showcase__overlay" />
          <div className="cards-grid cards-grid--services cards-grid--services-overlay">
            {serviceItems.map((service) => (
              <article className="service-card service-card--overlay" key={service.title}>
                <div className="service-card__icon">
                  <Icon name={service.icon} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-card__link">
                  <span>Consultare telefonică</span>
                  <Icon name="arrow" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
