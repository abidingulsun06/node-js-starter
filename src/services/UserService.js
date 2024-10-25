const httpStatus = require('http-status');
const UserDaom = require('../repository/UserRepository');
const responseHandler = require('../utilities/ResponseHandler');

class UserService {
    constructor() {
        this.userDaom = new UserDaom();
    }

    /**
     * Create a user
     * @param {Object} userBody
     * @returns {Object}
     */
    createUser = async (userBody) => {
        try {
            let message = 'Successfully Registered the account! Please Verify your email.';

            //if (await this.userDaom.isEmailExists(userBody.email)) {
            //    return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
            //}

            let userData = await this.userDaom.save(userBody);
            userData = userData.toJSON();

            return responseHandler.returnSuccess(httpStatus.CREATED, message, userData);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
        }
    };
    deleteUser = async (id) => {
        try {
            let message = 'Successfully Registered the account! Please Verify your email.';

            //if (await this.userDaom.isEmailExists(userBody.email)) {
            //    return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
            //}
            await this.userDaom.delete(id);

            return responseHandler.returnSuccess(httpStatus.NO_CONTENT, message);
        } catch (e) {
            return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
        }
    };

    updateUser = async (userBody, id) => {
        try {
            let message = 'Successfully updated the account!';

            //if (await this.userDaom.isEmailExists(userBody.email)) {
            //    return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Email already taken');
            //}
            let user = await this.userDaom.update(userBody, id);
            console.log("isim: ", user);

            return responseHandler.returnSuccess(httpStatus.CREATED, message, user);
        } catch (e) {
            console.log(e);
            
            return responseHandler.returnError(httpStatus.BAD_REQUEST, 'Something went wrong!');
        }
    };


}

module.exports = UserService;
