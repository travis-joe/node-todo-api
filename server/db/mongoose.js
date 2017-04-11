/**
 * Created by qzy on 09/04/2017.
 * File description:
 */
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI||'mongodb://localhost:27017/TodoApp');

module.exports = { mongoose };