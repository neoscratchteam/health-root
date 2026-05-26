import Hero from '@/components/Hero';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Hope Charity Organization. Send us a message, find our location, or reach out via phone or email.',
};

export default function Contact() {
  return (
    <>
      <Hero 
        title="Get In Touch" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded-lg text-center h-100 transition-all hover-shadow">
                <div className="icon-wrap mb-3 d-inline-block p-3 rounded-circle bg-white text-primary">
                  <i className="icon-map-marker h4 mb-0"></i>
                </div>
                <h3 className="h5 fw-bold mb-3">Our Location</h3>
                <p className="text-muted small mb-0">Kigali, Rwanda</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded-lg text-center h-100 transition-all hover-shadow">
                <div className="icon-wrap mb-3 d-inline-block p-3 rounded-circle bg-white text-primary">
                  <i className="icon-phone h4 mb-0"></i>
                </div>
                <h3 className="h5 fw-bold mb-3">Phone Number</h3>
                <p className="text-muted small mb-0">+250 780 676 289</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-4 bg-light rounded-lg text-center h-100 transition-all hover-shadow">
                <div className="icon-wrap mb-3 d-inline-block p-3 rounded-circle bg-white text-primary">
                  <i className="icon-envelope h4 mb-0"></i>
                </div>
                <h3 className="h5 fw-bold mb-3">Email Address</h3>
                <p className="text-muted small mb-0">info@healthrootngo.org</p>
              </div>
            </div>
          </div>

          <div className="row block-9">
            <div className="col-md-6 pe-md-5 mb-5">
              <div className="p-5 bg-light rounded-lg shadow-sm">
                <h2 className="h3 fw-bold mb-4">Send Us a Message</h2>
                <form action="#">
                  <div className="form-group mb-4">
                    <label className="text-dark small fw-bold mb-2">Your Name</label>
                    <input type="text" className="form-control px-4 py-3 rounded border-0 shadow-sm" placeholder="e.g. John Doe" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-dark small fw-bold mb-2">Your Email</label>
                    <input type="email" className="form-control px-4 py-3 rounded border-0 shadow-sm" placeholder="e.g. john@example.com" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-dark small fw-bold mb-2">Subject</label>
                    <input type="text" className="form-control px-4 py-3 rounded border-0 shadow-sm" placeholder="How can we help?" />
                  </div>
                  <div className="form-group mb-4">
                    <label className="text-dark small fw-bold mb-2">Message</label>
                    <textarea name="" id="" cols={30} rows={5} className="form-control px-4 py-3 rounded border-0 shadow-sm" placeholder="Write your message here..."></textarea>
                  </div>
                  <div className="form-group">
                    <input type="submit" value="Send Message" className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow-sm w-100" />
                  </div>
                </form>
              </div>
            </div>

            <div className="col-md-6" id="map">
              <div className="rounded-lg overflow-hidden shadow-lg h-100" style={{ minHeight: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.4734000267!2d5.7368!3d5.5267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1041ad7b8c000001%3A0x8c000001!2sWarri%2C%20Nigeria!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
