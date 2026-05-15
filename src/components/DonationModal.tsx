'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CreditCard, Smartphone, Check, ChevronDown } from 'lucide-react';
import Image from 'next/image';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PREDEFINED_AMOUNTS = [10, 25, 50, 100, 250, 500];

const COUNTRIES = [
  { code: '+234', name: 'Nigeria', flag: '🇳🇬' },
  { code: '+250', name: 'Rwanda', flag: '🇷🇼' },
  { code: '+233', name: 'Ghana', flag: '🇬🇭' },
  { code: '+254', name: 'Kenya', flag: '🇰🇪' },
  { code: '+27', name: 'South Africa', flag: '🇿🇦' },
  { code: '+1', name: 'USA', flag: '🇺🇸' },
  { code: '+44', name: 'UK', flag: '🇬🇧' },
];

export default function DonationModal({ isOpen, onClose }: DonationModalProps) {
  const [step, setStep] = useState(1);
  const [amount, setAmount] = useState<number | string>(50);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'momo'>('card');
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState<'visa' | 'mastercard' | 'amex' | 'unknown'>('unknown');
  const [momoNumber, setMomoNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[1]); // Default to Rwanda
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

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

  return (
    <>
      <div 
        className="donation-modal-container" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 10000,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
      >
        {/* Backdrop */}
        <motion.div 
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.7)',
            backdropFilter: 'blur(5px)'
          }}
        />

        {/* Modal Content */}
        <motion.div 
          key="modal-content"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px',
            backgroundColor: '#fff',
            borderRadius: '20px',
            overflow: 'hidden',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
          }}
        >
          {/* Header */}
          <div className="p-4" style={{ backgroundColor: 'var(--primary)', color: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h2 className="h4 fw-bold mb-0">Support Health Root NGO</h2>
              <p className="small mb-0 opacity-75">Your donation makes a difference</p>
            </div>
            <button onClick={onClose} className="btn border-0 text-white p-0" style={{ fontSize: '24px' }}><X size={24} /></button>
          </div>

          <div className="p-4">
            {step === 1 ? (
              <motion.div key="step1">
                <h3 className="h6 fw-bold mb-3">Select Amount ($)</h3>
                <div className="row g-2 mb-3">
                  {PREDEFINED_AMOUNTS.map((amt) => (
                    <div className="col-4" key={amt}>
                      <button
                        onClick={() => handleAmountSelect(amt)}
                        className={`btn w-100 py-3 fw-bold transition-all ${
                          amount === amt 
                            ? 'btn-primary' 
                            : 'btn-outline-light text-dark border-1'
                        }`}
                        style={amount === amt ? {} : { borderColor: '#eee' }}
                      >
                        ${amt}
                      </button>
                    </div>
                  ))}
                </div>
                <div className="mb-4">
                  <div className="input-group">
                    <span className="input-group-text bg-white border-end-0">$</span>
                    <input
                      type="number"
                      className="form-control border-start-0 py-3 fw-bold"
                      placeholder="Custom Amount"
                      value={customAmount}
                      onChange={handleCustomAmountChange}
                    />
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!amount || Number(amount) <= 0}
                  className="btn btn-primary w-100 py-3 fw-bold rounded-pill shadow-lg disabled:opacity-50"
                >
                  Proceed to Payment
                </button>
              </motion.div>
            ) : (
              <motion.div key="step2">
                <div className="d-flex mb-4 bg-light rounded-pill p-1">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`btn flex-fill rounded-pill fw-bold border-0 ${
                      paymentMethod === 'card' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                    }`}
                  >
                    <CreditCard size={18} className="me-2" /> Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('momo')}
                    className={`btn flex-fill rounded-pill fw-bold border-0 ${
                      paymentMethod === 'momo' ? 'bg-white shadow-sm text-primary' : 'text-muted'
                    }`}
                  >
                    <Smartphone size={18} className="me-2" /> Mobile Money
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="card-fields">
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-muted text-uppercase">Card Number</label>
                      <div className="position-relative">
                        <input
                          type="text"
                          className="form-control py-2"
                          value={formatCardNumber(cardNumber)}
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="0000 0000 0000 0000"
                          maxLength={19}
                        />
                        <div className="position-absolute end-0 top-50 translate-middle-y pe-3 d-flex gap-2">
                          {cardType === 'visa' && <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={30} />}
                          {cardType === 'mastercard' && <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={30} />}
                          {cardType === 'amex' && <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" width={25} />}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <label className="form-label small fw-bold text-muted text-uppercase">Expiry</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="MM / YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          maxLength={5}
                        />
                      </div>
                      <div className="col-6">
                        <label className="form-label small fw-bold text-muted text-uppercase">CVC</label>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="123"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="momo-fields">
                    <div className="mb-3">
                      <label className="form-label small fw-bold text-muted text-uppercase">Phone Number</label>
                      <div className="d-flex gap-2">
                        <div className="dropdown">
                          <button
                            className="btn btn-outline-light text-dark border d-flex align-items-center gap-2"
                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                          >
                            {selectedCountry.flag} {selectedCountry.code} <ChevronDown size={14} />
                          </button>
                          {isCountryDropdownOpen && (
                            <div className="dropdown-menu show shadow-lg border-0 mt-1" style={{ position: 'absolute' }}>
                              {COUNTRIES.map((c) => (
                                <button
                                  key={c.code}
                                  className="dropdown-item d-flex align-items-center gap-2"
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
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="Phone Number"
                          value={momoNumber}
                          onChange={(e) => setMomoNumber(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="alert alert-info py-2 small d-flex gap-2 align-items-center">
                      <Check size={16} /> <span>A push notification will be sent to your phone.</span>
                    </div>
                  </div>
                )}

                <div className="d-flex gap-2 mt-4">
                  <button
                    onClick={() => setStep(1)}
                    className="btn btn-light px-4 rounded-pill fw-bold"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      alert('Processing payment of $' + amount);
                      onClose();
                    }}
                    className="btn btn-primary flex-grow-1 rounded-pill fw-bold shadow"
                  >
                    Donate ${amount} Now
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .btn-primary { background-color: var(--primary); border-color: var(--primary); }
        .btn-primary:hover { background-color: var(--secondary); border-color: var(--secondary); }
        .text-primary { color: var(--primary); }
      `}</style>
    </>
  );
}
