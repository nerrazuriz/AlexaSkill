const express = require("express");
const router = express();
const { ExpressAdapter } = require("ask-sdk-express-adapter");
const { createSkill } = require("../src/skillHandler");

const Alexa = require("ask-sdk-core");

const skill = createSkill();

const adapter = new ExpressAdapter(skill, false, false);

router.post("/", adapter.getRequestHandlers());

module.exports = router;
