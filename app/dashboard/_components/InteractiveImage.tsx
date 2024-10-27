// InteractiveImage.tsx
"use client";

import Image from 'next/image';
import React from 'react';

interface InteractiveImageProps {
    src: string;
    width: number;
    height: number;
    alt: string;
}

const InteractiveImage: React.FC<InteractiveImageProps> = ({ src, width, height, alt }) => {
    return (
        <Image
            src={src}
            width={width}
            height={height}
            alt={alt}
            onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/default-icon.png';
            }}
        />
    );
};

export default InteractiveImage;
