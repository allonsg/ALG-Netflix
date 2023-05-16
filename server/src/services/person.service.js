import tmdbApi from "../tmdb/tmdb.api.js";

const getPersonDetail = async (params) => {
  const { personId } = params;
  return await tmdbApi.personDetail({ personId });
};

const getPersonMedias = async (params) => {
  const { personId } = params;
  return await tmdbApi.personMedias({ personId });
};

export default { getPersonDetail, getPersonMedias };
