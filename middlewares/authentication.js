const { verifyToken } = require('../helpers/jwt');

const authentication = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    //get token from authorization header
    const token = authorization.split(' ')[1]
    const dateNow = new Date()
    req.userData = verifyToken(token);
    //check if token expired
    if(req.userData.exp < dateNow.getTime() / 1000){
        throw('token expired')
    }
    next();
  } catch (err) {
    res.status(403).json(
      {
        status: 403,
        message: 'You need to login first',
      }
    );
  }
};

module.exports = authentication;