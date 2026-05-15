import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact | Health Root NGO',
  description: 'Read the success stories of Health Root NGO in Rwanda. See how healthy young people are building a healthy community through our initiatives.',
};

interface Story {
  title: string;
  img: string;
  text: string;
  order: 'normal' | 'reversed';
}

export default function OurImpact() {
  const stories: Story[] = [
    {
      title: 'Healthy Schools: A New Standard for Hygiene',
      img: 'wed7.jpg',
      text: 'Our school outreach program has successfully reached thousands of students in Kigali, providing them with essential health education and sanitation supplies. We are seeing a significant reduction in hygiene-related illness among participating schools.',
      order: 'reversed'
    },
    {
      title: 'Youth Leadership: Empowering Future Change-Makers',
      img: 'ga8.jpg',
      text: 'Through our leadership training, young people like Keza are now spearheading health campaigns in their own neighborhoods. We believe that empowering youth is the fastest way to build a resilient and healthy community.',
      order: 'normal'
    },
    {
      title: 'Clean Communities: The Impact of Sanitation Days',
      img: 'ga6.jpg',
      text: 'Our monthly community clean-up activities have transformed local environments, promoting a culture of sanitation and collective responsibility. Cleaner environments lead directly to healthier families and reduced disease transmission.',
      order: 'reversed'
    }
  ];

  return (
    <>
      <Hero 
        title="Our Impact: Stories of Change" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white">
        <div className="container">
          <div className="row mb-5 justify-content-center">
            <div className="col-md-8 text-center">
              <h2 className="display-5 fw-bold mb-3">Our Achievement Stories</h2>
              <p className="lead text-muted">Every community we work with represents a story of resilience and transformation. Here are just a few examples of how Health Root NGO is making a difference.</p>
            </div>
          </div>

          {stories.map((story, idx) => (
            <div className="row align-items-center mb-5 pb-5 border-bottom" key={idx}>
              <div className={`col-md-7 mb-5 mb-md-0 ${story.order === 'reversed' ? 'order-md-2' : ''}`}>
                <div className="overflow-hidden rounded-lg shadow-lg position-relative" style={{ height: '400px' }}>
                  <Image 
                    src={`/images/${story.img}`} 
                    alt={story.title} 
                    fill 
                    className="transition-all hover-scale" 
                    style={{ objectFit: 'cover' }} 
                  />
                </div>
              </div>
              <div className={`col-md-5 ${story.order === 'reversed' ? 'pe-md-5 order-md-1' : 'ps-md-5'}`}>
                <div className="block-41">
                  <h2 className="h2 fw-bold mb-4">{story.title}</h2>
                  <div className="block-41-text">
                    <p className="text-muted lead mb-4">{story.text}</p>
                  </div>
                  <Link href="/what-we-do" className="btn btn-primary px-4 py-3 rounded-pill fw-bold shadow-sm">View More Impact</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection 
        title="Your support drives this impact. Help us reach the next community."
        buttonText="Support Our Mission"
      />
    </>
  );
}
