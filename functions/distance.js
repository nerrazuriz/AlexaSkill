
//function returns distance between two point
function distance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

//function returns distance between two point in earth coordinates
function distanceEarth(x1, y1, x2, y2) {
  return distance(x1, y1, x2, y2) * 111.2;
}

