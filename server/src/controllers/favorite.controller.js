import responseHandler from "../handlers/response.handler";
import favoriteModel from "../models/favorite.model";

const addFavorite = async (req, res) => {
  try {
    const { user } = req;
    const { mediaId } = req.params;

    const isFavorite = await favoriteModel.findOne({ user: user.id, mediaId });

    if (isFavorite) {
      return responseHandler.ok(res, isFavorite);
    }

    const favorite = new favoriteModel({ ...req.body, user: user.id });

    await favorite.save();

    return responseHandler.ok(res, favorite);
  } catch (error) {
    responseHandler.error(res);
  }
};

const removeFavorite = async (req, res) => {
  try {
    const { user } = req;
    const { favoriteId } = req.params;

    const favorite = await favoriteModel.findOne({
      user: user.id,
      _id: favoriteId,
    });

    if (!favorite) {
      responseHandler.notfound(res);
    }

    await favorite.remove();

    return responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

const getFavoritesOfUser = async (req, res) => {
  try {
    const { user } = req;

    const favorite = await favoriteModel
      .find({ user: user.id })
      .sort("-createdAt");

    return responseHandler.ok(res, favorite);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };
