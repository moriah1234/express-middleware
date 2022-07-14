const express = require('express')
const app = express()
const port = 8000;
const secondPort = 8080;

app.get('/', (req, res) => {
    res.send(`<body style="background-image: linear-gradient(to right top, #08367b, #332354, #301632, #200d18, #000000);">
    <p style="color: #fff">helloworld</p>
    </body>`)
})

app.get('/login', (req, res) => {
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})

app.listen(secondPort, () => {
  console.log(`App listening on port ${secondPort}`)
})
