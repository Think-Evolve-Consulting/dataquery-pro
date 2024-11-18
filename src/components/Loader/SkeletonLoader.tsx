import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="space-y-2.5">
      {[...Array(14)]?.map((i) => (
        <div
          key={i}
          className="h-6 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-slate-800"
        />
      ))}
    </div>
  );
};

export { SkeletonLoader };
