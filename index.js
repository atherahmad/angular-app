const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const connectDB = require("./backend/config/db");
const path = require("path");
require("dotenv").config();
const cors = require("cors");
const { urlencoded } = require("body-parser");

connectDB();

app.use(urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname + "/public")));

app.use(cors());

app.use("/api/auth", require("./backend/router/auth"));
app.use("/api/recovery", require("./backend/router/recovery"));
app.use("/api/dashboard", require("./backend/router/dashboard"));
app.use("/api/account", require("./backend/router/account"));
app.use("/api/contact", require("./backend/router/contact"));
app.use("/api/admin", require("./backend/router/admin"));
app.use("/api/store", require("./backend/router/store"));
app.use("/api/appointment", require("./backend/router/appointment"));
app.get("/", (req, res) => {
  res.json({status:"success", message:"Backend working perfectly"})
})

app.listen(process.env.PORT ||8080, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
