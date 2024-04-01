import { Skeleton } from './ui/skeleton';
import React from 'react';
interface CoverImageProps {
  url?: string;
  preview?: boolean;
}
export const Cover = ({ url, preview }: CoverImageProps) => {
  return <div>Cover</div>;
};

Cover.Skeleton = function CoverSkeleton() {
  return <Skeleton className="w-full h-[12vh]" />;
};
