import React, { createContext, useState, useContext, ReactNode } from "react";

interface HoverContextProps {
  isHovering: any;
  setIsHovering: any;
}

const HoverContext = createContext<HoverContextProps | undefined>(undefined);

export const useHover = () => {
  const context = useContext(HoverContext);
  if (!context) {
    throw new Error("useHover must be used within a HoverProvider");
  }
  return context;
};

export const HoverContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <HoverContext.Provider value={{ isHovering, setIsHovering }}>
      {children}
    </HoverContext.Provider>
  );
};
