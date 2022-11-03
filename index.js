require("dotenv").config();
const express = require("express");
const ngrok = require("ngrok");

const app = express();
const port = process.env.PORT || 3000;
const alexaRoutes = require("./routes/alexaRoutes");
const isDevelopment = process.env.NODE_ENV === "development";

app.use("/alexa", alexaRoutes);
app.listen(port, async () => {
    if (isDevelopment) {
      const url = await ngrok.connect(port);
      console.log(url);
    } else {
        console.log(`Listening on port ${port}`);
    }
});
