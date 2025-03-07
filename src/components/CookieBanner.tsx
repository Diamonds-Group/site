// CookieBanner.tsx
import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  // const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    setIsVisible(consent !== 'accepted');
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 bg-black bg-opacity-70 text-white p-4 z-50 flex justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl">
        <p className="mb-2 md:mb-0 md:mr-4">
          Questo sito utilizza cookie per garantire la migliore esperienza di navigazione.
        </p>
        <button
          onClick={acceptCookies}
          className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition"
        >
          Accetto
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
