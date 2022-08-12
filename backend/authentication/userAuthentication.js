// IMPORT REQUIRED PACKAGES
const bcrypt = require('bcrypt');
const validator = require('validator');
const userModel = require('../models/userModel');


const validateUserData = function(email, password) {
    if(!validator.isEmail(email)) {
        throw new Error('Not a valid email!');
    }

    if(!validator.isStrongPassword(password)) {
        throw new Error('Password not strong enough!');
    }

    return checkDuplicateAndHash(email, password);
}


const checkDuplicateAndHash = async (email, password) => {
    const userExists = await userModel.findOne({ email });

    if(userExists) {
        throw Error('Email is already in use!');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}


// EXPORT
module.exports = {
    validateUserData
};