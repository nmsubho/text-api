const pick = (obj, keys) => {
  const filteredObject = {};
  keys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      filteredObject[key] = obj[key];
    }
  });
  return filteredObject;
};

module.exports = pick;
