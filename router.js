const { Router } = require("express");
const UserController = require("./controllers/user.controller");
const TaskController = require("./controllers/task.controller");
const { checkUser } = require("./middlewares/user.mw");
const router = Router();

router.get("/users", UserController.getAllUsers);
router.get("/user/:id", checkUser, UserController.getUser);
router.post("/user", UserController.createUser);
router.patch("/user/:id", UserController.updateUser);
router.patch("/user-v2/:id", checkUser, UserController.updateUserInstance);
router.delete("/user/:id", checkUser, UserController.deleteUserInstance);
//router.put()

router.post("/user/:id/task", checkUser, TaskController.createTask);
router.get("/user/:id/tasks", checkUser, TaskController.getUserTasks);
router.patch("/user/:id/task/:idTask", checkUser, UserController.updateUser);
// router.delete("/user/:id/task/:idTask", checkUser, UserController.deleteUser);

module.exports = router;
