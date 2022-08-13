// IMPORT REQUIRED PACKAGES
const bcrypt = require('bcrypt');
const validator = require('validator');
const userModel = require('../models/userModel');


// FUNCTION TO VALIDATE USER EMAIL & PASSWORD
const validateUserData = function(email, password) {
    if(!validator.isEmail(email)) {
        throw new Error('Not a valid email!');
    }

    if(!validator.isStrongPassword(password)) {
        throw new Error('Password not strong enough!');
    }
}


// FUNCTION TO CHECK FOR DUPLICATE EMAIL & HASH PASSWORD
const checkDuplicateAndHash = async (email, password) => {
    const userExists = await userModel.findOne({ email });

    if(userExists) {
        throw Error('Email is already in use!');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    return hashedPassword;
}


// FUNCTION TO VERIFY PLAIN PASSWORD WITH HASHED PASSWORD
const verifyPassword = async (password, hashedPassword) => {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
}


// EXPORT
module.exports = {
    validateUserData,
    checkDuplicateAndHash,
    verifyPassword
};