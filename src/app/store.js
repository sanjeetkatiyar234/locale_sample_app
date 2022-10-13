import { configureStore } from '@reduxjs/toolkit';
import { reduxApiMiddleware } from './middleware';
import rootReducer from './rootReducer';

export const createAppStore = (preloadedState, { toast} = {}) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware({
        thunk: {
          extraArgument: { toast },
        },
        serializableCheck: false,
        immutableCheck: false,
      }).concat(reduxApiMiddleware);
    },
  });