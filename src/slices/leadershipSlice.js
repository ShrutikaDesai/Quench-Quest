import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getLeadership, updateLeadership } from "../api/aboutApi";

// GET leadership
export const fetchLeadership = createAsyncThunk(
  "leadership/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const res = await getLeadership();
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

// PUT leadership member
export const updateLeadershipData = createAsyncThunk(
  "leadership/update",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await updateLeadership(id, data);
      return res.data;
    } catch (err) {
      return rejectWithValue(err.response?.data || err.message);
    }
  }
);

const leadershipSlice = createSlice({
  name: "leadership",
  initialState: {
    items: null,
    loading: false,
    success: false,
    error: null,
    updated: false,
  },
  reducers: {
    resetLeadershipState: (state) => {
      state.success = false;
      state.error = null;
      state.updated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLeadership.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchLeadership.fulfilled, (state, action) => {
        state.loading = false;
        const payload = action.payload;
        if (Array.isArray(payload)) state.items = payload;
        else if (payload && typeof payload === "object") {
          if (Array.isArray(payload.results)) state.items = payload.results;
          else state.items = Array.isArray(payload) ? payload : [payload];
        } else state.items = null;
        state.error = null;
        state.updated = false;
      })
      .addCase(fetchLeadership.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateLeadershipData.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateLeadershipData.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        const payload = action.payload;
        const id = payload?.id ?? payload?.pk;
        if (Array.isArray(state.items) && id) {
          const idx = state.items.findIndex((i) => (i?.id ?? i?.pk) === id);
          if (idx !== -1) state.items[idx] = payload;
          else state.items.push(payload);
        } else {
          state.items = Array.isArray(payload) ? payload : [payload];
        }
        state.updated = true;
      })
      .addCase(updateLeadershipData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetLeadershipState } = leadershipSlice.actions;
export default leadershipSlice.reducer;
