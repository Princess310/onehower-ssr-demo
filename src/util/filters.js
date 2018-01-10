export function parseDistance(distance, city) {
  let result = city;

  if (distance) {
    result = distance > 1000 ? `${(distance / 1000)}km` : `${distance}m`;
  }

  return result;
}
