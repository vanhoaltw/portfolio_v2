'use client';

import buildUrl from 'cloudinary-build-url';
import Image from 'next/image';

import { cn } from '@/lib/utils';

import { appPreviewImg } from '@/components/GlobalImagePreview';

export default function ClImage({
  width,
  height,
  mdx = false,
  aspect,
  publicId = 'Fdfsfs',
  alt = '',
  className,
  preview = true,
}: {
  width: number;
  height: number;
  mdx?: boolean;
  publicId?: string;
  aspect?: { width: number; height: number };
  alt?: string;
  quality?: number;
  className?: string;
  preview?: boolean;
}) {
  const RESIZE_MAX_WIDTH = 1000;
  const resizedToMaxWidth = mdx && +width >= RESIZE_MAX_WIDTH;
  const aspectRatio = aspect ? aspect.height / aspect.width : undefined;

  const urlBlurred = buildUrl(publicId, {
    cloud: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'hoanguyen',
    },
    transformations: {
      effect: {
        name: 'blur:1000',
      },
      quality: 1,
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });

  const url = buildUrl(publicId, {
    cloud: {
      cloudName: process.env.CLOUDINARY_CLOUD_NAME || 'hoanguyen',
    },
    transformations: {
      rawTransformation: aspect
        ? `c_fill,ar_${aspect.width}:${aspect.height},w_${width}`
        : undefined,
    },
  });

  const handlePreviewImg = () => {
    if (preview) appPreviewImg?.current?.show?.(url);
  };

  return (
    <figure
      className={cn(
        'relative overflow-hidden',
        {
          'mx-auto w-full': mdx && +width <= 800,
        },
        preview ? 'cursor-zoom-in' : 'cursor-default',
        className
      )}
      style={mdx && +width <= 800 ? { maxWidth: width } : {}}
    >
      <div
        style={{
          position: 'relative',
          height: 0,
          paddingTop: aspectRatio
            ? `${aspectRatio * 100}%`
            : `${(+height / +width) * 100}%`,
        }}
        onClick={handlePreviewImg}
      >
        <div
          className='absolute inset-0 z-0 bg-cover bg-center blur-lg'
          style={{ backgroundImage: `url(${urlBlurred})` }}
        />

        <div className='absolute left-0 top-0'>
          <Image
            width={
              resizedToMaxWidth ? Math.min(+width, RESIZE_MAX_WIDTH) : width
            }
            height={
              resizedToMaxWidth ? (RESIZE_MAX_WIDTH * +height) / +width : height
            }
            src={url}
            alt={alt}
            title={alt}
          />
        </div>
      </div>
    </figure>
  );
}
