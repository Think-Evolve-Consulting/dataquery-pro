import '../styles/global.css';

import type { AppProps } from 'next/app';

import { DarkModeProvider } from '@/contexts/DarkMode';
import { DataQueryFormProvider } from '@/contexts/DataQueryForm';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <DarkModeProvider>
    <DataQueryFormProvider>
      <Component {...pageProps} />
    </DataQueryFormProvider>
  </DarkModeProvider>
);

export default MyApp;
