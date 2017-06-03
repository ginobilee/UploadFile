var express = require("express"),
    multer = require("multer"),
    upload = multer();

var getFileRouter = express();

exports = module.exports = getFileRouter;

getFileRouter.use(upload.any(),function(req,res){
    console.log('router:getFile');
    try{
        console.log(req.headers['content-length']);
        var size = req.files[0].size;
        res.json({'size':size});
    }
    catch(e){
        res.end('get file error!');
    }
    return ;
})