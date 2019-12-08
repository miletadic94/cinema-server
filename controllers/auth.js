const router = require('express').Router();

const { login, register } = require('../repository/authRepository')

router.post('/login', async (req, res, next) => {
    try {
        const response = await login(req.body);
        res.header('Authorization', response)
            .send({ message: 'Success!', token: response });
    }
    catch (error) {
        res.status(404).send(new Error(error));
    }
});

router.post('/register', async (req, res, next) => {
    try {
        const response = await register(req.body);
        res.send(response);
    } catch (error) {
        res.status(404).send(new Error(error));
    }
});

module.exports = router;