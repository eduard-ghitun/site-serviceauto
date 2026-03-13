import { contact } from '../data/content';
import { Icon } from './IconSet';
import { SectionTitle } from './SectionTitle';

export function Location() {
  return (
    <section className="section section--muted" id="locatie">
      <div className="container location">
        <div className="location__content">
          <SectionTitle
            eyebrow="Locație"
            title="Locație: Iași"
            description="Prezență locală, ușor de comunicat și simplu de găsit pentru clienții care caută un service auto serios în Iași."
          />

          <div className="location__details">
            <div className="location__item">
              <Icon name="location" />
              <div>
                <strong>Oraș</strong>
                <span>{contact.location}</span>
              </div>
            </div>
            <div className="location__item">
              <Icon name="phone" />
              <div>
                <strong>Telefon</strong>
                <span>{contact.phoneDisplay}</span>
              </div>
            </div>
            <div className="location__item">
              <Icon name="mail" />
              <div>
                <strong>Email</strong>
                <span>{contact.email}</span>
              </div>
            </div>
            <div className="location__item">
              <Icon name="diagnostic" />
              <div>
                <strong>Coordonate GPS</strong>
                <span>{contact.gpsDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="map-placeholder" aria-label="Placeholder hartă service auto">
          <div className="map-placeholder__frame">
            <iframe
              title="Hartă județul Iași"
              src={`https://www.google.com/maps?q=${contact.gpsDisplay}&z=10&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <strong>Hartă orientativă pentru județul Iași</strong>
          <p>
            Harta este afișată direct în chenar folosind coordonatele {contact.gpsDisplay}.
            Poți înlocui ulterior punctul general cu adresa exactă a service-ului.
          </p>
          <a
            className="button button--ghost"
            href={contact.mapsHref}
            target="_blank"
            rel="noreferrer"
          >
            Deschide în Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
