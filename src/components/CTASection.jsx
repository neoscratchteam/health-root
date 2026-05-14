import React from 'react';
import Link from 'next/link';

const CTASection = ({ 
  title = "Every child deserves a chance to dream, grow, and thrive—together, we can make it happen.", 
  buttonText = "Donate Now", 
  buttonLink = "/contact",
  bgImage = "/images/home1.jpg" 
}) => {
  return (
    <section className="cta-section py-5" style={{ 
      backgroundImage: `linear-gradient(rgba(0, 121, 107, 0.8), rgba(0, 121, 107, 0.8)), url('${bgImage}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      color: '#fff',
      padding: '100px 0'
    }}>
      <div className="container text-center">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">{title}</h2>
            <Link href={buttonLink} className="btn btn-lg btn-white px-5 py-3 rounded-pill fw-bold shadow-lg hover-scale">
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
