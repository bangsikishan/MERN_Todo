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
        const hashedPassword = await userAuth.validateUserData(email, password);

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
const login = (req, res) => {
    const { email, password } = req.body;
    res.json({ email, password });
}


// EXPORT FUNCTIONS
module.exports = {
    signup,
    login
};