var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());
 
var indexFile = fs.readFileSync("index.html");

//app.set('views', __dirname + '/views');
//app.engine('html', require('ejs').renderFile);

app.get('/', function(request, response) {

    fs.readFile('index.html', function(err, page) {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(page);
        response.end();
    });

    console.log("response given");
});

//console.log(indexFile.toString('utf-8', 0, 27));
//process.stdout.write(indexFile.toString('utf-8', 0,27));

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
