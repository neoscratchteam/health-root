import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export default function Blog() {
  const posts = [
    { img: 'ga3.jpg', date: 'May 12, 2026', title: 'Great increase in homelessness among children in the USA' },
    { img: 'ga6.jpg', date: 'May 10, 2026', title: 'Unsafe water sources remain a significant global health concern' },
    { img: 'ga8.jpg', date: 'May 08, 2026', title: 'About 10.2M pry school-aged kids in Nigeria are not in school' },
    { img: 'ga6.jpg', date: 'May 05, 2026', title: 'Unsafe water sources remain a significant global health concern' },
    { img: 'ga8.jpg', date: 'May 03, 2026', title: 'About 10.2M pry school-aged kids in Nigeria are not in school' },
    { img: 'ga3.jpg', date: 'May 01, 2026', title: 'Great increase in homelessness among children in the USA' },
  ];

  return (
    <>
      <Hero 
        title="Our Blog" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Latest News</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Stay updated with our latest activities, success stories, and the impact of your contributions around the world.
            </p>
          </div>

          <div className="row">
            {posts.map((post, idx) => (
              <div className="col-12 col-sm-6 col-lg-4 mb-5" key={idx}>
                <div className="card fundraise-item shadow-sm border-0 h-100 rounded-lg overflow-hidden transition-all hover-shadow">
                  <div className="position-relative overflow-hidden">
                    <Link href="/blog">
                      <img className="card-img-top transition-all hover-scale" src={`/images/${post.img}`} alt={post.title} style={{ height: '240px', objectFit: 'cover' }} />
                    </Link>
                    <div className="position-absolute bottom-0 start-0 bg-primary text-white px-3 py-1 small fw-bold">
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
                      We are witnessing a significant change in the communities we serve. Read more about our recent findings and how we are adapting our programs.
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
        title="Subscribe to our newsletter for weekly updates on our impact."
        buttonText="Subscribe Now"
      />

    </>
  );
}
