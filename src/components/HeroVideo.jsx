import { useRef } from 'react';

// Pune video-ul aici: public/videos/hero-video.mp4
const heroVideoPath = '/videos/hero-video.mp4';

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
