const express = require('express');
const enterRouter = require('./routes/enter');
const errorRouter = require('./routes/error');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const enterMiddleware = require('./middlewares/enter-middleware')
const browserMiddleware = require('./middlewares/browser-middleware')

// app.use(browserMiddleware);
app.use(homeRouter);
app.use('/error', errorRouter)
app.use('/enter', enterMiddleware,enterRouter)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})