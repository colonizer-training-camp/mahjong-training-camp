import { PropsWithChildren, createContext, useContext } from "react";
import { GameTypeResponse } from "../types/GameTypeResponse";
import { UserResponse } from "../types/UserResponse";
import useGameTypes from "../api/useGameTypes";
import useJyanshis from "../api/useJyanshis";

export interface GlobalsContextValues {
  gameTypes: GameTypeResponse[] | null;
  jyanshis: UserResponse[] | null;
}

const GlobalsContext = createContext<GlobalsContextValues>({
  gameTypes: null,
  jyanshis: null,
});

export const GlobalsContextProvider = ({ children }: PropsWithChildren) => {
  const gameTypes = useGameTypes();
  const jyanshis = useJyanshis();

  return (
    <GlobalsContext.Provider value={{ gameTypes, jyanshis }}>
      {children}
    </GlobalsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobals = () => useContext(GlobalsContext);
