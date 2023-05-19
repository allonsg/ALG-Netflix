import favoriteModel from "../models/favorite.model.js";
import errors from "../helpers/errors.js";

const addFavorite = async (user, params, body) => {
  const { mediaId } = params;
  const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId });

  if (isFavorite) {
    return isFavorite;
  }

  const favorite = new favoriteModel({ ...body, user: user.id });
  await favorite.save();

  return favorite;
};

const removeFavorite = async (user, params) => {
  const { favoriteId } = params;

  const favorite = await favoriteModel.findOne({
    user: user.id,
    _id: favoriteId,
  });

  if (!favorite) {
    throw new errors.NotFoundError("Favorite not found");
  }

  await favoriteModel.deleteOne({ _id: favoriteId });
};

const getFavoritesOfUser = async (user) => {
  return await favoriteModel.find({ user: user.id }).sort("-createdAt");
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };
