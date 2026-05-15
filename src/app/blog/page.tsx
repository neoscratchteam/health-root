import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Health Root NGO',
  description: 'Stay updated with the latest news, success stories, and the impact of Health Root NGO in community development and health awareness.',
};

interface Post {
  img: string;
  date: string;
  title: string;
  category: string;
}

export default function Blog() {
  const posts: Post[] = [
    { img: 'ga1.jpg', date: 'May 12, 2026', title: 'The Importance of Personal Hygiene in Schools', category: 'Health Education' },
    { img: 'ga6.jpg', date: 'May 10, 2026', title: 'Building a Greener Kigali: Our Tree Planting Success', category: 'Environment' },
    { img: 'ga8.jpg', date: 'May 08, 2026', title: 'Empowering Young Leaders through Mentorship', category: 'Youth' },
    { img: 'ga11.jpg', date: 'May 05, 2026', title: 'How Sanitation Drives Community Wellness', category: 'Health' },
    { img: 'ga13.jpg', date: 'May 03, 2026', title: 'Breaking the Stigma: Mental Health Awareness for Teens', category: 'Wellness' },
    { img: 'wed7.jpg', date: 'May 01, 2026', title: 'Nutrition Tips for Developing Communities', category: 'Nutrition' },
  ];

  return (
    <>
      <Hero 
        title="Our Blog & News" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Latest Updates</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Stay updated with our latest activities, success stories, and the impact of our programs in Rwanda.
            </p>
          </div>

          <div className="row">
            {posts.map((post, idx) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-5" key={idx}>
                <div className="card fundraise-item shadow-sm border-0 h-100 rounded-lg overflow-hidden transition-all hover-shadow">
                  <div className="position-relative overflow-hidden" style={{ height: '240px' }}>
                    <Link href="/blog">
                      <Image 
                        className="transition-all hover-scale" 
                        src={`/images/${post.img}`} 
                        alt={post.title} 
                        fill 
                        style={{ objectFit: 'cover' }} 
                      />
                    </Link>
                    <div className="position-absolute top-0 start-0 m-3">
                      <span className="badge bg-secondary px-3 py-2 rounded-pill shadow-sm">
                        {post.category}
                      </span>
                    </div>
                    <div className="position-absolute bottom-0 start-0 bg-primary text-white px-3 py-1 small fw-bold" style={{ zIndex: 1 }}>
                      {post.date}
                    </div>
                  </div>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-3">
                      <Link href="/blog" className="text-dark text-decoration-none hover-text-primary transition-all">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="card-text text-muted small mb-4">
                      Explore our recent activities and learn more about how we are working with communities to promote healthy lifestyles and youth empowerment.
                    </p>
                    <Link className="btn btn-link text-primary fw-bold p-0 text-decoration-none" href="/blog">
                      Read More &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Stay informed. Subscribe to our newsletter for the latest stories of impact."
        buttonText="Subscribe Now"
      />
    </>
  );
}
