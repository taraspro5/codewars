function betterThanAverage(classPoints, yourPoints) {
  let avgClassPoints = 0;
  for (let i = 0; i < classPoints.length; i++) {
    avgClassPoints += classPoints[i];
  }
  avgClassPoints /= classPoints.length;
  return yourPoints > avgClassPoints ? true : false;
}
