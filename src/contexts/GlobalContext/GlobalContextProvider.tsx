import React, {
  createContext,
  useState,
  PropsWithChildren,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";

type ContextType = {
  shouldExplode: boolean;
  setShouldExplode: Dispatch<SetStateAction<boolean>>;
};

export const GlobalContext = createContext<ContextType | null>(null);

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [shouldExplode, setShouldExplode] = useState<boolean>(false);

  const enableExplosion = () => setShouldExplode(!shouldExplode);

  return (
    <GlobalContext.Provider value={{ shouldExplode, setShouldExplode }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
