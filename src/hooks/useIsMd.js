// src/hooks/useIsMd.js
import { useEffect, useState } from 'react';

function useIsMd() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');

    const handleResize = () => {
      setIsMd(mediaQuery.matches);
    };

    handleResize(); // 초기 체크

    mediaQuery.addEventListener('change', handleResize);

    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  }, []);

  return isMd;
}

export default useIsMd;
