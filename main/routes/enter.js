const express = require('express')
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`<style>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        color: #fff;
        font-size: 20px;
        font-family: cursive;
    }

    body {
        background-color: black;
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
    }

    ::-moz-selection {
        color: #000;
        background: #fff;
    }

    ::selection {
        color: #000;
        background: #fff;
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
        box-shadow: 0 0 15px 1px #fff;
    }

    h1 {
        font-size: 3em;
        margin-bottom: -1.5vh;
    }

    input[type=submit] {
        background-color: #0000;
        border: #fff 1px solid;
        color: #fff;
        border-radius: 50vh;
        height: 5vh;
        width: 10vw
    }

    input[type=submit]:hover {
        background-color: #fff;
        color: #000;
        border-color: #000;
        transition: .3s;
    }

    form {
        width: 25vw;
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: column;
        border-radius: 3vw;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        margin-right: 1vw;
    }

    h2 {
        margin-top: -5vh;
    }
</style>

<body>
<h1>The Anti Robot Movement</h1>
<div>
    <h2>We are here to protect humanity. <br /> Our future is in grave danger! <br /> Say no to robots today to
        protect tommorow.</h2>
    <form action="/enter" method="POST">
        <input type="text" placeholder="username" name="username" />
        <input type="text" placeholder="password" name="password" />
        <input type="text" placeholder="age" name="age" />
        <input type="submit" value="Enter" />
    </form>
</div>
</body>`)
})

router.post('/', (req, res) => {
    console.log('req: ', req.body);
    console.log('jdidbvcudbcdcvfcfr');
    res.send(`
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            color: #fff;
            font-size: 20px;
            font-family: cursive;
        }

        body {
            background-color: black;
            height: 100vh;
            width: 100vw;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
        }

        ::-moz-selection {
            color: #000;
            background: #fff;
        }

        ::selection {
            color: #000;
            background: #fff;
        }

        form {
            width: 25vw;
            height: 50vh;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            flex-direction: column;
            border-radius: 3vw;
        }

        h1 {
            font-size: 2em;
            margin-bottom: -1.5vh;
        }

        input[type=submit] {
            background-color: #0000;
            border: #fff 1px solid;
            color: #fff;
            border-radius: 50vh;
            height: 5vh;
            width: 10vw
        }

        input[type=submit]:hover {
            background-color: #fff;
            color: #000;
            border-color: #000;
            transition: .3s;
        }
        textarea {
            border: #fff solid .1vw;
            background-color: #0000;
            height: 20vh;
            width: 20vw;
            text-align: center;
            color: #fff;
        }

        textarea:focus {
            box-shadow: 0 0 15px 1px #fff;
        }

    </style>
    
    <body>
    <h1>You have proven yourself a true human!</h1>
    <h2>Share your knowladge with all of us!</h2>
    <form action="/comments" method="post">
        <textarea placeholder="write here!"></textarea>
        <input type="submit" value="share" />
    </form>
</body>`)
})
module.exports = router;