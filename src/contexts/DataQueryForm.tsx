import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { createContext, useContext, useState } from 'react';

import type { GoalType } from '@/types/GoalType';

type ContextType = {
  goal: GoalType | null;
  setGoal: Dispatch<SetStateAction<GoalType | null>>;
};

const dataQueryFormContext = createContext<ContextType>({
  goal: null,
  setGoal: () => {},
});

const DataQueryFormProvider = ({ children }: { children: ReactNode }) => {
  const [goal, setGoal] = useState<GoalType | null>(null);

  return (
    <dataQueryFormContext.Provider value={{ goal, setGoal }}>
      {children}
    </dataQueryFormContext.Provider>
  );
};

export { DataQueryFormProvider };

export const useDataQueryForm = () => {
  return useContext(dataQueryFormContext);
};
