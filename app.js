var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views',__dirname+"/views");
app.set('view engine','jade');
app.use(express.static(__dirname+'/public'));

var bookController = require('./controllers/book');
var books = require('./models/Book');

app.get('/', bookController.getBooks);

app.get('/books', bookController.getBooks);

app.get('/books/new', bookController.addNewBook);

app.get('/books/:index', bookController.getSingleBook);

app.post('/books', bookController.addBook);

app.get('/books/:index/edit', bookController.editBook);

app.post('/books/:index/edit', bookController.updateBook);

app.get('/books/:index/delete', bookController.removeBook);

app.post('/search', bookController.searchBook);

app.listen(3000, function(){
  console.log("Express Server at port 3000");
});
