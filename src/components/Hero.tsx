'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import DonateButton from './DonateButton';

interface HeroProps {
  title: string;
  bgImage?: string;
  compact?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, bgImage = '/images/event2.jpeg', compact = false }) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className="block-31" style={{ position: 'relative' }}>
      <div 
        className={`block-30 no-overlay ${compact ? 'block-30-sm' : ''} item`} 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: compact ? '400px' : '80vh',
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: 'transparent'
        }}
      >
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          quality={100}
          unoptimized={true}
          onLoad={() => setIsLoaded(true)}
          style={{ 
            objectFit: 'cover', 
            zIndex: 0,
          }}
          sizes="100vw"
        />
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
            zIndex: 1
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-9">
              <h1 
                className="heading mb-4 animate__animated animate__fadeInUp" 
                style={{ 
                  color: '#fff', 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 12px rgba(0,0,0,0.7)',
                  fontSize: compact ? '2.8rem' : '3.8rem',
                  letterSpacing: '-0.02em',
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-out 0.3s'
                }}
              >
                {title}
              </h1>
              {!compact && (
                <div className="animate__animated animate__fadeInUp animate__delay-1s">
                  <DonateButton className="btn btn-primary px-5 py-3 rounded-pill fw-bold shadow-lg mt-3 border-0" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
