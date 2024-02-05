import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();
const port = process.env.PORT || 3001;

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Bem-vindo(a) à MV Bombas e Motores!");
});

// Rota para obter a lista de produtos
app.get("/products", async (req, res) => {
  try {
    const pathToProducts =
      process.env.NODE_ENV === "production"
        ? "./dist/products.json"
        : "./src/products.json";
    // Leia os dados do arquivo produtos.json
    const produtosData = await fs.readFile(pathToProducts, "utf-8");
    const produtos = JSON.parse(produtosData);

    // Envie a lista de produtos como resposta
    res.json(produtos);
  } catch (error) {
    console.error("Erro ao ler o arquivo de produtos:", error);
    res.status(500).send("Erro interno do servidor");
  }
});

// Começa a escutar na porta especificada
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
