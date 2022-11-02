const PuntosBipIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope.request.type) ===
        "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "PuntosBip"
    );
  },
  handle(handlerInput) {
    const speechText = "Hola, bienvenido a prueba uno.";

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

module.exports = { PuntosBipIntentHandler };
