import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';
import { Metadata } from 'next';
import DonateButton from '@/components/DonateButton';

export const metadata: Metadata = {
  title: 'Home | Health Root NGO',
  description: 'Healthy Young People Build a Healthy Community. Empowering youth and improving community wellbeing through health education and action.',
};

export default function Home() {
  return (
    <>
      <Hero 
        title="Healthy Young People Build a Healthy Community" 
        bgImage="/images/event2.jpeg"
      />

      <div className="site-section section-counter py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1 order-2 text-center text-lg-start">
              <div className="block-48 p-5 rounded shadow-lg" style={{ backgroundColor: '#0a2342', color: '#fff' }}>
                <span className="block-48-text-1 d-block mb-2">Empowering Over</span>
                <div className="block-48-counter ftco-number display-2 fw-bold" data-number="10000">10,000+</div>
                <span className="block-48-text-1 d-block mb-4 opacity-75">Youth in Rwanda</span>
                <p className="mb-0">
                  <Link href="/what-we-do" className="btn btn-white px-4 py-3 rounded-pill fw-bold" style={{ color: '#0a2342' }}>View Our Programs</Link>
                </p>
              </div>
            </div>

            <div className="col-lg-6 order-lg-2 order-1 text-center text-lg-start mb-5 mb-lg-0 ps-lg-5">
              <h2 className="display-4 fw-bold mb-4">Welcome to Health Root NGO</h2>
              <p className="lead text-muted mb-4">
                We are a community-based organization focused on improving health awareness, youth empowerment, and community development. We believe that informed and empowered youth can create healthier and stronger communities.
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
            <h2 className="display-5 fw-bold mb-3">Our Core Objectives</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Building a healthier, educated, responsible, and empowered community.
            </p>
          </div>

          <div className="row gy-4">
            {[
              { img: 'food.png', title: 'Health Education', desc: 'Educating young people about hygiene, disease prevention, and nutrition.' },
              { img: 'book2.png', title: 'Youth Empowerment', desc: 'Developing leadership and communication skills among young people.' },
              { img: 'water (2).png', title: 'Sanitation', desc: 'Promoting environmental cleanliness and community sanitation activities.', style: { width: '30px', height: '30px' } },
              { img: 'medical2.png', title: 'Mental Wellness', desc: 'Promoting mental health awareness and emotional wellbeing for youth.' },
              { img: 'house2.png', title: 'Social Responsibility', desc: 'Encouraging volunteerism and teamwork in community health development.' },
              { img: 'love2.png', title: 'Equality & Respect', desc: 'Ensuring everyone has access to health information and support regardless of background.' },
            ].map((item, idx) => (
              <div className="col-md-4" key={idx}>
                <div className="service-card p-4 bg-white rounded shadow-sm border-0 h-100 text-center transition-all hover-shadow">
                  <div className="icon-wrap mb-4 d-inline-block p-3 rounded-circle" style={{ backgroundColor: 'rgba(10,35,66,0.1)' }}>
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
                src="/images/ga11.jpg" 
                alt="Health Root Youth" 
                fill 
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="col-md-6 p-5">
              <div className="donation-text">
                <h2 className="display-5 fw-bold mb-4">Be Part of the Change!</h2>
                <p className="lead text-muted mb-4">Healthy young people are the foundation of a healthy and successful community. Join us as a member or volunteer today.</p>
                <DonateButton>Support Our Mission</DonateButton>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Our Latest Activities</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>Join our efforts in health awareness, clean-up activities, and youth training.</p>
          </div>

          <div className="row">
            {[
              { img: 'wed7.jpg', title: 'Community Health Awareness', desc: 'Conducting campaigns about personal hygiene and nutrition in local schools.' },
              { img: 'ga6.jpg', title: 'Environmental Clean-Up', desc: 'Organizing sanitation and cleaning activities to promote a healthy environment.' },
              { img: 'ga8.jpg', title: 'Youth Leadership Training', desc: 'Empowering young people with communication and leadership skills.' },
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
                    <Link className="read_more fw-bold text-primary" href="/what-we-do">Learn More &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CTASection 
        title="Ready to make an impact? Join Health Root NGO today."
        buttonText="Get Involved"
      />
    </>
  );
}
