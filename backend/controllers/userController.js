// IMPORT REQUIRED PACKAGES AND FILES
const jwt = require('jsonwebtoken');   
const userModel = require('../models/userModel');
const userAuth = require('../authentication/userAuthentication');
const userErrorHandler = require('../errorHandling/userErrorHandler');


// FUNCTION TO CREATE A JSON WEB TOKEN
const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET_KEY, {expiresIn: '3d'});
}

// FUNCTION TO SIGNUP
const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        // FUNCTION TO VALIDATE USER EMAIL & PASSWORD
        userAuth.validateUserData(email, password);
        const hashedPassword = await userAuth.checkDuplicateAndHash(email, password);

        const user = await userModel.create({ email, password: hashedPassword });
        
        const token = createToken(user._id);
        res.json({ email, token });
    }
    catch(err) {
        const error = userErrorHandler.errorHandler(err);
        res.json({ error });
    }
}

// FUNCTION TO LOGIN
const login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        // FUNCTION TO VALIDATE USER EMAIL & PASSWORD
        userAuth.validateUserData(email, password);

        const user = await userModel.findOne({ email });

        if(!user) {
            throw new Error('Email doesn\'t exist!');
        }

        // IF PASSWORD MATCH, CREATE AND SEND TOKEN TO THE CLIENT
        const isValid = await userAuth.verifyPassword(password, user.password);
        if(isValid) {
            const token = createToken(user._id);
            res.json({ email, token });
        }
        else {
            throw new Error('Incorrect Password!');
        }
    }
    catch(err) {
        const error = userErrorHandler.errorHandler(err);
        res.json({ error });
    }
}


// EXPORT FUNCTIONS
module.exports = {
    signup,
    login
};