'use client';
import { useEffect, useState } from 'react';

interface IWindowDims {
  width: number;
  height: number;
}

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
}

export const useWindowDimensions = () => {
  const [dims, setDims] = useState<IWindowDims>(getWindowDimensions()!);

  useEffect(() => {
    function handleResize() {
      setDims(getWindowDimensions()!);
    }

    setDims(getWindowDimensions()!);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [setDims]);

  if (!dims) return { width: 0, height: 0 };
  return { width: dims.width, height: dims.height };
};

