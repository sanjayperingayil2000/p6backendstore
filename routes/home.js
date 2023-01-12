const express=require('express');
const homeData=require('../controllers/home');
const mainRouter=express.Router();

mainRouter.route("/homeDataMore").get(homeData.gethomeDataMore);
mainRouter.route("/homeDataMore1").get(homeData.gethomeDataMore1);
mainRouter.route("/homeDataLatest").get(homeData.gethomeDataLatest);

module.exports = mainRouter