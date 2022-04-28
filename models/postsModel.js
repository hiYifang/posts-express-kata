// model/posts.js
const mongoose = require('mongoose');

// 建立 Schema
const postsSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, '貼文姓名 name 未填寫']
    },
    userContent: {
      type: String,
      required: [true, '貼文內容 content 未填寫'],
    },
    userAvatar: {
      type: String,
      default: ""
    },
    image: {
      type: String,
      default: ""
    },
    createAt: {
      type: Date,
      default: Date.now,
      // select: false
    },
  },
  {
    versionKey: false
  }
);

// 建立 Model
const Post = mongoose.model(
  'Post',
  postsSchema
);

module.exports = Post;