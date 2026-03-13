import { contact } from '../data/content';
import { Icon } from './IconSet';

export function CallToAction() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="cta-panel">
          <div className="cta-panel__content">
            <span className="section-title__eyebrow">Programare / Contact</span>
            <h2>Ai nevoie de un service auto de încredere în Iași?</h2>
            <p>
              Borcea Stefan îți oferă servicii profesionale pentru întreținere,
              reparații și diagnoză auto. Contactul telefonic rămâne cea mai
              rapidă metodă pentru stabilirea detaliilor.
            </p>
          </div>

          <a href={contact.phoneHref} className="button button--primary button--large">
            <Icon name="phone" />
            <span>Sună acum</span>
          </a>
        </div>
      </div>
    </section>
  );
}
