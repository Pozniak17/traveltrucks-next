import axios, { AxiosError } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CamperOptions } from "../types/Card.types";

axios.defaults.baseURL = "https://66b1f8e71ca8ad33d4f5f63e.mockapi.io";

export interface FetchCampersArgs {
  limit: number;
  filters?: Record<string, string | boolean>;
}

export interface FetchCampersResponse {
  items: CamperOptions[];
  total: number;
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchCampers = createAsyncThunk<
  FetchCampersResponse,
  FetchCampersArgs,
  { rejectValue: string }
>("campers/fetchCampers", async ({ limit, filters }, thunkAPI) => {
  try {
    const response = await axios.get<FetchCampersResponse>("/campers", {
      params: {
        page: 1,
        limit,
        ...filters,
      },
    });

    await delay(500); // для тесту завантаження

    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return thunkAPI.rejectWithValue(err.message || "Failed to fetch campers");
  }
});
