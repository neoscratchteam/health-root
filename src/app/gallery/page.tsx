import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | Health Root NGO',
  description: 'Explore the journey of Health Root NGO through images capturing our activities in health awareness, youth empowerment, and community development.',
};

interface GalleryImage {
  src: string;
  title: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: 'ga1.jpg', title: 'Health Awareness Campaign' },
    { src: 'ga2.jpg', title: 'School Outreach' },
    { src: 'ga6.jpg', title: 'Community Clean-Up' },
    { src: 'ga8.jpg', title: 'Youth Training Program' },
    { src: 'ga11.jpg', title: 'Tree Planting' },
    { src: 'ga13.jpg', title: 'Mental Wellness Session' },
    { src: 'ga7.jpg', title: 'Nutrition Workshop' },
    { src: 'gal.jpeg', title: 'Volunteer Activities' },
    { src: 'gal3.jpg', title: 'Youth Mentorship' },
    { src: 'ga3.jpg', title: 'Community Outreach' },
    { src: 'ga12.jpg', title: 'Leadership Seminar' },
    { src: 'ga4.jpg', title: 'Health Education' }
  ];

  return (
    <>
      <Hero 
        title="Our Gallery" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Activities in Action</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Explore our journey through these images. Each photo captured during our health campaigns, sanitation activities, and training sessions.
            </p>
          </div>

          <div className="row g-4">
            {images.map((img, idx) => (
              <div className="col-md-6 col-lg-4" key={idx}>
                <div className="gallery-item position-relative overflow-hidden rounded-lg shadow-sm" style={{ height: '300px' }}>
                  <Image 
                    src={`/images/${img.src}`} 
                    alt={img.title} 
                    fill 
                    className="transition-all hover-scale" 
                    style={{ objectFit: 'cover' }} 
                  />
                  <div className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center transition-all" style={{ zIndex: 1 }}>
                    <div className="text-center p-3">
                      <h3 className="h5 text-white fw-bold mb-2">{img.title}</h3>
                      <Link href={`/images/${img.src}`} className="btn btn-sm btn-white rounded-pill px-4" target="_blank">View Large</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Join our next activity and help build a healthier community."
        buttonText="Get Involved"
      />
    </>
  );
}
