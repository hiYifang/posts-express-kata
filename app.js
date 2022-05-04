const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const postsRouter = require('./routes/posts');

require('./connections/db');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// HTTP 狀態碼：404
app.use(function (req, res, next) {
  res.status(404).send('抱歉，您的頁面找不到');
})

// HTTP 狀態碼：500
app.use(function (err, req, res, next) {
  res.status(500).send('程式有些問題，請稍後嘗試');
})

module.exports = app;
