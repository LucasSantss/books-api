import { neon } from '@neondatabase/serverless';

const API_URL = 'postgresql://neondb_owner:npg_ongZIV3r8Acu@ep-proud-moon-a5v79smw-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require'
const sql = neon(API_URL);
const posts = await sql('SELECT * FROM livros');
// `post` is now [{ id: 12, title: 'My post', ... }] (or undefined)
console.log(posts)

export const getTodosLivros = async () => {
    const livros = await sql`SELECT * FROM livros`;
    return posts
}

// export const getLivroId = async (id) => {
//     const livros = await sql`SELECT * FROM table livros id = ${id}`;
// }

// export const insereLivro = async (livroNovo) => {
//     const livros = await sql`INSERT INTO livros (nome, genero) VALUES (${livroNovo.nome}, ${livroNovo.genero}`;
// }

// export const modificaLivro = async (modificacoes, id) => {
//     let livrosAtuais = await sql`SELECT * FROM livros WHERE id = ${id}`;
// }

// function deleteLivroID(id) {
//     let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))

//     const livroFiltrado = livrosAtuais.filter(livro => livro.id !== id)
//     fs.writeFileSync("livros.json", JSON.stringify(livroFiltrado))
// }

module.exports = {
    getTodosLivros,
    getLivroId,
    insereLivro,
    modificaLivro,
    deleteLivroID
}