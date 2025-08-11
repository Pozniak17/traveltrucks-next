import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCampers, FetchCampersResponse } from "./operations";
import { CamperOptions } from "../types/Card.types";

export interface CampersState {
  items: CamperOptions[];
  isLoading: boolean;
  error: string | null;
  total: number;
}

const initialState: CampersState = {
  items: [],
  isLoading: false,
  error: null,
  total: 0,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    clearCampers(state) {
      state.items = [];
      state.total = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(
        fetchCampers.fulfilled,
        (state, action: PayloadAction<FetchCampersResponse>) => {
          state.items = action.payload.items;
          state.total = action.payload.total;
          state.isLoading = false;
        }
      )
      .addCase(fetchCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string) ?? "Unknown error";
      });
  },
});

export const { clearCampers } = campersSlice.actions;
export default campersSlice.reducer;
