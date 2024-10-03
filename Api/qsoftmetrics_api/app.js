import express from "express";
import usuarioRouter from "./src/routes/usuario.js";
import softwareRouter from "./src/routes/software.js";
import sonarqubeRouter from "./src/routes/sonarqube.js";
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", usuarioRouter);
app.use("/api", softwareRouter);
app.use("/api/sonarqube", sonarqubeRouter); 
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Bienvenido al api de QSoftMetrics!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
