'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DonationContextType {
  openDonation: () => void;
  closeDonation: () => void;
  isOpen: boolean;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export function DonationProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openDonation = () => {
    alert('Opening Donation Modal');
    console.log('Opening Donation Modal');
    setIsOpen(true);
  };
  const closeDonation = () => {
    console.log('Closing Donation Modal');
    setIsOpen(false);
  };

  return (
    <DonationContext.Provider value={{ openDonation, closeDonation, isOpen }}>
      {children}
    </DonationContext.Provider>
  );
}

export function useDonation() {
  const context = useContext(DonationContext);
  if (context === undefined) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
}
