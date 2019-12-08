const jwt = require('jsonwebtoken');

exports = (req, res, next) => {
    const token = req.header('Authorization');

    if (!token) return res.status(403).send('Access Denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token')
    }
}