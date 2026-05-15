'use client';

import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { DonationProvider, useDonation } from '@/context/DonationContext';
import DonationModal from '@/components/DonationModal';

function ModalRenderer() {
  const { isOpen, closeDonation } = useDonation();
  if (!isOpen) return null;
  return <DonationModal isOpen={isOpen} onClose={closeDonation} />;
}

export default function DonationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <DonationProvider>
      {children}
      <ModalRenderer />
    </DonationProvider>
  );
}
