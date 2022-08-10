const errorHandler = (err) => {
    return err.errors.name.properties.message;
}

module.exports = errorHandler;