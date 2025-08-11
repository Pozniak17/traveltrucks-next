import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// замість useDispatch()
export const useAppDispatch = () => useDispatch<AppDispatch>();

// замість useSelector()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
