import { useContext } from "react";
import { AppContext, AppDispatchContext } from "./appReducer";

export function useGlobalState() {
  return useContext(AppContext);
}

export function useGlobalReducer() {
  return useContext(AppDispatchContext);
}
