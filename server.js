var http = require("http")
var fs = require("fs")
var url = require("url")

var server = http.createServer(function (req, res) {
    console.log("Request was made");

    //res.setHeader("Content-Type", "application/json");
    //res.setHeader("Access-Control-Allow-Origin", "*");
    //res.writeHead(200);
    //var myReadStream = fs.createReadStream(__dirname + 'Homepage.html', 'utf-8');
    //myReadStream.pipe(res);

    //let dataObj = {id:123, name:"Bob", email:"bob@gmail.com"};
    //let data = JSON.stringify(dataObj);
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    console.log(req.url);
    //res.writeHead(301, { Location: 'Postajob.html' + pathname });
    fs.readFile('Homepage.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end(data);
    })


});

server.listen(1234, function () {
    console.log("Listening on port 1234");
});

