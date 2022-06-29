// Using Kepler's Third Law, return a new array that transforms the
// elements' average altitude into their orbital periods (in seconds).
// The array will contain objects in the format
// {name: 'name', avgAlt: avgAlt}.
// The values should be rounded to the nearest whole number. The body
// being orbited is Earth.
// The radius of the earth is 6367.4447 kilometers, and the GM value
// of earth is 398600.4418 km3s-2.
// https://en.wikipedia.org/wiki/Kepler%27s_laws_of_planetary_motion#Third_law

function orbitalPeriod (arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const orbPs = [];
  for (const elem of arr) {
    const orbP = Math.round(2 * Math.PI * Math.sqrt(Math.pow(elem.avgAlt + earthRadius, 3) / GM));
    orbPs.push({ name: elem.name, orbitalPeriod: orbP });
  }
  return orbPs;
}

module.exports = orbitalPeriod;
