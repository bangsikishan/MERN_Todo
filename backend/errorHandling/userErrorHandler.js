const errorHandler = (err) => {
    if(err.code === 11000) {
        return 'Email is already in use!';
    }

    return err.message;
}

module.exports = {
    errorHandler
};