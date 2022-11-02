const locations = JSON.parse(fs.readFileSync('puntos_bip.json', 'utf8'));

function nearestLocation(lat, lng) {
  let nearest = null;
  let minDistance = distance(lat, lng, locations.records[0][10], locations.records[0][9]);
  for (let i = 0; i < locations.records.length; i++) {
    const nowDistance = distance(lat, lng, locations.records[i][10], locations.records[i][9]);
    if (nowDistance < minDistance) {
      minDistance = nowDistance;
      nearest = locations.records[i][4];
    }
  }
  return nearest;
}

export default nearestLocation;