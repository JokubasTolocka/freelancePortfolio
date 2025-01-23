import { useContext } from "react";
import { GlobalContext } from "./GlobalContextProvider";

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);

  if (!context)
    throw new Error(
      "GlobalContext must be called from within the GlobalContextProvider"
    );

  return context;
};
