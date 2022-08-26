const { User } = require("../models");
const { Op } = require("sequelize");

module.exports.createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const createdUser = await User.create(body);
    const user = createdUser.get()
    user.password = undefined;
    // createdUser.password = undefined;
    res.status(201).send({ data: createdUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: {
        exclude: ["password"],
      },
    });
    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.getUser = async (req, res, next) => {
  try {
    const {userInstance} = req;
    userInstance.password = undefined;
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {params: { id },body,} = req;
    const [row, [updateUser]] = await User.update(body, {
      where: { id },
      returning: true,
      // returning: ["first_name", "birthday"],
    });
    res.status(200).send({ data: updateUser });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUserInstance = async (req, res, next) => {
  try {
    const {body, userInstance} = req;
    // const userInstance = await User.findByPk(id);
    const updatedUser = await userInstance.update(body, {
      returning: true
    })
    updatedUser.password = undefined;
    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUserInstance = async (req, res, next) => {
  try {
    const {userInstance} = req;
    // const userInstance = await User.findByPk(id);
    const [result] = await userInstance.destroy({
      returning:true
    })
    userInstance.password = undefined;
    res.status(200).send({ data: userInstance });
  } catch (error) {
    next(error);
  }
};



