import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./features/userSlice";
import themeModelSliceReducer from "./features/themeModelSlice";
import authModalSliceReducer from "./features/authModalSlice";
import globalLoadingSliceReducer from "./features/globalLoadingSlice";
import appStateSliceReducer from "./features/appStateSlice";

const store = configureStore({
  reducer: {
    user: userSliceReducer,
    themeMode: themeModelSliceReducer,
    authModal: authModalSliceReducer,
    globalLoading: globalLoadingSliceReducer,
    appState: appStateSliceReducer,
  },
});

export default store;
