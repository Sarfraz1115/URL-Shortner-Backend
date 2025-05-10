const express = require("express");

const route = express.Router();

route.get('/', (req, res) => {
    return res.render("home", {
        id: null,
        host: req.headers.host
    });
})

module.exports = route;