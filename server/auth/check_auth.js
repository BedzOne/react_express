const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, 'secretKey', function(err, decoded) {
      if (err) res.send(decoded)
      res.send(decoded)
    });
    next();
  }
  catch (err){
    return res.sendStatus(401);
  }
};