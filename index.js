const express = require('express')
const app = express();

const port = 8000;
const secondPort = 8080;


app.get('/', (req, res) => {
    res.send(`<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 20px;
    }

    body {
        background-image: linear-gradient(to right top, #08367b, #332354, #301632, #200d18, #000000);
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }

    input[type=text] {
        border: #fff solid .1vw;
        background-color: #0000;
        border-radius: 50vw;
        height: 6vh;
        width: 15vw;
        text-align: center;
        color: #fff;
    }

    input[type=text]:focus {
        box-shadow: 0 0 15px 1px #fff9;
    }

    ::-moz-selection {
        /* Code for Firefox */
        color: #000;
        background: #fff;
    }

    ::selection {
        color: #000;
        background: #fff;
    }

    button {
        background-color: #fff;
        border: #000 1px solid;
        color: #000;
        border-radius: 50vh;
        height: 5vh;
        width: 10vw
    }

    h1 {
        color: #fff;
        font-size: 3em;
        margin-bottom: -1.5vh;
    }

    button:hover {
        background-color: #000;
        color: #fff;
        border-color: #fff;
        transition: .3s;
    }

    form {
        width: 30vw;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }

    div {
        display: flex;
        align-items: center;
    }

    span {
        margin-right: 1vw;
    }
</style>

<body>
    <h1>Express Middleware</h1>
    <form action="/login" method="post">
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="age" />
        <div><span>premium?</span><input type="checkbox" /></div>
        <button>Sign Up</button>
    </form>
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
