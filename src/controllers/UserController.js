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

    delete = async (req, res) => {
        
        try {
            await this.userService.deleteUser(req.params.id);

            res.status(204).send({ message:'Silme işlemi başarılı' });
        } catch (e) {
            res.status(httpStatus.BAD_GATEWAY).send(e);
        }
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
