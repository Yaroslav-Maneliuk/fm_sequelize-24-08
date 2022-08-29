const { Task } = require("../models");

module.exports.checkTask = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;
    const taskInstance = await Task.findByPk(userId);
    if (!taskInstance) {
      throw new Error("user not found!!!");
    }
    req.taskInstance = taskInstance;
    next();
  } catch (error) {
    next(error);
  }
};
