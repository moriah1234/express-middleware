const express = require('express');
const enterRouter = require('./routes/enter');
const errorRouter = require('./routes/error');
const homeRouter = require('./routes/home');
const middleware = require('./middlewares/middleware')
const app = express();

const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(middleware);
app.use(homeRouter);
app.use('/error', errorRouter)
app.use('/enter', enterRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})