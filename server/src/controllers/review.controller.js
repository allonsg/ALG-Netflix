import reviewService from "../services/review.service.js";
import responseHandler from "../handlers/response.handler.js";

const create = async (req, res) => {
  try {
    const review = await reviewService.createReview(req);
    return responseHandler.created(res, review);
  } catch (error) {
    responseHandler.error(res);
  }
};

const remove = async (req, res) => {
  try {
    await reviewService.removeReview(req);
    return responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res);
  }
};

const getReviewsOfUser = async (req, res) => {
  try {
    const reviews = await reviewService.getUserReviews(req);
    return responseHandler.ok(res, reviews);
  } catch (error) {
    responseHandler.error(res);
  }
};

export default { create, remove, getReviewsOfUser };
