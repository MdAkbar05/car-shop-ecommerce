import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Base URL for the API
const API_URL = "http://localhost:5000/api/cars";

// Async Thunks for API calls

// Fetch all cars
export const fetchAllCars = createAsyncThunk(
  "cars/fetchAll",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Fetch car by ID
export const fetchCarById = createAsyncThunk(
  "cars/fetchById",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/${id}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create a new car
export const createCar = createAsyncThunk(
  "cars/create",
  async (carData, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.keys(carData).forEach((key) => formData.append(key, carData[key]));

      const response = await axios.post(API_URL, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Update a car
export const updateCar = createAsyncThunk(
  "cars/update",
  async ({ id, carData }, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      Object.keys(carData).forEach((key) => formData.append(key, carData[key]));

      const response = await axios.put(`${API_URL}/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Delete a car
export const deleteCar = createAsyncThunk(
  "cars/delete",
  async (id, { rejectWithValue }) => {
    try {
      const response = await axios.delete(`${API_URL}/${id}`);
      return { id, message: response.data.message };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  cars: [],
  car: null,
  status: "idle",
  error: null,
};

// Car slice
const carSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch all cars
      .addCase(fetchAllCars.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCars.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = action.payload;
      })
      .addCase(fetchAllCars.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Fetch car by ID
      .addCase(fetchCarById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.car = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Create a new car
      .addCase(createCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createCar.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars.push(action.payload);
      })
      .addCase(createCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Update a car
      .addCase(updateCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCar.fulfilled, (state, action) => {
        state.status = "succeeded";
        const index = state.cars.findIndex(
          (car) => car._id === action.payload._id
        );
        if (index !== -1) {
          state.cars[index] = action.payload;
        }
      })
      .addCase(updateCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Delete a car
      .addCase(deleteCar.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cars = state.cars.filter((car) => car._id !== action.payload.id);
      })
      .addCase(deleteCar.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

// Export the async thunks and reducer
export default carSlice.reducer;
