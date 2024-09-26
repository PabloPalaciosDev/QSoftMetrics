import express from "express";
import usuarioRouter from "./src/routes/usuario.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", usuarioRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
