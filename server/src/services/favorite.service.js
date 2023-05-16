import favoriteModel from "../models/favorite.model.js";

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
    throw new Error("Favorite not found");
  }

  await favorite.remove();
};

const getFavoritesOfUser = async (user) => {
  return await favoriteModel.find({ user: user.id }).sort("-createdAt");
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };
