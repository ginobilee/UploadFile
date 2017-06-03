var express = require("express");

var indexRouter = express.Router();

exports = module.exports = indexRouter;

indexRouter.use(function(req,res,next){
    console.log('router:index');
    console.log(res.headersSent);
    res.render('index');
})