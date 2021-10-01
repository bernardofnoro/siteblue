const express = require("express");  //importando o express
const path = require("path");  // importando o path
const app = express();  // definindo meu app como um express
const port = process.env.PORT || 3000; // set port usando a var de ambiente ou a 3000

app.set("view engine", "ejs");  //set engine para trabalhar com o EJS

app.use(express.static(path.join(__dirname, "public")));  //set public como pasta raiz de arquivos estaticos como imgs e css

app.use(express.urlencoded({ extended: true }));

app.get("/", function (req, res){ // .get para tratar as requisicoes tipo get e a rota solicitada
    res.render("index", { titulo: "ola bluemer 123" });  // render para renderizar o arquivo EJS dentro da views por padrao
});

app.get("/pagina", function (req, res){
    res.render("pagina", { titulo: "pagina 2 123" });
});

app.get("/teste", function (req, res){
    res.render("../views/ejs/pagina2", { titulo: "pagina modificada" })
});

app.get("/formulario", function (req, res){
    res.render("formulario");
});

app.get("/recebeform", function (req, res){
    const  { nome, email, senha } = req.query; // recuperando as infos via HTTP GET
    res.send({ nome: nome, email: email, senha: senha}); // devolvendo via JSON
});

app.post("/recebeform", function (req, res){
    const { nome, email, senha } = req.body; // recuperando via HTTP POST
    const site = { titulo: "pagina de resultado", nome: nome, email: email, senha: senha, message: `Usuario ${nome} cadastrado com sucesso`}; // construindo JSON

    setTimeout(() => {
        site.message = ""
    }, 1000);

    res.render("resultado", site); // renderizando e usando o json para exibir infos na tela
});

// app.post
// app.put
// app.delete
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)); // faz o servidor escutar, passando a porta onde o servico vai ficar ativo