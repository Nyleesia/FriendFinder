const path = require("path");

module.exports = function(app) {
    app.get ("/survey", function (req, res){
        res.sendFile(path.join (__dirname + "../../app/public/survey.html"));
});

app.use (function (req, res){
   
    var url_path = req.path;
    
    if (url_path == "/"){
        res.sendFile(path.join (__dirname + "../../app/public/home.html"));
    } else {
        res.sendFile(path.join (__dirname + "../../app/public" + url_path));
    }

});
}
