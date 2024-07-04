import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice.js'; // Import userReducer correctly

export const store = configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
