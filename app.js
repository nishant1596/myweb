const express=require('express');
const app=express();
const exphbs=require('express-handlebars');
//setting handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//servin static files
app.use(express.static('img'));
app.use(express.static('css'));

app.get('/', function (req, res) {
    res.render('index');
});

//listening on port 5000
app.listen(PROCESS.ENV || 5000);
