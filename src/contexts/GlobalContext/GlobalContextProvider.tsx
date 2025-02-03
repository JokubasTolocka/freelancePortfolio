import React, {
  createContext,
  useState,
  PropsWithChildren,
  useMemo,
  Dispatch,
  SetStateAction,
} from "react";
import ContactPopup from "../../modules/ContactPopup";

type ContextType = {
  shouldExplode: boolean;
  setShouldExplode: Dispatch<SetStateAction<boolean>>;
  openContactPopup: () => void;
  closeContactPopup: () => void;
};

export const GlobalContext = createContext<ContextType | null>(null);

const GlobalContextProvider = ({ children }: PropsWithChildren) => {
  const [shouldExplode, setShouldExplode] = useState<boolean>(false);
  const [isContactPopupOpen, setIsContactPopupOpen] = useState<boolean>(false);

  const openContactPopup = () => setIsContactPopupOpen(true);
  const closeContactPopup = () => setIsContactPopupOpen(false);

  return (
    <GlobalContext.Provider
      value={{
        shouldExplode,
        setShouldExplode,
        openContactPopup,
        closeContactPopup,
      }}
    >
      {children}
      {isContactPopupOpen && <ContactPopup />}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
