const models = require('../models');

const User = models.user;

class UserDaom {
    constructor() {}

    async save(user) {
        return User.create(user);
    }
}

module.exports = UserDaom;
