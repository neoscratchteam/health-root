import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home | Hope Charity Organization',
  description: 'Every child deserves a chance to dream, grow, and thrive—together, we can make it happen.',
};

export default function Home() {
  return (
    <>
      <Hero 
        title="Every child deserves a chance to dream, grow, and thrive—together, we can make it happen." 
        bgImage="/images/hom1.jpg"
      />

      <div className="site-section section-counter py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2 text-center text-lg-start">
              <div className="block-48 p-5 rounded shadow-lg" style={{ backgroundColor: '#00796b', color: '#fff' }}>
                <span className="block-48-text-1 d-block mb-2">Supported Over</span>
                <div className="block-48-counter ftco-number display-2 fw-bold" data-number="1521901">1,521,901</div>
                <span className="block-48-text-1 d-block mb-4 opacity-75">People in 100 Countries</span>
                <p className="mb-0">
                  <Link href="/what-we-do" className="btn btn-white px-4 py-3 rounded-pill fw-bold">View Our Program</Link>
                </p>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-5 mb-lg-0 ps-lg-5">
              <h2 className="display-4 fw-bold mb-4">Who Are We?</h2>
              <p className="lead text-muted mb-4">
                We are a dedicated team of passionate individuals working tirelessly to provide hope and support to children in need. Our vision is a world where every child has the resources they need to reach their full potential.
              </p>
              <p className="mb-0">
                <Link href="/about" className="btn btn-primary px-5 py-3 rounded-pill fw-bold">Learn More About Us</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="site-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Mission</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Our mission is to create lasting change by addressing the fundamental needs of children through education, nutrition, health, and love.
            </p>
          </div>

          <div className="row gy-4">
            {[
              { img: 'food.png', title: 'Charity For Education', desc: 'Providing the tools and resources for children to learn and excel in school.' },
              { img: 'book2.png', title: 'Food For Hungry', desc: 'Ensuring no child goes to bed hungry with our sustainable feeding programs.' },
              { img: 'water (2).png', title: 'Treated Drinking Water', desc: 'Providing access to clean and safe drinking water for communities in need.', style: { width: '30px', height: '30px' } },
              { img: 'medical2.png', title: 'Medical Checkups', desc: 'Regular health screenings and medical support for vulnerable children.' },
              { img: 'house2.png', title: 'Good Shelter', desc: 'Building safe and secure homes for families and displaced children.' },
              { img: 'love2.png', title: 'Give Love', desc: 'Emotional support and a nurturing environment for every child in our care.' },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="service-card p-4 bg-white rounded shadow-sm border-0 h-100 text-center transition-all hover-shadow">
                  <div className="icon-wrap mb-4 d-inline-block p-3 rounded-circle" style={{ backgroundColor: 'rgba(0,121,107,0.1)' }}>
                    <Image 
                      src={`/images/${item.img}`} 
                      alt={item.title} 
                      width={50} 
                      height={50} 
                      style={item.style || { objectFit: 'contain' }}
                    />
                  </div>
                  <h3 className="h4 fw-bold mb-3">{item.title}</h3>
                  <p className="text-muted">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="site-section bg-white">
        <div className="container">
          <div className="row donation-section align-items-center bg-light rounded-lg overflow-hidden shadow-lg mx-0">
            <div className="col-md-6 px-0 position-relative" style={{ minHeight: '400px' }}>
              <Image 
                src="/images/about1.jpg" 
                alt="Child Image" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 p-5">
              <div className="donation-text">
                <h2 className="display-5 fw-bold mb-4">Just For &#8358;1000 A Month You Can Change Someone's Life!</h2>
                <p className="lead text-muted mb-4">Your small monthly contribution can provide a child with regular meals, school supplies, and a sense of security they've never known before.</p>
                <Link href="/contact" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow">Donate Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Causes</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>Explore our latest initiatives and support our mission to bring positive change.</p>
          </div>

          <div className="row">
            {[
              { img: 'ga6.jpg', title: 'Unsafe water sources remain a significant global health concern', desc: 'Help us build wells and filtration systems to provide safe water.' },
              { img: 'ga3.jpg', title: 'Great increase in homelessness among children in the USA', desc: 'Supporting shelters and transitional housing for families in crisis.' },
              { img: 'ga8.jpg', title: 'About 10.2M pry school-aged kids in Nigeria are not in school', desc: 'Providing scholarships and building schools to reduce the education gap.' },
            ].map((cause, idx) => (
              <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4" key={idx}>
                <div className="card fundraise-item border-0 shadow-sm rounded-lg overflow-hidden h-100">
                  <Link href="/what-we-do" className="overflow-hidden position-relative" style={{ display: 'block', height: '250px' }}>
                    <Image 
                      className="transition-all hover-scale" 
                      src={`/images/${cause.img}`} 
                      alt={cause.title} 
                      fill 
                      style={{ objectFit: 'cover' }} 
                    />
                  </Link>
                  <div className="card-body p-4">
                    <h3 className="h5 fw-bold mb-3"><Link href="/what-we-do" className="text-dark text-decoration-none">{cause.title}</Link></h3>
                    <p className="card-text text-muted mb-4">{cause.desc}</p>
                    <Link className="read_more fw-bold text-primary" href="/what-we-do">Read More &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </>
  );
}
