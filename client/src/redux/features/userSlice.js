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
        if (payload.token) {
          localStorage.setItem("actkn", payload.token);
        }
      }

      state.user = payload;
    },

    setListFavorites: (state, { payload }) => {
      state.listFavorites = payload;
    },

    removeFavorite: (state, { payload }) => {
      const { mediaId } = payload;
      state.listFavorites = [...state.listFavorites].filter(
        (el) => el.mediaId.toString() !== mediaId.toString()
      );
    },

    addFavorite: (state, { payload }) => {
      state.listFavorites = [...state.listFavorites, payload];
    },
  },
});

export const { setUser, setListFavorites, removeFavorite, addFavorite } =
  userSlice.actions;

export default userSlice.reducer;
