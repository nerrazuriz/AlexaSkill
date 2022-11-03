const opencage = require("opencage-api-client");
const { getNearestLocation } = require("../../utils/getNearestLocation");

const PuntosBipIntentHandler = {
  canHandle(handlerInput) {
    return (
      handlerInput.requestEnvelope.request.type === "IntentRequest" &&
      handlerInput.requestEnvelope.request.intent.name === "PuntosBip"
    );
  },
  async handle(handlerInput) {
    let speechText;
    const { value: street } =
      handlerInput.requestEnvelope.request.intent.slots.street;
    const { value: number } =
      handlerInput.requestEnvelope.request.intent.slots.number;
    console.log(street, number);
    console.log(handlerInput.requestEnvelope.request.intent);
    if (street && number) {
      const address = `${street} ${number}, Santiago`;
      try {
        const data = await opencage.geocode({
          q: address,
          key: process.env.OPENCAGE_API_KEY,
        });
        if (data.results.length > 0) {
          const place = data.results[0];
          const { lat, lng } = place.geometry;
          console.log("PLACE", place);
          const nearest = getNearestLocation(lat, lng);
          console.log("nearest", nearest);
          speechText = `El punto BIP más cercano a ${address} es ${nearest.name}, ubicado en ${nearest.address}.`;
        } else {
          speechText = "No se encontró la dirección ingresada.";
        }
      } catch (e) {
        console.log("Error", error.message);
        if (error.status.code === 402)
          console.log("hit free trial daily limit");
        speechText = "Hubo un error procesando tu solicitud.";
      }
    }
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

module.exports = { PuntosBipIntentHandler };
