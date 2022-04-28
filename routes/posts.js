const express = require('express');
const router = express.Router();

const PostsControllers = require('../controllers/postsControllers');

/* GET */
router.get('/', (req, res) => {
  PostsControllers.getPosts(req, res);
});

/* Delete */
router.delete("/", (req, res) => {
  PostsControllers.deletePosts(req, res);
});
router.delete("/:id", (req, res) => {
  PostsControllers.deletePost(req, res);
});

/* Post */
router.post("/", (req, res) => {
  PostsControllers.insertPost(req, res);
});

/* PATCH */
router.patch("/:id", (req, res) => {
  PostsControllers.editPost(req, res);
});

module.exports = router;
