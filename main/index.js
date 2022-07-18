const express = require('express')
const enterRouter = require('./routes/enter')
const errorRouter = require('./routes/error')
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const app = express();


const port = 8000;
const secondPort = 8080;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(express.urlencoded({ extended: true }));

const browserMiddleware = require('./middlewares/browser-middleware')
const trackUsersMiddleware = require('./middlewares/track-users-middleware')
const enterMiddleware = require('./middlewares/enter-middleware')

app.use(trackUsersMiddleware);
app.use('/enter', enterMiddleware)
// app.use('/', browserMiddleware);

app.use('/error', errorRouter)
app.use('/', homeRouter)
app.use('/enter', enterRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


// app.listen(secondPort, () => {
//     console.log(`App listening on port ${secondPort}`)
// })