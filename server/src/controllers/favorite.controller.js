import favoriteService from "../services/favorite.service.js";
import responseHandler from "../handlers/response.handler.js";

const addFavorite = async (req, res) => {
  try {
    const favorite = await favoriteService.addFavorite(
      req.user,
      req.params,
      req.body
    );
    return responseHandler.ok(res, favorite);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const removeFavorite = async (req, res) => {
  try {
    await favoriteService.removeFavorite(req.user, req.params);
    return responseHandler.ok(res);
  } catch (error) {
    console.log({ error });
    responseHandler.error(res, error);
  }
};

const getFavoritesOfUser = async (req, res) => {
  try {
    const favorite = await favoriteService.getFavoritesOfUser(req.user);
    return responseHandler.ok(res, favorite);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

export default { addFavorite, removeFavorite, getFavoritesOfUser };
