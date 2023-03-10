const express = require("express");
const cors = require("cors");
const config = require("./config/config");
require("dotenv").config();
const fileAnalyzerRouter = require("./routes/file-analyze-routes");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", fileAnalyzerRouter);

app.listen(config.port, () => {
  console.log("App listening on port ", config.port);
});
