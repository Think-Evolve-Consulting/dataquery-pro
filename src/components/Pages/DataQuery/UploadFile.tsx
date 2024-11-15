import dayjs from 'dayjs';
import React, { useCallback } from 'react';
import type { FileRejection } from 'react-dropzone';
import { useDropzone } from 'react-dropzone';

import { FileIcon } from '@/components/Icons/FileIcon';

interface UploadFileProps {
  title: string;
  lastUpdatedAt?: string | Date;
  onFileUpload: (file: File) => void;
  onFileUploadRejection: (file: File) => void;
}

const UploadFile = ({
  title,
  lastUpdatedAt,
  onFileUpload,
  onFileUploadRejection,
}: UploadFileProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[], fileRejections: FileRejection[]) => {
      if (fileRejections?.length) {
        const file: File = fileRejections?.[0]?.file as unknown as File;
        onFileUploadRejection(file);
        return;
      }

      onFileUpload(acceptedFiles?.[0] as File);
    },
    []
  );

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'text/csv': ['.csv'],
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
        '.xlsx',
      ],
    },
    multiple: false,
    onDrop,
  });

  return (
    <div className="flex w-full flex-col gap-1">
      <div
        {...getRootProps()}
        className="flex w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-gray-50/40 p-5 hover:border-primary dark:bg-transparent hover:dark:border-primary sm:aspect-square"
      >
        <input {...getInputProps()} />

        <span className="text-slate-700 dark:dark:text-dark-10">
          <FileIcon />
        </span>

        <p className="text-center  text-sm font-medium leading-5 text-slate-700 dark:dark:text-dark-10">
          Upload {title}
        </p>
      </div>

      {lastUpdatedAt && (
        <p className="text-center  text-sm font-normal leading-5 text-slate-500 dark:dark:text-dark-10">
          Last Updated: {dayjs(lastUpdatedAt)?.format('DD/MM/YY')}
        </p>
      )}
    </div>
  );
};

export { UploadFile };
