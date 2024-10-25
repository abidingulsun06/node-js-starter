const models = require('../models');

const User = models.user;

class UserDaom {
    constructor() {}

    async save(user) {
        return User.create(user);
    }
    async delete(id) {
        return User.destroy({where:{id}});
    }
    async update(user, id) {
        return User.update(user, {where:{id}})
    }
}

module.exports = UserDaom;
