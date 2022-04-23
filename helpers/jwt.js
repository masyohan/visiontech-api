const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET

const generateToken = (payload) => {
  //set token expired in 20 minutes
  return jwt.sign(payload, secret, { expiresIn: 60 * 20 });
}

const verifyToken = (token) => {
  return jwt.verify(token, secret);
}

module.exports = {
  generateToken,
  verifyToken
};