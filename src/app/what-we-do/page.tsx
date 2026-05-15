import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'What We Do',
  description: 'Explore the programs and initiatives of Hope Charity Organization, including providing shelter, nutrition, and emotional support to children in need.',
};

interface Feature {
  num: string;
  title: string;
  desc: string;
}

interface Cause {
  img: string;
  title: string;
  progress: number;
  raised: string;
  goal: string;
}

export default function WhatWeDo() {
  const features: Feature[] = [
    { 
      num: '01', 
      title: 'Providing Shelter', 
      desc: 'We provide safe and secure housing for children and families who have lost their homes due to conflict or natural disasters.' 
    },
    { 
      num: '02', 
      title: 'Providing Good Food', 
      desc: 'Our nutrition programs ensure that every child in our care receives three healthy, balanced meals every day.' 
    },
    { 
      num: '03', 
      title: 'Offering Support and Companionship', 
      desc: 'Beyond physical needs, we provide emotional support and mentorship to help children overcome trauma and build confidence.' 
    },
  ];

  const causes: Cause[] = [
    { img: 'wed7.jpg', title: 'Help us to Send Food', progress: 70, raised: '$6,000.00', goal: '$9,000.00' },
    { img: 'wed2.jpg', title: 'Clothes For Everyone', progress: 30, raised: '$2,000.00', goal: '$9,000.00' },
    { img: 'wed3.jpg', title: 'Help Us Provide Treated Water', progress: 55, raised: '$6,500.00', goal: '$9,000.00' },
    { img: 'wed4.jpg', title: 'Help Us Give Them Shelter', progress: 10, raised: '$1,000.00', goal: '$9,000.00' },
    { img: 'wed8.jpg', title: 'Support Their Education', progress: 98, raised: '$8,500.00', goal: '$9,000.00' },
    { img: 'wed6.jpg', title: 'Support For Their Medical Care', progress: 30, raised: '$2,000.00', goal: '$9,000.00' },
  ];

  return (
    <>
      <Hero 
        title="What We Do" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Commitment to Children</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              We are dedicated to providing a safe, nurturing, and engaging environment for children. Explore our programs designed to enrich their lives and ensure their well-being.
            </p>
          </div>

          <div className="row gy-4">
            {features.map((feature, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="feature p-5 border-0 rounded shadow-sm h-100 bg-light transition-all hover-shadow">
                  <span className="text-primary fw-bold text-uppercase small mb-2 d-block">Feature / {feature.num}</span>
                  <h3 className="h4 fw-bold mb-3">{feature.title}</h3>
                  <p className="text-muted mb-4">{feature.desc}</p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="icon-check text-success me-2"></i>Safe Environment</li>
                    <li className="mb-2"><i className="icon-check text-success me-2"></i>Professional Support</li>
                    <li className="mb-2"><i className="icon-check text-success me-2"></i>Sustainable Solutions</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">How Our Donations Are Going</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              Transparency is at the heart of what we do. See how your contributions are making a difference in our ongoing projects.
            </p>
          </div>

          <div className="row">
            {causes.map((cause, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                <div className="single_cause bg-white rounded-lg shadow-sm overflow-hidden h-100 transition-all hover-shadow border-0">
                  <div className="thumb overflow-hidden position-relative" style={{ height: '220px' }}>
                    <Image 
                      src={`/images/${cause.img}`} 
                      alt={cause.title} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-all hover-scale" 
                    />
                  </div>
                  <div className="causes_content p-4">
                    <div className="custom_progress_bar mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <small className="fw-bold">Progress</small>
                        <small className="fw-bold text-primary">{cause.progress}%</small>
                      </div>
                      <div className="progress rounded-pill" style={{ height: '8px' }}>
                        <div 
                          className="progress-bar" 
                          role="progressbar" 
                          style={{ width: `${cause.progress}%`, backgroundColor: '#00796b' }} 
                          aria-valuenow={cause.progress} 
                          aria-valuemin={0} 
                          aria-valuemax={100}
                        ></div>
                      </div>
                    </div>
                    <div className="balance d-flex justify-content-between align-items-center mb-4 p-2 bg-light rounded">
                      <div className="text-center flex-fill">
                        <small className="d-block text-muted text-uppercase small">Raised</small>
                        <span className="fw-bold text-dark">{cause.raised}</span>
                      </div>
                      <div className="vr mx-2"></div>
                      <div className="text-center flex-fill">
                        <small className="d-block text-muted text-uppercase small">Goal</small>
                        <span className="fw-bold text-dark">{cause.goal}</span>
                      </div>
                    </div>
                    <h3 className="h5 fw-bold mb-3"><Link href="/what-we-do" className="text-dark text-decoration-none hover-text-primary transition-all">{cause.title}</Link></h3>
                    <p className="text-muted small mb-4">Your support helps us reach our goals and provide essential services to those who need them most.</p>
                    <Link className="btn btn-outline-primary btn-sm rounded-pill px-4 fw-bold" href="/what-we-do">Read More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Be part of the solution. Your donation can change a life today."
        buttonText="Donate to a Cause"
      />
    </>
  );
}
