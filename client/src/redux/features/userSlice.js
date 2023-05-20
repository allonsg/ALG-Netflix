import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "User",
  initialState: {
    user: null,
    listFavorites: [],
  },
  reducers: {
    setUser: (state, { payload }) => {
      if (payload === null) {
        localStorage.removeItem("actkn");
      } else {
        if (payload.token) localStorage.setItem("actkn", payload.token);
      }

      state.user = payload;
    },
    setListFavorites: (state, { payload }) => {
      state.listFavorites = payload;
    },
    removeFavorite: (state, { payload }) => {
      const { mediaId } = payload;
      state.listFavorites = [...state.listFavorites].filter(
        (e) => e.mediaId.toString() !== mediaId.toString()
      );
    },
    addFavorite: (state, { payload }) => {
      state.listFavorites = [payload, ...state.listFavorites];
    },
  },
});

export const { setUser, setListFavorites, addFavorite, removeFavorite } =
  userSlice.actions;

export default userSlice.reducer;
