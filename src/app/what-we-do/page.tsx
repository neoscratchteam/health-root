import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Programs | Health Root NGO',
  description: 'Explore the programs of Health Root NGO, including health awareness, youth training, and community outreach in Rwanda.',
};

interface Program {
  num: string;
  title: string;
  desc: string;
}

interface Project {
  img: string;
  title: string;
  desc: string;
  status: 'ongoing' | 'completed';
}

export default function WhatWeDo() {
  const programs: Program[] = [
    { 
      num: '01', 
      title: 'Health Awareness', 
      desc: 'Campaigns on personal hygiene, nutrition, reproductive health, and disease prevention in schools and communities.' 
    },
    { 
      num: '02', 
      title: 'Youth Training', 
      desc: 'Empowering young people with leadership, public speaking, and community engagement skills.' 
    },
    { 
      num: '03', 
      title: 'Environmental Protection', 
      desc: 'Organizing community clean-ups and tree planting activities to promote sanitation and conservation.' 
    },
  ];

  const projects: Project[] = [
    { img: 'wed7.jpg', title: 'School Health Outreach', desc: 'Educating students in Kigali schools on personal hygiene and mental wellness.', status: 'ongoing' },
    { img: 'ga6.jpg', title: 'Community Sanitation Day', desc: 'Monthly cleaning activities in local communities to promote a healthy living environment.', status: 'ongoing' },
    { img: 'ga8.jpg', title: 'Youth Mentorship Program', desc: 'A 6-month training program for young leaders in community health development.', status: 'ongoing' },
    { img: 'ga11.jpg', title: 'Tree Planting Initiative', desc: 'Restoring local greenery and promoting climate awareness among young people.', status: 'completed' },
    { img: 'ga3.jpg', title: 'Nutrition Workshop', desc: 'Teaching families about balanced diets and sustainable food sources.', status: 'completed' },
    { img: 'ga13.jpg', title: 'Drug Abuse Prevention', desc: 'Awareness campaigns targeting youth to prevent substance abuse.', status: 'ongoing' },
  ];

  return (
    <>
      <Hero 
        title="Our Programs" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Core Programs</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              We implement targeted initiatives designed to empower youth and improve community health in Rwanda.
            </p>
          </div>

          <div className="row gy-4">
            {programs.map((program, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="feature p-5 border-0 rounded shadow-sm h-100 bg-light transition-all hover-shadow">
                  <span className="text-primary fw-bold text-uppercase small mb-2 d-block">Program / {program.num}</span>
                  <h3 className="h4 fw-bold mb-3">{program.title}</h3>
                  <p className="text-muted mb-4">{program.desc}</p>
                  <ul className="list-unstyled">
                    <li className="mb-2"><i className="icon-check text-secondary me-2"></i>Community-led</li>
                    <li className="mb-2"><i className="icon-check text-secondary me-2"></i>Youth-focused</li>
                    <li className="mb-2"><i className="icon-check text-secondary me-2"></i>Sustainable</li>
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
            <h2 className="display-5 fw-bold mb-3">Ongoing Projects</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
              See how our activities are creating a lasting positive impact in communities across the country.
            </p>
          </div>

          <div className="row">
            {projects.map((project, idx) => (
              <div className="col-lg-4 col-md-6 mb-4" key={idx}>
                <div className="single_cause bg-white rounded-lg shadow-sm overflow-hidden h-100 transition-all hover-shadow border-0">
                  <div className="thumb overflow-hidden position-relative" style={{ height: '220px' }}>
                    <Image 
                      src={`/images/${project.img}`} 
                      alt={project.title} 
                      fill
                      style={{ objectFit: 'cover' }}
                      className="transition-all hover-scale" 
                    />
                    <div className="position-absolute top-0 right-0 m-3">
                      <span className={`badge ${project.status === 'ongoing' ? 'bg-primary' : 'bg-success'} px-3 py-2 rounded-pill`}>
                        {project.status.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="causes_content p-4">
                    <h3 className="h5 fw-bold mb-3">{project.title}</h3>
                    <p className="text-muted small mb-4">{project.desc}</p>
                    <Link className="btn btn-outline-primary btn-sm rounded-pill px-4 fw-bold" href="/contact">Support Project</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Be part of the solution. Your contribution helps us expand our reach."
        buttonText="Support a Program"
      />
    </>
  );
}
