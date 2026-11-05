import React from 'react';

interface GooglePlayLogoProps {
  className?: string;
  variant?: 'color' | 'mono';
}

/**
 * Authentic Google Play Vector Mark
 * Official 4-color palette geometry & monochrome fallback
 */
export const GooglePlayLogo: React.FC<GooglePlayLogoProps> = ({
  className = 'w-4 h-4',
  variant = 'color',
}) => {
  if (variant === 'mono') {
    return (
      <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
        <path d="M3.609 1.814L13.793 12 3.61 22.186a2.03 2.03 0 0 1-.61-1.45V3.264c0-.555.222-1.07.61-1.45zm11.248 11.25L17.77 15.98 5.742 22.923l9.115-9.859zm0-2.128L5.742 1.077 17.77 8.02l-2.913 2.916zm1.488 1.064l3.963-2.288c.84-.485.84-1.274 0-1.759l-3.963-2.288-1.503 1.503 1.503 1.503z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 512 512" className={className} fill="none" aria-hidden="true">
      {/* Blue triangle */}
      <path
        d="M47.7 28.5C44.6 32 43 36.9 43 43v426c0 6.1 1.6 11 4.7 14.5l241.9-227.5L47.7 28.5z"
        fill="#00B0FF"
      />
      {/* Green upper triangle */}
      <path
        d="M380.8 198.8L289.6 255.5 47.7 28.5c4.6-2.6 10.3-3.4 16.5-.4l316.6 170.7z"
        fill="#00E676"
      />
      {/* Red lower triangle */}
      <path
        d="M64.2 483.2c-6.2 3-11.9 2.2-16.5-.4L289.6 255.5l91.2 56.7-316.6 171z"
        fill="#FF3D00"
      />
      {/* Yellow right triangle */}
      <path
        d="M469.7 241.8c7.2 4.1 11.3 11.3 11.3 19.2s-4.1 15.1-11.3 19.2l-88.9 48-69.6-67.2 69.6-67.2 88.9 48z"
        fill="#FFC107"
      />
    </svg>
  );
};

