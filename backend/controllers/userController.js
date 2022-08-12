// IMPORT REQUIRED PACKAGES AND FILES   
const userModel = require('../models/userModel');
const userAuth = require('../authentication/userAuthentication');
const userErrorHandler = require('../errorHandling/userErrorHandler');


// FUNCTION TO SIGNUP
const signup = async (req, res) => {
    const { email, password } = req.body;

    try {
        // FUNCTION TO VALIDATE USER EMAIL & PASSWORD
        const hashedPassword = await userAuth.validateUserData(email, password);

        const user = await userModel.create({ email, password: hashedPassword });
        res.json({ user });
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