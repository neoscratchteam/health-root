import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Health Root NGO',
  description: 'Meet the dedicated leaders and staff of Health Root NGO who work to empower youth and build healthier communities.',
};

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export default function Team() {
  const teamMembers: TeamMember[] = [
    {
      name: 'Asante Serge',
      role: 'President & Founder',
      image: '/teams/president.png',
      bio: 'Leading the organization with a vision to empower youth and build healthier communities.',
    },
    {
      name: 'Habumugisha Elie',
      role: 'Executive Director',
      image: '/teams/professor.png',
      bio: 'Providing strategic leadership and academic guidance to empower youth-driven health initiatives across Rwanda.',
    },
    {
      name: 'Ntwali Samuel',
      role: 'Vice President',
      image: '/teams/vice presdent.png',
      bio: 'Leading project development, coordinating stakeholder partnerships, and ensuring community program success.',
    },
    {
      name: 'Irasubiza Manzi Hubert',
      role: 'Executive Secretary',
      image: '/teams/secretary.png',
      bio: 'Managing administrative operations, communications, and logistical planning for all major organizational activities.',
    },
    {
      name: 'Jean Paul Mugisha',
      role: 'Chief Inspector',
      image: '/teams/inspector.png',
      bio: 'Overseeing activity standards, compliance, and auditing health campaigns for quality and impact.',
    },
  ];

  return (
    <>
      <Hero 
        title="Our Team" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white py-5">
        <div className="container">
          {/* Intro Section with Group Image */}
          <div className="row align-items-center mb-5 pb-5 border-bottom border-light">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <div className="position-relative overflow-hidden rounded-lg shadow-lg" style={{ height: '380px' }}>
                <Image 
                  src="/teams/all.png" 
                  alt="Health Root NGO Team Group Photo" 
                  fill 
                  style={{ objectFit: 'cover' }}
                  className="hover-scale"
                />
              </div>
            </div>
            <div className="col-lg-6 pe-lg-5 order-lg-1">
              <h2 className="display-5 fw-bold mb-3">Dedicated to Positive Change</h2>
              <p className="lead text-muted mb-4">
                At Health Root NGO, our leadership brings together deep passion, professional expertise, and a shared commitment to youth empowerment.
              </p>
              <p className="text-muted mb-4">
                We believe that health is the foundation of community development. By equipping young people with the right knowledge, mentorship, and leadership opportunities, we foster a responsible generation that drives sustainable health solutions.
              </p>
              <div className="d-flex gap-3">
                <Link href="/about" className="btn btn-primary rounded-pill px-4 py-2 fw-bold text-uppercase small border-0">
                  Our Mission
                </Link>
                <Link href="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2 fw-bold text-uppercase small">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Individual Members Section */}
          <div className="text-center mb-5 mt-4">
            <h2 className="display-5 fw-bold mb-3">Meet Our Leaders</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              The core management team directing Health Root NGO's operations and community impact.
            </p>
          </div>

          <div className="row gy-4 justify-content-center">
            {teamMembers.map((member, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div className="card border-0 shadow-sm rounded-lg overflow-hidden h-100 text-center hover-shadow">
                  <div className="position-relative overflow-hidden bg-light" style={{ height: '280px' }}>
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      style={{ objectFit: 'cover', objectPosition: 'top' }}
                      className="transition-all"
                    />
                  </div>
                  <div className="card-body p-4 d-flex flex-column justify-content-between">
                    <div>
                      <h3 className="h5 fw-bold mb-1 text-dark">{member.name}</h3>
                      <span className="text-primary small fw-bold text-uppercase d-block mb-3" style={{ letterSpacing: '1px' }}>
                        {member.role}
                      </span>
                    </div>
                    <p className="card-text text-muted small mb-0 mt-2">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Want to collaborate with our team? Reach out to us today."
        buttonText="Get in Touch"
      />
    </>
  );
}
