const jwt = require('jsonwebtoken');

const createAuthMiddleware = (jwt) => {
  return (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return res.status(401).json({ message: 'Token missing' });
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
      if (err) return res.status(401).json({ message: 'Token invalid', error: err});
      req.userId = decoded.userId;
      next();
    });
  };
};

module.exports = createAuthMiddleware(jwt);