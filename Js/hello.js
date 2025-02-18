// var http = require('http');
// var dt = require('./my_first_module');
// var url = require('url');

// http.createServer(function(req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     var q = url.parse(req.url, true).query;
//     var text = q.year + " " + q.month;
//     // res.write('The date and time are: '+ dt.myDateTime());
//     res.write(text);
//     res.end();
// }).listen(8080);












var http = require('http');
var url = require('url');
var fs = require('fs');
var uc = require('upper-case');

http.createServer(function(req,res){
    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;
    fs.readFile(filename, function(err,data){
        if(err){
            // throw err
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(uc.upperCase('helo'))
            return res.end(data);

    })
   
    
}).listen(8080);


















