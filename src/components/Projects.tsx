import { useEffect, useRef } from 'react';

const Projects = () => {
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

  const projectData = [
    { id: 1, title: 'Modern Villa Construction', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80' },
    { id: 2, title: 'Luxury Living Room', location: 'Chikkamagalur', img: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=600&q=80' },
    { id: 3, title: 'Modular Kitchen', location: 'Bangalore North', img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80' },
    { id: 4, title: 'Elevation Design', location: 'Karnataka', img: 'https://images.unsplash.com/photo-1600566753086-00f18efc2291?auto=format&fit=crop&w=600&q=80' },
    { id: 5, title: 'Premium Bathroom Decor', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=600&q=80' },
    { id: 6, title: 'Commercial Workspace', location: 'Bangalore', img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <section id="projects" className="projects section-padding slide-up" ref={sectionRef}>
      <div className="container text-center">
        <h4 className="section-subtitle">Portfolio</h4>
        <h2 className="section-title">Our Recent Works</h2>
        
        <div className="projects-grid">
          {projectData.map(proj => (
            <div className="project-card" key={proj.id}>
              <img src={proj.img} alt={proj.title} />
              <div className="project-info">
                <h3>{proj.title}</h3>
                <p>{proj.location}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a href="#" className="btn btn-outline" style={{ marginTop: '3rem', color: 'var(--text-main)', borderColor: 'var(--text-main)' }}>View All Projects</a>
      </div>
    </section>
  );
};

export default Projects;
