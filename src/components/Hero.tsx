import { useEffect, useRef } from 'react';

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // We replicate the 'visible' class from CSS by mounting it immediately or intersection observation
    if (contentRef.current) {
      setTimeout(() => {
        contentRef.current?.classList.add('visible');
      }, 100);
    }
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content text-reveal slide-up" ref={contentRef}>
        <h1 className="hero-title">Concept to <span>Creations</span></h1>
        <p className="hero-subtitle">Premium architecture, construction, and house interiors in Bangalore & Karnataka.</p>
        <div className="hero-btns">
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <a href="#contact" className="btn btn-outline">Let's Talk</a>
        </div>
      </div>
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
