import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Health Root NGO',
  description: 'Learn about Health Root NGO, our vision, mission, and core values. Healthy Young People Build a Healthy Community.',
};

export default function About() {
  const coreValues = [
    { title: 'Integrity', desc: 'We work honestly, responsibly, and transparently.' },
    { title: 'Respect', desc: 'We respect all people regardless of age, gender, or background.' },
    { title: 'Teamwork', desc: 'We believe collaboration creates stronger communities.' },
    { title: 'Innovation', desc: 'We encourage creativity and new ideas for solving community health problems.' },
    { title: 'Community Service', desc: 'We are committed to helping communities improve their wellbeing.' },
    { title: 'Equality', desc: 'Everyone deserves access to health information and support.' },
  ];

  return (
    <>
      <Hero 
        title="About Health Root NGO" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-7 order-md-2 mb-5 mb-md-0">
              <div className="position-relative" style={{ minHeight: '400px' }}>
                <Image 
                  src="/images/about1.jpg" 
                  alt="Health Root Story" 
                  fill 
                  className="rounded shadow-lg" 
                  style={{ objectFit: 'cover' }}
                />
                <div className="position-absolute" style={{ top: '-20px', left: '-20px', width: '100px', height: '100px', backgroundColor: '#0a2342', zIndex: -1, borderRadius: '10px' }}></div>
              </div>
            </div>
            <div className="col-md-5 pe-md-5 mb-5 order-md-1">
              <div className="block-41">
                <h2 className="display-4 fw-bold mb-4">Who We Are</h2>
                <div className="block-41-text">
                  <p className="lead text-muted">
                    Health Root NGO is a youth-centered organization focused on promoting health education, leadership, and community development. 
                  </p>
                  <p className="text-muted">
                    We believe that healthy young people are the foundation of a healthy and successful community. Through education, campaigns, training programs, and volunteer activities, we support positive change and encourage active participation in community health development.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5 py-5 bg-light rounded-lg px-4">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="h2 fw-bold text-primary mb-3">Our Vision</h2>
              <p className="lead">To build a healthier, educated, responsible, and empowered community where young people actively contribute to positive health and social development.</p>
            </div>
            <div className="col-md-6">
              <h2 className="h2 fw-bold text-primary mb-3">Our Mission</h2>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="icon-check text-secondary me-2"></i> Promote health education and awareness.</li>
                <li className="mb-2"><i className="icon-check text-secondary me-2"></i> Support youth empowerment and leadership.</li>
                <li className="mb-2"><i className="icon-check text-secondary me-2"></i> Encourage disease prevention and healthy living.</li>
                <li className="mb-2"><i className="icon-check text-secondary me-2"></i> Improve community participation in health activities.</li>
              </ul>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 mb-5 text-center mt-5">
              <h2 className="display-5 fw-bold mb-3">Our Core Values</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>The principles that guide our work and commitment to the community.</p>
            </div>
            <div className="row gy-4">
              {coreValues.map((value, idx) => (
                <div className="col-md-4" key={idx}>
                  <div className="p-4 border rounded shadow-sm h-100 transition-all hover-shadow bg-white border-0">
                    <h3 className="h5 fw-bold text-primary mb-2">{value.title}</h3>
                    <p className="text-muted small mb-0">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CTASection 
        title="Ready to contribute to a healthier community? Join our volunteer program today."
        buttonText="Become a Volunteer"
      />
    </>
  );
}
