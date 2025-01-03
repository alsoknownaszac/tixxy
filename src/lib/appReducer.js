import { createContext, useReducer } from "react";

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

export function AppProvider({ children }) {
  const [app, dispatch] = useReducer(appReducer, initialVal);

  return (
    <AppContext.Provider value={app}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

function appReducer(app, action) {
  switch (action.type) {
    case "switch_mode": {
      return {
        mode: action.mode,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialVal = { mode: false };
