const User = require('../models/user');


const response = (res, statusCode, message, data) => {
    const resObject = {};

    if (message) {
        resObject['message'] = message;
    }

    if (data) {
        resObject['data'] = data;
    }
    res.status(statusCode).json(resObject);
}

const throw404 = (message) => {
    throw Error(message || 'user not found');
}


module.exports.fetchUsers = async (req, res) => {
    try {
        const users = await User.find({});
        if (!Boolean(users.length)) throw404('users not found');
        response(res, 200, 'users found', {users});
    } catch (error) {
        response(res, 404, error.message);
    }
}

module.exports.fetchUserById = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findById(id);
        if (!user) throw404();
        response(res, 200, 'user found', {user});
    } catch (error) {
        response(res, 404, error.message);
    }
}

module.exports.createUser = async (req, res) => {
    try {
        const newUser = await User.create(req.body);
        response(res, 201, 'user created', {user: newUser});
    } catch (error) {
        response(res, 400, error.message);
    }
}

module.exports.updateUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByIdAndUpdate(id, req.body, {new: true});
        if (!user) throw404();
        response(res, 200, 'user updated successfully', {user});
    } catch(error) {
        response(res, 404, error.message);
    }
}

module.exports.deleteUser = async (req, res) => {
    const {id} = req.params;
    try {
        const user = await User.findByIdAndDelete(id);
        if (!user) throw404();
        response(res, 200, 'user deleted successfully, so sad', {user});
    } catch (error) {
        response(res, 404, error.message);
    }
}