var Books = require('../models/Book');

exports.getBooks = function(req, res){
  res.render('list',{
    books: Books
  });
};

exports.addNewBook = function(req, res){
  res.render('add');
};

exports.getSingleBook = function(req, res){
  var Book = Books[req.params.index];
  res.render('single', {
    book: Book
  });
};

exports.editBook = function(req, res){
  var Book = Books[req.params.index];
  res.render('edit', {
    book : Book
  });
};

exports.removeBook = function(req, res){
  Books.splice(req.params.index, 1);
  res.redirect('/books');
};

exports.addBook =  function(req, res){
  Books.push({
    name:   req.body.name,
    price:  req.body.price
  });
  res.redirect('/books');
};

exports.updateBook = function(req, res){
    Books[req.params.index].name = req.body.name;
    Books[req.params.index].price = req.body.price;
    res.redirect("/books");
};

exports.searchBook = function(req, res){
    var keyword = req.body.keyword;
    var Results = Books.filter(function(el){
      return (el.name == keyword);
    });
    res.render('results', {
      results: Results
    });
};
