import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FiltersState {
  [key: string]: string | boolean;
}

const initialState: FiltersState = {};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{ key: string; value: string | boolean }>
    ) => {
      state[action.payload.key] = action.payload.value;
    },
    clearFilters: () => initialState,
  },
});

export const { setFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
