import { useEffect, useRef } from 'react';

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          entries[0].target.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="services section-padding bg-dark slide-up" ref={sectionRef}>
      <div className="container text-center">
        <h4 className="section-subtitle">Our Expertise</h4>
        <h2 className="section-title text-light">Premium Services</h2>
        <p className="section-desc text-light-muted">Specializing in construction and house interiors for modern living.</p>
        
        <div className="services-grid">
          <div className="service-card">
            <i className="fa-solid fa-helmet-safety service-icon"></i>
            <h3>Construction</h3>
            <p>End-to-end residential and commercial building construction with uncompromising quality and robust engineering.</p>
          </div>
          <div className="service-card highlight-card">
            <i className="fa-solid fa-couch service-icon"></i>
            <h3>House Interiors</h3>
            <p>Bespoke interior design solutions tailored to your lifestyle, crafted with luxury and modern aesthetics in mind.</p>
          </div>
          <div className="service-card">
            <i className="fa-solid fa-compass-drafting service-icon"></i>
            <h3>Design & Executions</h3>
            <p>Seamless execution from architectural blueprints to the final coat of paint, managed by our expert team.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
