import '../styles/global.css';

import type { AppProps } from 'next/app';

import { AppConfigrationProvider } from '@/contexts/AppConfigration';
import { DarkModeProvider } from '@/contexts/DarkMode';
import { DataQueryFormProvider } from '@/contexts/DataQueryForm';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DarkModeProvider>
    <AppConfigrationProvider>
      <DataQueryFormProvider>
        <Component {...pageProps} />
      </DataQueryFormProvider>
    </AppConfigrationProvider>
  </DarkModeProvider>
);

export default MyApp;
