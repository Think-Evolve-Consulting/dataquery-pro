import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { LuSendHorizontal } from 'react-icons/lu';
import { PiDownloadSimpleFill } from 'react-icons/pi';

import { VisualizationIcon } from '@/components/Icons/VisualizationIcon';
import { SkeletonLoader } from '@/components/Loader/SkeletonLoader';
import { GraphModal } from '@/components/Modals/GraphModal';
import { useAppConfigration } from '@/contexts/AppConfigration';
import { useDataQueryForm } from '@/contexts/DataQueryForm';

const ReportGeneration = () => {
  const { configration } = useAppConfigration();
  const { goal } = useDataQueryForm();

  const [isLoading, setIsLoading] = useState(false);
  const [generatedData, setGeneratedData] = useState<{
    query: string;
    report: string;
    visualization: string;
  } | null>(null);

  const [isOpenGraphModal, setIsOpenGraphModal] = useState(false);
  const [prompt, setPrompt] = useState(goal?.question);

  const handleGenerateReport = (query: string) => {
    setIsLoading(true);
    axios
      .get(`${configration?.API_ENDPOINT}/generate-report?query=${query}`)
      .then((response) => {
        if (response?.status === 200 && response?.data) {
          setGeneratedData({
            query,
            report: response?.data?.report,
            visualization: `data:image/png;base64, ${response?.data?.visualization}`,
          });
        }
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const question = goal?.question;
    if (question) {
      setPrompt(question);
    }
  }, [goal]);

  const downloadCsv = () => {
    // Step 1: Create a Blob from the CSV string
    const blob = new Blob([generatedData?.report || ''], { type: 'text/csv' });

    // Step 2: Create a temporary download link
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Report Generation.csv';
    link.click();

    // Step 3: Clean up the URL object
    URL.revokeObjectURL(url);
  };

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
          Select a report above or describe a new visualization report to
          generate a visualization.
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
            className="ring-l-none flex cursor-pointer  flex-row items-center gap-1 rounded bg-primary p-2.5 px-5   ring-primary transition duration-500 hover:brightness-110 focus:ring disabled:cursor-not-allowed disabled:opacity-60"
            onClick={() => handleGenerateReport(prompt || '')}
            disabled={isLoading || !prompt}
          >
            <LuSendHorizontal className="text-white" />
            <span className="text-base font-normal text-white">Generate</span>
          </button>
        </div>

        {isLoading && (
          <div className="mt-4 flex flex-col gap-8">
            <div className="relative flex items-center justify-start gap-3 rounded-md bg-secondary px-4 py-3 dark:bg-slate-800">
              <span className="loader" />
              <p className=" text-base font-normal leading-5 text-slate-700  dark:text-dark-10">
                Working on generating interesting visualizations
              </p>
              <div className="absolute bottom-0 left-0 h-[3px] w-full overflow-hidden">
                <div className="size-full animate-leftToRight bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500"></div>
              </div>
            </div>
            <SkeletonLoader />
          </div>
        )}

        {!isLoading && (
          <>
            {/* Question section */}
            <div className="mt-2">
              <p className="text-lg font-semibold leading-5 text-slate-700 dark:dark:text-dark-10">
                {generatedData?.query}
              </p>
            </div>

            {/* Graphs and Code section */}
            {generatedData?.visualization && (
              <div className="mt-2 grid grid-cols-1 gap-4 lg:grid-cols-2">
                <div className="flex flex-col gap-4 rounded-md border border-secondary px-2 pt-4 dark:border-[#e2e8f045]">
                  <div className="self-end">
                    <a
                      href={generatedData?.visualization}
                      download={'graph.png'}
                      className="flex items-center justify-center gap-2 rounded-md border border-primary p-1.5 text-sm font-medium text-primary"
                    >
                      <PiDownloadSimpleFill size={24} />
                    </a>
                  </div>

                  <Image
                    src={generatedData?.visualization || ''}
                    width={1000}
                    height={1000}
                    alt="Graph"
                    className="object-fit cursor-pointer rounded bg-white"
                    onClick={() => setIsOpenGraphModal(false)}
                  />
                </div>

                <div>
                  <button
                    onClick={() => downloadCsv()}
                    className="flex w-full items-center justify-center gap-2 rounded-md border border-primary px-4 py-1.5 text-sm font-medium text-primary lg:w-fit"
                  >
                    <PiDownloadSimpleFill size={24} />
                    DOWNLOAD REPORT
                  </button>
                </div>

                {/* <p className="flex flex-row items-center justify-start gap-1 text-xs font-normal leading-5 text-slate-700 dark:dark:text-dark-10">
                  <ErrorIcon className="size-5" />
                  <span>
                    How was this visualization created? See the specifications
                    and code below.
                  </span>
                </p> */}
              </div>
            )}
          </>
        )}
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

export { ReportGeneration };
