const express = require('express');
const enterRouter = require('./routes/enter');
const errorRouter = require('./routes/error');
const homeRouter = require('./routes/home');
const nonExistentUrl = require('./middlewares/nonexistenturl');

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/enter')
});

app.use('/home', homeRouter);
app.use('/error', errorRouter);
app.use('/enter', enterRouter);
app.use('/*', nonExistentUrl);

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})