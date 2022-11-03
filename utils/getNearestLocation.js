const locations = JSON.parse(fs.readFileSync("puntos_bip.json", "utf8"));
const { getDistance } = require("./getDistance");

const getNearestLocation = (lat, lng) => {
  let nearest = null;
  let minDistance = getDistance(
    lat,
    lng,
    locations.records[0][10],
    locations.records[0][9]
  );
  for (let i = 0; i < locations.records.length; i++) {
    const nowDistance = getDistance(
      lat,
      lng,
      locations.records[i][10],
      locations.records[i][9]
    );
    if (nowDistance < minDistance) {
      minDistance = nowDistance;
      nearest = locations.records[i][4];
    }
  }
  return nearest;
};

module.exports = { getNearestLocation };
