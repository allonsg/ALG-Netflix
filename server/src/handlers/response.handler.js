import errors from "../helpers/errors.js";

const responseWithData = (res, statusCode, data) =>
  res.status(statusCode).json(data);

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const error = (res, err) => {
  if (err instanceof errors.AlgNetflixApiError) {
    return responseWithData(res, err.status, { message: err.message });
  }

  if (err.code === 11000 && err.name === "MongoServerError") {
    return responseWithData(res, 409, { message: err.message });
  }

  return responseWithData(res, 500, { message: "Oops! Something went wrong!" });
};

export default { error, ok, created };
