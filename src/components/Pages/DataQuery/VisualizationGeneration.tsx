import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LuSendHorizonal } from 'react-icons/lu';
import { PiDownloadSimpleFill } from 'react-icons/pi';

import { ErrorIcon } from '@/components/Icons/ErrorIcon';
import { VisualizationIcon } from '@/components/Icons/VisualizationIcon';
import { GraphModal } from '@/components/Modals/GraphModal';
import { useDataQueryForm } from '@/contexts/DataQueryForm';

const VisualizationGeneration = () => {
  const { goal } = useDataQueryForm();

  const [isOpenGraphModal, setIsOpenGraphModal] = useState(false);
  const [prompt, setPrompt] = useState(goal?.question);

  useEffect(() => {
    setPrompt(goal?.question);
  }, [goal]);

  return (
    <div>
      <div className="flex flex-col gap-2">
        {/* Section Heading */}
        <div className="flex flex-row items-center justify-start gap-1 text-slate-700 dark:dark:text-dark-10">
          <span>
            <VisualizationIcon />
          </span>
          <p className=" text-xl font-semibold leading-5 ">Report Generation</p>
        </div>

        <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
          Select a goal above or describe a new visualization goal to generate a
          visualization.
        </p>

        <div className="flex gap-2 rounded border border-secondary p-3 dark:border-[#e2e8f045]">
          <input
            className="w-full flex-1 rounded border border-secondary p-3 text-sm font-normal text-gray-700"
            placeholder="Enter Prompt"
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e?.target?.value)}
          />

          <button
            role="button"
            className="ring-l-none flex cursor-pointer  flex-row items-center gap-1 rounded bg-primary p-2.5 px-5   ring-primary transition duration-500 hover:brightness-110 focus:ring"
          >
            <LuSendHorizonal className="text-white" />
            <span className="text-base font-normal text-white">Generate</span>
          </button>
        </div>

        {/* Question section */}
        <div className="mt-2">
          <p className="text-lg font-semibold leading-5 text-slate-700 dark:dark:text-dark-10">
            {goal?.question}
          </p>

          <p className="text-sm font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
            {goal?.answer}
          </p>

          <p className="text-sm font-normal leading-5 text-primary">
            {goal?.tag}
          </p>
        </div>

        {/* Graphs and Code section */}
        <div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="relative rounded-md border border-secondary px-2 pt-4 dark:border-[#e2e8f045]">
            <a
              href={'/assets/graph.png'}
              download={'graph.png'}
              className="absolute right-4 top-4 rounded-md border border-primary p-1 text-primary"
            >
              <PiDownloadSimpleFill size={24} />
            </a>

            <Image
              src={'/assets/graph.png'}
              width={1000}
              height={1000}
              alt="Graph"
              className="object-fit cursor-pointer rounded bg-white"
              onClick={() => setIsOpenGraphModal(true)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <p className="flex flex-row items-center justify-start gap-1 text-xs font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
              <ErrorIcon className="h-5 w-5" />
              <span>
                How was this visualization created? See the specifications and
                code below.
              </span>
            </p>

            <div className="h-full rounded-md border border-secondary px-2 py-4 dark:border-[#e2e8f045]">
              {/* <Image
                src={'/assets/graph.png'}
                width={1000}
                height={1000}
                alt="Graph"
                className="object-fit rounded bg-white"
              /> */}

              {/* <SyntaxHighlighter language="python" style={monokai}>
              {`import seaborn as sns
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# solution plan
# i. Create a scatter plot of Horsepower vs Acceleration
# ii. Add a regression line to the plot
# iii. Add a legend with various colors
def plot(data: pd.DataFrame):

    plt.figure(figsize=(10,6))
    sns.regplot(x="Horsepower", y="Acceleration", data=data, ci=None)
    plt.title('What is the relationship between Horsepower and Acceleration?', wrap=True)
    return plt;

chart = plot(data)`}
            </SyntaxHighlighter> */}
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <GraphModal
        isOpen={isOpenGraphModal}
        setIsOpen={setIsOpenGraphModal}
        url="/assets/graph.png"
      />
    </div>
  );
};

export { VisualizationGeneration };
