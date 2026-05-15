'use client';

import React from 'react';
import { useDonation } from '@/context/DonationContext';

interface DonateButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function DonateButton({ className, children }: DonateButtonProps) {
  const { openDonation } = useDonation();

  return (
    <button 
      onClick={openDonation}
      className={className || "btn btn-primary px-5 py-3 rounded-pill fw-bold shadow"}
    >
      {children || 'Donate Now'}
    </button>
  );
}
