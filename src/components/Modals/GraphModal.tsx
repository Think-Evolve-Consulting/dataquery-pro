import Image from 'next/image';
import type { Dispatch, SetStateAction } from 'react';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import Modal from 'react-modal';

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
    <Modal
      onRequestClose={() => {
        setIsOpen(false);
      }}
      isOpen={isOpen}
      className="Modal"
      ariaHideApp={false}
      bodyOpenClassName="!overflow-hidden"
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 10005,
        },
        content: {
          outline: 'none',
          position: 'absolute',
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          zIndex: '500',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'auto',
          maxWidth: '800px',
          width: '100%',
        },
      }}
    >
      <div className="zoomIn relative flex w-full flex-col gap-3 rounded-lg bg-white px-6 py-5 dark:bg-gray-900">
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
    </Modal>
  );
};

export { GraphModal };
