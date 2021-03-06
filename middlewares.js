const logger = (req, res, next) => {
    let d = new Date();
    let timestamp = d.toJSON().slice(0,19).replace('T',':');
    console.log(`${req.method} ${req.url} at ${timestamp}`);
    next();
}

const notFoundHandler = (req, res, next) => {
    res.status(404).send("URL not found");
}

module.exports = {logger, notFoundHandler};