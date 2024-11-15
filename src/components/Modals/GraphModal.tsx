import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';

import { useDarkMode } from '@/contexts/DarkMode';
import { useDataQueryForm } from '@/contexts/DataQueryForm';

interface GraphModalProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  url?: string;
}

const GraphModal = ({ isOpen, setIsOpen }: GraphModalProps) => {
  const { isDarkMode } = useDarkMode();
  const { goal } = useDataQueryForm();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/5 backdrop-blur-sm"
          aria-modal="true"
          role="dialog"
        >
          <div className="custom-scroll zoomIn relative flex max-h-[calc(100vh-30px)] w-full max-w-[800px] flex-col gap-3 overflow-y-auto rounded-lg bg-white px-6 py-5 dark:bg-gray-900">
            <p className="text-lg font-semibold leading-6 tracking-wide text-slate-700 dark:text-dark-10">
              Seaborn Chart
            </p>

            <button
              className="absolute right-4 top-4 text-secondary"
              onClick={() => {
                setIsOpen(false);
              }}
              type="button"
            >
              <MdClose size={24} color={isDarkMode ? '#F7FAFC' : '#334155'} />
            </button>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-normal leading-5 text-black dark:dark:text-dark-10">
                {goal?.question}
              </p>

              <p className="text-sm font-normal leading-5 text-slate-500 dark:dark:text-dark-10">
                {goal?.answer}
              </p>
              <div className="mt-2">
                <Image
                  src={'/assets/graph.png'}
                  width={1000}
                  height={1000}
                  alt="Graph"
                  className="object-fit"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-end gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="rounded-md border border-secondary bg-transparent px-4 py-1 text-sm font-normal leading-5 text-slate-700 dark:text-dark-10"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="rounded-md border border-primary bg-primary px-4 py-1 text-sm font-normal leading-5 text-white"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { GraphModal };
