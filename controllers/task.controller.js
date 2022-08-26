const { Task } = require("../models");

module.exports.createTask = async (req, res, next) => {
  try {
    const {body,userInstance} = req;
    // const createdTask = await Task.create({ ...body, userId: id });
    const createdTask = await userInstance.createTask(body)
    res.status(201).send({ data: createdTask });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const {userInstance} = req;
    const tasks = await userInstance.getTasks();
    res.status(200).send({data: tasks});
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {userInstance} = req;
    const [row, [updateTask]] = await User.userInstance(body, {
      where: { id },
      returning: true,
    });
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};

// module.exports.deleteTask = async (req, res, next) => {
//   try {
//     const {userInstance} = req;
//     const [row, [updateTask]] = await User.userInstance(body, {
//       where: { id },
//       returning: true,
//     });
//     res.status(200).send({ data: userInstance });
//   } catch (error) {
//     next(error);
//   }
// };
