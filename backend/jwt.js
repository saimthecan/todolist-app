const jwt = require('jsonwebtoken');

const secret = 'abc123'; 

function createToken(payload) {
  return jwt.sign(payload, secret, { expiresIn: '1h' });
}

function verifyToken(token) {
  try {
    return jwt.verify(token, secret);
  } catch (e) {
    console.error(e);
    return null;
  }
}

module.exports = { createToken, verifyToken };
