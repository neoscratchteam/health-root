import React from 'react';

const Hero = ({ title, bgImage = '/images/hom1.jpg', compact = false }) => {
  return (
    <div className="block-31" style={{ position: 'relative' }}>
      <div className={`block-30 ${compact ? 'block-30-sm' : ''} item`} style={{ 
        backgroundImage: `url('${bgImage}')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: compact ? '400px' : '80vh'
      }}>
        <div className="container">
          <div className="row align-items-center justify-content-center text-center">
            <div className="col-md-9">
              <h1 className="heading mb-4 animate__animated animate__fadeInUp" style={{ 
                color: '#fff', 
                fontWeight: 'bold',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
              }}>
                {title}
              </h1>
            </div>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.3)',
          zIndex: 0
        }}></div>
      </div>
    </div>
  );
};

export default Hero;
