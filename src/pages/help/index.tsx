import React from 'react';

import { YoutubeVideo } from '@/components/Video/YoutubeVideo';
import { useAppConfigration } from '@/contexts/AppConfigration';
import Container from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  const { configration } = useAppConfigration();

  return (
    <Main meta={<Meta title="Data Query PRO | Help" description="" />}>
      <Container>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              How to map CLM data with existing inventory using Data Query PRO?
            </h2>
            <YoutubeVideo url={configration?.YOUTUBE_CLM_VIDEO || ''} />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              How can I get insights from Data Query PRO?
            </h2>
            <YoutubeVideo
              url={configration?.YOUTUBE_GET_INSIGHTS_VIDEO || ''}
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              How to upload a stock statement on DataQuery PRO?
            </h2>
            <YoutubeVideo url={configration?.YOUTUBE_GET_STOCK_UPLOAD || ''} />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              Can I get inactive material report by uploading TECO report?
            </h2>
            <YoutubeVideo url={configration?.YOUTUBE_GET_TECO_VIDEO || ''} />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              Can I use catalogue number to search for inventory?
            </h2>
            <YoutubeVideo url={configration?.YOUTUBE_GET_CATCODE_VIDEO || ''} />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              How can I get insights into Purchase data?
            </h2>
            <YoutubeVideo
              url={configration?.YOUTUBE_GET_PURCHASE_VIDEO || ''}
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              Can I use material name or description to search for inventory?
            </h2>
            <YoutubeVideo url={configration?.YOUTUBE_GET_MATDESC_VIDEO || ''} />
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              Can I use material code to search for inventory?
            </h2>
            <YoutubeVideo url={configration?.YOUTUBE_GET_MATCODE_VIDEO || ''} />
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Index;
