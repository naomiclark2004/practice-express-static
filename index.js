const express = require("express"); 
const path = require("path");

const app = new express();
app.use(express.static('public'));

app.listen(4000, ()=>{
    console.log('App listening on port 4000')
})

app.get('/', (req, res)=>{
    res.render('index');
})

app.get('/about', (req, res)=>{
    res.render('about');
})

app.get('/products', (req, res)=>{
    res.render('products');
})

app.get('/store', (req, res)=>{
    res.render('store');
})