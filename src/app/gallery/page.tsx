import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Explore the journey of Hope Charity Organization through images capturing moments of transformation, resilience, and global impact.',
};

interface GalleryImage {
  src: string;
  title: string;
}

export default function Gallery() {
  const images: GalleryImage[] = [
    { src: 'ga1.jpg', title: 'Community Support' },
    { src: 'ga2.jpg', title: 'Educational Initiatives' },
    { src: 'ga3.jpg', title: 'Shelter Projects' },
    { src: 'ga4.jpg', title: 'Healthcare Access' },
    { src: 'ga5.jpg', title: 'Clean Water Program' },
    { src: 'gal3.jpg', title: 'Child Mentorship' },
    { src: 'ga7.jpg', title: 'Nutrition Support' },
    { src: 'gal.jpeg', title: 'Volunteer Work' },
    { src: 'gal2.jpeg', title: 'Global Impact' },
    { src: 'Malawi children.jpg', title: 'School Building' },
    { src: 'ga11.jpg', title: 'Rural Outreach' },
    { src: 'ga12.jpg', title: 'Future Leaders' }
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
            <h2 className="display-5 fw-bold mb-3">Capturing Moments of Hope</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Explore our journey through these images. Each photo tells a story of transformation, resilience, and the impact of your support.
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
        title="Be part of our next chapter. Help us create more beautiful stories."
        buttonText="Support Our Work"
      />
    </>
  );
}
