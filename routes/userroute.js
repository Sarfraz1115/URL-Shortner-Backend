const express = require("express");
const { Urlshortner, RedirectURL, handleanalytics } = require("../controller/usercontroller");


const route = express.Router();
route.post('/', Urlshortner );
route.get('/:ShortID', RedirectURL);
route.get('/analytics/:ShortID', handleanalytics);

module.exports = route;

