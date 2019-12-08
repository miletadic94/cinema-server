const express = require('express');

const userRepository = require('../repository/userRepository')

const router = express.Router();

/* GET users listing. */
router.get('/', async (req, res, next) => {
  const users = await userRepository.getAll();
  res.send(users);
});

router.post('/', async (req, res, next) => {
  try {
    const savedUser = await userRepository.save(req.body);
    res.send(savedUser);
  } catch (error) {
    res.status(500).send(new Error(error))
  }
})

module.exports = router;
