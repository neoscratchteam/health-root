'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DonationProvider, useDonation } from '@/context/DonationContext';
import DonationModal from '@/components/DonationModal';

function ModalRenderer() {
  const { isOpen, closeDonation } = useDonation();
  return (
    <AnimatePresence>
      {isOpen && <DonationModal isOpen={isOpen} onClose={closeDonation} key="donation-modal" />}
    </AnimatePresence>
  );
}

export default function DonationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DonationProvider>
      {children}
      <ModalRenderer />
    </DonationProvider>
  );
}
