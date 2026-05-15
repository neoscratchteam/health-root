'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { useDonation } from '@/context/DonationContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { openDonation } = useDonation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'What we do', href: '/what-we-do' },
    { name: 'Our impact', href: '/our-impact' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top transition-all ${scrolled ? 'bg-dark shadow-lg py-2' : 'bg-transparent py-4'}`} id="ftco-navbar">
      <div className="container">
        <Link href="/" className="navbar-brand fw-bold fs-3 text-white">
          HEALTH ROOT<span className="text-secondary"> NGO</span>
        </Link>
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="ftco-nav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item mx-lg-2" key={link.href}>
                <Link 
                  href={link.href} 
                  className={`nav-link fw-bold text-uppercase small ${pathname === link.href ? 'active text-primary' : 'text-white'}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-item ms-lg-3">
              <button 
                onClick={() => {
                  openDonation();
                  setIsOpen(false);
                }}
                className="btn btn-primary rounded-pill px-4 py-2 fw-bold text-uppercase small border-0"
              >
                Donate
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
