import jsonwebtoken from "jsonwebtoken";
import userModel from "../models/user.model.js";

const signup = async (body) => {
  const { username, password, displayName } = body;

  const checkUser = await userModel.findOne({ username });

  if (checkUser) {
    throw new Error("username already used");
  }

  const user = new userModel();

  user.displayName = displayName;
  user.username = username;
  user.setPassword(password);

  await user.save();

  const token = jsonwebtoken.sign({ data: user.id }, process.env.TOKEN_SECRET, {
    expiresIn: "24h",
  });

  return { token, ...user._doc, id: user.id };
};

const signin = async (body) => {
  const { username, password } = body;

  const user = await userModel
    .findOne({ username })
    .select("username password salt id password displayName");

  if (!user) {
    throw new Error("User not exist");
  }

  if (!user.validPassword(password)) {
    throw new Error("Invalid password");
  }

  const token = jsonwebtoken.sign({ data: user.id }, process.env.TOKEN_SECRET, {
    expiresIn: "24h",
  });

  user.password = undefined;
  user.salt = undefined;

  return { token, ...user._doc, id: user.id };
};

const updatePassword = async (req) => {
  const { password, newPassword } = req.body;

  const user = await userModel.findById(req.user.id).select("password id salt");

  if (!user) {
    throw new Error("Unauthorized");
  }

  if (!user.validPassword(password)) {
    throw new Error("Invalid password");
  }

  user.setPassword(newPassword);

  await user.save();
};

const getUserInfo = async (userId) => {
  const user = await userModel.findById(userId);

  if (!user) {
    throw new Error("User not found");
  }

  return user;
};

export default { signin, signup, updatePassword, getUserInfo };
