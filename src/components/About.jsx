import { mechanicBenefits } from '../data/content';
import { SectionTitle } from './SectionTitle';

// Pune imaginile aici: public/images/
const aboutBackgroundPath = '/images/interior.jpeg';

export function About() {
  return (
    <section className="section section--muted" id="despre">
      <div className="container about">
        <div
          className="about__intro"
          style={{ '--about-bg-image': `url("${aboutBackgroundPath}")` }}
        >
          <SectionTitle
            eyebrow="Despre mecanic"
            title="Seriozitate, claritate și grijă pentru fiecare intervenție"
            description="Borcea Stefan oferă servicii auto dedicate celor care caută seriozitate, atenție la detalii și soluții eficiente pentru întreținerea și optimizarea mașinii."
          />
          <p className="about__text">
            Fie că este vorba de mentenanță periodică, o reparație necesară sau
            o verificare rapidă a erorilor, fiecare lucrare este tratată cu
            responsabilitate și o abordare practică, orientată spre rezultat.
          </p>
        </div>

        <div className="about__benefits">
          {mechanicBenefits.map((item) => (
            <div className="about-benefit" key={item}>
              <span className="about-benefit__dot" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
