// TODO: change this to .env file
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
    const speechText = "Puntos Bip cercanos";
    const { value: street } =
      handlerInput.requestEnvelope.request.intent.slots.street;
    const { value: number } =
      handlerInput.requestEnvelope.request.intent.slots.number;
    if (street && number) {
      const address = `${street} ${number}, Santiago de Chile`;

      try {
        const data = await opencage.geocode({
          q: address,
          key: process.env.OPENCAGE_API_KEY,
        });
        //TODO: filter data
        console.log(JSON.stringify(data));
        if (data.results.length > 0) {
          const place = data.results[0];
          console.log(place);
        } else {
          console.log("Status", data.status.message);
          console.log("total_results", data.total_results);
        }
        //TODO: get points
        //TODO: findNearest
      } catch (e) {
        // TODO: handle this error
        console.log(JSON.stringify(error));
        console.log("Error", error.message);
        if (error.status.code === 402) {
          console.log("hit free trial daily limit");
          console.log("become a customer: https://opencagedata.com/pricing");
        }
      }
    }
    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .getResponse();
  },
};

module.exports = { PuntosBipIntentHandler };
