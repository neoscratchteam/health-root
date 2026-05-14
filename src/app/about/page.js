import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export default function About() {
  return (
    <>
      <Hero 
        title="About The Organization" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-md-7 order-md-2 mb-5 mb-md-0">
              <div className="position-relative">
                <img src="/images/Operation Christmas Child in Madagascar_.jpg" alt="Our Story" className="img-fluid rounded shadow-lg" />
                <div className="position-absolute" style={{ top: '-20px', left: '-20px', width: '100px', height: '100px', backgroundColor: '#00796b', zIndex: -1, borderRadius: '10px' }}></div>
              </div>
            </div>
            <div className="col-md-5 pe-md-5 mb-5 order-md-1">
              <div className="block-41">
                <h2 className="display-4 fw-bold mb-4">Our Story: A Vision of Hope</h2>
                <div className="block-41-text">
                  <p className="lead text-muted">
                    Founded with a simple goal to make a difference, Hope Charity Organization has grown into a global movement. We believe that every child, regardless of their background, deserves the opportunity to thrive.
                  </p>
                  <p className="text-muted">
                    Our journey began with a small group of volunteers in Rwanda, and today we work in over 100 countries, providing essential services and advocating for children's rights. Our commitment remains as strong as the day we started.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-12 mb-5 text-center mt-5">
              <h2 className="display-5 fw-bold mb-3">The Organizers</h2>
              <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>Meet the passionate individuals who lead our mission and drive change across the globe.</p>
            </div>
            {[
              { name: 'Jacob Esone', role: 'Founder', img: 'found1.jpeg', bio: 'Jacob is the visionary behind our organization, with over 15 years of experience in humanitarian work.' },
              { name: 'Jennifer Esone', role: 'Co-founder', img: 'found2.jpeg', bio: 'Jennifer leads our community outreach programs and ensures our impact reaches the most vulnerable.' },
              { name: 'Chioma Eweke', role: 'Finance Manager', img: 'found5.jpeg', bio: 'Chioma manages our resources with transparency and integrity, ensuring every donation is used effectively.' },
              { name: 'Daniel Okbi', role: 'Partner', img: 'found4.jpeg', bio: 'Daniel brings strategic partnerships to our organization, helping us scale our impact globally.' },
            ].map((member, idx) => (
              <div className="col-md-6 col-lg-3 mb-4" key={idx}>
                <div className="block-38 text-center bg-light p-4 rounded shadow-sm hover-shadow transition-all h-100">
                  <div className="block-38-img mb-4">
                    <img 
                      src={`/images/${member.img}`} 
                      alt={member.name} 
                      className="rounded-circle shadow" 
                      style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
                    />
                  </div>
                  <div className="block-38-header">
                    <h3 className="h4 fw-bold mb-1">{member.name}</h3>
                    <p className="text-primary fw-bold small text-uppercase mb-3">{member.role}</p>
                  </div>
                  <div className="block-38-body">
                    <p className="text-muted small">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Join our team of volunteers and make a real impact today."
        buttonText="Get Involved"
        buttonLink="/contact"
      />

    </>
  );
}
