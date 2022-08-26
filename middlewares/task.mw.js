const { Task } = require("../models");

module.exports.checkUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;
    const taskInstance = await Task.findByPk(id, );
    if (!taskInstance) {
      throw new Error("user not found!!!");
    }
    req.userInstance = userInstance;
    next();
  } catch (error) {
    next(error);
  }
};
