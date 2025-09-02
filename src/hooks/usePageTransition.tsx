
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const usePageTransition = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [shouldShowContent, setShouldShowContent] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Start loading animation when route changes
    setIsLoading(true);
    setShouldShowContent(false);

    // Simulate loading time for the map animation
    const timer = setTimeout(() => {
      setIsLoading(false);
      setShouldShowContent(true);
    }, 2500); // 2.5 seconds for the full map animation

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return { isLoading, shouldShowContent };
};
