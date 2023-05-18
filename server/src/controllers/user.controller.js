import userService from "../services/user.service.js";
import responseHandler from "../handlers/response.handler.js";

const signup = async (req, res) => {
  try {
    const user = await userService.signup(req.body);
    responseHandler.created(res, user);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const signin = async (req, res) => {
  try {
    const user = await userService.signin(req.body);
    responseHandler.created(res, user);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const updatePassword = async (req, res) => {
  try {
    await userService.updatePassword(req);
    responseHandler.ok(res);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

const getInfo = async (req, res) => {
  try {
    const user = await userService.getUserInfo(req.user.id);
    responseHandler.ok(res, user);
  } catch (error) {
    responseHandler.error(res, error);
  }
};

export default { signin, signup, updatePassword, getInfo };
