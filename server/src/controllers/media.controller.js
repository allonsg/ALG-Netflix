import mediaService from "../services/media.service.js";
import responseHandler from "../handlers/response.handler.js";

const getList = async (req, res) => {
  try {
    const response = await mediaService.getList(req.query, req.params);
    return responseHandler.ok(res, response);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const getGenres = async (req, res) => {
  try {
    const response = await mediaService.getGenres(req.params);
    return responseHandler.ok(res, response);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const search = async (req, res) => {
  try {
    const response = await mediaService.search(req.query, req.params);
    return responseHandler.ok(res, response);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const getDetail = async (req, res) => {
  try {
    const media = await mediaService.getDetail(req, req.params);
    return responseHandler.ok(res, media);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

export default {
  getList,
  getGenres,
  search,
  getDetail,
};
