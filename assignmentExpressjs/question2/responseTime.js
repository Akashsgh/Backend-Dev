function responseTime(req, res, next) {
    const startTime = Date.now();

    res.on("finish", () => {
        const duration = Date.now() - startTime;
        console.log(`${req.method} ${req.url} - ${duration} ms`);
    });

    next();
}

module.exports = responseTime;
