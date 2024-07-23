const crypto = require("crypto");
const fs = require("fs");

const generateSecret = () => {
  return crypto.randomBytes(64).toString("hex");
};

const secret = generateSecret();
console.log("Generated JWT Secret:", secret);

// Append the secret to the .env file

fs.appendFileSync(".env", `\nJWT_SECRET=${secret}`);
console.log("JWT Secret has been added to .env file");
