const { successHandle, errorHandle } = require('../service/handle');
const Post = require('../models/postsModel');

module.exports = {
  /* GET */
  async getPosts(req, res){
    try {
      const postData = await Post.find();
      successHandle(res, "取得資料成功", postData)
    } catch {
      errorHandle(res, err.message);
    }
  },
  /* Delete */
  async deletePosts(req, res){
    try {
      await Post.deleteMany({});
      successHandle(res, "刪除資料成功", [])
    } catch(err) {
      errorHandle(res, err.message);
    }
  },
  async deletePost(req, res){
    try {
      const postId = req.params.id; // 取得 id
      // 找出此筆 id 並刪除資料
      const delPost = await Post.findByIdAndDelete(postId);
      if (delPost) {
        // 回傳成功
        successHandle(res, "成功刪除貼文資訊", `id 是 ${postId}`)
      } else {
        // 回傳失敗
        errorHandle(res, "id 不存在");
      }
    } catch {
      errorHandle(res, err.message);
    }
  },
  /* Post */
  async insertPost(req, res){
    try {
      let { userName, userContent } = req.body;
      if(!userName){
        // 回傳失敗
        errorHandle(res, "新增失敗，請確認貼文的姓名欄位");
      }else if (!userContent) {
        errorHandle(res, "新增失敗，請確認貼文的內容欄位");
      } else {
        // 新增至 model
        await Post.create({ userName, userContent });
        // 回傳成功
        successHandle(res, "成功新增一則貼文", `由 ${userName} 發文`)
      }
    } catch (err) {
      // 回傳失敗
      errorHandle(res, err.message);
    }
  },
  /* PATCH */
  async editPost(req, res){
    try {
      const postId = req.params.id; // 取得 id
      let { userName, userContent } = req.body;
      if(!userName){
        // 回傳失敗
        errorHandle(res, "編輯失敗，請確認貼文的姓名欄位");
      }else if (!userContent) {
        errorHandle(res, "編輯失敗，請確認貼文的內容欄位");
      } else {
        // 找出此筆 id 並編輯資料
        const editPost = await Post.findByIdAndUpdate(postId, { userName, userContent });
        if (editPost) {
          // 回傳成功
          successHandle(res, "成功編輯貼文資訊", `id 是 ${postId}`)
        } else {
          // 回傳失敗
          errorHandle(res, "id 不存在");
        }
      }
    } catch (err) {
      // 回傳失敗
      errorHandle(res, err.message);
    }
  }
}
