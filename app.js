const express = require("express");
const path = require("path");

var app = express();
//Serve static files html, css, img
app.use(express.static(path.join(__dirname, "/client/")));
//Path for the user request
app.get('/whoami/', function(req, res) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    var software = req.header("user-agent");
    var language = req.headers["accept-language"].split(",");
    var json = {
        "ipaddress": ip,
        "language": language[0],
        "software": software
    }; 
    res.send(json);
});

app.listen(process.env.PORT, function(){
   console.log("Now listening on port "+ process.env.PORT); 
});