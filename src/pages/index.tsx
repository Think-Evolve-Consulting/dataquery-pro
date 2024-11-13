import React from 'react';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

export async function getServerSideProps() {
  return {
    redirect: {
      permanent: true,
      destination: '/data-query',
    },
  };
}

const Index = () => {
  return (
    <Main meta={<Meta title="Data Query PRO | Help" description="" />}>
      <div></div>
    </Main>
  );
};

export default Index;
