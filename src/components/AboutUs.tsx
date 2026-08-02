import { useEffect, useRef } from 'react';

const AboutUs = () => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section-padding slide-up" ref={sectionRef}>
      <div className="container about-container">
        <div className="about-text">
          <h4 className="section-subtitle">About Us</h4>
          <h2 className="section-title">Building Dreams with Precision</h2>
          <p>Welcome to DEV CONSTRUCTIONS. We are a premier construction and interior design firm dedicated to turning your visionary concepts into physical reality. Our comprehensive approach covers every stage of the process, ensuring top-tier executions that exceed expectations.</p>
          <div className="founder-info">
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt="Yateru Deva Reddy" className="founder-img" />
            <div>
              <h4 className="founder-name">Yateru Deva Reddy</h4>
              <p className="founder-title">Founder</p>
            </div>
          </div>
        </div>
        <div className="about-image-wrapper">
          <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80" alt="Beautiful home interior" className="about-img" />
          <div className="experience-badge">
            <span className="number">Excellence</span>
            <span className="text">in Every Detail</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
