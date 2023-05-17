import publicClient from "../client/public.client";

const personEndoints = {
  detail: ({ personId }) => `person/${personId}`,
  medias: ({ personId }) => `person/${personId}/medias`,
};

const personApi = {
  detail: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        personEndoints.detail({ personId })
      );

      return { response };
    } catch (error) {
      return { error };
    }
  },

  medias: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        personEndoints.medias({ personId })
      );

      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default personApi;
