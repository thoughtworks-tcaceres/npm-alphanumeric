const randomString = (num) => {
  if (typeof num !== "number") {
    return null;
  }

  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let word = "";
  for (let i = 0; i < num; i++) {
    word += chars[Math.floor(Math.random() * chars.length)];
  }
  return word;
};

module.exports = randomString;
