import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'Counter', // Internal Identifier for this Slice
  initialState: { value: 0 },

  // RTK automatically generate/create "Actions" based on Reducers
  reducers: {
    reset: (state) => {
      state.value = 0; // Immer handle Immutability under the hood/behind the scene
    },

    increase: (state) => {
      state.value += 1; // Immer handle Immutability under the hood/behind the scene
    },

    decrease: (state) => {
      state.value -= 1; // Immer handle Immutability under the hood/behind the scene
    },

    increaseByValue: (state, action) => {
      state.value += action.payload; // Immer handle Immutability under the hood/behind the scene
    },
  },
});

// To use the automatically generate Actions => We must export Actions
export const { reset, increase, decrease, increaseByValue } = counterSlice.actions;

// We must export reducer to wire it into main store
export default counterSlice.reducer;
