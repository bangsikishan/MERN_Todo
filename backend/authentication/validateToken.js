// IMPORT REQUIRED FILES & PACKAGES
const jwt = require('jsonwebtoken');
const User = require('../models/userModel');


const validateToken = async (req, res, next) => {
    // VERIFY AUTHENTICATION
    const { authorization } = req.headers;

    if(!authorization) {
        return res.json({ error: 'Authorization token required!' });
    }

    const token = authorization.split(' ')[1];

    try {
        const {_id} = jwt.verify(token, process.env.SECRET_KEY);

        req.user = await User.findOne({ _id }).select('_id');
        next();
    }
    catch(err) {
        console.log(err.message);
        res.json({ error: 'Request not authorized!' });
    }
}


module.exports = validateToken;