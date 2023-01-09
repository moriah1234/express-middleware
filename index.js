const express = require('express');
const enterRouter = require('./routes/enter');
const errorRouter = require('./routes/error');
const homeRouter = require('./routes/home');
const middleware = require('./middlewares/middleware')
const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/enter')
})
// app.use(middleware);
app.use('/home',homeRouter);
app.use('/error', errorRouter)
app.use('/enter', enterRouter)

app.use('/*', (req, res) => {
    res.send(`<style>
    body {
        margin :0;padding:0;box-sizing:border-box;
    }
    img {
        height: 100vh; width: 100vw;overflow:hidden;object-fit:cover
    }
    </style>
    <img  src="/hahahaha.png"/>`)
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})