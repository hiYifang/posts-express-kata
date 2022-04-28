# posts-express-kata

#### 建立專案和引入套件
- (1) 切換 Node.js 版本：``` nvm use v16.14.0 ```
- (2) 建立專案：``` express --no-view [專案] ```
- (3) 安裝套件：```npm i mongoose dotenv cors -s ```
- (4) 引入模組：``` npm install ```
- (5) package.json 自訂指令、部署 Heroku (檢查 npm start 所運行檔案、加入 Node.js 運行的版本號)
- (6) 加入 .gitignore、config.env 檔案
- (7) 加入 Git，進行 commit：``` git init ```

#### 建立專案結構
- app.js
- connections/db.js：連接資料庫
- controllers/postsControllers.js：操作 HTTP 動詞
- models/postsModel.js：定義 Schema、建立模型
- routes/posts.js：建立路由
- service/handle.js：處理回傳資訊

#### 透過 Heroku CLI 部署 Heroku
- 登入 Heroku：``` heroku login ```
- 建立遠端主機：``` heroku create ```
- 設定帳號密碼，連上 MongoDB，再重新部署
- 檔案推上遠端：``` git push heroku { 主線名稱 } ```
- 開啟遠端主機：``` heroku open ```

#### 匯出 POSTMAN JSON 檔案，上傳至 GitHub
- 匯出
- GitHub 建立新專案後，上傳檔案
