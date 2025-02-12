import type { ReactNode } from 'react';
import { createContext, useContext, useEffect, useState } from 'react';

import type { AppConfigrationType } from '@/types/AppConfigrationType';

type ContextType = {
  configration: AppConfigrationType | null;
};

const AppConfigrationContext = createContext<ContextType>({
  configration: null,
});

const AppConfigrationProvider = ({ children }: { children: ReactNode }) => {
  const [configration, setConfigration] = useState<AppConfigrationType | null>(
    null
  );

  useEffect(() => {
    fetch('/api/configration')
      .then((res) => res.json())
      .then((config) => setConfigration(config))
      .catch(() => console.error('Failed to load environment variables'));
  }, []);

  return (
    <AppConfigrationContext.Provider value={{ configration }}>
      {children}
    </AppConfigrationContext.Provider>
  );
};

export { AppConfigrationProvider };

export const useAppConfigration = () => {
  return useContext(AppConfigrationContext);
};
