import reviewModel from "../models/review.model.js";
import errors from "../helpers/errors.js";

const createReview = async (req) => {
  const { movieId } = req.params;

  const review = new reviewModel({ user: req.user.id, movieId, ...req.body });

  await review.save();

  console.log(111111, ...review._doc);
  return {
    ...review._doc,
    id: review.id,
    user: req.user,
  };
};

const removeReview = async (req) => {
  const { reviewId } = req.params;

  const review = await reviewModel.findOne({
    _id: reviewId,
    user: req.user.id,
  });

  if (!review) {
    throw new errors.NotFoundError("Review not found");
  }

  await review.deleteOne({ _id: reviewId });
};

const getUserReviews = async (req) => {
  return await reviewModel.find({ user: req.user.id }).sort("-createdAt");
};

export default { createReview, removeReview, getUserReviews };
