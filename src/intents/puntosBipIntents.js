const PuntosBipIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "PuntosBip"
    );
  },
  handle(handlerInput) {
    const speechText = "Puntos Bip cercanos";
      console.log(handlerInput.requestEnvelope.request.intent.slots);
    const street = Alexa.getSlotValue(handlerInput.requestEnvelope, "street");
    const number = Alexa.getSlotValue(handlerInput.requestEnvelope, "number");
    console.log("HANDLE", street, number);

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

module.exports = { PuntosBipIntentHandler };
