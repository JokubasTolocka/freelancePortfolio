import React, { createContext, useState, PropsWithChildren } from "react";

type ContextType = {
  titleValue: SectionTitleEnum;
  setHeaderTitle: (value: SectionTitleEnum) => void;
};

export enum SectionTitleEnum {
  Landing = "Landing",
  Work = "Recent Work",
  Experience = "Experience",
  Education = "Education",
  About = "About",
}

export const HeaderTitleContext = createContext<ContextType | null>(null);

const HeaderTitleContextProvider = ({ children }: PropsWithChildren) => {
  const [titleValue, setTitleValue] = useState<SectionTitleEnum>(
    SectionTitleEnum.Landing
  );

  const setHeaderTitle = (value: SectionTitleEnum) => setTitleValue(value);

  return (
    <HeaderTitleContext.Provider value={{ titleValue, setHeaderTitle }}>
      {children}
    </HeaderTitleContext.Provider>
  );
};

export default HeaderTitleContextProvider;
