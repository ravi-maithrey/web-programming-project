let express = require("express");
let app = express();

app.set('port', process.env.PORT || 3000);

app.use(function(req, res){
    res.type('text/plain');
    res.status(404);
    res.send('404 - page not found');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - internal server error');
});

app.listen(app.get('port'), function(){
    console.log('Webpage started on http://localhost:' + app.get('port') + ' ; Press Ctrl + C to terminate');
});