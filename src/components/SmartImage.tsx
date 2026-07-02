/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface SmartImageProps {
  src: string;
  fallbackSrc: string;
  rotation?: number; // degrees: 0, 90, 180, 270
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any; // Allow other img properties (e.g. onClick, loading, etc.)
}

export default function SmartImage({ src, fallbackSrc, rotation = 0, className = '', style = {}, ...props }: SmartImageProps) {
  const [currentSrc, setCurrentSrc] = useState<string>(src);
  const [hasFailed, setHasFailed] = useState<boolean>(false);

  // Sync currentSrc when src prop changes
  useEffect(() => {
    setCurrentSrc(src);
    setHasFailed(false);
  }, [src]);

  const handleError = () => {
    if (!hasFailed && currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
      setHasFailed(true);
    }
  };

  // Convert rotation to standard Tailwind rotation class or style
  const rotationStyles: React.CSSProperties = {
    transform: `rotate(${rotation}deg)`,
    transition: 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
    ...style
  };

  return (
    <img
      src={currentSrc}
      onError={handleError}
      style={rotationStyles}
      className={`${className}`}
      referrerPolicy="no-referrer"
      {...props}
    />
  );
}
