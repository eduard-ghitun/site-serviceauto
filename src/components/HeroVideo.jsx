import { useRef } from 'react';

const heroVideoPath = '/src/assets/videos/WhatsApp%20Video%202026-03-13%20at%2014.25.25.mp4';

export function HeroVideo() {
  const sectionRef = useRef(null);

  const handleScrollNext = () => {
    const currentSection = sectionRef.current;

    if (!currentSection) {
      return;
    }

    let nextElement = currentSection.nextElementSibling;

    if (nextElement?.tagName === 'HEADER') {
      nextElement = nextElement.nextElementSibling?.firstElementChild ?? nextElement.nextElementSibling;
    }

    nextElement?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={sectionRef} className="hero-video" aria-label="Video principal service auto">
      <video
        className="hero-video__media"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        {/* Plasează video-ul aici: src/assets/videos/WhatsApp Video 2026-03-13 at 14.25.25.mp4 */}
        <source src={heroVideoPath} type="video/mp4" />
      </video>
      <button
        type="button"
        className="scroll-indicator"
        aria-label="Derulează către următoarea secțiune"
        onClick={handleScrollNext}
      >
        ↓
      </button>
    </section>
  );
}
