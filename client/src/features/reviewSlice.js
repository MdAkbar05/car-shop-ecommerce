import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async Thunks for interacting with the server

// Fetch all reviews for a car
export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async (carId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/reviews`);
      const reviews = response.data.reviews.filter(
        (review) => review.carId === carId
      );
      return reviews;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Submit a new review
export const submitReview = createAsyncThunk(
  "reviews/submitReviews",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/reviews",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      return response.data.newReview;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

// Review Slice
const reviewSlice = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle fetchReviews
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.message;
      })
      // Handle submitReview
      .addCase(submitReview.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitReview.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews.push(action.payload); // Add new review to state
      })
      .addCase(submitReview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default reviewSlice.reducer;
