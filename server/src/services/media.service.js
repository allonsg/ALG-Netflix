import tmdbApi from "../tmdb/tmdb.api.js";
import favoriteModel from "../models/favorite.model.js";
import userModel from "../models/user.model.js";
import reviewModel from "../models/review.model.js";
import tokenMiddleware from "../middlewares/token.middleware.js";

const getList = async (query, params) => {
  const { page } = query;
  const { mediaType, mediaCategory } = params;

  return await tmdbApi.mediaList({
    mediaType,
    mediaCategory,
    page,
  });
};

const getGenres = async (params) => {
  const { mediaType } = params;

  return await tmdbApi.mediaGenres({ mediaType });
};

const search = async (query, params) => {
  const { query, page } = query;
  const { mediaType } = params;

  return await tmdbApi.mediaSearch({
    query,
    page,
    mediaType: mediaType === "people" ? "person" : mediaType,
  });
};

const getDetail = async (req, params) => {
  const { mediaType, mediaId } = params;

  const params = { mediaType, mediaId };

  const media = await tmdbApi.mediaDetail(params);

  media.credits = await tmdbApi.mediaCredits(params);
  media.videos = await tmdbApi.mediaVideos(params);
  media.recommend = await tmdbApi.mediaRecommend(params);
  media.images = await tmdbApi.mediaImages(params);

  const tokenDecoded = tokenMiddleware.tokenDecode(req);

  if (tokenDecoded) {
    const user = await userModel.findById(tokenDecoded.data);

    if (user) {
      const isFavorite = await favoriteModel.findOne({
        user: user.id,
        mediaId,
      });

      media.isFavorite = isFavorite !== null;
    }
  }

  media.reviews = await reviewModel
    .find({ mediaId })
    .populate("user")
    .sort("-createdAt");

  return media;
};

export default {
  getList,
  getGenres,
  search,
  getDetail,
};
