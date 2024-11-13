import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { TbMessageDots } from 'react-icons/tb';
import { twJoin } from 'tailwind-merge';

type TabType = 'REFINE' | 'EXPLAIN' | 'EVALUATE' | 'RECOMMENDED';
const DataQueryTab = () => {
  const [tab, setTab] = useState<TabType>('REFINE');

  return (
    <div>
      <div className="flex w-full flex-row items-center justify-start gap-6 border-b border-b-secondary dark:border-b-[#e2e8f045]">
        <button
          onClick={() => setTab('REFINE')}
          className={twJoin(
            'flex flex-row items-center gap-1 border-b-2 px-1  py-3 hover:text-primary hover:dark:text-primary',
            tab === 'REFINE'
              ? 'border-b-primary text-primary'
              : 'border-b-transparent text-slate-700 dark:text-dark-10'
          )}
        >
          <TbMessageDots size={18} />
          <span className="text-sm font-medium leading-5">Refine</span>
        </button>

        <button
          onClick={() => setTab('EXPLAIN')}
          className={twJoin(
            'flex flex-row items-center gap-1 border-b-2 px-1 py-3 hover:text-primary hover:dark:text-primary',
            tab === 'EXPLAIN'
              ? 'border-b-primary text-primary'
              : 'border-b-transparent text-slate-700 dark:text-dark-10'
          )}
        >
          <AiOutlineMessage size={18} />
          <span className="text-sm font-medium leading-5">Explain</span>
        </button>

        <button
          onClick={() => setTab('EVALUATE')}
          className={twJoin(
            'flex flex-row items-center gap-1 border-b-2 px-1 py-3 hover:text-primary hover:dark:text-primary',
            tab === 'EVALUATE'
              ? 'border-b-primary text-primary'
              : 'border-b-transparent text-slate-700 dark:text-dark-10'
          )}
        >
          <TbMessageDots size={18} />
          <span className="text-sm font-medium leading-5">Evaluate</span>
        </button>

        <button
          onClick={() => setTab('RECOMMENDED')}
          className={twJoin(
            'flex flex-row items-center gap-1 border-b-2 px-1 py-3 hover:text-primary hover:dark:text-primary',
            tab === 'RECOMMENDED'
              ? 'border-b-primary text-primary'
              : 'border-b-transparent text-slate-700 dark:text-dark-10'
          )}
        >
          <TbMessageDots size={20} />
          <span className="text-sm font-medium leading-5">Recommend!</span>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export { DataQueryTab };
