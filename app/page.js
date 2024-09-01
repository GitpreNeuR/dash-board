"use client"; // Ensure client-side rendering

import React from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { Button } from '@/components/ui/button';

function Homepage() {
  const router = useRouter(); // Initialize useRouter

  // Function to handle button click
  const navigateToDashboard = () => {
    router.push('/dashboard'); // Navigate to /dashboard
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        onClick={navigateToDashboard}
        
      >
        Go to Dashboard
      </Button>
    </div>
  );
}

export default Homepage;
