var express = require("express"),
    getFileRouter = require("./getFileRouter.js"),
    indexRouter = require("./indexRouter.js");

var app = express();
var num =0;

app.set('view engine','pug');

app.post('/getFile',getFileRouter);

app.use(indexRouter);

app.listen(8080);