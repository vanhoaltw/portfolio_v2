'use client';

import React, { createRef, forwardRef, useImperativeHandle } from 'react';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import { useForceUpdate } from '@/hooks/useForceUpdate';

export const appPreviewImg = createRef<{
  show?: (src: string) => void;
  hide?: () => void;
}>();

const GlobalImagePreview = forwardRef((props, ref) => {
  const [src, setSrc] = React.useState<string>('');
  const forceUpdate = useForceUpdate();

  const show = (imgUrl: string) => {
    setSrc(imgUrl);
  };
  const hide = () => setSrc('');

  useImperativeHandle(ref, () => ({
    show,
    hide,
  }));

  if (!src) return null;
  return (
    <Lightbox onImageLoad={forceUpdate} mainSrc={src} onCloseRequest={hide} />
  );
});

export default GlobalImagePreview;
