import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer bg-dark text-white pt-5 pb-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4 col-md-6">
            <div className="footer-brand mb-4">
              <h2 className="fw-bold text-white fs-3 mb-3">HOPE<span className="text-primary">.</span></h2>
              <p className="text-muted small">
                Every child deserves a chance to dream, grow, and thrive. Join us in our mission to create a brighter future for children around the world.
              </p>
            </div>
            <div className="social-links d-flex gap-3">
              <Link href="#" className="social-link"><i className="icon-facebook"></i></Link>
              <Link href="#" className="social-link"><i className="icon-twitter"></i></Link>
              <Link href="#" className="social-link"><i className="icon-instagram"></i></Link>
              <Link href="#" className="social-link"><i className="icon-linkedin"></i></Link>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h3 className="h5 fw-bold mb-4 text-white">Quick Links</h3>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link href="/" className="text-muted text-decoration-none hover-text-white transition-all">Home</Link></li>
              <li className="mb-2"><Link href="/about" className="text-muted text-decoration-none hover-text-white transition-all">About Us</Link></li>
              <li className="mb-2"><Link href="/what-we-do" className="text-muted text-decoration-none hover-text-white transition-all">What We Do</Link></li>
              <li className="mb-2"><Link href="/our-impact" className="text-muted text-decoration-none hover-text-white transition-all">Our Impact</Link></li>
              <li className="mb-2"><Link href="/gallery" className="text-muted text-decoration-none hover-text-white transition-all">Gallery</Link></li>
              <li className="mb-2"><Link href="/blog" className="text-muted text-decoration-none hover-text-white transition-all">Blog</Link></li>
              <li className="mb-2"><Link href="/contact" className="text-muted text-decoration-none hover-text-white transition-all">Contact</Link></li>
            </ul>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold mb-4 text-white">Recent Posts</h3>
            <div className="recent-post mb-3 d-flex gap-3">
              <img src="/images/wed2.jpg" alt="" className="rounded shadow-sm" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              <div>
                <Link href="/blog" className="text-white text-decoration-none small fw-bold d-block hover-text-primary transition-all">Just a Little Help Can Go a Long Way</Link>
                <small className="text-muted">May 12, 2026</small>
              </div>
            </div>
            <div className="recent-post mb-3 d-flex gap-3">
              <img src="/images/wed4.jpg" alt="" className="rounded shadow-sm" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
              <div>
                <Link href="/blog" className="text-white text-decoration-none small fw-bold d-block hover-text-primary transition-all">Life Is Short So Be Kind</Link>
                <small className="text-muted">May 10, 2026</small>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <h3 className="h5 fw-bold mb-4 text-white">Contact Us</h3>
            <ul className="list-unstyled footer-contact">
              <li className="mb-3 d-flex gap-3">
                <i className="icon-map-marker text-primary mt-1"></i>
                <span className="text-muted small">21 JohnMary Street, Warri, Nigeria</span>
              </li>
              <li className="mb-3 d-flex gap-3">
                <i className="icon-phone text-primary mt-1"></i>
                <span className="text-muted small">+234 706 5482 568</span>
              </li>
              <li className="mb-3 d-flex gap-3">
                <i className="icon-envelope text-primary mt-1"></i>
                <span className="text-muted small">info@charityorg.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom border-top border-secondary mt-5 pt-4 text-center">
          <p className="text-muted small mb-0">
            &copy; {currentYear} HOPE Charity Organization. All rights reserved. Designed with love for a better world.
          </p>
        </div>
      </div>

    </footer>
  );
}
