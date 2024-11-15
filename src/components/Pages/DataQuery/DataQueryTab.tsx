import React, { useState } from 'react';
import { AiOutlineMessage } from 'react-icons/ai';
import { IoBulbOutline } from 'react-icons/io5';
import { TbMessageDots } from 'react-icons/tb';
import { twJoin } from 'tailwind-merge';

import { EvaluateIcon } from '@/components/Icons/EvaluateIcon';

type TabType = 'REFINE' | 'EXPLAIN' | 'EVALUATE' | 'RECOMMENDED';
const DataQueryTab = () => {
  const [tab, setTab] = useState<TabType>('REFINE');

  return (
    <div>
      <div className="flex w-full flex-row items-center justify-start gap-2 overflow-x-auto border-b border-b-secondary dark:border-b-[#e2e8f045] sm:gap-6">
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
          <EvaluateIcon />
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
          <IoBulbOutline size={20} />
          <span className="text-sm font-medium leading-5">Recommend!</span>
        </button>
      </div>

      <div>
        {tab === 'REFINE' && (
          <div className="flex flex-col gap-2 py-5">
            <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
              Modify Chart with Natural Language commands.
            </p>

            <div className="relative rounded rounded-b-none bg-secondary p-2 dark:bg-slate-700">
              <input
                className="w-full rounded bg-white p-2 text-sm font-normal text-gray-600 outline-none"
                placeholder="Change x axis label to Meters per Second"
                type="input"
              />
            </div>
          </div>
        )}

        {tab === 'EXPLAIN' && (
          <div className="flex flex-col gap-2 py-5">
            <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
              Use the explain visualization button below to generate an
              explanation for the chart.
            </p>
            <button
              role="button"
              className="ring-l-none flex w-fit cursor-pointer flex-row items-center gap-2 rounded bg-primary px-5   py-2 text-white ring-primary transition duration-500 hover:brightness-110 focus:ring"
            >
              <AiOutlineMessage size={18} />
              <span className="text-sm font-normal">Explain the chart.</span>
            </button>
          </div>
        )}

        {tab === 'EVALUATE' && (
          <div className="flex flex-col gap-2 py-5">
            <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
              Use the evaluate visualization button below to generate
              self-evaluation scores for the chart.
            </p>
            <button
              role="button"
              className="ring-l-none flex w-fit cursor-pointer flex-row items-center gap-2 rounded bg-primary px-5   py-2 text-white ring-primary transition duration-500 hover:brightness-110 focus:ring"
            >
              <EvaluateIcon />
              <span className="text-sm font-normal">Evaluate the chart.</span>
            </button>
          </div>
        )}

        {tab === 'RECOMMENDED' && (
          <div className="flex flex-col gap-2 py-5">
            <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
              Generate similar charts.
            </p>
            <button
              role="button"
              className="ring-l-none flex w-fit cursor-pointer flex-row items-center gap-2 rounded bg-primary px-5   py-2 text-white ring-primary transition duration-500 hover:brightness-110 focus:ring"
            >
              <IoBulbOutline size={20} />
              <span className="text-sm font-normal">
                Generate Recommendations
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export { DataQueryTab };
