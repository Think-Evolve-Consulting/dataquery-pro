import React, { useState } from 'react';

import { ErrorIcon } from '@/components/Icons/ErrorIcon';
import { UploadIcon } from '@/components/Icons/UploadIcon';

import { UploadFile } from './UploadFile';

const VisualizationFileSection = () => {
  const [errorFileType, setErrorFileType] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row items-center justify-start gap-1.5 text-slate-700 dark:dark:text-dark-10">
        <UploadIcon />
        <p className=" text-base font-semibold leading-5">Ready?</p>
        <p className=" text-sm font-normal leading-5">
          Upload a file to begin. (Upload .xlxs or .csv files to generate a
          visualization.)
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
        <UploadFile
          title="GRN"
          onFileUpload={() => {}}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={(file) => {
            setErrorFileType(file?.type);
          }}
        />

        <UploadFile
          title="Stock Statement"
          onFileUpload={() => {}}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={(file) => {
            setErrorFileType(file?.type);
          }}
        />

        <UploadFile
          title="Purchase Report"
          onFileUpload={() => {}}
          onFileUploadRejection={(file) => {
            setErrorFileType(file?.type);
          }}
        />

        <UploadFile
          title="TECO Report"
          onFileUpload={() => {}}
          onFileUploadRejection={(file) => {
            setErrorFileType(file?.type);
          }}
        />

        <UploadFile
          title="Reservation Report"
          onFileUpload={() => {}}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={(file) => {
            setErrorFileType(file?.type);
          }}
        />

        <UploadFile
          title="CLM Data"
          onFileUpload={() => {}}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={(file) => {
            setErrorFileType(file?.type);
          }}
        />
      </div>

      {errorFileType && (
        <div className="flex flex-col gap-2.5">
          <p className="flex flex-row items-center justify-start gap-1 text-base font-semibold leading-6 text-red-400">
            <ErrorIcon />
            <span>An error occurred. Please try again later.</span>
          </p>
          <div className="rounded border border-red-400 bg-secondary p-2 px-3 text-base font-normal leading-5 text-slate-700 dark:bg-slate-800 dark:text-dark-10">
            Uploaded file type ({errorFileType}) not allowed. Allowed types are:
            csv, excel.
          </div>
        </div>
      )}
    </div>
  );
};

export { VisualizationFileSection };
