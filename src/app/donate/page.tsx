import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'Donate | Health Root NGO',
  description: 'Support our mission by making a donation. Every contribution helps us empower youth and improve community health.',
};

export default function DonatePage() {
  return (
    <>
      <Hero 
        title="Support Our Mission" 
        bgImage="https://i.pinimg.com/736x/4f/49/ce/4f49cec56a11d20b2f44662bbf7f354b.jpg"
        compact={true}
      />
      
      <div className="site-section bg-light py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="card border-0 shadow-lg overflow-hidden rounded-xl">
                <div className="row g-0">
                  {/* Form Side */}
                  <div className="col-md-6 p-4 p-lg-5 bg-white">
                    <div className="text-center mb-4">
                      <div className="d-inline-block p-3 rounded-circle bg-light mb-3">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0a2342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                      <h2 className="h4 fw-bold">Charity Donation Form</h2>
                    </div>

                    <form>
                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted text-uppercase">Full Name</label>
                        <input type="text" className="form-control py-2 bg-light border-0" placeholder="Type your name here" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                        <input type="tel" className="form-control py-2 bg-light border-0" placeholder="+250 000 000 000" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted text-uppercase">E-mail</label>
                        <input type="email" className="form-control py-2 bg-light border-0" placeholder="yourname@example.com" />
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted text-uppercase">Donate Amount</label>
                        <select className="form-select py-2 bg-light border-0">
                          <option value="50">$50</option>
                          <option value="100">$100</option>
                          <option value="250">$250</option>
                          <option value="custom">Custom Amount</option>
                        </select>
                      </div>

                      <div className="mb-3">
                        <label className="form-label small fw-bold text-muted text-uppercase">Credit Card Information</label>
                        <div className="row g-2 mb-2">
                          <div className="col-6">
                            <input type="text" className="form-control py-2 bg-light border-0" placeholder="First Name" />
                          </div>
                          <div className="col-6">
                            <input type="text" className="form-control py-2 bg-light border-0" placeholder="Last Name" />
                          </div>
                        </div>
                        <div className="row g-2">
                          <div className="col-12">
                            <div className="input-group">
                              <span className="input-group-text bg-light border-0"><i className="icon-credit-card"></i></span>
                              <input type="text" className="form-control py-2 bg-light border-0" placeholder="Card Number" />
                            </div>
                          </div>
                          <div className="col-6">
                            <input type="text" className="form-control py-2 bg-light border-0" placeholder="MM/YY" />
                          </div>
                          <div className="col-6">
                            <input type="text" className="form-control py-2 bg-light border-0" placeholder="CVC" />
                          </div>
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">Message</label>
                        <textarea className="form-control py-2 bg-light border-0" rows={3} placeholder="Type your message here"></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 py-3 fw-bold rounded shadow-sm" style={{ backgroundColor: '#ff6b6b', borderColor: '#ff6b6b' }}>
                        Submit
                      </button>
                    </form>
                  </div>

                  {/* Illustration Side */}
                  <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-0" style={{ backgroundColor: '#f0f7ff', position: 'relative' }}>
                    <div className="p-5 text-center">
                      <div className="position-relative mx-auto mb-4" style={{ width: '100%', height: '300px' }}>
                        <Image 
                          src="https://img.freepik.com/free-vector/charity-donation-concept-illustration_114360-642.jpg" 
                          alt="Donation Illustration" 
                          fill 
                          style={{ objectFit: 'contain' }}
                        />
                      </div>
                      <h3 className="h5 fw-bold text-primary mb-3">Your Support Matters</h3>
                      <p className="text-muted small">Healthy young people build a healthy community. Every donation helps us reach more lives.</p>
                    </div>
                    {/* Abstract background elements */}
                    <div className="position-absolute" style={{ top: '10%', right: '10%', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(52, 152, 219, 0.1)' }}></div>
                    <div className="position-absolute" style={{ bottom: '20%', left: '10%', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(10, 35, 66, 0.05)' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
