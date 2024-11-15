import React, { useEffect, useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoBulbOutline } from 'react-icons/io5';
import { twJoin } from 'tailwind-merge';

import { useDataQueryForm } from '@/contexts/DataQueryForm';
import type { GoalType } from '@/types/GoalType';

const GOALS: GoalType[] = [
  {
    id: 1,
    question: 'Map the CLM data to the available inventory',
    answer:
      'histogram of age This tells about the age distribution of the individuals in the LA Riots dataset, which can help identify patterns or trends in the data. scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data. scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data.',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },

  {
    id: 2,
    question: 'What are the top 5 materials by amount in local currency?',
    answer:
      'scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data. scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data. scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data. ',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },

  {
    id: 3,
    question:
      'What are the top 5 materials by description invested in the month of March 2024?',
    answer:
      'histogram of age This tells about the age distribution of the individuals in the LA Riots dataset, which can help identify patterns or trends in the data.',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },

  {
    id: 4,
    question: 'Generate a piechart for the top 5 vendors based on total value.',
    answer:
      'histogram of age This tells about the age distribution of the individuals in the LA Riots dataset, which can help identify patterns or trends in the data. scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data. scatter plot of longitude vs latitude This tells about the geographical distribution of the locations in the LA Riots dataset, which can help identify patterns or trends in the data.',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },

  {
    id: 5,
    question:
      'Pie chart for top 5 material descriptions invested in March 2024.',
    answer:
      'histogram of age This tells about the age distribution of the individuals in the LA Riots dataset, which can help identify patterns or trends in the data.',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },

  {
    id: 6,
    question: 'Line chart for inventory levels of catalogue number ___.',
    answer:
      'histogram of age This tells about the age distribution of the individuals in the LA Riots dataset, which can help identify patterns or trends in the data.',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },
  {
    id: 7,
    question: 'Line chart for inventory levels of material code ___.',
    answer:
      'histogram of age This tells about the age distribution of the individuals in the LA Riots dataset, which can help identify patterns or trends in the data.',
    tag: 'Scatter plot of Horsepower vs Acceleration',
  },
];

const GoalExploration = () => {
  const { goal, setGoal } = useDataQueryForm();

  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    setGoal(GOALS?.[0] || null);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-start gap-1">
        <IoBulbOutline size={24} className="text-slate-700 dark:text-dark-10" />
        <p className=" text-xl font-semibold leading-5 text-slate-700 dark:dark:text-dark-10">
          Goal Exploration
        </p>
      </div>

      <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
        A list of automatically generated data exploration goals (hypothesis)
        based on the data summary above.
      </p>

      <div className="rounded border border-secondary dark:border-slate-800">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full flex-row items-center justify-start gap-1 rounded-t bg-secondary p-3 dark:bg-slate-800"
        >
          <IoIosArrowDown
            className={twJoin(
              'text-slate-700/50 dark:text-dark-10',
              isExpanded ? 'rotate-180' : 'rotate-0'
            )}
          />

          <span className="text-xs font-normal text-slate-700 dark:text-dark-10">
            Goals ({GOALS?.length})
          </span>
        </button>

        {isExpanded && (
          <div className="rounded-b bg-gray-50 p-3 dark:bg-[#27354c]">
            <div className="custom-scroll flex w-full flex-row flex-nowrap gap-3 overflow-x-auto">
              {GOALS &&
                GOALS?.length > 0 &&
                GOALS?.map(({ id, question, answer, tag }) => (
                  <div
                    key={id}
                    className={twJoin(
                      'mb-3 min-w-[280px] cursor-pointer rounded border  bg-secondary p-2 dark:bg-slate-800',
                      goal?.id === id
                        ? 'border-primary'
                        : 'border-secondary dark:border-[#e2e8f045]'
                    )}
                    onClick={() => setGoal({ id, question, answer, tag })}
                  >
                    <div className="flex flex-col gap-1">
                      <p className="text-base font-normal leading-5 text-slate-700 dark:text-dark-10">
                        <span>
                          <span className="m-1 inline-block border-r-2 border-primary pr-2 text-base font-semibold">
                            {id}
                          </span>
                        </span>
                        {question}
                      </p>
                      <p className="text-xs font-normal leading-4 text-gray-500 dark:text-dark-10">
                        {answer}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { GoalExploration };
