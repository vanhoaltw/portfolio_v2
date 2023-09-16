import { type ClassValue, clsx } from 'clsx';
import { Project } from 'contentlayer/generated';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortDateFn<T extends Project>(contentA: T, contentB: T) {
  return (
    new Date(contentB.publishedAt).valueOf() -
    new Date(contentA.publishedAt).valueOf()
  );
}
