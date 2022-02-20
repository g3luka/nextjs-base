import { useState, useEffect } from 'react';

interface ISize {
  width: number | undefined;
  height: number | undefined;
}

export default function useWindowSize(): ISize {
  const [windowSize, setWindowSize] = useState<ISize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize)
    handleResize();
    return () => window.removeEventListener('resize', handleResize)
  }, []);

  return windowSize;
}
