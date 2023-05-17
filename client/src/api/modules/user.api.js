import privateClient from "../client/private.client";
import publicClient from "../client/public.client";

const userEndpoints = {
  singin: "user/signin",
  singup: "user/signup",
  getInfo: "user/info",
  passwordUpdate: "user/update-password",
};

const userApi = {
  signin: async ({ username, password }) => {
    try {
      const response = await publicClient.post(userEndpoints.singin, {
        username,
        password,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  },
  signup: async ({ username, password, confirmPassword, displayName }) => {
    try {
      const response = await publicClient.post(userEndpoints.singup, {
        username,
        password,
        confirmPassword,
        displayName,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  },
  getInfo: async () => {
    try {
      const response = await privateClient.get(userEndpoints.getInfo);

      return { response };
    } catch (error) {
      return { error };
    }
  },
  passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
    try {
      const response = await privateClient.put(userEndpoints.passwordUpdate, {
        password,
        newPassword,
        confirmNewPassword,
      });

      return { response };
    } catch (error) {
      return { error };
    }
  },
  getFavorites: async ({}) => {
    try {
    } catch (error) {
      return { error };
    }
  },
  addFavorite: async ({}) => {
    try {
    } catch (error) {
      return { error };
    }
  },
};

export default userApi;
