const { where } = require('sequelize');
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
    
}

module.exports = UserDaom;
