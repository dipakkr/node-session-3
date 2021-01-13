
const express = require('express');
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));

// middleqare
app.use(bodyParser.json());


// book inventory 
const allBooks = [];


app.get('/', (req, res)=>{
    // welcome to book store
    res.json({ message : 'Welcome to book  store'});
});

// // get all books
app.get('/book', (req, res)=>{
    res.json(allBooks);
})


// post a new book 
app.post('/book', (req, res)=>{

    // get the body 
    const item = req.body;

    // decide the index for book
    const len = allBooks.length;

    // set id 
    item.id = len + 1; 

    // add this book to book inventory
    allBooks.push(item);

    res.json(allBooks);
});


// delete a book
app.delete('/book/delete/:bookId', (req, res)=>{

    const bookID = req.params.bookId;

    console.log(bookID);

    res.json(bookID);

});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})