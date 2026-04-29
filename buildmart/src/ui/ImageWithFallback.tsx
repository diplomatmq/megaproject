/*
  DAY 2 - MORNING (09:00-12:00)
  PHASE 4: UI components - Image with fallback
  Developer 1 uploads this file
  Image component with fallback handling - primary → fallback → placeholder
*/
import type { ComponentPropsWithoutRef } from 'react';
import { useEffect, useState } from 'react';

const DEFAULT_IMG_PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 600 600'%3E%3Crect width='600' height='600' fill='%23f3f4f6'/%3E%3Cg fill='%239ca3af' font-family='Arial,sans-serif' text-anchor='middle'%3E%3Ctext x='300' y='285' font-size='28'%3EImage unavailable%3C/text%3E%3Ctext x='300' y='325' font-size='18'%3EBuildMart%3C/text%3E%3C/g%3E%3C/svg%3E";

type ImageWithFallbackProps = Omit<ComponentPropsWithoutRef<'img'>, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

export function ImageWithFallback({
  src,
  fallbackSrc,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [srcType, setSrcType] = useState<'primary' | 'fallback' | 'placeholder'>('primary');

  useEffect(() => {
    setImgSrc(src);
    setSrcType('primary');
  }, [src]);

  const handleErr = () => {
    if (srcType === 'primary' && fallbackSrc && fallbackSrc !== src) {
      setImgSrc(fallbackSrc);
      setSrcType('fallback');
    } else if (srcType !== 'placeholder') {
      setImgSrc(DEFAULT_IMG_PLACEHOLDER);
      setSrcType('placeholder');
    }
  };

  return <img {...props} src={imgSrc} onError={handleErr} />;
}
