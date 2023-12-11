import { useState, useEffect, useMemo, createContext, useContext } from "react";
import { GlobalProps, ChildrenType } from "@/types";

export const initialState: GlobalProps = {
  visibleMenuMobile: false,
  setVisibleMenuMobile: () => {},
};

const GlobalContext = createContext<GlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  const [visibleMenuMobile, setVisibleMenuMobile] = useState<boolean>(false);

  useEffect(() => {}, [visibleMenuMobile, setVisibleMenuMobile]);

  const value = useMemo(
    () => ({
      visibleMenuMobile,
      setVisibleMenuMobile,
    }),
    [visibleMenuMobile, setVisibleMenuMobile]
  );
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
