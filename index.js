const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.get("/", (req, res) => {
  const devList = ["Backend", "Frontend", "Fullstack"];
  const analyticsList = ["Engenharia de dados", "Ciência de dados"];
  res.render("index", {
    titulo: "Blue",
    devList: devList,
    analyticsList: analyticsList,
  });
});

app.post("/subscription", (req, res) => {
  const { nome, email } = req.body;
  res.send({nome: nome, email: email});
});

app.listen(port, () =>
  console.log(`Servidor rodando em http://localhost:${port}`)
);