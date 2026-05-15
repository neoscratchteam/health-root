'use client';

import React, { useState, useEffect } from 'react';
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
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState<'visa' | 'mastercard' | 'amex' | 'unknown'>('unknown');
  
  // Form State
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [momoNumber, setMomoNumber] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const number = cardNumber.replace(/\s?/g, '');
    if (/^4/.test(number)) setCardType('visa');
    else if (/^5[1-5]/.test(number)) setCardType('mastercard');
    else if (/^3[47]/.test(number)) setCardType('amex');
    else setCardType('unknown');
  }, [cardNumber]);

  const handleAmountSelect = (val: number) => {
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setCustomAmount(val);
    setAmount(val);
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ').trim();
  };

  const formatExpiry = (value: string) => {
    return value.replace(/[^\d]/g, '').replace(/(.{2})/, '$1/').slice(0, 5);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Thank you ${fullName}! Your donation of $${amount} has been processed successfully.`);
      setIsSubmitting(false);
      // Reset form or redirect
    }, 2000);
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

                    <form onSubmit={handleSubmit}>
                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">Full Name or Business Name</label>
                        <input 
                          type="text" 
                          className="form-control py-3 bg-light border-0 shadow-none" 
                          placeholder="Enter your name or business name" 
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          required 
                        />
                      </div>

                      <div className="mb-4">
                        <label className="form-label small fw-bold text-muted text-uppercase">E-mail Address</label>
                        <input 
                          type="email" 
                          className="form-control py-3 bg-light border-0 shadow-none" 
                          placeholder="yourname@example.com" 
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required 
                        />
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
                        <div className="input-group shadow-sm rounded-pill overflow-hidden">
                          <span className="input-group-text bg-light border-0 px-4 fw-bold">$</span>
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
                          <div className="p-4 bg-light rounded-xl animate__animated animate__fadeIn">
                            <div className="mb-3">
                              <label className="form-label small fw-bold text-muted">Card Number</label>
                              <div className="input-group bg-white rounded-lg overflow-hidden shadow-sm position-relative">
                                <span className="input-group-text bg-white border-0"><CreditCard size={18} /></span>
                                <input 
                                  type="text" 
                                  className="form-control border-0 py-2 shadow-none fw-medium" 
                                  placeholder="0000 0000 0000 0000" 
                                  value={formatCardNumber(cardNumber)}
                                  onChange={(e) => setCardNumber(e.target.value)}
                                  maxLength={19}
                                  required={paymentMethod === 'card'}
                                />
                                <div className="position-absolute end-0 top-50 translate-middle-y pe-3 d-flex gap-2" style={{ zIndex: 10 }}>
                                  <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" 
                                    alt="Visa" 
                                    width={30} 
                                    style={{ opacity: cardType === 'visa' || cardType === 'unknown' ? 1 : 0.2, transition: 'opacity 0.3s' }} 
                                  />
                                  <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" 
                                    alt="Mastercard" 
                                    width={30} 
                                    style={{ opacity: cardType === 'mastercard' || cardType === 'unknown' ? 1 : 0.2, transition: 'opacity 0.3s' }} 
                                  />
                                  <img 
                                    src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" 
                                    alt="Amex" 
                                    width={25} 
                                    style={{ opacity: cardType === 'amex' || cardType === 'unknown' ? 1 : 0.2, transition: 'opacity 0.3s' }} 
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="row g-3">
                              <div className="col-6">
                                <label className="form-label small fw-bold text-muted">Expiry Date</label>
                                <input 
                                  type="text" 
                                  className="form-control border-0 py-2 shadow-sm fw-medium" 
                                  placeholder="MM / YY" 
                                  value={expiry}
                                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                                  maxLength={5}
                                  required={paymentMethod === 'card'}
                                />
                              </div>
                              <div className="col-6">
                                <label className="form-label small fw-bold text-muted">CVC</label>
                                <input 
                                  type="text" 
                                  className="form-control border-0 py-2 shadow-sm fw-medium" 
                                  placeholder="123" 
                                  value={cvc}
                                  onChange={(e) => setCvc(e.target.value)}
                                  maxLength={4}
                                  required={paymentMethod === 'card'}
                                />
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="p-4 bg-light rounded-xl animate__animated animate__fadeIn">
                            <label className="form-label small fw-bold text-muted">Phone Number</label>
                            <div className="d-flex gap-2">
                              <div className="dropdown position-relative">
                                <button
                                  type="button"
                                  className="btn btn-white h-100 border-0 shadow-sm d-flex align-items-center gap-2 px-3 fw-bold"
                                  onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                                  style={{ minWidth: '100px', backgroundColor: '#fff' }}
                                >
                                  <span>{selectedCountry.flag}</span>
                                  <span className="small">{selectedCountry.code}</span>
                                  <ChevronDown size={14} />
                                </button>
                                {isCountryDropdownOpen && (
                                  <div className="dropdown-menu show shadow-lg border-0 position-absolute mt-1" style={{ zIndex: 100, maxHeight: '200px', overflowY: 'auto' }}>
                                    {COUNTRIES.map((c) => (
                                      <button
                                        key={c.code}
                                        type="button"
                                        className="dropdown-item d-flex align-items-center gap-2 py-2 fw-medium"
                                        onClick={() => {
                                          setSelectedCountry(c);
                                          setIsCountryDropdownOpen(false);
                                        }}
                                      >
                                        <span>{c.flag}</span>
                                        <span className="small">{c.name} ({c.code})</span>
                                      </button>
                                    ))}
                                  </div>
                                )}
                              </div>
                              <input 
                                type="tel" 
                                className="form-control border-0 py-3 shadow-sm fw-medium" 
                                placeholder="Phone Number" 
                                value={momoNumber}
                                onChange={(e) => setMomoNumber(e.target.value)}
                                required={paymentMethod === 'momo'}
                              />
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
                        <textarea 
                          className="form-control py-3 bg-light border-0 shadow-none" 
                          rows={3} 
                          placeholder="Tell us why you are donating..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                      </div>

                      <button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="btn btn-primary w-100 py-4 fw-bold rounded-pill shadow-lg transition-all hover-scale d-flex align-items-center justify-content-center gap-2" 
                        style={{ backgroundColor: '#ff6b6b', borderColor: '#ff6b6b', fontSize: '1.1rem' }}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Processing...
                          </>
                        ) : (
                          `Donate $${amount} Now`
                        )}
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
                    <div className="mt-4 p-4 bg-white rounded-xl shadow-sm border border-white">
                      <div className="text-primary fw-bold h2 mb-1">100%</div>
                      <div className="small text-muted text-uppercase fw-bold ls-1">Direct Impact</div>
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
