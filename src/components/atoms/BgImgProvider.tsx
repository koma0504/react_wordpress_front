import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

interface BgImgContextProps {
  backgroundImage: string;
  setBackgroundImage: Dispatch<SetStateAction<string>>;
}
const defaultValues: BgImgContextProps = {
  backgroundImage: "",
  setBackgroundImage: () => {},
};
const BgImgContext = createContext<BgImgContextProps>(defaultValues);

export const useImageContext = () => {
  return useContext(BgImgContext);
};

export const BgImgProvider = ({ children }: { children: ReactNode }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  return (
    <BgImgContext.Provider value={{ backgroundImage, setBackgroundImage }}>
      {children}
    </BgImgContext.Provider>
  );
};
