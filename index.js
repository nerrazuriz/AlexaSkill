require("dotenv").config();
const express = require("express");
const ngrok = require("ngrok");

const app = express();
const port = process.env.PORT || 3000;
const alexaRoutes = require("./routes/alexaRoutes");

app.use("/alexa", alexaRoutes);
app.listen(port, async () => {
  const url = await ngrok.connect(port);
  console.log(url);
});
