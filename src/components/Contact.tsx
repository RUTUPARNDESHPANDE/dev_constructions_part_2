import { useEffect, useRef } from 'react';

const Contact = () => {
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
    <section id="contact" className="contact section-padding slide-up" ref={sectionRef}>
      <div className="container contact-container">
        <div className="contact-info-wrap">
          <h4 className="section-subtitle">Get in Touch</h4>
          <h2 className="section-title">Ready to build your dream space?</h2>
          <p>Contact us to discuss your construction and interior design needs today.</p>
          
          <ul className="contact-details">
            <li>
              <i className="fa-solid fa-location-dot"></i>
              <div>
                <h4>Address</h4>
                <p>Hesaraghatta, Bangalore North, Karnataka, India</p>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <p>+91 63616 83154</p>
              </div>
            </li>
            <li>
              <i className="fa-solid fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <p>deventerprises.blr@gmail.com</p>
              </div>
            </li>
            <li>
              <i className="fa-brands fa-instagram"></i>
              <div>
                <h4>Instagram</h4>
                <p>@Dev Constructions</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="contact-form-wrap">
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input type="text" placeholder="Your Name" required />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" required />
            </div>
            <div className="form-group">
              <input type="tel" placeholder="Your Phone Number" required />
            </div>
            <div className="form-group">
              <textarea placeholder="Message / Requirements" rows={4} required></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn">Submit Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
