const httpStatus = require('http-status');
const UserService = require('../services/UserService');

class UserController {
    constructor() {
        this.userService = new UserService();
    }

    auth = async (req, res) => {
        res.json({
            message: 'User Controller',
        });
    };

    register = async (req, res) => {
        try {
            const user = await this.userService.createUser(req.body);

            const { status } = user.response;

            const { message, data } = user.response;
            res.status(user.statusCode).send({ status, message, data });
        } catch (e) {
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
    };
}

module.exports = UserController;
