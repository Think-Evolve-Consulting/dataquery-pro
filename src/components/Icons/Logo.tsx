import React from 'react';
import { twJoin } from 'tailwind-merge';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <svg
      className={twJoin('h-8 w-8', className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 30 30"
      fill="none"
    >
      <rect
        x="1"
        y="1"
        width="28"
        height="28"
        rx="2"
        stroke="#16A34A"
        strokeWidth="2"
      ></rect>
      <rect x="7" y="9" width="3" height="15" rx="1.5" fill="#22C55E"></rect>
      <rect x="21" y="9" width="3" height="15" rx="1.5" fill="#16A34A"></rect>
      <rect x="14" y="6" width="3" height="18" rx="1.5" fill="#F2CB39"></rect>
    </svg>
  );
};

export { Logo };
