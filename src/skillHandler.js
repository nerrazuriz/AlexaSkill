const Alexa = require("ask-sdk-core");
const {
  SessionEndedRequest,
  HelpIntentHandler,
  CancelAndStopIntentHandler,
  ErrorHandler,
} = require("./intents/amazonIntents");
const { PuntosBipIntentHandler } = require("./intents/puntosBipIntents");
const { LaunchRequest } = require("./intents/launchIntents");

const createSkill = () => {
  const skillBuilder = Alexa.SkillBuilders.custom();
  return skillBuilder
    .addRequestHandlers(
      LaunchRequest,
      PuntosBipIntentHandler,
      HelpIntent,
      CancelAndStopIntentHandler,
      UnhandledIntent,
      SessionEndedRequest
    )
    .withApiClient(new Alexa.DefaultApiClient())
    .create();
};

module.exports = { createSkill };
