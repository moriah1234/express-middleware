const express = require('express')
const signUpRouter = require('./routes/signup')
const errorRouter = require('./routes/error')
const homeRouter = require('./routes/home')
const app = express();

const port = 8000;
const secondPort = 8080;

const browserMiddleware = require('./middlewares/browser-middleware')
const trackUsersMiddleware = require('./middlewares/track-users-middleware')

app.use('/', trackUsersMiddleware);
// app.use('/', browserMiddleware);


app.use('/signup', signUpRouter)
app.use('/error', errorRouter)
app.use('/', homeRouter)



app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})

// app.listen(secondPort, () => {
//     console.log(`App listening on port ${secondPort}`)
// })