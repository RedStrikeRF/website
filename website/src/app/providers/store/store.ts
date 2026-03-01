import { configureStore } from "@reduxjs/toolkit";

import {rootReducer} from "@app/providers/store/rootReducer.ts";

export const store = configureStore({
  reducer: {
    ...rootReducer,
  }
});