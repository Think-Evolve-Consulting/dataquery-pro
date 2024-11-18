import React, { useState } from 'react';

import { ErrorIcon } from '@/components/Icons/ErrorIcon';
import { SkeletonLoader } from '@/components/Loader/SkeletonLoader';
import { DataQueryTab } from '@/components/Pages/DataQuery/DataQueryTab';
import { GenerationSetting } from '@/components/Pages/DataQuery/GenerationSetting';
import { GoalExploration } from '@/components/Pages/DataQuery/GoalExploration';
import { ReportGeneration } from '@/components/Pages/DataQuery/ReportGeneration';
import { VisualizationFileSection } from '@/components/Pages/DataQuery/VisualizationFileSection';
import Container from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';
import { axios } from '@/services';
import { Main } from '@/templates/Main';
import type { TableNameType } from '@/types/TableNameType';

interface ResponseData {
  columns: string[];
  row_count: number;
  sample_data: { [key: string]: string | number }[];
}

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState<ResponseData | null>(null);
  const [error, setError] = useState<string | null>(null);

  const uploadReport = (tableName: TableNameType, file: File) => {
    setError(null);
    setIsLoading(true);

    const formData = new FormData();
    formData.append('file', file);

    axios
      .post(`/upload-report?table_name=${tableName}`, formData)
      .then((response) => {
        if (response?.status === 200 && response?.data) {
          setData(response.data);
        }
      })
      .catch((e: any) => {
        if (e?.response?.data?.error) {
          setError(e?.response?.data?.error);
          setData(null);
        }
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <Main meta={<Meta title="Data Query PRO | Data Query" description="" />}>
      <Container>
        <div className="flex flex-col gap-10">
          {/* Generations Setting */}
          <GenerationSetting />

          {/* Ready? Upload a file to begin. */}
          <VisualizationFileSection
            setError={setError}
            uploadReport={uploadReport}
          />

          {!isLoading && (
            <>
              {/* Error section :: Error while uploading file */}
              {error && (
                <div className="flex flex-col gap-2.5 py-12">
                  <p className="flex flex-row items-center justify-start gap-1 text-base font-semibold leading-6 text-red-400">
                    <ErrorIcon />
                    <span>An error occurred. Please try again later.</span>
                  </p>
                  <div className="rounded border border-red-400 bg-secondary p-2 px-3 text-base font-normal leading-5 text-slate-700 dark:bg-slate-800 dark:text-dark-10">
                    {error}
                  </div>
                </div>
              )}

              {data && (
                <>
                  {/* Goal Exploration */}
                  <GoalExploration />

                  {/* Report Generation */}
                  <ReportGeneration />

                  {/* Tab */}
                  <DataQueryTab />
                </>
              )}
            </>
          )}

          {isLoading && (
            <div className="flex flex-col gap-6">
              <p className="flex items-center justify-start gap-2 text-base font-normal leading-5 text-slate-700  dark:text-dark-10">
                <span className="loader"></span>
                Uploading data, generating summary
              </p>
              <SkeletonLoader />
            </div>
          )}
        </div>
      </Container>
    </Main>
  );
};

export default Index;
