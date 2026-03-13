import { useEffect, useState } from 'react';
import { navLinks, contact } from '../data/content';
import { Icon } from './IconSet';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);
    window.addEventListener('resize', closeMenu);

    return () => window.removeEventListener('resize', closeMenu);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navigare principală">
        <a href="#top" className="brand" aria-label="Borcea Stefan">
          <span className="brand__badge">BSG</span>
          <span>
            <small>Service Auto Iași</small>
          </span>
        </a>

        <div className={`nav-links ${isOpen ? 'nav-links--open' : ''}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="button button--small button--ghost mobile-call" href={contact.phoneHref}>
            <Icon name="phone" />
            <span>Sună acum</span>
          </a>
        </div>

        <a className="button button--small button--ghost desktop-call" href={contact.phoneHref}>
          <Icon name="phone" />
          <span>Sună acum</span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={isOpen ? 'Închide meniul' : 'Deschide meniul'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <Icon name={isOpen ? 'close' : 'menu'} />
        </button>
      </nav>
    </header>
  );
}
