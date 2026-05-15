'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import { CreditCard, Smartphone, ChevronDown, Check } from 'lucide-react';

const PREDEFINED_AMOUNTS = [10, 25, 50, 100, 250, 500];

const COUNTRIES = [
  { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+256', name: 'Uganda', flag: '🇺🇬' },
  { code: '+255', name: 'Tanzania', flag: '🇹🇿' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | string>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo'>('card');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setAmount(val);
  };

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
            <div className="col-lg-11">
              <div className="card border-0 shadow-lg overflow-hidden rounded-xl">
                <div className="row g-0">
                  {/* Form Side */}
                  <div className="col-md-7 p-4 p-lg-5 bg-white">
                    <div className="text-center mb-5">
                      <div className="d-inline-block p-3 rounded-circle bg-primary/5 mb-3" style={{ backgroundColor: 'rgba(10,35,66,0.05)' }}>
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#0a2342" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                      <h2 className="h3 fw-bold">Donation Form</h2>
                      <p className="text-muted">Healthy Young People Build a Healthy Community</p>
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">Full Name or Business Name</label>
                        <input type="text" className="form-control py-3 bg-light border-0 shadow-none" placeholder="Enter your name or business name" required />
                      </div>

                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">E-mail Address</label>
                        <input type="email" className="form-control py-3 bg-light border-0 shadow-none" placeholder="yourname@example.com" required />
                      </div>

                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase d-block mb-3">Select Donation Amount ($)</label>
                        <div className="row g-2 mb-3">
                          {PREDEFINED_AMOUNTS.map((amt) => (
                            <div className="col-4 col-sm-2" key={amt}>
                              <button
                                type="button"
                                onClick={() => handleAmountSelect(amt)}
                                className={`btn w-100 py-3 fw-bold transition-all border-0 ${
                                  amount === amt ? 'btn-primary shadow' : 'btn-light'
                                }`}
                                style={amount === amt ? { backgroundColor: '#0a2342' } : { backgroundColor: '#f8f9fa' }}
                              >
                                ${amt}
                              </button>
                            </div>
                          ))}
                        </div>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-0 px-4">$</span>
                          <input
                            type="number"
                            className="form-control py-3 bg-light border-0 shadow-none"
                            placeholder="Enter Custom Amount"
                            value={customAmount}
                            onChange={handleCustomAmountChange}
                          />
                        </div>
                      </div>

                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase d-block mb-3">Payment Method</label>
                        <div className="d-flex gap-3 mb-4">
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('card')}
                            className={`btn flex-fill py-3 rounded-pill fw-bold transition-all border-2 d-flex align-items-center justify-content-center gap-2 ${
                              paymentMethod === 'card' ? 'btn-primary border-primary' : 'btn-outline-light text-dark border-light'
                            }`}
                            style={paymentMethod === 'card' ? { backgroundColor: '#0a2342', borderColor: '#0a2342' } : { borderColor: '#eee' }}
                          >
                            <CreditCard size={20} /> Credit Card
                          </button>
                          <button
                            type="button"
                            onClick={() => setPaymentMethod('momo')}
                            className={`btn flex-fill py-3 rounded-pill fw-bold transition-all border-2 d-flex align-items-center justify-content-center gap-2 ${
                              paymentMethod === 'momo' ? 'btn-primary border-primary' : 'btn-outline-light text-dark border-light'
                            }`}
                            style={paymentMethod === 'momo' ? { backgroundColor: '#0a2342', borderColor: '#0a2342' } : { borderColor: '#eee' }}
                          >
                            <Smartphone size={20} /> Mobile Money
                          </button>
                        </div>

                        {paymentMethod === 'card' ? (
                          <div className="p-4 bg-light rounded-xl">
                            <div className="mb-3">
                              <label className="form-label small fw-bold text-muted">Card Number</label>
                              <div className="input-group bg-white rounded overflow-hidden shadow-sm">
                                <span className="input-group-text bg-white border-0"><CreditCard size={18} /></span>
                                <input type="text" className="form-control border-0 py-2 shadow-none" placeholder="0000 0000 0000 0000" />
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-6">
                                <label className="form-label small fw-bold text-muted">Expiry Date</label>
                                <input type="text" className="form-control border-0 py-2 shadow-sm" placeholder="MM / YY" />
                              </div>
                              <div className="col-6">
                                <label className="form-label small fw-bold text-muted">CVC</label>
                                <input type="text" className="form-control border-0 py-2 shadow-sm" placeholder="123" />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 bg-light rounded-xl">
                            <label className="form-label small fw-bold text-muted">Phone Number</label>
                            <div className="d-flex gap-2">
                              <div className="dropdown position-relative">
                                <button
                                  type="button"
                                  className="btn btn-white h-100 border-0 shadow-sm d-flex align-items-center gap-2 px-3"
                                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                  style={{ minWidth: '100px' }}
                                >
                                  <span>{selectedCountry.flag}</span>
                                  <span className="small">{selectedCountry.code}</span>
                                  <ChevronDown size={14} />
                                </button>
                                {isCountryDropdownOpen && (
                                  <div className="dropdown-menu show shadow-lg border-0 position-absolute mt-1" style={{ zIndex: 10 }}>
                                    {COUNTRIES.map((c) => (
                                      <button
                                        key={c.code}
                                        type="button"
                                        className="dropdown-item d-flex align-items-center gap-2 py-2"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setIsCountryDropdownOpen(false);
                                        }}
                                      >
                                        <span>{c.flag}</span>
                                        <span>{c.name} ({c.code})</span>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <input type="tel" className="form-control border-0 py-3 shadow-sm" placeholder="Phone Number" />
                            </div>
                            <div className="mt-3 p-3 bg-white/50 rounded d-flex align-items-center gap-2 border border-white">
                              <Check size={16} className="text-success" />
                              <span className="small text-muted">A push notification will be sent to your phone.</span>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">Leave a Message (Optional)</label>
                        <textarea className="form-control py-3 bg-light border-0 shadow-none" rows={3} placeholder="Tell us why you are donating..."></textarea>
                      </div>

                      <button type="submit" className="btn btn-primary w-100 py-4 fw-bold rounded-pill shadow-lg transition-all hover-scale" style={{ backgroundColor: '#ff6b6b', borderColor: '#ff6b6b', fontSize: '1.1rem' }}>
                        Donate ${amount} Now
                      </button>
                    </form>
                  </div>

                  {/* Illustration Side */}
                  <div className="col-md-5 d-none d-md-flex flex-column align-items-center justify-content-center p-5 text-center" style={{ backgroundColor: '#f0f7ff' }}>
                    <div className="position-relative w-100 mb-5" style={{ height: '350px' }}>
                      <Image 
                        src="https://img.freepik.com/free-vector/charity-donation-concept-illustration_114360-642.jpg" 
                        alt="Donation Illustration" 
                        fill 
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <h3 className="h4 fw-bold text-primary mb-3">Your Support Saves Lives</h3>
                    <p className="text-muted">
                      Every dollar you donate goes directly towards our health education, youth leadership, and sanitation programs in Rwanda.
                    </p>
                    <div className="mt-4 p-4 bg-white rounded-xl shadow-sm">
                      <div className="text-primary fw-bold h2 mb-1">100%</div>
                      <div className="small text-muted text-uppercase fw-bold">Direct Impact</div>
                    </div>
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
