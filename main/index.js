const express = require('express')
const enterRouter = require('./routes/enter')
const errorRouter = require('./routes/error')
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const commentRouter = require('./routes/comment')
const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);

app.use(express.urlencoded({ extended: true }));

const browserMiddleware = require('./middlewares/browser-middleware')
const trackUsersMiddleware = require('./middlewares/track-users-middleware')
const enterMiddleware = require('./middlewares/enter-middleware');
const languageMiddleware = require('./middlewares/language-middleware');

app.use(express.static('public'));
app.use('/', browserMiddleware);
app.use(trackUsersMiddleware);
app.use(languageMiddleware);
app.use(homeRouter);

app.use('/comment', commentRouter)
app.use('/error', errorRouter)
app.use('/enter', enterMiddleware, enterRouter)


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
