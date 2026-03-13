import { contact, navLinks } from '../data/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer">
        <div className="footer__brand">
          <strong>Borcea Stefan</strong>
          <span>Service Auto</span>
          <p>Service auto local în Iași, orientat spre mentenanță, reparații și diagnoză clară.</p>
        </div>

        <div className="footer__links">
          <strong>Linkuri rapide</strong>
          <div className="footer__nav">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__contact">
          <strong>Contact</strong>
          <span>{contact.phoneDisplay}</span>
          <span>{contact.email}</span>
          <span>{contact.schedule}</span>
          <span>{contact.location}</span>
        </div>
      </div>
    </footer>
  );
}
