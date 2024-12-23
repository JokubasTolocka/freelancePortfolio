import { useContext } from "react";
import { HeaderTitleContext } from "./HeaderTitleContextProvider";

export const useHeaderTitleContext = () => {
  const context = useContext(HeaderTitleContext);

  if (!context)
    throw new Error(
      "HeaderTitleContext must be called from within the HeaderTitleContextProvider"
    );

  return context;
};
