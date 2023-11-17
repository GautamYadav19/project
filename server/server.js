const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");
const apiRouter = require("./routes");

const app = express();
app.use(cors);
app.use(express.json());

app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: false,
  })
);

app.use("/api", apiRouter);

app.listen(process.env.port || "3000", () => {
  console.log(`server is running port ${process.env.port || "3000"}`);
});
