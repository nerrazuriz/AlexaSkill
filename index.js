require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;
const alexaRoutes = require("./routes/alexaRoutes");
const isDevelopment = process.env.NODE_ENV === "development";

app.use("/alexa", alexaRoutes);

if (isDevelopment) {
  const ngrok = require("ngrok");
  app.listen(port, async () => {
    const url = await ngrok.connect(port);
    console.log(url);
  });
} else {
  app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
  });
}
