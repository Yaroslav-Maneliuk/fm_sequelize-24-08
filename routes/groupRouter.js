const path = require('path');
const { Router } = require('express');
const multer = require('multer');

const GroupController = require('../controllers/group.controller');
const groupRouter = Router();

// const upload = multer({ dest: path.resolve(__dirname, "../public/images") });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

groupRouter.post('/', GroupController.createGroupByUser);
groupRouter.get('/users/:userId', GroupController.getAllGroupsByUser);
groupRouter.post(
  '/:groupId/image',
  upload.single('image'),
  GroupController.createImageToGroup
);
groupRouter.post('/:groupId', GroupController.addUserToGroup);

module.exports = groupRouter;
