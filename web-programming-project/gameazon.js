let express = require("express");
let app = express();
let fortunes = require('./lib/fortune.js');
let handlebars = require('express-handlebars').create({defaultLayout: 'main'});

app.use(express.static(__dirname + '/public'));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res){
    res.render('home')
});

app.get('/about', function(req, res){
    res.render('about', {fortune: fortunes.getFortune()});
});

app.use(function(req, res){
    res.status(404);
    res.render('404');
});

app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){
    console.log('Webpage started on http://localhost:' + app.get('port') + ' ; Press Ctrl + C to terminate');
});


    