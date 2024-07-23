const express = require("express");
const router = express.Router();
const postController = require("../App/Controllers/postController");
const authMiddleware = require("../App/Middleware/authMiddleware"); // Assuming you have authentication middleware


router.post("/", authMiddleware, postController.createPost);
router.put("/:id", authMiddleware, postController.editPost);
router.delete(
  "/:id",
  authMiddleware,
  postController.deletePost
);

module.exports = router;
