import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  fact: "",
  status: "idle",
  error: null,
};

const FACT_URL = "https://catfact.ninja/fact";

export const fetchCatFacts = createAsyncThunk(
  "catFact/getCatFacts",
  async () => {
    const response = await axios.get(FACT_URL);
    return response.data.fact;
  }
);

const catFactSlice = createSlice({
  name: "catFact",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCatFacts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCatFacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fact = action.payload;
      })
      .addCase(fetchCatFacts.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export const getCatFact = (state) => state.catFact.fact;
export const getFactStatus = (state) => state.catFact.status;
export const getFactError = (state) => state.catFact.error;

export const { actions, reducer } = catFactSlice;

export default reducer;
