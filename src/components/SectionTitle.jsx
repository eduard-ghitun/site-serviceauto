export function SectionTitle({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={`section-title section-title--${align}`}>
      <span className="section-title__eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
