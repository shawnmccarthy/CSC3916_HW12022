var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.text({
    type: function(req) {
        return 'text';
    }
}));

app.post('/post', function(req,res) {
    console.log(req.body);
    res = res.status(200);
    var contentType = req.get('Content-Type')
    if (contentType) {
        console.log("Content type:" + contentType);
        console.log(req.headers);
        res = res.type(contentType)
    }
    res.send(req.body);
});

http.createServer(app).listen(process.env.PORT || 8080);
