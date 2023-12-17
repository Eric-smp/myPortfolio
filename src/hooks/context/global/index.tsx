import { useState, useEffect, useMemo, createContext, useContext } from "react";
import { GlobalProps, ChildrenType } from "@/types";

export const initialState: GlobalProps = {
  visibleMenuLeft: false,
  setVisibleMenuLeft: () => {},
  isSideBarVisible: false,
  setIsSideBarVisible: () => {},
};

const GlobalContext = createContext<GlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const [visibleMenuLeft, setVisibleMenuLeft] = useState<boolean>(false);
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);

  useEffect(() => {}, [visibleMenuLeft, setVisibleMenuLeft]);

  const value = useMemo(
    () => ({
      visibleMenuLeft,
      isSideBarVisible,
      setIsSideBarVisible,
      setVisibleMenuLeft,
    }),
    [visibleMenuLeft, isSideBarVisible]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
