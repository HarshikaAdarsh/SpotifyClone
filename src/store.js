import { configureStore } from '@reduxjs/toolkit';

import { rootReducers } from '@/reducers';

const store = configureStore({
  reducer: rootReducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // to have payload as a non-serializable element like passing component
    }),
});

export default store;
