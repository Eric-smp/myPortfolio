import { useState, useEffect, useMemo, createContext, useContext } from "react";
import { GlobalProps, ChildrenType } from "@/types";

export const initialState: GlobalProps = {};

const GlobalContext = createContext<GlobalProps>(initialState);

function GlobalProvider({ children }: ChildrenType) {
  useEffect(() => {}, []);

  const value = useMemo(() => ({}), []);
  return (
    <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>
  );
}

const useGlobal = () => useContext(GlobalContext);

export { GlobalProvider, useGlobal };
