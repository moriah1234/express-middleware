
const nonExistentUrl = (req, res) => {
    res.send(`<style>
    body {margin :0;padding:0;box-sizing:border-box;}
    img {height: 100vh; width: 100vw;overflow:hidden;object-fit:cover}
    </style>
    <img class="img" src="/hahahaha.png"/>`)
}

module.exports = nonExistentUrl;