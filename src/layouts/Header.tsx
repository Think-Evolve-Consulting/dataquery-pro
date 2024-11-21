import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { MdMenu, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { RiCloseLargeFill } from 'react-icons/ri';
import { twJoin } from 'tailwind-merge';

import { Logo } from '@/components/Icons/Logo';
import { useDarkMode } from '@/contexts/DarkMode';

import Container from './Container';

const DASHBOARD_URL = process.env.NEXT_PUBLIC_DASHBOARD_URL || '#';
const Header = () => {
  const router = useRouter();

  const { toggleDarkMode, isDarkMode } = useDarkMode();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="pb-8 pt-10">
      <Container>
        <div className="border-b border-b-secondary dark:border-b-[#e2e8f045]">
          <div className="flex flex-row items-center justify-between">
            <div className="flex items-center justify-start gap-8">
              {/* Logo */}
              <Link
                href={'/data-query'}
                className="flex flex-row items-center justify-start gap-5 pb-2.5"
              >
                <Logo />
                <div>
                  <p className="text-base font-normal leading-6 text-slate-700 dark:text-dark-10">
                    DataQuery PRO
                  </p>
                  <p className=" text-xs font-normal leading-3 text-slate-700 dark:text-dark-10">
                    Generate visualizations from data
                  </p>
                </div>
              </Link>

              {/* Links */}
              <div className="hidden flex-row items-center justify-start gap-6 lg:flex">
                <Link
                  href={'/data-query'}
                  className={twJoin(
                    'relative px-4 pb-3 pt-2 text-sm font-medium leading-5 text-slate-900 hover:text-primary dark:text-dark-10 hover:dark:text-primary'
                  )}
                >
                  Data Query
                  <span
                    className={twJoin(
                      'absolute -bottom-1 left-0 h-1 w-full rounded-t-md',
                      router?.asPath === '/data-query'
                        ? 'bg-primary'
                        : 'bg-gray-200'
                    )}
                  />
                </Link>

                <Link
                  href={DASHBOARD_URL}
                  target="_black"
                  className={twJoin(
                    'relative px-4 pb-3 pt-2 text-sm font-medium leading-5 text-slate-900 hover:text-primary dark:text-dark-10 hover:dark:text-primary'
                  )}
                >
                  Dashboard
                  <span className="absolute -bottom-1 left-0 h-1 w-full rounded-t-md bg-gray-200" />
                </Link>

                <Link
                  href={'/help'}
                  className={twJoin(
                    'relative px-4 pb-3 pt-2 text-sm font-medium leading-5 text-slate-900 hover:text-primary dark:text-dark-10 hover:dark:text-primary'
                  )}
                >
                  Help
                  <span
                    className={twJoin(
                      'absolute -bottom-1 left-0 h-1 w-full rounded-t-md',
                      router?.asPath === '/help' ? 'bg-primary' : 'bg-gray-200'
                    )}
                  />
                </Link>
              </div>
            </div>

            <div>
              <button
                className="hidden w-fit lg:flex"
                onClick={() => toggleDarkMode()}
              >
                {isDarkMode ? (
                  <MdOutlineLightMode size={24} color="#FFF" />
                ) : (
                  <MdOutlineDarkMode size={24} />
                )}
              </button>

              <button
                className="w-fit lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <RiCloseLargeFill size={20} color="#9ca3af" />
                ) : (
                  <MdMenu size={24} color="#9ca3af" />
                )}
              </button>
            </div>
          </div>

          {isMenuOpen && (
            <div className="py-4 lg:hidden">
              <div className="flex flex-col items-start justify-start gap-2">
                <Link
                  href={'/data-query'}
                  className="w-full border-l-4 border-l-primary bg-secondary px-4 py-2 text-base  font-medium leading-5 text-primary dark:bg-slate-800"
                >
                  Data Query
                </Link>

                <Link
                  href={DASHBOARD_URL}
                  target="_blank"
                  className="w-full border-l-4 border-l-primary bg-secondary px-4 py-2 text-base  font-medium leading-5 text-primary dark:bg-slate-800"
                >
                  Dashboard
                </Link>

                <Link
                  href={'/help'}
                  className="w-full border-l-4 border-l-primary bg-secondary px-4 py-2 text-base  font-medium leading-5 text-primary dark:bg-slate-800"
                >
                  Help
                </Link>

                <button className="mt-2 w-fit" onClick={() => toggleDarkMode()}>
                  {isDarkMode ? (
                    <MdOutlineLightMode size={24} color="#FFF" />
                  ) : (
                    <MdOutlineDarkMode size={24} />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </header>
  );
};

export { Header };
