import { useState, useEffect } from 'react';
import logoImage from '../assets/logo-2.png';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export default function LandingPage({ onNavigate }: LandingPageProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Auto-navigate to home after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        onNavigate('home');
      }, 500); // Small delay for fade out
    }, 3000);

    return () => clearTimeout(timer);
  }, [onNavigate]);

  return (
    <div className={`fixed inset-0 z-50 bg-white flex items-center justify-center transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      <div className="text-center">
        <div className="relative">
          <img
            src={logoImage}
            alt="Sync Water Tech"
            className="w-64 h-64 mx-auto mb-8 animate-pulse"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-4 border-blue-200 border-t-[#0073bc] rounded-full animate-spin"></div>
          </div>
        </div>
        <h1 className="text-4xl font-bold text-[#0073bc] mb-4">
          Sync Water Tech
        </h1>
        <p className="text-gray-600 text-lg">
          Pioneering Water Innovation
        </p>
      </div>
    </div>
  );
}
