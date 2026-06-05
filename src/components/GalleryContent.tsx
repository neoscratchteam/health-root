'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Hero from '@/components/Hero';
import CTASection from '@/components/CTASection';

export interface GalleryImage {
  src: string;
  title: string;
  category: string;
}

const CATEGORIES = ['All', 'Health Education', 'Sanitation', 'Youth Workshops', 'Community Outreach'];

export default function GalleryContent() {
  const images: GalleryImage[] = [
    { src: '/teams/all.png', title: 'Health Root NGO Team Group', category: 'Community Outreach' },
    { src: '/teams/work.png', title: 'Team Activity Session', category: 'Youth Workshops' }
  ];

  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handlePrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredImages.length - 1));
    }
  }, [lightboxIndex, filteredImages.length]);

  const handleNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev !== null && prev < filteredImages.length - 1 ? prev + 1 : 0));
    }
  }, [lightboxIndex, filteredImages.length]);

  const handleClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') handleClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, handlePrev, handleNext, handleClose]);

  return (
    <>
      <Hero 
        title="Our Gallery" 
        bgImage="/images/hom1.jpg"
        compact={true}
      />

      <div className="site-section bg-white">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3">Activities in Action</h2>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
              Explore our journey through these images. Each photo captures our health campaigns, sanitation activities, and training sessions in real-time.
            </p>
          </div>

          {/* Interactive Category Filter Menu */}
          <div className="row justify-content-center mb-5">
            <div className="col-12 text-center">
              <div className="d-inline-flex flex-wrap justify-content-center gap-2 p-2 bg-light rounded-pill shadow-sm">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      setActiveCategory(cat);
                      setLightboxIndex(null);
                    }}
                    className={`btn rounded-pill px-4 py-2 fw-bold text-uppercase small border-0 transition-all ${
                      activeCategory === cat 
                        ? 'btn-primary shadow-sm' 
                        : 'btn-transparent text-muted hover-text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Gallery Image Cards Grid */}
          <div className="row g-4">
            {filteredImages.map((img, idx) => (
              <div className="col-md-6 col-lg-4 animate-fade-up" key={`${img.src}-${idx}`} style={{ animationDelay: `${idx * 0.05}s` }}>
                <div 
                  className="gallery-item position-relative overflow-hidden rounded-lg shadow-sm hover-shadow cursor-pointer" 
                  style={{ height: '300px', cursor: 'pointer' }}
                  onClick={() => setLightboxIndex(idx)}
                >
                  <Image 
                    src={img.src.startsWith('/') ? img.src : `/images/${img.src}`} 
                    alt={img.title} 
                    fill 
                    className="transition-all hover-scale" 
                    style={{ objectFit: 'cover' }} 
                  />
                  {/* Glassmorphic Overlay */}
                  <div 
                    className="gallery-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center transition-all p-3" 
                    style={{ 
                      zIndex: 1, 
                      background: 'rgba(10, 35, 66, 0.85)',
                      backdropFilter: 'blur(4px)'
                    }}
                  >
                    <span className="badge bg-secondary mb-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                      {img.category}
                    </span>
                    <h3 className="h5 text-white fw-bold text-center mb-3 px-2">{img.title}</h3>
                    <button className="btn btn-sm btn-white rounded-pill px-4 fw-bold text-uppercase small">
                      Zoom View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {lightboxIndex !== null && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
          style={{ 
            backgroundColor: 'rgba(0, 0, 0, 0.95)', 
            zIndex: 9999,
            backdropFilter: 'blur(8px)'
          }}
        >
          {/* Close button */}
          <button 
            onClick={handleClose} 
            className="position-absolute top-0 end-0 m-4 btn border-0 text-white bg-transparent shadow-none"
            style={{ fontSize: '2.5rem', zIndex: 10001, cursor: 'pointer' }}
            aria-label="Close Lightbox"
          >
            &times;
          </button>

          {/* Left Navigation Arrow */}
          <button 
            onClick={handlePrev} 
            className="position-absolute start-0 m-4 btn border-0 text-white bg-transparent shadow-none d-none d-md-block"
            style={{ fontSize: '3rem', zIndex: 10001, cursor: 'pointer' }}
            aria-label="Previous Image"
          >
            &#8249;
          </button>

          {/* Main Content Area */}
          <div className="position-relative d-flex flex-column align-items-center justify-content-center text-center p-3" style={{ maxWidth: '90%', maxHeight: '80%' }}>
            <div className="position-relative" style={{ width: '80vw', height: '60vh', maxWidth: '900px' }}>
              <Image 
                src={filteredImages[lightboxIndex].src.startsWith('/') ? filteredImages[lightboxIndex].src : `/images/${filteredImages[lightboxIndex].src}`} 
                alt={filteredImages[lightboxIndex].title} 
                fill 
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <div className="mt-4 text-white">
              <span className="badge bg-secondary mb-2 text-uppercase fw-bold" style={{ fontSize: '0.75rem' }}>
                {filteredImages[lightboxIndex].category}
              </span>
              <h3 className="h4 fw-bold">{filteredImages[lightboxIndex].title}</h3>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button 
            onClick={handleNext} 
            className="position-absolute end-0 m-4 btn border-0 text-white bg-transparent shadow-none d-none d-md-block"
            style={{ fontSize: '3rem', zIndex: 10001, cursor: 'pointer' }}
            aria-label="Next Image"
          >
            &#8250;
          </button>

          {/* Mobile swipe info / indicator */}
          <div className="position-absolute bottom-0 mb-4 text-white-50 small d-block d-md-none">
            Tap arrows to navigate
            <div className="d-flex justify-content-center gap-4 mt-2">
              <button onClick={handlePrev} className="btn btn-sm btn-outline-light rounded-circle px-3 py-1">&#8249;</button>
              <button onClick={handleNext} className="btn btn-sm btn-outline-light rounded-circle px-3 py-1">&#8250;</button>
            </div>
          </div>
        </div>
      )}

      <CTASection 
        title="Join our next activity and help build a healthier community."
        buttonText="Get Involved"
      />
    </>
  );
}
