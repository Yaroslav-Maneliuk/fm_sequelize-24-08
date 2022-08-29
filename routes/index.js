const { Router } = require("express");
const taskRouter = require("./taskRouter");
const userRouter = require("./userRouter");
const groupRouter = require("./groupRouter");

const router = Router();

router.use('/users', userRouter);
router.use('/tasks', taskRouter);
router.use('/groups', groupRouter);



module.exports = router;
