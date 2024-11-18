import React from 'react';

import { UploadIcon } from '@/components/Icons/UploadIcon';
import type { TableNameType } from '@/types/TableNameType';

import { UploadFile } from './UploadFile';

// const TABLE_LISTS: TableNameType[] = [
//   'grnReport',
//   'StockReport',
//   'purchaseReport',
//   'inactiveWBSE',
//   'inventoryLevels',
// ];

interface VisualizationFileSectionProps {
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  uploadReport: (tableName: TableNameType, file: File) => void;
}

const VisualizationFileSection = ({
  setError,
  uploadReport,
}: VisualizationFileSectionProps) => {
  // const getData = async () => {
  //   setIsLoading(true);
  //   await getTablesUpdatedDate(TABLE_LISTS);
  //   setIsLoading(false);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);

  const onFileUploadRejection = (file: File) => {
    setError(`Uploaded file type (${file?.type}) not allowed. Allowed types are:
      csv, excel.`);
  };

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
          tableName="grnReport"
          onFileUpload={(file) => {
            uploadReport('grnReport', file);
          }}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={onFileUploadRejection}
        />

        <UploadFile
          title="Stock Statement"
          onFileUpload={(file) => {
            uploadReport('StockReport', file);
          }}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={onFileUploadRejection}
          tableName="StockReport"
        />

        <UploadFile
          title="Purchase Report"
          onFileUpload={(file) => {
            uploadReport('purchaseReport', file);
          }}
          onFileUploadRejection={onFileUploadRejection}
          tableName="purchaseReport"
        />

        <UploadFile
          title="TECO Report"
          onFileUpload={(file) => {
            uploadReport('inactiveWBSE', file);
          }}
          onFileUploadRejection={onFileUploadRejection}
          tableName="inactiveWBSE"
        />

        <UploadFile
          title="Reservation Report"
          onFileUpload={(file) => {
            uploadReport('inventoryLevels', file);
          }}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={onFileUploadRejection}
          tableName="inventoryLevels"
        />

        <UploadFile
          title="CLM Data"
          onFileUpload={(file) => {
            uploadReport('StockReport', file);
          }}
          lastUpdatedAt={new Date()}
          onFileUploadRejection={(file) => {
            setError(`Uploaded file type (${file?.type}) not allowed. Allowed types are:
            csv, excel.`);
          }}
          tableName="StockReport" // Need to fix when table name confirm
        />
      </div>
    </div>
  );
};

export { VisualizationFileSection };
