// Make a function that looks through an array of objects (first
// argument) and returns an array of all objects that have matching
// name and value pairs (second argument). Each name and value pair
// of the source object has to be present in the object from the collection
// if it is to be included in the returned array.

function whatIsInAName (collection, source) {
  const srcKeys = Object.keys(source);
  return collection.filter(collObj => srcKeys.every(key => Object.prototype.hasOwnProperty.call(collObj, key) && collObj[key] === source[key]));
}

module.exports = whatIsInAName;
