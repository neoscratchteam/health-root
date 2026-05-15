'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, CreditCard, Smartphone, Check, ChevronDown, DollarSign } from 'lucide-react';
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
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);

  // Card detection logic
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
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div 
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal */}
        <motion.div 
          key="modal-content"
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          className="relative w-full max-w-lg overflow-hidden bg-white rounded-2xl shadow-2xl"
          style={{ fontFamily: 'inherit' }}
        >
          {/* Header */}
          <div className="p-6 bg-primary text-white flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold m-0">Make a Donation</h2>
              <p className="text-white/80 text-sm mb-0">Your support saves lives</p>
            </div>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-full transition-colors border-0 bg-transparent text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-6">
            {step === 1 ? (
              <motion.div key="step1" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <h3 className="text-lg font-bold mb-4 text-dark">Select Amount ($)</h3>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {PREDEFINED_AMOUNTS.map((amt) => (
                    <button
                      key={amt}
                      onClick={() => handleAmountSelect(amt)}
                      className={`py-3 px-4 rounded-xl border-2 font-bold transition-all ${
                        amount === amt 
                          ? 'border-primary bg-primary/5 text-primary' 
                          : 'border-gray-100 text-gray-500 hover:border-gray-200'
                      }`}
                    >
                      ${amt}
                    </button>
                  ))}
                </div>
                <div className="relative mb-6">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 font-bold">$</span>
                  <input
                    type="number"
                    placeholder="Other Amount"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full pl-8 pr-4 py-4 rounded-xl border-2 border-gray-100 focus:border-primary focus:outline-none font-bold text-lg"
                  />
                </div>

                <button
                  onClick={() => setStep(2)}
                  disabled={!amount || Number(amount) <= 0}
                  className="w-full py-4 bg-primary text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 border-0"
                >
                  Continue to Payment
                </button>
              </motion.div>
            ) : (
              <motion.div key="step2" initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                <div className="flex gap-4 mb-6 p-1 bg-gray-100 rounded-xl">
                  <button
                    onClick={() => setPaymentMethod('card')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all border-0 ${
                      paymentMethod === 'card' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 bg-transparent'
                    }`}
                  >
                    <CreditCard size={20} />
                    Card
                  </button>
                  <button
                    onClick={() => setPaymentMethod('momo')}
                    className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg font-bold transition-all border-0 ${
                      paymentMethod === 'momo' ? 'bg-white shadow-sm text-primary' : 'text-gray-500 bg-transparent'
                    }`}
                  >
                    <Smartphone size={20} />
                    Mobile Money
                  </button>
                </div>

                {paymentMethod === 'card' ? (
                  <div className="space-y-4">
                    <div className="relative">
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Card Number</label>
                      <input
                        type="text"
                        value={formatCardNumber(cardNumber)}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="0000 0000 0000 0000"
                        className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-primary focus:outline-none font-medium"
                        maxLength={19}
                      />
                      <div className="absolute right-4 bottom-3 flex gap-2">
                        <span className={`transition-opacity ${cardType === 'visa' ? 'opacity-100' : 'opacity-20'}`}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" width={30} />
                        </span>
                        <span className={`transition-opacity ${cardType === 'mastercard' ? 'opacity-100' : 'opacity-20'}`}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" width={30} />
                        </span>
                        <span className={`transition-opacity ${cardType === 'amex' ? 'opacity-100' : 'opacity-20'}`}>
                          <img src="https://upload.wikimedia.org/wikipedia/commons/3/30/American_Express_logo.svg" alt="Amex" width={25} />
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Expiry Date</label>
                        <input
                          type="text"
                          placeholder="MM / YY"
                          value={expiry}
                          onChange={(e) => setExpiry(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-primary focus:outline-none font-medium"
                          maxLength={5}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase mb-1">CVC / CVV</label>
                        <input
                          type="text"
                          placeholder="123"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          className="w-full px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-primary focus:outline-none font-medium"
                          maxLength={4}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase mb-1">Phone Number</label>
                      <div className="flex gap-2">
                        <div className="relative">
                          <button
                            onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                            className="h-full px-3 py-3 rounded-lg border-2 border-gray-100 bg-white flex items-center gap-2 font-medium hover:border-gray-200 transition-all border-0"
                          >
                            <span>{selectedCountry.flag}</span>
                            <span>{selectedCountry.code}</span>
                            <ChevronDown size={14} />
                          </button>
                          
                          {isCountryDropdownOpen && (
                            <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-100 rounded-lg shadow-xl z-50 overflow-hidden">
                              {COUNTRIES.map((c) => (
                                <button
                                  key={c.code}
                                  onClick={() => {
                                    setSelectedCountry(c);
                                    setIsCountryDropdownOpen(false);
                                  }}
                                  className="w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center gap-2 text-sm border-0 bg-transparent"
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
                          value={momoNumber}
                          onChange={(e) => setMomoNumber(e.target.value)}
                          placeholder="Phone Number"
                          className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-100 focus:border-primary focus:outline-none font-medium"
                        />
                      </div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg flex items-start gap-3">
                      <div className="mt-1 text-primary"><Check size={16} /></div>
                      <p className="text-xs text-gray-500 mb-0">A push notification will be sent to your phone to authorize this transaction.</p>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 py-4 bg-gray-100 text-gray-600 rounded-xl font-bold hover:bg-gray-200 transition-all border-0"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => {
                      alert('Processing payment...');
                      onClose();
                    }}
                    className="flex-[2] py-4 bg-primary text-white rounded-xl font-bold shadow-lg hover:shadow-primary/30 transition-all border-0"
                  >
                    Donate ${amount} Now
                  </button>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .bg-primary { background-color: var(--primary) !important; }
        .text-primary { color: var(--primary) !important; }
        .border-primary { border-color: var(--primary) !important; }
        .bg-primary\/5 { background-color: rgba(var(--primary-rgb), 0.05) !important; }
        .shadow-primary\/30 { box-shadow: 0 10px 15px -3px rgba(var(--primary-rgb), 0.3) !important; }
      `}</style>
    </>
  );
}
