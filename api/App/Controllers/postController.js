const Post = require("../Models/postModel");

const postController = {
  // Create a new post
  createPost: async (req, res) => {
    try {
      const { title, content, tags, status } = req.body;
      const newPost = new Post({
        title,
        content,
        author: req.user._id, // Assuming you have user authentication middleware
        tags,
        status,
      });
      const savedPost = await newPost.save();
      res.status(201).json(savedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Edit a post
  editPost: async (req, res) => {
    try {
      const { id } = req.params;
      const { title, content, tags, status } = req.body;
      const updatedPost = await Post.findOneAndUpdate(
        { _id: id, author: req.user._id },
        { title, content, tags, status },
        { new: true }
      );
      if (!updatedPost) {
        return res
          .status(404)
          .json({
            message:
              "Post not found or you're not the author",
          });
      }
      res.json(updatedPost);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },

  // Delete a post
  deletePost: async (req, res) => {
    try {
      const { id } = req.params;
      const deletedPost = await Post.findOneAndDelete({
        _id: id,
        author: req.user._id,
      });
      if (!deletedPost) {
        return res
          .status(404)
          .json({
            message:
              "Post not found or you're not the author",
          });
      }
      res.json({ message: "Post deleted successfully" });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  },
};

module.exports = postController;
