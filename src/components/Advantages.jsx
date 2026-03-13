import { advantages } from '../data/content';
import { Icon } from './IconSet';
import { SectionTitle } from './SectionTitle';

const iconCycle = ['shield', 'precision', 'lightning', 'support', 'chat', 'diagnostic'];

export function Advantages() {
  return (
    <section className="section section--contrast" id="avantaje">
      <div className="container">
        <SectionTitle
          eyebrow="De ce să alegi acest service"
          title="Un service local gândit pentru încredere și claritate"
          description="Accentul este pus pe lucrări bine făcute, comunicare directă și intervenții potrivite pentru nevoile reale ale clientului."
        />

        <div className="cards-grid cards-grid--advantages">
          {advantages.map((item, index) => (
            <article className="advantage-card" key={item.title}>
              <div className="advantage-card__icon">
                <Icon name={iconCycle[index % iconCycle.length]} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
