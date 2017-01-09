var express         = require('express');
var path            = require('path'); // модуль для парсинга пути
var app = express();
var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
var url = 'mongodb://127.0.0.1:27017/note';
var bodyParser = require('body-parser')


app.use(express.static(path.join(__dirname))); // запуск статического файлового сервера, который смотрит на папку shorter/ (в нашем случае отдает index.html)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.post("/register", function(req, res){

  console.log(counterId());
  MongoClient.connect(url, function(err, db) {
    var userCollection = db.collection("users");
    userCollection.insertMany([
    {"_id": counterId(), "email": req.body.email}
    ],function(err, result) {});
    console.log("insert");


    db.close();

  });
res.redirect("/");
});

app.listen(1337, function(){
    console.log('Express server listening on port 1337');
});
