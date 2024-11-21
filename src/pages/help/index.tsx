import React from 'react';

import { YoutubeVideo } from '@/components/Video/YoutubeVideo';
import Container from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Data Query PRO | Help" description="" />}>
      <Container>
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              How to upload file inside Data Query PRO?
            </h2>
            <YoutubeVideo
              url={process.env.NEXT_PUBLIC_YOUTUBE_UPLOAD_VIDEO || ''}
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              How can I get insights from Data Query PRO?
            </h2>
            <YoutubeVideo
              url={process.env.NEXT_PUBLIC_YOUTUBE_GET_INSIGHTS_VIDEO || ''}
            />
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-semibold leading-5 text-slate-700 dark:text-dark-10 lg:text-3xl">
              Can I get reports from Data Query PRO?
            </h2>
            <YoutubeVideo
              url={process.env.NEXT_PUBLIC_YOUTUBE_GET_REPORT_VIDEO || ''}
            />
          </div>
        </div>
      </Container>
    </Main>
  );
};

export default Index;
