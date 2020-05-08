import React, { createContext } from "react";
import { appTypes } from "./app.types";
import { Theme } from "../enum/theme";

interface AppProviderProps {
  children: React.ReactNode;
}
type Dispatch = (action: any) => void;

interface AppProps {
  theme: Theme;
}
const initialState: AppProps = {
  theme: Theme.DARK,
};
const AppStateContext = createContext<AppProps | undefined>(undefined);
const AppDispatchContext = createContext<Dispatch | undefined>(undefined);

function appReducer(state: AppProps, action: any) {
  switch (action.type) {
    case appTypes.SET_DARK_THEME: {
      return { ...state, theme: Theme.DARK };
    }
    case appTypes.SET_LIGHT_THEME: {
      return { ...state, theme: Theme.LIGHT };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function AppProvider({ children }: AppProviderProps) {
  const [state, dispatch] = React.useReducer(appReducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch as any}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

function useAppState() {
  const context = React.useContext(AppStateContext);
  if (context === undefined) {
    throw new Error("useAppState must be used within a App Provider");
  }
  return context;
}

function useDispatch() {
  const context = React.useContext(AppDispatchContext);
  if (context === undefined) {
    throw new Error("appDispatch must be used within a App Provider");
  }
  return context;
}

export { AppProvider, useDispatch, useAppState };
