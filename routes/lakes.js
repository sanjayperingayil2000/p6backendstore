const express=require('express');
const lakesData=require('../controllers/lakes');
const mainRouter=express.Router();

mainRouter.route("/lakesDataMore").get(lakesData.getlakesDataMore);
mainRouter.route("/lakesDataMore1").get(lakesData.getlakesDataMore1);

module.exports = mainRouter