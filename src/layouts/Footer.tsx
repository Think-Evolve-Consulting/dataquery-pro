import Link from 'next/link';
import React from 'react';

import { Logo } from '@/components/Icons/Logo';

import Container from './Container';

const Footer = () => {
  return (
    <footer className="my-6">
      <Container>
        <div className="flex flex-row items-center gap-3 border-t border-t-secondary py-3 text-sm text-primary dark:border-t-[#e2e8f045]">
          <Logo className="size-5" />
          <p className="text-sm font-normal leading-4 text-slate-700 dark:text-dark-10">
            Made at{' '}
            <Link
              target="_blank"
              className="inline-block border-b border-primary  hover:text-primary"
              href="https://www.thinkevolveconsulting.com/"
            >
              ThinkEvolve Labs.
            </Link>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export { Footer };
