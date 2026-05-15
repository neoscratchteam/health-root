'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { useDonation } from '@/context/DonationContext';

interface CTASectionProps {
  title?: string;
  buttonText?: string;
  buttonLink?: string;
  bgImage?: string;
}

const CTASection: React.FC<CTASectionProps> = ({ 
  title = "Every child deserves a chance to dream, grow, and thrive—together, we can make it happen.", 
  buttonText = "Donate Now", 
  bgImage = "/images/home1.jpg" 
}) => {
  const { openDonation } = useDonation();

  return (
    <section className="cta-section py-5 position-relative" style={{ 
      color: '#fff',
      padding: '100px 0',
      overflow: 'hidden'
    }}>
      <Image
        src={bgImage}
        alt="CTA Background"
        fill
        style={{ 
          objectFit: 'cover', 
          zIndex: -1,
          filter: 'brightness(0.3)'
        }}
        sizes="100vw"
      />
      <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <h2 className="display-4 fw-bold mb-4 animate__animated animate__fadeIn">{title}</h2>
            <button 
              onClick={openDonation}
              className="btn btn-lg btn-white px-5 py-3 rounded-pill fw-bold shadow-lg hover-scale border-0"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
