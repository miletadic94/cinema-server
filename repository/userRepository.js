const User = require('../model/User');

const getAll = async () => {
    const users = await User.find();
    return users;
}

const save = async user => {
    return await new User(user).save();
}

// const remove = async id => {
//     return await User.find()
// }

module.exports = {
    getAll,
    save
}