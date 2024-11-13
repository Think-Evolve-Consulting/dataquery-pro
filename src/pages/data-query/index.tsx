import React from 'react';

import { DataQueryTab } from '@/components/Pages/DataQuery/DataQueryTab';
import { GenerationSetting } from '@/components/Pages/DataQuery/GenerationSetting';
import { GoalExploration } from '@/components/Pages/DataQuery/GoalExploration';
import { VisualizationFileSection } from '@/components/Pages/DataQuery/VisualizationFileSection';
import { VisualizationGeneration } from '@/components/Pages/DataQuery/VisualizationGeneration';
import Container from '@/layouts/Container';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main meta={<Meta title="Data Query PRO | Data Query" description="" />}>
      <Container>
        <div className="flex flex-col gap-10">
          {/* Generations Setting */}
          <GenerationSetting />

          {/* Ready? Upload a file to begin. */}
          <VisualizationFileSection />

          {/* Goal Exploration */}
          <GoalExploration />

          {/* Report Generation */}
          <VisualizationGeneration />

          {/* Tab */}
          <DataQueryTab />
        </div>
      </Container>
    </Main>
  );
};

export default Index;
