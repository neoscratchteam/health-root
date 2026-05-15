import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Impact',
  description: 'Read the stories of change and the achievements of Hope Charity Organization. See how your support is making a difference in children\'s lives.',
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
      title: 'From Hunger to Hope: Feeding 10,000 Families',
      img: 'hungryfam.jpeg',
      text: 'Our feeding program has successfully reached thousands of families in rural areas, providing them with essential nutrition and hope for a better future. Through community-led initiatives, we are building sustainable food systems.',
      order: 'reversed'
    },
    {
      title: 'Education for Every Child: David’s Journey',
      img: 'dav.jpg',
      text: 'David, once unable to attend school, is now excelling in his studies thanks to our scholarship program. We believe that education is the key to breaking the cycle of poverty and empowering the next generation.',
      order: 'normal'
    },
    {
      title: 'Disaster Relief: Rebuilding After the Storm',
      img: 'shelter.jpeg',
      text: 'When disaster strikes, we are there to provide immediate relief and long-term support. Our reconstruction efforts have helped hundreds of families move from temporary shelters into safe, permanent homes.',
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
              <h2 className="display-5 fw-bold mb-3">Some Of The Achievement Stories</h2>
              <p className="lead text-muted">Every life we touch represents a story of resilience and transformation. Here are just a few examples of how your support is making a difference.</p>
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
                  <Link href="/contact" className="btn btn-primary px-4 py-3 rounded-pill fw-bold shadow-sm">Read More Stories</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CTASection 
        title="Your support creates impact. Help us reach the next 10,000 children."
        buttonText="See More Stories"
      />
    </>
  );
}
