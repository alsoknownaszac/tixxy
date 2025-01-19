import { createContext, useReducer } from "react";

export const AppContext = createContext(null);
export const AppDispatchContext = createContext(null);

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialVal);

  return (
    <AppContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppContext.Provider>
  );
}

function appReducer(state, action) {
  switch (action.type) {
    case "switchMode": {
      return {
        ...state,
        mode: !state.mode,
      };
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}

const initialVal = { mode: false };
