const express = require("express");
const URL = require("../models/usermodel");

const route = express.Router();

route.get('/', async (req, res) => {
    const allurls = await URL.find({})
    return res.render("home", {
        id: null,
        host: req.headers.host,
        urls: allurls,
    });
})

module.exports = route;