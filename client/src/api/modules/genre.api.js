import publicClient from "../client/public.client";

const genreEnpoints = {
  list: ({ mediaType }) => `${mediaType}/genres`,
};

const genreApi = {
  getList: async ({ mediaType }) => {
    try {
      const response = await publicClient.get(
        genreEnpoints.list({ mediaType })
      );

      return { response };
    } catch (err) {
      return { err };
    }
  },
};

export default genreApi;
