const jwt = require('jsonwebtoken');
const UserRoleEnum = require('../enums/UserRoleEnum')

module.exports = (req, res, next) => {
  const token = req.header('auth-token');
  if (!token) return res.status(401).send({ status: 401, message: 'Access Denied' });

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    if(verified.roleId !== UserRoleEnum.USER.ID) {
        res.status(403).send({ status: 403, message: 'Forbidden' })
    }
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ status: 400, message: 'Invalid Token' });
  }
};
