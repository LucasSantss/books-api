const rotaFavorito = require("./rotas/favorito")
const rotaLivro = require("./rotas/livro")
const express = require('express')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors('*')) //permite que todas as origens acessem a API

app.use("/livros", rotaLivro)
app.use('/favoritos', rotaFavorito)

const port = 8000 //npx nodemon app

app.listen(port, () => {
    console.log(`Escutando a porta ${port}`)
})


