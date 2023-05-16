import reviewModel from "../models/review.model.js";

const createReview = async (req) => {
  const { movieId } = req.params;

  const review = new reviewModel({ user: req.user.id, movieId, ...req.body });

  await review.save();

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
    throw new Error("Review not found");
  }

  await review.remove();
};

const getUserReviews = async (req) => {
  return await reviewModel.find({ user: req.user.id }).sort("-createdAt");
};

export default { createReview, removeReview, getUserReviews };
