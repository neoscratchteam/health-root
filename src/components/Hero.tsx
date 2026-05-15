import React from 'react';
import Image from 'next/image';

interface HeroProps {
  title: string;
  bgImage?: string;
  compact?: boolean;
}

const Hero: React.FC<HeroProps> = ({ title, bgImage = '/images/hom1.jpg', compact = false }) => {
  return (
    <div className="block-31" style={{ position: 'relative' }}>
      <div 
        className={`block-30 ${compact ? 'block-30-sm' : ''} item`} 
        style={{ 
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: compact ? '400px' : '80vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Image
          src={bgImage}
          alt={title}
          fill
          priority
          style={{ objectFit: 'cover', zIndex: -1 }}
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
            zIndex: 0
          }}
        />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-9">
              <h1 
                className="heading mb-4 animate__animated animate__fadeInUp" 
                style={{ 
                  color: '#fff', 
                  fontWeight: 'bold',
                  textShadow: '2px 2px 8px rgba(0,0,0,0.6)',
                  fontSize: compact ? '2.5rem' : '3.5rem'
                }}
              >
                {title}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
