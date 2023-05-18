import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler.js";
import userModel from "../models/user.model.js";
import errors from "../helpers/errors.js";

const tokenDecode = (req) => {
  try {
    const bearerHeader = req.headers["authorization"];

    if (bearerHeader) {
      const token = bearerHeader.split(" ")[1];
      return jsonwebtoken.verify(token, process.env.TOKEN_SECRET);
    }

    return false;
  } catch (error) {
    return false;
  }
};

const auth = async (req, res, next) => {
  try {
    const tokenDecoded = tokenDecode(req);

    if (!tokenDecoded) {
      throw new errors.NotAuthorizedError("Invalid token");
    }

    const user = await userModel.findById(tokenDecoded.data);

    if (!user) {
      throw new errors.NotFoundError("User not found");
    }

    req.user = user;

    next();
  } catch (error) {
    responseHandler.error(res, error);
  }
};

export default { auth, tokenDecode };
