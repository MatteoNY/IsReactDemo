var express = require('express');

//app

var app = express();

app.use(express.static('src'));

app.listen(4000, function() {
    console.log('express is running on port 4000');
});