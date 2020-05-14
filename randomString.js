function randomString() {
  let resString = '';
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  const length = Math.floor(10 + Math.random() * 1000);
  for (let i = 0; i < length; i++) {
    resString += letters[Math.floor(Math.random() * letters.length) - 1];
  }
  return resString;
}

module.exports = randomString;
