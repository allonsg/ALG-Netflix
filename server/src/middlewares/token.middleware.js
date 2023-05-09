import jsonwebtoken from "jsonwebtoken";
import responseHandler from "../handlers/response.handler";
import userModel from "../models/user.model.js";

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

const auth = async (res, req, next) => {
  const tokenDecoded = tokenDecode(req);

  if (!tokenDecoded) return responseHandler.unauthorized(res);

  const user = await userModel.findById(tokenDecode.data);

  if (!user) return responseHandler.unauthorized(res);

  req.user = user;

  next();
};

export default { auth, tokenDecode };
